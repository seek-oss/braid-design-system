module.exports = {
  extends: 'seek',
  rules: {
    'import/no-cycle': 'warn',
    'import/no-relative-packages': 'error',
  },
  overrides: [
    {
      files: ['*.{js,ts,tsx}'],
      excludedFiles: [
        '*.{docs,gallery,screenshots,stories}.tsx',
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
  ],
};
