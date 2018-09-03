import React from 'react';
import ThemeConsumer from '../ThemeConsumer/ThemeConsumer';

export default Component => ({ theme: themeOverride, ...restProps }) => (
  <ThemeConsumer>
    {theme => <Component theme={themeOverride || theme} {...restProps} />}
  </ThemeConsumer>
);
