import React, { Component, ReactNode, ReactType } from 'react';
import classnames from 'classnames';
import withTheme, { WithThemeProps } from '../private/withTheme';
import PropTypes from 'prop-types';
import styles from './Button.css.js.js';
import { ColorVariants } from '../../themes/theme';

export interface Props extends WithThemeProps {
  color?: ColorVariants;
  className?: string;
  children: ReactNode;
}

export default withTheme(
  class Button extends Component<Props> {
    static displayName = 'Button';

    render() {
      const { theme, color, className, children } = this.props;

      return (
        <button
          className={classnames(
            className,
            theme.atoms.backgroundColor.inputDisabled
          )}
        >
          {children}
        </button>
      );
    }
  }
);
