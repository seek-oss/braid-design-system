import { includeIgnoreFile } from '@eslint/compat';
import eslintConfigSeek from 'eslint-config-seek';
import importPlugin from 'eslint-plugin-import';
import { readFileSync } from 'fs';
import { dirname, join, relative } from 'path';
import { load as loadYaml } from 'js-yaml';
import fastGlob from 'fast-glob';
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
  ...gitIgnoresFromWorkspaces,
  ...eslintConfigSeek,
  {
    plugins: {
      import: importPlugin,
    },
    rules: {
      'import/no-cycle': 'warn',
      'import/no-relative-packages': 'error',
    },
  },
  // Prevent importing via project paths, with exception for site-related files
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
  // Lint non-project ts files, e.g. jest and storybook config
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: [
            'jest/setupTests.ts',
            'packages/braid-design-system/.storybook/*.ts',
          ],
        },
      },
    },
  },
];
