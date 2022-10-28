// eslint-disable-next-line import/no-unresolved
const yaml = require('js-yaml');
// eslint-disable-next-line import/no-unresolved
const fs = require('fs');

const workspace = yaml.load(
  // eslint-disable-next-line no-sync
  fs.readFileSync(`${__dirname}/pnpm-workspace.yaml`, 'utf-8'),
);

module.exports = {
  extends: '',
  extends: 'seek',
  settings: {
    'import/resolver': {
      typescript: {
        project: workspace.packages.map(
          (project) => `${project}/tsconfig.json`,
        ),
      },
    },
  },
  // workaround for @typescript-eslint/consistent-type-imports + import/no-duplicates
  // ! requires TypeScript >=4.5 downstream
  // remove when this is done https://github.com/typescript-eslint/typescript-eslint/issues/4338
  // plugins: ['canonical'],
  rules: {
    '@typescript-eslint/consistent-type-imports': 'error',
    // 'canonical/prefer-inline-type-import': 'error', // remove when this is done https://github.com/typescript-eslint/typescript-eslint/issues/4338
    'import/no-cycle': 'warn',
    'import/no-duplicates': 'error',
    'import/no-relative-packages': 'error',
  },
  overrides: [
    {
      files: ['*.{js,ts,tsx}'],
      excludedFiles: [
        '*.{docs,gallery,screenshots,stories}.tsx',
        'site/**/*.{ts,tsx}',
      ],
      rules: {
        'no-restricted-imports': [
          'error',
          {
            patterns: [
              'braid-design-system**',
              '!braid-design-system/lib/utils/source.macro',
              'braid-src/**',
              'site/**',
              '**/site/**',
            ],
          },
        ],
      },
    },
  ],
};
