import isEqual from 'lodash/isEqual';

export default ({ tokens, selector, mobileRules, desktopRules }) => {
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
