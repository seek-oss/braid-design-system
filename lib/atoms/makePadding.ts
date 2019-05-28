import { Tokens, Breakpoint } from '../themes/theme';
import rowSpacingForCssRule from './utils/rowSpacingForCssRule';
import columnSpacingForCssRule from './utils/columnSpacingForCssRule';
import makeDesktopRules from './utils/makeDesktopRules';

const makePaddingRules = (tokens: Tokens, breakpoint: Breakpoint) => {
  const suffix = breakpoint === 'desktop' ? 'Desktop' : '';

  return {
    ...rowSpacingForCssRule(`paddingTop${suffix}`, 'paddingTop', tokens),
    ...columnSpacingForCssRule(`paddingRight${suffix}`, 'paddingRight', tokens),
    ...rowSpacingForCssRule(`paddingBottom${suffix}`, 'paddingBottom', tokens),
    ...columnSpacingForCssRule(`paddingLeft${suffix}`, 'paddingLeft', tokens),
  };
};

export default (tokens: Tokens) => ({
  ...makePaddingRules(tokens, 'mobile'),
  ...makeDesktopRules({
    tokens,
    css: makePaddingRules(tokens, 'desktop'),
  }),
});
