import React from 'react';
import classnames from 'classnames';
import withTheme from '../private/withTheme';
import Reset from '../Reset/Reset';
import styles from './Box.css.js';

const Box = ({
  theme,
  component,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  borderWidth,
  borderRadius,
  backgroundColor,
  borderColor = 'default',
  className,
  ...props
}) => (
  <Reset
    component={component}
    className={classnames({
      [className]: className,
      [styles.root]: true,
      [theme.atoms.backgroundColor[backgroundColor]]:
        backgroundColor && theme.atoms.backgroundColor[backgroundColor],
      [theme.atoms.borderColor[borderColor]]:
        borderColor && theme.atoms.borderColor[borderColor],
      [theme.atoms.borderWidth[borderWidth]]:
        borderWidth && theme.atoms.borderWidth[borderWidth],
      [theme.atoms.borderRadius[borderRadius]]:
        borderRadius && theme.atoms.borderRadius[borderRadius],
      [theme.atoms.marginTop[marginTop]]:
        marginTop && theme.atoms.marginTop[marginTop],
      [theme.atoms.marginRight[marginRight]]:
        marginRight && theme.atoms.marginRight[marginRight],
      [theme.atoms.marginBottom[marginBottom]]:
        marginBottom && theme.atoms.marginBottom[marginBottom],
      [theme.atoms.marginLeft[marginLeft]]:
        marginLeft && theme.atoms.marginLeft[marginLeft],
      [theme.atoms.paddingTop[paddingTop]]:
        paddingTop && theme.atoms.paddingTop[paddingTop],
      [theme.atoms.paddingRight[paddingRight]]:
        paddingRight && theme.atoms.paddingRight[paddingRight],
      [theme.atoms.paddingBottom[paddingBottom]]:
        paddingBottom && theme.atoms.paddingBottom[paddingBottom],
      [theme.atoms.paddingLeft[paddingLeft]]:
        paddingLeft && theme.atoms.paddingLeft[paddingLeft]
    })}
    {...props}
  />
);

Box.displayName = 'Box';

export default withTheme(Box);
