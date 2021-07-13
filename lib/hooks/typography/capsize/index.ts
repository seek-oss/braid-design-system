import { createCss, buildValues, getCapHeight } from './core';
import type {
  CapHeightWithLeading,
  CapHeightWithLineGap,
  CapsizeOptions,
  CapsizeStyles,
  FontSizeWithLeading,
  FontSizeWithLineGap,
  FontMetrics,
} from './core/types';

function capsize(options: CapHeightWithLeading): CapsizeStyles;
function capsize(options: CapHeightWithLineGap): CapsizeStyles;
function capsize(options: FontSizeWithLineGap): CapsizeStyles;
function capsize(options: FontSizeWithLeading): CapsizeStyles;
function capsize(options: CapsizeOptions) {
  return createCss(buildValues(options));
}

export default capsize;

export type { FontMetrics, CapsizeOptions, CapsizeStyles };
export { getCapHeight };
