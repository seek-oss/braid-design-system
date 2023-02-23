import path from 'path';

/**
 * Converts an absolute path to a relative path from the generated file
 */
export const relativeTo = (baseDir: string, absPath: string) => {
  let relativePath = path.relative(baseDir, require.resolve(absPath));
  relativePath = relativePath.replace(path.extname(relativePath), '');
  if (relativePath.endsWith('/index')) relativePath = path.dirname(relativePath);
  if (relativePath.endsWith('..')) relativePath += '/';
  if (!relativePath.startsWith('.')) relativePath = `./${relativePath}`;

  return relativePath;
};
