import path from 'path';

// @ts-expect-error svgr@6 has types
import svgr from '@svgr/core';
import { pascalCase } from 'change-case';
import dedent from 'dedent';
import glob from 'fast-glob';
import fs from 'fs-extra';

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

const platformSuffixPattern = /^(web|ios|android|native)$/i;
const skippedOnWebPlatforms = new Set(['ios', 'android', 'native']);

const parseIconFileName = (svgFilePath: string) => {
  const baseName = path.basename(svgFilePath, '.svg');
  const [maybePlatform, ...stemParts] = baseName.split('.').reverse();
  if (stemParts.length > 0 && platformSuffixPattern.test(maybePlatform)) {
    return { stem: stemParts.reverse().join('.'), platform: maybePlatform.toLowerCase() };
  }
  return { stem: baseName, platform: undefined };
};

const parseDrawingStem = (stem: string) => {
  const [svgName, variantName] = stem.split('-');
  return { svgName, variantName };
};

const shouldSkipOnWeb = (svgFilePath: string) => {
  const { platform } = parseIconFileName(svgFilePath);
  return platform !== undefined && skippedOnWebPlatforms.has(platform);
};

const isWebOverride = (svgFilePath: string) => parseIconFileName(svgFilePath).platform === 'web';

// Prefer `.web` over an unsuffixed file with the same stem (`chevron.web.svg` beats `chevron.svg`).
const webSvgSources = (svgFilePaths: string[]): string[] => {
  const svgPathsByStem = new Map<string, string>();

  for (const svgFilePath of svgFilePaths) {
    if (shouldSkipOnWeb(svgFilePath)) {
      continue;
    }

    const { stem } = parseIconFileName(svgFilePath);
    const existing = svgPathsByStem.get(stem);

    if (!existing || isWebOverride(svgFilePath) || !isWebOverride(existing)) {
      svgPathsByStem.set(stem, svgFilePath);
    }
  }

  return [...svgPathsByStem.values()];
};

(async () => {
  const packageDir = path.dirname(require.resolve('@braid-design-system/icons/package.json'));
  const svgFilePaths = webSvgSources(await glob('svg/*.svg', { cwd: packageDir, absolute: true }));
  const writtenSvgComponents = new Set<string>();

  const filePromises = svgFilePaths.map(async (svgFilePath) => {
    const { svgName, variantName } = parseDrawingStem(parseIconFileName(svgFilePath).stem);

    const svg = await fs.readFile(svgFilePath, 'utf-8');
    const isAllCaps = svgName.toUpperCase() === svgName;
    const iconName = `Icon${isAllCaps ? svgName : pascalCase(svgName)}`;
    const svgComponentName = `${iconName}${variantName ? pascalCase(variantName) : ''}Svg`;
    const svgComponent = await svgr(svg, svgrConfig, {
      componentName: svgComponentName,
    });

    // Create icon directory if it's missing
    const iconDir = path.join(iconComponentsDir, iconName);
    await fs.mkdirp(iconDir);

    const svgComponentPath = path.join(iconDir, `${svgComponentName}.tsx`);
    await fs.writeFile(svgComponentPath, svgComponent, {
      encoding: 'utf-8',
    });
    writtenSvgComponents.add(svgComponentPath);

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

  const existingSvgComponentPaths = await glob('*/*Svg.tsx', {
    cwd: iconComponentsDir,
    absolute: true,
  });
  await Promise.all(
    existingSvgComponentPaths
      .filter((existingSvgComponentPath) => !writtenSvgComponents.has(existingSvgComponentPath))
      .map(async (existingSvgComponentPath) => {
        await fs.remove(existingSvgComponentPath);
      }),
  );

  // Create icons/index.ts
  const iconComponentDirs = await glob(['Icon*', '!*.*'], {
    cwd: iconComponentsDir,
    onlyFiles: false,
  });
  const iconComponentNames = (
    await Promise.all(
      iconComponentDirs.map(async (componentDir) => {
        const componentName = path.basename(componentDir);
        const hasComponent = await fs.pathExists(path.join(iconComponentsDir, componentName, `${componentName}.tsx`));
        return hasComponent ? componentDir : null;
      }),
    )
  ).filter((componentDir): componentDir is string => componentDir !== null);

  const iconExports = iconComponentNames
    .map((componentFile) => path.basename(componentFile, '.tsx'))
    .map((component) => `export { ${component} } from './${component}/${component}';`)
    .join('\n')
    .concat('\n');
  const iconsIndexPath = path.join(iconComponentsDir, 'index.ts');
  debugLog('Update', relativeToProject(iconsIndexPath));
  await fs.writeFile(iconsIndexPath, iconExports, 'utf-8');
})();
