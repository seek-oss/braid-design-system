import React from 'react';
import ThemeConsumer from '../ThemeConsumer/ThemeConsumer';

export default Component => {
  const ThemedComponent = ({ theme: themeOverride, ...restProps }) => (
    <ThemeConsumer>
      {theme => <Component theme={themeOverride || theme} {...restProps} />}
    </ThemeConsumer>
  );

  const displayName = `withTheme(${Component.displayName || 'Component'})`;
  ThemedComponent.displayName = displayName;

  if (Component.propTypes) {
    // eslint-disable-next-line no-unused-vars
    const { theme, ...restPropTypes } = Component.propTypes;
    ThemedComponent.propTypes = restPropTypes;
  }

  ThemedComponent.defaultProps = Component.defaultProps;

  return ThemedComponent;
};
