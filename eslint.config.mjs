import { readFileSync } from 'fs';
import { dirname, join, relative } from 'path';

import { includeIgnoreFile } from '@eslint/compat';
import eslintConfigSeek from 'eslint-config-seek';
import { configs as storybookConfigs } from 'eslint-plugin-storybook';
import fastGlob from 'fast-glob';
import { load as loadYaml } from 'js-yaml';
const { isDynamicPattern, globSync } = fastGlob; // eslint-disable-line import-x/no-named-as-default-member -- commonjs module, will move to built in with node 22.

/**
 * Ignore linting for all files that are gitignored across all workspaces.
 */
const rootDir = dirname(import.meta.filename);
const { packages: workspaces } = loadYaml(
  readFileSync(join(rootDir, 'pnpm-workspace.yaml'), 'utf8'),
);
const gitIgnoresFromWorkspaces = workspaces
  // Resolve workspace directories
  .reduce((acc, workspace) => {
    const pathFromRoot = join(rootDir, workspace);
    const resolvedWorkspaceDirectories = isDynamicPattern(pathFromRoot)
      ? globSync(pathFromRoot, {
          onlyDirectories: true,
        })
      : [pathFromRoot];

    return [...acc, ...resolvedWorkspaceDirectories];
  }, [])
  // Resolve ignore paths from workspace gitignores and make paths root relative
  .map((workspacePath) => {
    try {
      const { ignores } = includeIgnoreFile(join(workspacePath, '.gitignore'));

      return {
        ignores: ignores.map((ignorePath) =>
          join(relative(rootDir, workspacePath), ignorePath),
        ),
      };
    } catch (e) {
      if (e.code !== 'ENOENT') {
        throw e;
      }
    }
  })
  // Filter out workspaces that didn't have a gitignore file
  .filter(Boolean);

export default [
  {
    ignores: ['**/bin.js', '!**/.storybook'],
  },
  ...gitIgnoresFromWorkspaces,
  ...eslintConfigSeek,
  ...storybookConfigs['flat/recommended'].map((config) => ({
    ...config,
    files: ['**/*.screenshots.@(ts|tsx|js|jsx|mjs|cjs)'],
  })),
  {
    rules: {
      'import-x/no-cycle': 'warn',
      'import-x/no-relative-packages': 'error',
      'import-x/order': [
        'error',
        {
          'newlines-between': 'always',
          alphabetize: { order: 'asc' },
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          pathGroups: [
            {
              pattern: '*.css',
              group: 'index',
              position: 'after',
              patternOptions: { matchBase: true },
            },
          ],
        },
      ],
    },
  }, // Prevent importing via project paths, with exception for site-related files
  {
    files: ['**/*.{js,ts,tsx}'],
    ignores: [
      'packages/braid-design-system/**/*.{docs,gallery,screenshots,stories}.tsx',
      'site/**/*.{ts,tsx}',
    ],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: ['braid-src/**', 'site/**', '**/site/**'],
        },
      ],
    },
  },
];
