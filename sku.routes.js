const fs = require('fs');
const path = require('path');
const partition = require('lodash/partition');

const componentsPath = path.join(__dirname, 'lib/components/index.js');
const componentsSource = fs.readFileSync(componentsPath, 'utf-8'); // eslint-disable-line no-sync
const components = componentsSource
  .match(/default as [A-Za-z]+/g)
  .map(x => x.replace('default as ', ''))
  .sort();
const [iconNames, componentNames] = partition(components, x =>
  /.+Icon$/i.test(x)
);

module.exports = [
  {
    route: '/',
    name: 'home'
  },
  ...componentNames.map(componentName => ({
    route: `/components/${componentName}/`,
    name: componentName
  })),
  ...iconNames.map(iconName => ({
    route: `/icons/${iconName}/`,
    name: iconName
  }))
];
