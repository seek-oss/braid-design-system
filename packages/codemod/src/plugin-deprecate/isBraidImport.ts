const braidConsumer = /braid-design-system(?:\/css)?$/;
const braidInternal = /braid-src\/lib(?:\/(css|components))?$/;

export const isBraidImport = (importSource: string) =>
  braidConsumer.test(importSource) || braidInternal.test(importSource);
