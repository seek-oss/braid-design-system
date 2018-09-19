import React from 'react';
import classnames from 'classnames';
import Box from '../../Box/Box';
import withTheme from '../../private/withTheme';

const Icon = ({
  className,
  theme,
  svgComponent,
  size = 'body',
  inline = false,
  fill,
  ...props
}) => {
  const type = theme.tokens.type[size];
  const height = inline ? type.size : type.rows * theme.tokens.rowHeight;

  return (
    <Box
      component={svgComponent}
      height={height}
      width={height}
      className={classnames({
        [className]: className,
        [theme.atoms.fill[fill]]: theme.atoms.fill[fill]
      })}
      {...props}
    />
  );
};

Icon.displayName = 'Icon';

export default withTheme(Icon);
