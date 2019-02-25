import { Tokens } from '../themes/theme';
import rowSpacingForCssRule from './utils/rowSpacingForCssRule';
import columnSpacingForCssRule from './utils/columnSpacingForCssRule';
import makeDesktopRules from './utils/makeDesktopRules';

const makePaddingRules = (tokens: Tokens) => ({
  ...rowSpacingForCssRule('paddingTop', tokens),
  ...columnSpacingForCssRule('paddingRight', tokens),
  ...rowSpacingForCssRule('paddingBottom', tokens),
  ...columnSpacingForCssRule('paddingLeft', tokens)
});

export default (tokens: Tokens) => ({
  ...makePaddingRules(tokens),
  ...makeDesktopRules({
    tokens,
    css: makePaddingRules(tokens)
  })
});
