const fs = require('fs');
const path = require('path');
const undocumentedExports = require('./site/src/undocumentedExports.json');

const getExports = relativePath => {
  const sourcePath = path.join(__dirname, relativePath);
  const source = fs.readFileSync(sourcePath, 'utf-8'); // eslint-disable-line no-sync

  return source
    .match(/export { [A-Za-z, ]+/g)
    .flatMap(x => {
      const namedExports = x.replace('export { ', '');

      return namedExports.split(',').map(e => e.trim());
    })
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

const guideRoutes = getPages('site/src/App/routes/guides/index.ts');
const foundationRoutes = getPages('site/src/App/routes/foundations/index.ts');

module.exports = [
  { route: '/', name: 'home' },
  ...guideRoutes.map(route => ({ route })),
  ...foundationRoutes.map(route => ({ route })),
  { route: '/components', name: 'components' }, // Pre-rendering this route for url backwards compatibility.
  ...componentNames.map(name => ({ route: `/components/${name}`, name })),
  ...iconNames.map(name => ({ route: `/components/${name}`, name })),
];
