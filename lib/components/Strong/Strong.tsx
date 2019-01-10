import React, { Component, AllHTMLAttributes } from 'react';
import classnames from 'classnames';
import ThemeConsumer from '../ThemeConsumer/ThemeConsumer';

export type StrongProps = AllHTMLAttributes<HTMLElement>;

export default class Strong extends Component<StrongProps> {
  static displayName = 'Strong';

  render() {
    return (
      <ThemeConsumer>
        {theme => {
          const { className, ...restProps } = this.props;

          return (
            <strong
              {...restProps}
              className={classnames(className, theme.atoms.fontWeight.strong)}
            />
          );
        }}
      </ThemeConsumer>
    );
  }
}
