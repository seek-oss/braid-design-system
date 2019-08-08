const path = require('path');
const fs = require('fs-extra');
const { default: svgr } = require('@svgr/core');
const Promise = require('bluebird');
const changeCase = require('change-case');

function braidTemplate({ template }, opts, { componentName, jsx }) {
  const code = `
    import React from 'react';
    import { Box } from '../../Box/Box';
    import useIcon, { UseIconProps } from '../../../hooks/useIcon';
    NEWLINE
    const Svg = (props: UseIconProps) => JSX;
    NEWLINE
    export const COMPONENT_NAME = (props: UseIconProps) => {
        const iconProps = useIcon(props);
        NEWLINE
        return React.createElement(Box, { component: Svg, ...iconProps });
    }
    `;

  const tscTmpl = template.smart(code, {
    plugins: ['react', 'typescript'],
  });

  return tscTmpl({
    COMPONENT_NAME: componentName,
    JSX: jsx,
    NEWLINE: '\n',
  });
}

const config = {
  replaceAttrValues: { '#000': 'currentColor' },
  svgoConfig: {
    multipass: true,
    plugins: {
      inlineStyles: {
        onlyMatchedOnce: false,
      },
      convertStyleToAttrs: true,
    },
  },
  template: braidTemplate,
  plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx', '@svgr/plugin-prettier'],
};

const iconComponentsDir = path.join(
  __dirname,
  '../lib/components/icons/components',
);

const createIconComponent = async file => {
  const componentName = `${changeCase.pascalCase(
    path.basename(file, '.svg'),
  )}Icon`;

  const svg = await fs.readFile(path.join(__dirname, '../icons', file), {
    encoding: 'utf-8',
  });

  const cleanedSvg = svg.replace(/ data-name=".*?"/g, '');

  const component = await svgr(cleanedSvg, config, {
    componentName,
  });

  await fs.writeFile(
    path.join(iconComponentsDir, `${componentName}.tsx`),
    component,
    { encoding: 'utf-8' },
  );
};

(async () => {
  const svgFiles = await fs.readdir(path.join(__dirname, '../icons'));

  await fs.ensureDir(iconComponentsDir);

  await Promise.map(svgFiles, createIconComponent);

  const iconComponents = await fs.readdir(iconComponentsDir);

  const iconExports = iconComponents
    .map(componentFile => path.basename(componentFile, '.tsx'))
    .map(
      component => `export { ${component} } from './components/${component}';`,
    )
    .join('\n')
    .concat('\n');

  await fs.writeFile(path.join(iconComponentsDir, '../index.ts'), iconExports, {
    encoding: 'utf-8',
  });
})();
