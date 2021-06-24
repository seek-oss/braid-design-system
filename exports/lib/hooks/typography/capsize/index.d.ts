import { getCapHeight } from './core';
import type { CapHeightWithLeading, CapHeightWithLineGap, CapsizeOptions, CapsizeStyles, FontSizeWithLeading, FontSizeWithLineGap, FontMetrics } from './core/types';
declare function capsize(options: CapHeightWithLeading): CapsizeStyles;
declare function capsize(options: CapHeightWithLineGap): CapsizeStyles;
declare function capsize(options: FontSizeWithLineGap): CapsizeStyles;
declare function capsize(options: FontSizeWithLeading): CapsizeStyles;
export default capsize;
export type { FontMetrics, CapsizeOptions, CapsizeStyles };
export { getCapHeight };
