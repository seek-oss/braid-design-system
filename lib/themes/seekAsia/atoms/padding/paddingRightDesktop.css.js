import tokens from '../../tokens/tokens';
import columnSpacingForCssRule from '../../../utils/columnSpacingForCssRule';
import createDesktopRules from '../../../utils/createDesktopRules';

export default createDesktopRules({
  tokens,
  css: columnSpacingForCssRule('paddingRight', tokens)
});
