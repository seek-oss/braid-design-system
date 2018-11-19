import React, { Component } from 'react';
import classnames from 'classnames';
import withTheme, { WithThemeProps } from '../private/withTheme';

interface Props extends WithThemeProps {
  className?: string;
}

export default withTheme(
  class Strong extends Component<Props> {
    static displayName = 'Strong';

    render() {
      const { theme, className = '', ...restProps } = this.props;

      return (
        <strong
          {...restProps}
          className={classnames(className, theme.atoms.fontWeight.strong)}
        />
      );
    }
  }
);
