import path from 'node:path';

import type { SkuConfig } from 'sku';
import { defaultClientConditions, defaultServerConditions } from 'vite';

import routes from './sku.routes';

const __dirname = import.meta.dirname;
const braidRoot = path.join(__dirname, '../packages/braid-design-system');
const resolveFromBraid = (p: string) => path.join(braidRoot, p);

const skuConfig: SkuConfig = {
  // TODO: Are these relevant for vite?
  // srcPaths: ['./src', resolveFromBraid('src')],
  clientEntry: './src/client.tsx',
  renderEntry: './src/render.tsx',
  routes,
  // TODO Does sku vite support a public dir?
  // public: './src/public',
  target: './dist',
  publicPath: `${process.env.BASE_NAME}/`,
  displayNamesProd: true,
  compilePackages: ['@braid-design-system/docs-ui'],
  __UNSAFE_EXPERIMENTAL__cjsInteropDependencies: ['lz-string'],
  sourceMapsProd: false,
  bundler: 'vite',
  dangerouslySetViteConfig: () => ({
    resolve: {
      alias: {
        'braid-src': resolveFromBraid('src'),
        site: path.join(__dirname, './src'),
      },
    },
    environments: {
      client: {
        define: {
          'globalThis.__IS_PLAYROOM_ENVIRONMENT__': JSON.stringify('clearly'),
        },
        resolve: {
          conditions: ['braid-dev', ...defaultClientConditions],
        },
      },
      ssr: {
        define: {
          'globalThis.__IS_PLAYROOM_ENVIRONMENT__': JSON.stringify('clearly'),
        },
        resolve: {
          conditions: [
            'braid-dev',
            ...defaultServerConditions.filter((c) => c !== 'browser'),
          ],
          externalConditions: ['braid-dev', ...defaultServerConditions],
        },
      },
    },
    assetsInclude: ['**/*.md'],
  }),
  polyfills: [],
  skipPackageCompatibilityCompilation: ['lodash', 'prettier'],
};

export default skuConfig;
