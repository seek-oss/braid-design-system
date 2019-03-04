import { Tokens, Breakpoint } from '../themes/theme';
import rowSpacingForCssRule from './utils/rowSpacingForCssRule';
import columnSpacingForCssRule from './utils/columnSpacingForCssRule';
import makeDesktopRules from './utils/makeDesktopRules';
import { px } from './utils/toUnit';

const touchablePaddingRules = (
  tokens: Tokens,
  suffix: string,
  breakpoint: Breakpoint,
) => {
  const touchableHeight = tokens.touchableRows * tokens.rowHeight;
  const touchablePadding = px(
    (touchableHeight -
      tokens.text.standard[breakpoint].rows * tokens.rowHeight) /
      2,
  );

  return {
    [`.paddingTop${suffix}_standardTouchableText`]: {
      paddingTop: touchablePadding,
    },
    [`.paddingBottom${suffix}_standardTouchableText`]: {
      paddingBottom: touchablePadding,
    },
  };
};

const makePaddingRules = (tokens: Tokens, breakpoint: Breakpoint) => {
  const suffix = breakpoint === 'desktop' ? 'Desktop' : '';

  return {
    ...rowSpacingForCssRule(`paddingTop${suffix}`, 'paddingTop', tokens),
    ...columnSpacingForCssRule(`paddingRight${suffix}`, 'paddingRight', tokens),
    ...rowSpacingForCssRule(`paddingBottom${suffix}`, 'paddingBottom', tokens),
    ...columnSpacingForCssRule(`paddingLeft${suffix}`, 'paddingLeft', tokens),
    ...touchablePaddingRules(tokens, suffix, breakpoint),
  };
};

export default (tokens: Tokens) => ({
  ...makePaddingRules(tokens, 'mobile'),
  ...makeDesktopRules({
    tokens,
    css: makePaddingRules(tokens, 'desktop'),
  }),
});
