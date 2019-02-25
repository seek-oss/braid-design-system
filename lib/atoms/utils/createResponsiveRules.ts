import isEqual from 'lodash/isEqual';
import { Tokens } from 'lib/themes/theme';

interface Params {
  tokens: Tokens;
  selector: string;
  mobileRules: object;
  desktopRules: object;
}
export default ({ tokens, selector, mobileRules, desktopRules }: Params) => {
  const css = {
    [selector]: mobileRules
  };

  if (!isEqual(mobileRules, desktopRules)) {
    css[`@media screen and (min-width: ${tokens.responsiveBreakpoint}px)`] = {
      [selector]: desktopRules
    };
  }

  return css;
};
