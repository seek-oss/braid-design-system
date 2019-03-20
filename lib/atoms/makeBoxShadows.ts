import { BoxShadow, Tokens } from './../themes/theme';
import { px } from './utils/toUnit';

export type BoxShadowParams = Record<BoxShadow, string>;

export default (
  { borderWidth }: Tokens,
  {
    outlineFocus,
    borderStandard,
    borderFormAccent,
    borderCritical,
  }: BoxShadowParams,
) => ({
  '.boxShadow_outlineFocus': {
    boxShadow: `0 0 0 ${px(borderWidth.large)} ${outlineFocus}`,
  },
  '.boxShadow_borderStandard': {
    boxShadow: `inset 0 0 0 ${px(borderWidth.standard)} ${borderStandard}`,
  },
  '.boxShadow_borderCritical': {
    boxShadow: `inset 0 0 0 ${px(borderWidth.standard)} ${borderCritical}`,
  },
  '.boxShadow_borderFormAccent': {
    boxShadow: `inset 0 0 0 ${px(borderWidth.standard)} ${borderFormAccent}`,
  },
  '.boxShadow_borderFormAccentLarge': {
    boxShadow: `inset 0 0 0 ${px(borderWidth.large)} ${borderFormAccent}`,
  },
});
