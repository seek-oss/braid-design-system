import * as themes from '../../themes';
import { BraidProviderProps } from '../BraidProvider/BraidProvider';
import { Breakpoint } from '../useBreakpoint/BreakpointProvider';
interface BraidTestProviderProps extends Omit<BraidProviderProps, 'theme' | 'styleBody'> {
    themeName?: keyof typeof themes;
    breakpoint?: Breakpoint | null;
}
export declare const BraidTestProvider: ({ themeName, breakpoint, ...restProps }: BraidTestProviderProps) => JSX.Element;
export {};
