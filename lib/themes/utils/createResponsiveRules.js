import isEqual from 'lodash/isEqual';

export default ({ tokens, selector, mobileRules, desktopRules }) => {
  const cssRules = { ...mobileRules };
  if (!isEqual(mobileRules, desktopRules)) {
    cssRules[
      `@media screen and (min-width: ${tokens.responsiveBreakpoint}px)`
    ] = desktopRules;
  }

  return { [selector]: cssRules };
};
