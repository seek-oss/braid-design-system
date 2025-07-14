export const supportedLanguages = [
  'diff',
  'js',
  'jsx',
  'ts',
  'tsx',
  'bash',
] as const;
export type SupportedLanguage = (typeof supportedLanguages)[number];
