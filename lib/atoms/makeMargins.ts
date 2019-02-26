import { Tokens } from '../themes/theme';
import rowSpacingForCssRule from './utils/rowSpacingForCssRule';
import columnSpacingForCssRule from './utils/columnSpacingForCssRule';
import makeDesktopRules from './utils/makeDesktopRules';

const makeMarginRules = (tokens: Tokens, suffix = '') => ({
  ...rowSpacingForCssRule(`marginTop${suffix}`, 'marginTop', tokens),
  ...columnSpacingForCssRule(`marginRight${suffix}`, 'marginRight', tokens),
  ...rowSpacingForCssRule(`marginBottom${suffix}`, 'marginBottom', tokens),
  ...columnSpacingForCssRule(`marginLeft${suffix}`, 'marginLeft', tokens)
});

export default (tokens: Tokens) => ({
  ...makeMarginRules(tokens),
  ...makeDesktopRules({
    tokens,
    css: makeMarginRules(tokens, 'Desktop')
  })
});
