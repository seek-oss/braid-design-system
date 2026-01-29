const fs = require('fs');
const path = require('path');

const extractExports = require('./extractExports');
const undocumentedExports = require('./src/undocumentedExports.json');

const braidSrc = '../packages/braid-design-system';

const getExports = (relativePath, exportType = 'components') => {
  const sourcePath = require.resolve(
    path.join(__dirname, braidSrc, relativePath),
  );
  const source = extractExports(sourcePath);

  return source
    .filter((x) => !undocumentedExports[exportType].includes(x))
    .sort();
};

const getPages = (relativePath) => {
  const sourcePath = require.resolve(path.join(__dirname, relativePath));
  const source = fs.readFileSync(sourcePath, 'utf-8'); // eslint-disable-line no-sync

  return source.match(/('.*')(?=:)/g).map((x) => x.split("'")[1]);
};

// TODO: COLORMODE RELEASE
// Remove `colorModeStyle` from `undocumentedExports.json`
const cssNames = getExports('src/css.ts', 'css');
const componentNames = getExports('src/lib/components/index.ts');
const testNames = getExports('src/test.ts');
const iconNames = getExports('src/lib/components/icons/index.ts');

const guideRoutes = getPages('src/App/routes/guides/index.ts');
const foundationRoutes = getPages('src/App/routes/foundations/index.ts');
const exampleRoutes = getPages('src/App/routes/examples/index.ts');

module.exports = [
  { route: '/', name: 'home' },
  { route: '/releases', name: 'releases' },
  { route: '/gallery', name: 'gallery' },
  guideRoutes.map((route) => ({ route })),
  foundationRoutes.map((route) => ({ route })),
  { route: '/foundations/iconography/browse', name: 'browseIcons' },
  exampleRoutes.map((route) => ({ route })),
  { route: '/components', name: 'components' }, // Pre-rendering this route for url backwards compatibility.
  [...componentNames, ...testNames].flatMap((name) =>
    [
      { route: `/components/${name}` },
      { route: `/components/${name}/releases` },
      { route: `/components/${name}/snippets` },
      !name.startsWith('use') ? { route: `/components/${name}/props` } : null,
    ].filter(Boolean),
  ),
  cssNames.flatMap((name) => [
    { route: `/css/${name}` },
    { route: `/css/${name}/releases` },
  ]),

  iconNames.flatMap((name) => [
    { route: `/components/${name}`, name },
    { route: `/components/${name}/props` },
    { route: `/components/${name}/releases` },
  ]),
].flat();
