#!/usr/bin/env node
/* eslint-disable no-sync */

const esbuild = require('esbuild');

esbuild.buildSync({
  absWorkingDir: __dirname,
  entryPoints: ['../src/index.ts', '../src/wrapper.ts'],
  bundle: true,
  format: 'cjs',
  platform: 'node',
  target: 'node12',
  outdir: '../dist',
});
