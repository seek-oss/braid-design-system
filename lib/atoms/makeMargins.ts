import { Tokens } from '../themes/theme';
import rowSpacingForCssRule from './utils/rowSpacingForCssRule';
import columnSpacingForCssRule from './utils/columnSpacingForCssRule';
import makeDesktopRules from './utils/makeDesktopRules';

const makeMarginRules = (tokens: Tokens, suffix = '') => ({
  ...rowSpacingForCssRule(`marginTop${suffix}`, tokens),
  ...columnSpacingForCssRule(`marginRight${suffix}`, tokens),
  ...rowSpacingForCssRule(`marginBottom${suffix}`, tokens),
  ...columnSpacingForCssRule(`marginLeft${suffix}`, tokens)
});

export default (tokens: Tokens) => ({
  ...makeMarginRules(tokens),
  ...makeDesktopRules({
    tokens,
    css: makeMarginRules(tokens, 'Desktop')
  })
});
