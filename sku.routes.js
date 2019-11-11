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

const getPages = relativePath => {
  const sourcePath = path.join(__dirname, relativePath);
  const source = fs.readFileSync(sourcePath, 'utf-8'); // eslint-disable-line no-sync

  return source.match(/('.*')(?=:)/g).map(x => x.split("'")[1]);
};

const componentNames = getExports('lib/components/index.ts');
const iconNames = getExports('lib/components/icons/index.ts');
const guideRoutes = getPages('site/src/App/guides/index.ts');

module.exports = [
  { route: '/', name: 'home' },
  ...guideRoutes.map(route => ({ route })),
  { route: `/foundations/iconography`, name: 'iconography' },
  { route: `/foundations/tones`, name: 'tones' },
  { route: '/components', name: 'components' },
  ...componentNames.map(name => ({ route: `/components/${name}`, name })),
  ...iconNames.map(name => ({ route: `/components/${name}`, name })),
];
