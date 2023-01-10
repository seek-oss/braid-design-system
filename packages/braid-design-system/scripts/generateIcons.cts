/* eslint-disable no-console */
import path from 'path';
import fs from 'fs-extra';
import globby from 'globby';
import cheerio from 'cheerio';
import { pascalCase } from 'change-case';
import dedent from 'dedent';
// @ts-ignore
import { optimize } from 'svgo';
// @ts-expect-error svgr@6 has types
import svgr from '@svgr/core';

const baseDir = path.join(__dirname, '..');
const iconComponentsDir = path.join(baseDir, 'src/lib/components/icons');

const relativeToProject = (p: string) => path.relative(baseDir, p);

const componentTemplate = ({ template }: any, opts: any, { componentName, jsx }: any) => {
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

(async () => {
  // First clean up any existing SVG components
  const existingComponentPaths = await globby('*/*Svg.tsx', {
    cwd: iconComponentsDir,
    absolute: true,
  });
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

  const filePromises = svgFilePaths.map(async (svgFilePath) => {
    // Split out the icon variants (e.g. bookmark-active.svg)
    const [svgName, variantName] = path.basename(svgFilePath, '.svg').split('-');

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
    const svgComponentName = `${iconName}${variantName ? pascalCase(variantName) : ''}Svg`;
    const svgComponent = await svgr(optimisedSvg, svgrConfig, {
      componentName: svgComponentName,
    });

    // Create icon directory if it's missing
    const iconDir = path.join(iconComponentsDir, iconName);
    await fs.mkdirp(iconDir);

    // Write SVG React component
    await fs.writeFile(path.join(iconDir, `${svgComponentName}.tsx`), svgComponent, {
      encoding: 'utf-8',
    });

    // Bail out early if we're processing an icon variant (e.g. bookmark-active.svg)
    // All subsequent steps should only happen once per icon component.
    if (variantName) {
      return;
    }

    // Converts an absolute path to a relative path from the generated file
    const relative = (absPath: string) => {
      let relativePath = path.relative(iconDir, absPath);
      relativePath = relativePath.replace(path.extname(relativePath), '');
      if (relativePath.endsWith('index')) relativePath = path.dirname(relativePath);
      if (relativePath.endsWith('..')) relativePath += '/';

      return relativePath;
    };

    const templateFileIfMissing = async (fileName: string, contents: string) => {
      const filePath = path.join(iconDir, fileName);
      if (await fs.pathExists(filePath)) {
        console.log('Skip', relativeToProject(filePath));
        return;
      }
      console.log('Write', relativeToProject(filePath));
      await fs.writeFile(filePath, `${contents}\n`, 'utf-8');
    };

    // Create icon wrapper component, if it doesn't already exist
    await templateFileIfMissing(
      `${iconName}.tsx`,
      dedent/* ts */ `
        import React from 'react';
        import { Box } from '${relative(require.resolve(`${baseDir}/src/lib/components/Box/Box`))}';
        import type { UseIconProps } from '${relative(require.resolve(`${baseDir}/src/lib/hooks/useIcon`))}';
        import useIcon from '${relative(require.resolve(`${baseDir}/src/lib/hooks/useIcon`))}';
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
      dedent/* ts */ `
        import React from 'react';
        import type { ComponentDocs } from 'site/types';
        import { iconDocumentation } from '../iconCommon.docs';
        import source from '${relative(require.resolve(`${baseDir}/src/lib/utils/source.macro`))}';
        import { ${iconName}, Heading, Stack } from '${relative(require.resolve(`${baseDir}/src/lib/components`))}';

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
          additional: [iconDocumentation],
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
  });

  await Promise.all(filePromises);

  // Create icons/index.ts
  const iconComponentNames = await globby(['Icon*', '!*.*'], {
    cwd: iconComponentsDir,
    onlyFiles: false,
  });
  const iconExports = iconComponentNames
    .map((componentFile) => path.basename(componentFile, '.tsx'))
    .map((component) => `export { ${component} } from './${component}/${component}';`)
    .join('\n')
    .concat('\n');
  const iconsIndexPath = path.join(iconComponentsDir, 'index.ts');
  console.log('Update', relativeToProject(iconsIndexPath));
  await fs.writeFile(iconsIndexPath, iconExports, 'utf-8');
})();
