#!/usr/bin/env node
import { build } from 'esbuild';

const __dirname = new URL('.', import.meta.url).pathname;

await build({
  absWorkingDir: __dirname,
  entryPoints: ['../src/index.ts', '../src/wrapper.ts'],
  bundle: true,
  format: 'esm',
  platform: 'node',
  target: 'node20',
  outdir: '../dist',
  jsx: 'transform',
});
