import React from 'react';
import withTheme from '../../private/withTheme';

export default withTheme(
  ({ theme, svgComponent: SvgComponent, size = 'standard', ...props }) => {
    const type = theme.tokens.type[size];

    return <SvgComponent width={type.size} height={type.size} {...props} />;
  }
);
