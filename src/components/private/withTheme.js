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

  return ThemedComponent;
};
