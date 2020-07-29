import { useContext } from 'react';

import { breakpointContext } from './BreakpointProvider';

export const useBreakpoint = () => useContext(breakpointContext);
