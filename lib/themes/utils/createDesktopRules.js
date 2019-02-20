import createResponsiveRules from './createResponsiveRules';
import merge from 'lodash/merge';

export default ({ tokens, css }) => {
  const cssKeys = Object.keys(css);
  const desktopCss = cssKeys.reduce(
    (p, selector) =>
      merge(
        p,
        createResponsiveRules({
          tokens,
          selector,
          desktopRules: css[selector],
          mobileRules: {}
        })
      ),
    {}
  );
  cssKeys.forEach(e => delete desktopCss[e]);
  return desktopCss;
};
