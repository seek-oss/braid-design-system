import eslintConfigSeek from 'eslint-config-seek';
import importPlugin from 'eslint-plugin-import';
import { readFileSync } from 'fs';
import { dirname, join, relative } from 'path';
import { load as loadYaml } from 'js-yaml';
import fastGlob from 'fast-glob';
const { isDynamicPattern, glob } = fastGlob; // eslint-disable-line import-x/no-named-as-default-member -- commonjs module, will move to built in with node 22.

const rootDir = dirname(import.meta.filename);
const { packages: workspaces } = loadYaml(
  readFileSync(join(rootDir, 'pnpm-workspace.yaml'), 'utf8'),
);
const gitIgnoresFromWorkspaces = [];

for (const workspace of workspaces) {
  const pathFromRoot = join(rootDir, workspace);
  const workspacePaths = isDynamicPattern(pathFromRoot)
    ? await glob(pathFromRoot, {
        onlyDirectories: true,
      })
    : [pathFromRoot];

  for (const workspacePath of workspacePaths) {
    try {
      gitIgnoresFromWorkspaces.push(
        ...readFileSync(join(workspacePath, '.gitignore'), 'utf8')
          .split('\n')
          .filter((line) => line && !line.startsWith('#'))
          .map((line) => join(relative(rootDir, workspacePath), line)),
      );
    } catch (e) {
      if (e.code !== 'ENOENT') {
        throw e;
      }
    }
  }
}

export default [
  {
    ignores: [
      '**/node_modules/',
      '!/.*.js',
      '!/*.js',
      ...gitIgnoresFromWorkspaces,
    ],
  },
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
