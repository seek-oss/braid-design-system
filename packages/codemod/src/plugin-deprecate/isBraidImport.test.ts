import { isBraidImport } from './isBraidImport';

describe('isBraidImport', () => {
  describe('valid cases', () => {
    [
      'braid-design-system',
      'braid-design-system/css',
      'braid-src/lib',
      'braid-src/lib/components',
      'braid-src/lib/css',
    ].forEach((source) =>
      test(`${source}`, () => expect(isBraidImport(source)).toBeTruthy()),
    );
  });

  describe('invalid cases', () => {
    [
      'braid-design-system/color-mode',
      'braid-design-system/components',
      'braid-design-system/test',
      'braid-design-system/theme',
      'braid-src',
      'braid-src/lib/color',
      'braid-src/lib/entries',
      'braid-src/lib/playroom',
      'braid-src/lib/src',
      'braid-src/lib/theme',
      'braid-src/lib/themes',
      'braid-src/entries',
      'braid-src/entries/css',
      'braid-src/entries/playroom',
      'braid-src/entries/themes',
    ].forEach((source) =>
      test(`${source}`, () => expect(isBraidImport(source)).toBeFalsy()),
    );
  });
});
