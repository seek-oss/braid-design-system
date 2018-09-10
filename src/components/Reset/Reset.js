import React from 'react';
import classnames from 'classnames';
import withTheme from '../private/withTheme';

const Reset = withTheme(({ theme, component = 'div', className, ...props }) =>
  React.createElement(component, {
    className: classnames({
      [className]: className,
      [theme.atoms.reset[component]]: theme.atoms.reset[component]
    }),
    ...props
  })
);

Reset.displayName = 'Reset';

export default Reset;
