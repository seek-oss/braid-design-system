const path = require('path');
const fs = require('fs-extra');
const globby = require('globby');
const cheerio = require('cheerio');
const { pascalCase } = require('change-case');
const dedent = require('dedent');
const { optimize } = require('svgo');
const { default: svgr } = require('@svgr/core');

const componentTemplate = ({ template }, opts, { componentName, jsx }) => {
  const code = `
    import React from 'react';
    NEWLINE
    import type { SVGProps } from '../SVGTypes';
    NEWLINE
    export const COMPONENT_NAME = ({ title, titleId, ...props }: SVGProps) => COMPONENT_JSX;
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

const svgrConfig = {
  svgProps: {
    focusable: 'false',
    fill: 'currentColor',
    width: 16,
    height: 16,
  },
  replaceAttrValues: { '#000': 'currentColor' },
  template: componentTemplate,
  plugins: ['@svgr/plugin-jsx', '@svgr/plugin-prettier'],
  titleProp: true,
};

const baseDir = path.join(__dirname, '..');
const iconComponentsDir = path.join(baseDir, 'lib/components/icons');

(async () => {
  // First clean up any existing SVG components
  const existingComponentPaths = await globby(
    path.join(iconComponentsDir, '*/*Svg.tsx'),
    {
      cwd: baseDir,
      absolute: true,
    },
  );
  await Promise.all(
    existingComponentPaths.map(async (existingComponentPath) => {
      await fs.remove(existingComponentPath);
    }),
  );

  // Load SVGs
  const svgFilePaths = await globby('icons/*.svg', {
    cwd: baseDir,
    absolute: true,
  });

  await Promise.all(
    svgFilePaths.map(async (svgFilePath) => {
      // Split out the icon variants (e.g. bookmark-active.svg)
      const [svgName, variantName] = path
        .basename(svgFilePath, '.svg')
        .split('-');

      const rawSvg = await fs.readFile(svgFilePath, 'utf-8');
      const svg = rawSvg.replace(/ data-name=".*?"/g, '');

      // Run through SVGO
      const optimisedSvg = optimize(svg, {
        multipass: true,
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                removeViewBox: false,
              },
            },
          },
          {
            name: 'inlineStyles',
            params: {
              onlyMatchedOnce: false,
            },
          },
          { name: 'convertStyleToAttrs' },
        ],
      }).data;

      // Validate SVG before import
      const $ = cheerio.load(optimisedSvg);
      $('svg *').each((i, el) => {
        const $el = $(el);

        // Validate color attributes
        ['stroke', 'fill'].forEach((attr) => {
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
        if (!(await fs.pathExists(filePath))) {
          await fs.writeFile(filePath, `${contents}\n`, 'utf-8');
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

          export const ${iconName} = (props: ${iconName}Props) => {
            const iconProps = useIcon(props);

            return <Box component={${svgComponentName}} {...iconProps} />;
          };
        `,
      );

      // Create documentation, if it doesn't already exist
      await templateFileIfMissing(
        `${iconName}.docs.tsx`,
        dedent`
          import React from 'react';
          import { ComponentDocs } from '../../../../site/src/types';
          import source from '../../../utils/source.macro';
          import { ${iconName}, Heading, Stack } from '../../';

          const docs: ComponentDocs = {
            category: 'Icon',
            migrationGuide: true,
            Example: () =>
              source(
                <Stack space="none" align="center">
                  <Heading component="div" level="1">
                    <${iconName} />
                  </Heading>
                </Stack>,
              ),
            alternatives: [],
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
    (fileOrDir) => !fileOrDir.includes('.') && fileOrDir.includes('Icon'),
  );
  const iconExports = iconComponentNames
    .map((componentFile) => path.basename(componentFile, '.tsx'))
    .map(
      (component) =>
        `export { ${component} } from './${component}/${component}';`,
    )
    .join('\n')
    .concat('\n');
  const iconsIndexPath = path.join(iconComponentsDir, 'index.ts');
  await fs.writeFile(iconsIndexPath, iconExports, 'utf-8');
})();
