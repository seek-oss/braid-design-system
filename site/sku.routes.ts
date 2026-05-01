/* eslint-disable no-sync */
import fs from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import type { SkuConfig } from 'sku';

import extractExports from './scripts/extractExports';
import undocumentedExports from './src/undocumentedExports.json';

const require = createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const braidSrc = '../packages/braid-design-system';

const getExports = (
  relativePath: string,
  exportType: keyof typeof undocumentedExports = 'components',
): string[] => {
  const sourcePath = require.resolve(
    path.join(__dirname, braidSrc, relativePath),
  );
  const source = extractExports(sourcePath);

  return source
    .filter((x: string) => !undocumentedExports[exportType].includes(x))
    .sort();
};

const getPages = (relativePath: string): NonNullable<SkuConfig['routes']> => {
  const sourcePath = require.resolve(path.join(__dirname, relativePath));
  const source = fs.readFileSync(sourcePath, 'utf-8');

  return (source.match(/('.*')(?=:)/g) ?? []).map((x) => ({
    route: x.split("'")[1],
  }));
};

// TODO: COLORMODE RELEASE
// Remove `colorModeStyle` from `undocumentedExports.json`
const cssNames = getExports('src/css.ts', 'css');
const componentNames = getExports('src/lib/components/index.ts');
const testNames = getExports('src/test.ts');
const iconNames = getExports('src/lib/components/icons/index.ts');

const routes: SkuConfig['routes'] = [
  { route: '/', name: 'home' },
  { route: '/releases', name: 'releases' },
  { route: '/gallery', name: 'gallery' },
  getPages('src/App/routes/guides/index.ts'),
  getPages('src/App/routes/foundations/index.ts'),
  { route: '/foundations/iconography/browse', name: 'browseIcons' },
  getPages('src/App/routes/examples/index.ts'),
  { route: '/components', name: 'components' }, // Pre-rendering this route for url backwards compatibility.
  [...componentNames, ...testNames].flatMap((name) =>
    [
      { route: `/components/${name}` },
      { route: `/components/${name}/releases` },
      { route: `/components/${name}/snippets` },
      !name.startsWith('use') ? { route: `/components/${name}/props` } : null,
    ].filter((route) => route !== null),
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

export default routes;
