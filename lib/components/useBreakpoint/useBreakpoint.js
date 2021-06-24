import { useContext } from 'react';
import { breakpointContext } from './BreakpointProvider';
export var useBreakpoint = function useBreakpoint() {
  return useContext(breakpointContext);
};