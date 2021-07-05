import { resolveResponsiveObject } from './resolveResponsiveObject';

describe('resolveResponsiveObject', () => {
  const testData = [
    ['wide', { mobile: 1, desktop: 3 }, 3],
    ['wide', { mobile: 1, desktop: 3, wide: 4 }, 4],
    ['desktop', { mobile: 1, desktop: 3 }, 3],
    ['desktop', { mobile: 1, desktop: 3, wide: 4 }, 3],
    ['mobile', { mobile: 1, desktop: 3 }, 1],
    ['tablet', { mobile: 1, desktop: 3 }, 1],
    ['wide', { mobile: 1 }, 1],
  ] as const;

  test.each(testData)(
    '%p from %p returns %p',
    (breakpoint, value, expected) => {
      expect(resolveResponsiveObject(breakpoint, value)).toEqual(expected);
    },
  );
});
