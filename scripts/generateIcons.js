/* eslint-disable no-console */
const path = require('path');
const fs = require('fs-extra');
const globby = require('globby');
const cheerio = require('cheerio');
const { pascalCase } = require('change-case');
const dedent = require('dedent');
const roundTo = require('round-to');

const forceUpdate = process.env.CI || process.argv.includes('--force');
const lastUpdatedPath = path.join(__dirname, 'icon-updates.json');

let lastUpdated = {};
try {
  // eslint-ignore-next-line
  lastUpdated = require(lastUpdatedPath);
} catch (e) {
  console.log(`Couldn't read icon-updates file. Updating all SVGs...`);
}

const makeComponentTemplate = croppedViewbox => (
  { template },
  opts,
  { componentName, jsx },
) => {
  const code = `
    import React from 'react';
    NEWLINE
    import { SVGProps } from '../SVGTypes';
    NEWLINE
    export const COMPONENT_NAME = ({ title, titleId, cropX, ...restProps }: SVGProps) => {
      const props = cropX ? { 
        viewBox: 'CROPPED_VIEWBOX',
        ...restProps, 
      } : restProps;
      NEWLINE
      return (
        COMPONENT_JSX
      );
    }
`;

  const reactTemplate = template.smart(code, {
    plugins: ['react', 'typescript'],
  });

  return reactTemplate({
    COMPONENT_NAME: componentName,
    COMPONENT_JSX: jsx,
    NEWLINE: '\n',
    CROPPED_VIEWBOX: croppedViewbox,
  });
};

const baseDir = path.join(__dirname, '..');
const iconComponentsDir = path.join(baseDir, 'lib/components/icons');

(async () => {
  // Load SVGs
  const svgFilePaths = await globby('icons/*.svg', {
    cwd: baseDir,
    absolute: true,
  });

  let filesToUpdate = [];

  if (forceUpdate) {
    filesToUpdate = [...svgFilePaths];
  } else {
    for (let i = 0; i < svgFilePaths.length; i++) {
      const svgFilePath = svgFilePaths[i];
      const { mtime } = await fs.stat(svgFilePath);
      const fileLastModified = mtime.toJSON();

      if (
        !lastUpdated[svgFilePath] ||
        lastUpdated[svgFilePath] !== fileLastModified
      ) {
        filesToUpdate.push(svgFilePath);
        lastUpdated[svgFilePath] = fileLastModified;
      }
    }

    if (filesToUpdate.length === 0) {
      // Nothing to do
      console.log(
        'No icon updates required. Run with "--force" flag to update anyway.',
      );

      return;
    }
  }

  const puppeteer = require('puppeteer');
  const SVGO = require('svgo');
  const { default: svgr } = require('@svgr/core');

  const svgo = new SVGO({
    multipass: true,
    plugins: [
      { removeViewBox: false },
      {
        inlineStyles: {
          onlyMatchedOnce: false,
        },
      },
      { convertStyleToAttrs: true },
      { removeDimensions: true },
    ],
  });

  const browser = await puppeteer.launch();

  const cropHorizontalSpace = async svg => {
    const page = await browser.newPage();
    await page.setContent(svg);

    const boundingBox = await page.$eval('svg', svgElement => {
      const { x, width } = svgElement.getBBox();

      return {
        x,
        width,
      };
    });

    const { x, width } = boundingBox;
    const viewBox = [x, 0, width, 24].map(v => roundTo(v, 0)).join(' ');

    await page.close();

    return viewBox;
  };

  await Promise.all(
    filesToUpdate.map(async svgFilePath => {
      // Split out the icon variants (e.g. bookmark-active.svg)
      const [svgName, variantName] = path
        .basename(svgFilePath, '.svg')
        .split('-');

      const rawSvg = await fs.readFile(svgFilePath, 'utf-8');
      const svg = rawSvg.replace(/ data-name=".*?"/g, '');

      // Run through SVGO
      const optimisedSvg = (await svgo.optimize(svg)).data;

      const croppedViewbox = await cropHorizontalSpace(optimisedSvg);

      // Validate SVG before import
      const $ = cheerio.load(optimisedSvg);
      $('svg *').each((i, el) => {
        const $el = $(el);

        // Validate color attributes
        ['stroke', 'fill'].forEach(attr => {
          const color = $el.attr(attr);
          const validColors = ['currentColor', 'none', '#000'];
          if (color && !validColors.includes(color)) {
            throw new Error(`${svgName}: Invalid ${attr} color: ${$.html(el)}`);
          }
        });
      });

      const iconName = `Icon${pascalCase(svgName)}`;
      const svgComponentName = `${iconName}${
        variantName ? pascalCase(variantName) : ''
      }Svg`;

      const svgComponent = await svgr(
        optimisedSvg,
        {
          svgProps: {
            focusable: 'false',
            fill: 'currentColor',
            role: 'img',
            height: '100%',
          },
          replaceAttrValues: { '#000': 'currentColor' },
          template: makeComponentTemplate(croppedViewbox),
          plugins: ['@svgr/plugin-jsx', '@svgr/plugin-prettier'],
          titleProp: true,
        },
        {
          componentName: svgComponentName,
        },
      );

      // Create icon directory if it's missing
      const iconDir = path.join(iconComponentsDir, iconName);
      await fs.mkdirp(iconDir);

      // Write SVG React component
      await fs.writeFile(
        path.join(iconDir, `${svgComponentName}.tsx`),
        svgComponent,
        { encoding: 'utf-8' },
      );

      // Bail out early if we're processing an icon variant (e.g. bookmark-active.svg)
      // All subsequent steps should only happen once per icon component.
      if (variantName) {
        return;
      }

      const templateFileIfMissing = async (relativePath, contents) => {
        const filePath = path.join(iconDir, relativePath);
        if (!(await fs.pathExists(filePath))) {
          await fs.writeFile(filePath, `${contents}\n`, 'utf-8');
        }
      };

      // Create icon wrapper component, if it doesn't already exist
      await templateFileIfMissing(
        `${iconName}.tsx`,
        dedent`
          import React from 'react';
          import useIcon, { UseIconProps } from '../../../hooks/useIcon';
          import { ${svgComponentName} } from './${svgComponentName}';

          export type ${iconName}Props = UseIconProps;

          export const ${iconName} = (props: ${iconName}Props) => {
            const iconProps = useIcon(props);

            return <${svgComponentName} {...iconProps} />;
          };
        `,
      );

      // Create documentation, if it doesn't already exist
      await templateFileIfMissing(
        `${iconName}.docs.tsx`,
        dedent`
          import React from 'react';
          import { ComponentDocs } from '../../../../site/src/types';
          import { ${iconName} } from './${iconName}';

          const docs: ComponentDocs = {
            category: 'Icon',
            migrationGuide: true,
            foundation: true,
            screenshotWidths: [],
            examples: [
              {
                label: 'Default',
                Example: () => <${iconName} />,
              },
            ],
          };

          export default docs;
        `,
      );

      // Create migration guide, if it doesn't already exist
      await templateFileIfMissing(
        `${iconName}.migration.md`,
        dedent`
          # ${iconName} Migration Guide

          Please refer to the [Icon Migration Guide.](../Icon.migration.md)
        `,
      );
    }),
  );

  // Create icons/index.ts
  const iconComponentNames = (await fs.readdir(iconComponentsDir)).filter(
    // Only include directories that contain an icon, e.g. exclude '__snapshots__'
    fileOrDir => !fileOrDir.includes('.') && fileOrDir.includes('Icon'),
  );
  const iconExports = iconComponentNames
    .map(componentFile => path.basename(componentFile, '.tsx'))
    .map(
      component =>
        `export { ${component} } from './${component}/${component}';`,
    )
    .join('\n')
    .concat('\n');
  const iconsIndexPath = path.join(iconComponentsDir, 'index.ts');
  await fs.writeFile(iconsIndexPath, iconExports, 'utf-8');

  // write last updated
  await fs.writeFile(
    lastUpdatedPath,
    JSON.stringify(lastUpdated, null, 2),
    'utf-8',
  );

  await browser.close();
})();
