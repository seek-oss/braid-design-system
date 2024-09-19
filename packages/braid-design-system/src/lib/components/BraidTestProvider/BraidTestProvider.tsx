import React from 'react';
import * as themes from '../../themes';
import type { Breakpoint } from '../../css/breakpoints';
import {
  type BraidProviderProps,
  BraidProvider,
} from '../BraidProvider/BraidProvider';
import { BraidTestProviderContext } from './BraidTestProviderContext';
import { breakpointContext } from '../BraidProvider/BreakpointContext';

/**
 * Mocking for `jsdom` which doesn't support `scrollIntoView`.
 * Can remove this if/when `jsdom` adds a stub for `scrollIntoView`.
 *
 * GitHub issue: https://github.com/jsdom/jsdom/issues/1695
 * Pull request: https://github.com/jsdom/jsdom/pull/3639
 */
if (
  typeof navigator !== 'undefined' &&
  navigator?.userAgent?.includes('jsdom')
) {
  window.HTMLElement.prototype.scrollIntoView =
    window.HTMLElement.prototype.scrollIntoView || (() => {});
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
