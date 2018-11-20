import React, { Component, ReactType } from 'react';
import classnames from 'classnames';
import withTheme, { WithThemeProps } from '../private/withTheme';
import { ResetTags, Theme } from '../../themes/theme';

export interface Props extends WithThemeProps {
  component?: ReactType;
  className?: string;
}

const isResettable = (
  theme: Theme,
  component: ReactType
): component is ResetTags =>
  typeof component === 'string' &&
  Object.keys(theme.atoms.reset).indexOf(component) > -1;

export default withTheme(
  class Reset extends Component<Props> {
    static displayName = 'Reset';

    static defaultProps = {
      component: 'div'
    };

    render() {
      const {
        theme,
        component = 'div',
        className = '',
        ...restProps
      } = this.props;

      const resetClass = isResettable(theme, component)
        ? theme.atoms.reset[component]
        : '';

      return React.createElement(component, {
        className: classnames(className, resetClass),
        ...restProps
      });
    }
  }
);
