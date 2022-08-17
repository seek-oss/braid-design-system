import '@testing-library/jest-dom';
import React from 'react';
import { renderHook } from '@testing-library/react';
import { BraidTestProvider } from '../../../test';
import { useBreakpoint } from '..';

describe('useResponsiveValue', () => {
  const testData = [
    [{ breakpoint: null, expected: null }],
    [{ breakpoint: 'mobile', expected: 'mobile' }],
    [{ breakpoint: 'tablet', expected: 'tablet' }],
    [{ breakpoint: 'desktop', expected: 'desktop' }],
    [{ breakpoint: 'wide', expected: 'desktop' }], // Backwards compatibility
  ] as const;

  test.each(testData)('%p from %p returns %p', ({ breakpoint, expected }) => {
    const spy = jest.spyOn(console, 'warn').mockImplementation();

    const { result } = renderHook(() => useBreakpoint(), {
      wrapper: ({ children }) => (
        <BraidTestProvider breakpoint={breakpoint}>
          {children}
        </BraidTestProvider>
      ),
    });

    expect(result.current).toEqual(expected);

    expect(spy).toHaveBeenCalledTimes(1);
    spy.mockRestore();
  });
});
