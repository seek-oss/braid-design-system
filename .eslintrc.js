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
        'site/**/*.{ts,tsx}',
      ],
      rules: {
        'no-restricted-imports': [
          'error',
          {
            patterns: [
              'braid-design-system**',
              '!braid-design-system/src/lib/utils/source.macro',
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
