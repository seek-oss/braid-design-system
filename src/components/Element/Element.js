import React from 'react';
import classnames from 'classnames';
import withTheme from '../private/withTheme';

const Element = withTheme(({ theme, component = 'div', className, ...props }) =>
  React.createElement(component, {
    className: classnames(className, theme.atoms.reset[component]),
    ...props
  })
);

Element.displayName = 'Element';

export default Element;
