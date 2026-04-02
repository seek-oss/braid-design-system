/* eslint-disable no-sync */
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
  const source = fs.readFileSync(sourcePath, 'utf-8');

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

const templatesDir = path.join(
  __dirname,
  braidSrc,
  'src/lib/playroom/templates',
);

/**
 * Scans the templates directory for `.docs.tsx` files and generates the
 * corresponding static routes for both group landing pages and template
 * detail pages.
 *
 * Expected directory shape: `templates/<group>/<Name>/<Name>.docs.tsx`
 *
 * @returns {{ route: string }[]} Flat array of route objects — group routes
 * first, followed by detail routes.
 */
const getTemplateRoutes = () => {
  /** @type {Set<string>} */
  const groups = new Set();
  /** @type {{ route: string }[]} */
  const detailRoutes = [];

  /**
   * Recursively walks `dir` up to `depth` levels deep, collecting any file
   * that matches the three-part `group/Name/Name.docs.tsx` pattern.
   *
   * @param {string} dir - Absolute path of the directory to scan.
   * @param {number} [depth=0] - Current recursion depth (max 2).
   */
  const scanDir = (dir, depth = 0) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.isDirectory() && depth < 2) {
        scanDir(path.join(dir, entry.name), depth + 1);
      } else if (entry.isFile() && entry.name.endsWith('.docs.tsx')) {
        const parts = path
          .relative(templatesDir, path.join(dir, entry.name))
          .split(path.sep);
        // expected shape: group/Name/Name.docs.tsx
        if (parts.length === 3) {
          const [group, name] = parts;
          groups.add(group);
          detailRoutes.push({ route: `/templates/${group}/${name}` });
        }
      }
    }
  };

  scanDir(templatesDir);

  return [
    ...Array.from(groups).map((group) => ({ route: `/templates/${group}` })),
    ...detailRoutes,
  ];
};

module.exports = [
  { route: '/', name: 'home' },
  { route: '/releases', name: 'releases' },
  { route: '/gallery', name: 'gallery' },
  guideRoutes.map((route) => ({ route })),
  foundationRoutes.map((route) => ({ route })),
  { route: '/foundations/iconography/browse', name: 'browseIcons' },
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
  ...getTemplateRoutes(),
].flat();
