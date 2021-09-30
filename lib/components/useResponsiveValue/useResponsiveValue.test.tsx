import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { BraidTestProvider } from '../../../test';
import { useResponsiveValue } from '..';

describe('useResponsiveValue', () => {
  const testData = [
    [
      {
        breakpoint: null,
        value: { mobile: 1, desktop: 3 },
        expected: null,
      },
    ],
    [
      {
        breakpoint: 'wide',
        value: { mobile: 1, desktop: 3 },
        expected: 3,
      },
    ],
    [
      {
        breakpoint: 'wide',
        value: { mobile: 1, desktop: 3, wide: 4 },
        expected: 4,
      },
    ],
    [
      {
        breakpoint: 'desktop',
        value: { mobile: 1, desktop: 3 },
        expected: 3,
      },
    ],
    [
      {
        breakpoint: 'desktop',
        value: { mobile: 1, desktop: 3, wide: 4 },
        expected: 3,
      },
    ],
    [
      {
        breakpoint: 'mobile',
        value: { mobile: 1, desktop: 3 },
        expected: 1,
      },
    ],
    [
      {
        breakpoint: 'tablet',
        value: { mobile: 1, desktop: 3 },
        expected: 1,
      },
    ],
    [
      {
        breakpoint: 'wide',
        value: { mobile: 1 },
        expected: 1,
      },
    ],
  ] as const;

  test.each(testData)(
    '%p from %p returns %p',
    ({ breakpoint, value, expected }) => {
      const { result } = renderHook(() => useResponsiveValue()(value), {
        wrapper: ({ children }) => (
          <BraidTestProvider breakpoint={breakpoint}>
            {children}
          </BraidTestProvider>
        ),
      });

      expect(result.current).toEqual(expected);
    },
  );
});
