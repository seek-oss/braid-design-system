import React, { Component, ReactType, AllHTMLAttributes } from 'react';
import classnames from 'classnames';
import ThemeConsumer from '../ThemeConsumer/ThemeConsumer';
import { ResetTags } from '../../themes/theme';

export interface ResetProps extends AllHTMLAttributes<HTMLElement> {
  component?: ReactType;
}

const isResetTag = (
  atom: Record<ResetTags, string>,
  component: ResetTags | ReactType,
): component is ResetTags =>
  typeof component === 'string' && Object.keys(atom).indexOf(component) > -1;

export default class Reset extends Component<ResetProps> {
  static displayName = 'Reset';

  render() {
    return (
      <ThemeConsumer>
        {theme => {
          const {
            component = 'div',
            className = '',
            ...restProps
          } = this.props;

          const resetClass = isResetTag(theme.atoms.reset, component)
            ? theme.atoms.reset[component]
            : '';

          return React.createElement(component, {
            className: classnames(className, resetClass),
            ...restProps,
          });
        }}
      </ThemeConsumer>
    );
  }
}
