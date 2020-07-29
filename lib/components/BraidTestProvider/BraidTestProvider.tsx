import React from 'react';
import * as themes from '../../themes';
import {
  BraidProvider,
  BraidProviderProps,
} from '../BraidProvider/BraidProvider';
import { BraidTestProviderContext } from './BraidTestProviderContext';
import {
  breakpointContext,
  Breakpoint,
} from '../useBreakpoint/BreakpointProvider';

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
