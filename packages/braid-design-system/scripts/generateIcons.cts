import path from 'path';

// @ts-expect-error svgr@6 has types
import svgr from '@svgr/core';
import { pascalCase } from 'change-case';
import { load } from 'cheerio';
import dedent from 'dedent';
import glob from 'fast-glob';
import fs from 'fs-extra';
// @ts-expect-error svgo@3 has types
import { optimize } from 'svgo';

import { debugLog, relativeTo } from './utils';

const baseDir = path.join(__dirname, '..');
const iconComponentsDir = path.join(baseDir, 'src/lib/components/icons');

const relativeToProject = (p: string) => path.relative(baseDir, p);

const componentTemplate = ({ template }: any, opts: any, { componentName, jsx }: any) => {
  const code = `
    import type { FC } from 'react';

    import type { SVGProps } from '../SVGTypes';
    NEWLINE
    export const COMPONENT_NAME: FC<SVGProps> = ({ title, titleId, ...props }) => COMPONENT_JSX;
  `;

  const reactTemplate = template.smart(code, {
    plugins: ['react', 'typescript'],
  });

  return reactTemplate({
    COMPONENT_NAME: componentName,
    COMPONENT_JSX: jsx,
    NEWLINE: '\n',
    FC: 'FC',
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
  plugins: [require.resolve('@svgr/plugin-jsx'), require.resolve('@svgr/plugin-prettier')],
  titleProp: true,
};

(async () => {
  // First clean up any existing SVG components
  const existingComponentPaths = await glob('*/*Svg.tsx', {
    cwd: iconComponentsDir,
    absolute: true,
  });
  await Promise.all(
    existingComponentPaths.map(async (existingComponentPath) => {
      await fs.remove(existingComponentPath);
    }),
  );

  // Load SVGs
  const svgFilePaths = await glob('icons/*.svg', {
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
    const $ = load(optimisedSvg);
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

    const isAllCaps = svgName.toUpperCase() === svgName;
    const iconName = `Icon${isAllCaps ? svgName : pascalCase(svgName)}`;
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
    const relative = (absPath: string) => relativeTo(iconDir, absPath);

    const templateFileIfMissing = async (fileName: string, contents: string) => {
      const filePath = path.join(iconDir, fileName);
      if (await fs.pathExists(filePath)) {
        debugLog('Skip', relativeToProject(filePath));
        return;
      }
      debugLog('Write', relativeToProject(filePath));
      await fs.writeFile(filePath, `${contents}\n`, 'utf-8');
    };

    // Create icon wrapper component, if it doesn't already exist
    await templateFileIfMissing(
      `${iconName}.tsx`,
      dedent /* ts */ `
        import type { FC } from 'react';

        import { Box } from '${relative(`${baseDir}/src/lib/components/Box/Box`)}';
        import { IconContainer, type IconContainerProps } from '${relative(
          `${baseDir}/src/lib/components/icons/IconContainer`,
        )}';

        import { ${svgComponentName} } from '${relative(`${iconDir}/${svgComponentName}`)}';

        export type ${iconName}Props = IconContainerProps;

        export const ${iconName}: FC<${iconName}Props> = (props) => (
          <IconContainer {...props}>
            {(svgProps) => <Box component={${svgComponentName}} {...svgProps} />}
          </IconContainer>
        );
      `,
    );

    // Create documentation, if it doesn't already exist
    await templateFileIfMissing(
      `${iconName}.docs.tsx`,
      dedent /* ts */ `
        import source from '@braid-design-system/source.macro';
        import type { ComponentDocs } from 'site/types';

        import { ${iconName}, Heading, Stack } from '${relative(`${baseDir}/src/lib/components`)}';
        import { iconDocumentation } from '${relative(`${iconComponentsDir}/iconCommon.docs`)}';

        const docs: ComponentDocs = {
          category: 'Icon',
          Example: () =>
            source(
              <Stack space="none" align="center">
                <Heading component="div" level="1">
                  <${iconName} />
                </Heading>
              </Stack>,
            ),
          alternatives: [],
          additional: [...iconDocumentation],
        };

        export default docs;
      `,
    );
  });

  await Promise.all(filePromises);

  // Create icons/index.ts
  const iconComponentNames = await glob(['Icon*', '!*.*'], {
    cwd: iconComponentsDir,
    onlyFiles: false,
  });

  const iconExports = iconComponentNames
    .map((componentFile) => path.basename(componentFile, '.tsx'))
    .map((component) => `export { ${component} } from './${component}/${component}';`)
    .join('\n')
    .concat('\n');
  const iconsIndexPath = path.join(iconComponentsDir, 'index.ts');
  debugLog('Update', relativeToProject(iconsIndexPath));
  await fs.writeFile(iconsIndexPath, iconExports, 'utf-8');
})();
