import { Tokens } from '../themes/theme';
import rowSpacingForCssRule from './utils/rowSpacingForCssRule';
import columnSpacingForCssRule from './utils/columnSpacingForCssRule';
import makeDesktopRules from './utils/makeDesktopRules';

const makePaddingRules = (tokens: Tokens, suffix = '') => ({
  ...rowSpacingForCssRule(`paddingTop${suffix}`, 'paddingTop', tokens),
  ...columnSpacingForCssRule(`paddingRight${suffix}`, 'paddingRight', tokens),
  ...rowSpacingForCssRule(`paddingBottom${suffix}`, 'paddingBottom', tokens),
  ...columnSpacingForCssRule(`paddingLeft${suffix}`, 'paddingLeft', tokens),
});

export default (tokens: Tokens) => ({
  ...makePaddingRules(tokens),
  ...makeDesktopRules({
    tokens,
    css: makePaddingRules(tokens, 'Desktop'),
  }),
});
