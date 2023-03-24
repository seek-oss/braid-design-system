export const isBraidImport = (importSource: string) =>
  /(braid-design-system(?:\/css)?|(braid-src\/lib(?:\/(css|components))?))$/.test(
    importSource,
  );
