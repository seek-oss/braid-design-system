import tokens from '../../tokens/tokens';
import rowSpacingForCssRule from '../../../utils/rowSpacingForCssRule';
import createDesktopRules from '../../../utils/createDesktopRules';

export default createDesktopRules({
  tokens,
  css: rowSpacingForCssRule('paddingTop', tokens)
});
