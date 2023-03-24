import { isBraidImport } from './isBraidImport';

describe('isBraidImport', () => {
  test.each([
    { input: 'braid-design-system', expected: true },
    { input: 'braid-design-system/css', expected: true },
    { input: 'braid-src/lib', expected: true },
    { input: 'braid-src/lib/components', expected: true },
    { input: 'braid-src/lib/css', expected: true },
    { input: 'braid-design-system/color-mode', expected: false },
    { input: 'braid-design-system/components', expected: false },
    { input: 'braid-design-system/test', expected: false },
    { input: 'braid-design-system/theme', expected: false },
    { input: 'braid-src', expected: false },
    { input: 'braid-src/lib/color', expected: false },
    { input: 'braid-src/lib/entries', expected: false },
    { input: 'braid-src/lib/playroom', expected: false },
    { input: 'braid-src/lib/src', expected: false },
    { input: 'braid-src/lib/theme', expected: false },
    { input: 'braid-src/lib/themes', expected: false },
    { input: 'braid-src/entries', expected: false },
    { input: 'braid-src/entries/css', expected: false },
    { input: 'braid-src/entries/playroom', expected: false },
    { input: 'braid-src/entries/themes', expected: false },
  ])('$input', ({ input, expected }) =>
    expect(isBraidImport(input)).toBe(expected),
  );
});
