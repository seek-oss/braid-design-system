import { useResponsiveValue } from '../useResponsiveValue/useResponsiveValue';

type LegacyBreakpoint = 'mobile' | 'tablet' | 'desktop';

/** @deprecated Use 'useResponsiveValue' instead: https://seek-oss.github.io/braid-design-system/components/useResponsiveValue */
export const useBreakpoint = (): LegacyBreakpoint | null => {
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.warn(
      `'useBreakpoint' has been deprecated. Use 'useResponsiveValue' instead: https://seek-oss.github.io/braid-design-system/components/useResponsiveValue`,
    );
  }

  return useResponsiveValue()({
    mobile: 'mobile',
    tablet: 'tablet',
    desktop: 'desktop',
  } as const);
};
