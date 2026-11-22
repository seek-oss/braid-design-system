/* eslint-disable no-console */
import { existsSync, statSync } from 'fs';
import path from 'path';

/**
 * Log to console if CI or DEBUG env vars are set
 */
export const debugLog = (...args: Parameters<typeof console.log>) => {
  if (process.env.CI || process.env.DEBUG) {
    console.log(...args);
  }
};

const extensions = ['.ts', '.tsx', '.js', '.json'];

const isFile = (p: string) => existsSync(p) && statSync(p).isFile();

/**
 * Resolves an absolute, extensionless module path to a file,
 * trying known extensions and then directory index files
 */
const resolveModulePath = (absPath: string) => {
  const candidates = [
    absPath,
    ...extensions.map((ext) => `${absPath}${ext}`),
    ...extensions.map((ext) => path.join(absPath, `index${ext}`)),
  ];
  const resolved = candidates.find(isFile);

  if (!resolved) {
    throw new Error(`Cannot resolve module path: ${absPath}`);
  }

  return resolved;
};

/**
 * Converts an absolute path to a relative path from the generated file
 */
export const relativeTo = (baseDir: string, absPath: string) => {
  let relativePath = path.relative(baseDir, resolveModulePath(absPath));
  relativePath = relativePath.replace(path.extname(relativePath), '');

  if (relativePath.endsWith('/index')) {
    relativePath = path.dirname(relativePath);
  }
  if (relativePath.endsWith('..')) {
    relativePath += '/';
  }
  if (!relativePath.startsWith('.')) {
    relativePath = `./${relativePath}`;
  }

  return relativePath;
};
