const path = require('path');
const fs = require('fs-extra');
const globby = require('globby');
const cheerio = require('cheerio');
const { pascalCase } = require('change-case');
const dedent = require('dedent');
const SVGO = require('svgo');
const { default: svgr } = require('@svgr/core');

const componentTemplate = ({ template }, opts, { componentName, jsx }) => {
  const code = `
    import React, { AllHTMLAttributes } from 'react';
    NEWLINE
    export const COMPONENT_NAME = (props: AllHTMLAttributes<SVGElement>) => COMPONENT_JSX;
  `;

  const reactTemplate = template.smart(code, {
    plugins: ['react', 'typescript'],
  });

  return reactTemplate({
    COMPONENT_NAME: componentName,
    COMPONENT_JSX: jsx,
    NEWLINE: '\n',
  });
};

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
  ],
});

const svgrConfig = {
  svgProps: { fill: 'currentColor', width: 16, height: 16 },
  replaceAttrValues: { '#000': 'currentColor' },
  template: componentTemplate,
  plugins: ['@svgr/plugin-jsx', '@svgr/plugin-prettier'],
};

(async () => {
  const svgFilePaths = await globby('icons/*.svg', {
    cwd: path.join(__dirname, '..'),
    absolute: true,
  });

  const iconComponentsDir = path.join(
    __dirname,
    '..',
    'lib',
    'components',
    'icons',
  );

  await Promise.all(
    svgFilePaths.map(async svgFilePath => {
      const [svgName, variantName] = path
        .basename(svgFilePath, '.svg')
        .split('-');

      const rawSvg = await fs.readFile(svgFilePath, 'utf-8');
      const svg = rawSvg.replace(/ data-name=".*?"/g, '');
      const optimisedSvg = (await svgo.optimize(svg)).data;

      // Validate SVG before import
      const $ = cheerio.load(optimisedSvg);
      $('svg *').each((i, el) => {
        const $el = $(el);

        // Validate color attributes
        ['stroke', 'fill'].forEach(attr => {
          const color = $el.attr(attr);
          const validColors = ['currentColor', 'black', '#000', '#000000'];
          if (color && !validColors.includes(color)) {
            throw new Error(`${svgName}: Invalid ${attr} color: ${$.html(el)}`);
          }
        });
      });

      const iconName = `${pascalCase(svgName)}Icon`;
      const svgComponentName = `${iconName}${
        variantName ? pascalCase(variantName) : ''
      }Svg`;
      const svgComponent = await svgr(optimisedSvg, svgrConfig, {
        componentName: svgComponentName,
      });

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
        if (!(await fs.exists(filePath))) {
          await fs.writeFile(filePath, `${contents}\n`, {
            encoding: 'utf-8',
          });
        }
      };

      // Create icon wrapper component, if it doesn't already exist
      await templateFileIfMissing(
        `${iconName}.tsx`,
        dedent`
          import React from 'react';
          import { Box } from '../../Box/Box';
          import useIcon, { UseIconProps } from '../../../hooks/useIcon';
          import { ${svgComponentName} } from './${svgComponentName}';

          export type ${iconName}Props = UseIconProps;

          export const ${iconName} = (props: UseIconProps) => {
            const iconProps = useIcon(props);

            return <Box component={${svgComponentName}} {...iconProps} />;
          };
        `,
      );

      // Create documentation, if it doesn't already exist
      await templateFileIfMissing(
        `${iconName}.docs.tsx`,
        dedent`
          import { ComponentDocs } from '../../../../site/src/types';
          import examplesForIcon from '../../private/examplesForIcon';
          import { ${iconName} } from './${iconName}';

          const docs: ComponentDocs = {
            migrationGuide: true,
            examples: examplesForIcon(${iconName}),
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
  const files = await fs.readdir(iconComponentsDir);
  const iconComponents = files.filter(
    file => file.includes('Icon') && !file.includes('.'),
  );
  const iconExports = iconComponents
    .map(componentFile => path.basename(componentFile, '.tsx'))
    .map(
      component =>
        `export { ${component} } from './${component}/${component}';`,
    )
    .join('\n')
    .concat('\n');
  const iconsIndexPath = path.join(iconComponentsDir, 'index.ts');
  await fs.writeFile(iconsIndexPath, iconExports, 'utf-8');
})();
