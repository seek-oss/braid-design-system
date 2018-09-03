import React from 'react';
import classnames from 'classnames';
import withTheme from '../private/withTheme';

const Strong = withTheme(({ theme, className, ...props }) => (
  <strong
    {...props}
    className={classnames(className, theme.atoms.fontWeight.strong)}
  />
));

Strong.displayName = 'Strong';

export default Strong;
