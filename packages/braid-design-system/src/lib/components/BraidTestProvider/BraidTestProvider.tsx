import type { Breakpoint } from '../../css/breakpoints';
import * as themes from '../../themes';
import {
  type BraidProviderProps,
  BraidProvider,
} from '../BraidProvider/BraidProvider';
import { breakpointContext } from '../BraidProvider/BreakpointContext';

import { BraidTestProviderContext } from './BraidTestProviderContext';

// TODO __This code is not final.__ Discuss how we want to handle vitest and jest support in this file before merging.
const getTestRunner = () => {
  if (typeof jest !== 'undefined') {
    return jest;
  }

  if (typeof vi !== 'undefined') {
    return vi;
  }

  throw new Error(
    'Could not determine test runner. Please make sure you are using jest or vitest and that global variables are enabled.',
  );
};

const testRunner = getTestRunner();

/**
 * Mocking APIs missing from  `jsdom` environment.
 */
if (
  typeof navigator !== 'undefined' &&
  navigator?.userAgent?.includes('jsdom')
) {
  /**
   * Mocking `scrollIntoView` API.
   *
   * Can remove this if/when `jsdom` adds a stub for `scrollIntoView`.
   * GitHub issue: https://github.com/jsdom/jsdom/issues/1695
   * Pull request: https://github.com/jsdom/jsdom/pull/3639
   */
  window.HTMLElement.prototype.scrollIntoView =
    window.HTMLElement.prototype.scrollIntoView || (() => {});

  /**
   * Mocking `ResizeObserver` API.
   */
  class MockResizeObserver {
    observe = testRunner.fn();
    unobserve = testRunner.fn();
    disconnect = testRunner.fn();
  }
  window.ResizeObserver = MockResizeObserver;

  /**
   * Mocking `IntersectionObserver` API.
   */
  class MockIntersectionObserver {
    root = null;
    rootMargin = '';
    thresholds = [];

    observe = testRunner.fn();
    unobserve = testRunner.fn();
    disconnect = testRunner.fn();
    takeRecords = testRunner.fn();
  }
  window.IntersectionObserver = MockIntersectionObserver;
}

interface BraidTestProviderProps
  extends Omit<BraidProviderProps, 'theme' | 'styleBody'> {
  themeName?: keyof typeof themes;
  breakpoint?: Breakpoint | null;
}
export const BraidTestProvider = ({
  themeName = 'wireframe',
  breakpoint = null,
  ...restProps
}: BraidTestProviderProps) => (
  <BraidTestProviderContext.Provider value={true}>
    <breakpointContext.Provider value={breakpoint}>
      <BraidProvider
        {...restProps}
        theme={themes[themeName]}
        styleBody={undefined}
      />
    </breakpointContext.Provider>
  </BraidTestProviderContext.Provider>
);
