import eslintConfigSeek from 'eslint-config-seek';
import importPlugin from 'eslint-plugin-import';
import { readFileSync } from 'fs';
import { join, relative } from 'path';

const braidPackagePath = join(
  import.meta.dirname,
  'packages/braid-design-system',
);
const ignoreSkuGitIgnores = readFileSync(
  `${braidPackagePath}/.gitignore`,
  'utf8',
)
  .split('\n')
  .filter((line) => line && !line.startsWith('#'))
  .map((line) => join(relative(import.meta.dirname, braidPackagePath), line));

export default [
  {
    ignores: [
      '**/dist*/',
      '**/storybook-static',
      '**/node_modules/',
      '!/.*.js',
      '!/*.js',
      ...ignoreSkuGitIgnores,
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
  {
    files: ['**/*.{js,ts,tsx}'],
    ignores: [
      '**/*.{docs,gallery,screenshots,stories}.tsx',
      'packages/docs-ui/**/*.{ts,tsx}',
      'site/**/*.{ts,tsx}',
    ],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            'braid-design-system**',
            'braid-src/**',
            'site/**',
            '**/site/**',
          ],
        },
      ],
    },
  },
  {
    files: ['packages/docs-ui/**/*.{js,ts,tsx}'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: ['braid-src/**', 'site/**', '**/site/**'],
        },
      ],
    },
  },
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ['jest/setupTests.ts', '.storybook/*.ts'],
        },
      },
    },
  },
];
