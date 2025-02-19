#!/usr/bin/env node
const esbuild = require('esbuild');

(async () =>
  await esbuild.build({
    absWorkingDir: __dirname,
    entryPoints: ['../src/index.ts', '../src/wrapper.ts'],
    bundle: true,
    format: 'cjs',
    platform: 'node',
    target: 'node14',
    outdir: '../dist',
    jsx: 'transform',
    plugins: [
      {
        name: 'internalise-yoga-layout-for-patching',
        setup(build) {
          build.onResolve({ filter: /^yoga-layout-prebuilt$/ }, (args) => ({
            path: require.resolve(args.path),
            external: false,
          }));
        },
      },
    ],
  }))();
