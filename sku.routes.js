const fs = require('fs');
const path = require('path');

const undocumentedExports = ['useThemeName', 'BoxRenderer'];

const getExports = relativePath => {
  const sourcePath = path.join(__dirname, relativePath);
  const source = fs.readFileSync(sourcePath, 'utf-8'); // eslint-disable-line no-sync

  return source
    .match(/export { [A-Za-z]+/g)
    .map(x => x.replace('export { ', ''))
    .filter(x => !undocumentedExports.includes(x))
    .sort();
};

const componentNames = getExports('lib/components/index.ts');
const iconNames = getExports('lib/components/icons/index.ts');

module.exports = [
  { route: '/', name: 'home' },
  { route: '/components', name: 'components' },
  ...componentNames.map(name => ({ route: `/components/${name}/`, name })),
  ...iconNames.map(name => ({ route: `/icons/${name}/`, name })),
];
