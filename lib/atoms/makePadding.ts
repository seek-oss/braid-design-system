import { Tokens } from '../themes/theme';
import rowSpacingForCssRule from './utils/rowSpacingForCssRule';
import columnSpacingForCssRule from './utils/columnSpacingForCssRule';
import makeDesktopRules from './utils/makeDesktopRules';

const makePaddingRules = (tokens: Tokens, suffix = '') => ({
  ...rowSpacingForCssRule(`paddingTop${suffix}`, tokens),
  ...columnSpacingForCssRule(`paddingRight${suffix}`, tokens),
  ...rowSpacingForCssRule(`paddingBottom${suffix}`, tokens),
  ...columnSpacingForCssRule(`paddingLeft${suffix}`, tokens)
});

export default (tokens: Tokens) => ({
  ...makePaddingRules(tokens),
  ...makeDesktopRules({
    tokens,
    css: makePaddingRules(tokens, 'Desktop')
  })
});
