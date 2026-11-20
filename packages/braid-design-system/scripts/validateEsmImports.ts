/* eslint-disable no-console */
/**
 * Validates that all imports in the built ESM output are properly resolved.
 * This catches packages without proper ESM exports that need fully qualified paths.
 */
import { readFileSync, existsSync } from 'fs';
import { glob } from 'fs/promises';
import { createRequire } from 'module';
import { join, dirname } from 'path';

import pc from 'picocolors';

const require = createRequire(import.meta.url);
const packageExportsCache = new Map<string, boolean>();

interface ValidationError {
  file: string;
  line: number;
  importPath: string;
  suggestion: string;
}

function getPackageName(importPath: string): string | null {
  if (importPath.startsWith('.') || importPath.startsWith('/')) {
    return null;
  }

  if (importPath.startsWith('@')) {
    const parts = importPath.split('/');
    return parts.length > 2 ? `${parts[0]}/${parts[1]}` : null;
  }

  const firstSlash = importPath.indexOf('/');
  return firstSlash > -1 ? importPath.substring(0, firstSlash) : null;
}

function resolvePackageJsonPath(packageName: string): string {
  let packageJsonPath: string;
  try {
    packageJsonPath = require.resolve(`${packageName}/package.json`, {
      paths: [process.cwd()],
    });
  } catch {
    const packagePath = require.resolve(packageName, {
      paths: [process.cwd()],
    });
    let currentDir = dirname(packagePath);

    while (!existsSync(join(currentDir, 'package.json')) && currentDir !== dirname(currentDir)) {
      currentDir = dirname(currentDir);
    }
    packageJsonPath = join(currentDir, 'package.json');
  }

  return packageJsonPath;
}

function hasExportsField(packageName: string): boolean {
  if (packageExportsCache.has(packageName)) {
    return packageExportsCache.get(packageName)!;
  }

  try {
    const packageJsonPath = resolvePackageJsonPath(packageName);
    const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));
    const hasExports = 'exports' in packageJson;

    packageExportsCache.set(packageName, hasExports);
    return hasExports;
  } catch {
    packageExportsCache.set(packageName, true);
    return true;
  }
}

async function validateEsmImports(distDir: string): Promise<ValidationError[]> {
  const errors: ValidationError[] = [];
  for await (const mjsFile of glob('**/*.mjs', { cwd: distDir })) {
    const file = join(distDir, mjsFile);
    const lines = readFileSync(file, 'utf-8').split('\n');

    lines.forEach((line, index) => {
      const importMatch = line.match(/import\s+.*\s+from\s+['"]([^'"]+)['"]/);
      if (!importMatch) {
        return;
      }

      const importPath = importMatch[1];
      const packageName = getPackageName(importPath);

      if (
        packageName &&
        !importPath.endsWith('.js') &&
        !importPath.endsWith('.mjs') &&
        !importPath.endsWith('.json') &&
        !hasExportsField(packageName)
      ) {
        errors.push({
          file: file.replace(`${distDir}/`, ''),
          line: index + 1,
          importPath,
          suggestion: `${importPath}/index.js`,
        });
      }
    });
  }

  return errors;
}

const errors = await validateEsmImports(join(process.cwd(), 'dist'));

if (errors.length === 0) {
  console.log('✅ All ESM imports are properly qualified');
} else {
  console.error('❌ Found imports from packages without proper ESM exports:\n');

  errors.forEach(({ file, line, importPath, suggestion }) => {
    console.error(`   ${file}:${line}`);
    console.error(pc.red(`     - "${importPath}"`));
    console.error(pc.green(`     + "${suggestion}"\n`));
  });

  console.error('💡 These packages need fully qualified imports (with .js extensions).\n');

  process.exitCode = 1;
}
