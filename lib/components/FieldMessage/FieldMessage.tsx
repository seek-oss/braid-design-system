import React, { Component, ReactNode } from 'react';
import classnames from 'classnames';
import ThemeConsumer from '../ThemeConsumer/ThemeConsumer';
import { Theme } from '../../themes/theme';
import Text, { TextProps } from '../Text/Text';
import ErrorIcon from '../icons/ErrorIcon/ErrorIcon';
import TickCircleIcon from '../icons/TickCircleIcon/TickCircleIcon';
import styles from './FieldMessage.css.js';

export interface FieldMessageProps extends TextProps {
  tone?: 'neutral' | 'critical' | 'positive';
  message: ReactNode | false;
}

const renderIcon = (theme: Theme, tone: FieldMessageProps['tone']) => {
  if (tone === 'critical') {
    return (
      <ErrorIcon
        fill="critical"
        className={classnames(styles.icon, theme.atoms.marginRight.xsmall)}
      />
    );
  }

  if (tone === 'positive') {
    return (
      <TickCircleIcon
        fill="positive"
        className={classnames(styles.icon, theme.atoms.marginRight.xsmall)}
      />
    );
  }

  return null;
};

export default class FieldMessage extends Component<FieldMessageProps> {
  static displayName = 'FieldMessage';

  render() {
    const { tone = 'neutral', message, ...restProps } = this.props;

    return message === false ? null : (
      <ThemeConsumer>
        {theme => (
          <Text paddingBottom="small" color={tone} tabIndex={-1} {...restProps}>
            <div className={styles.content}>
              {/* This element acts as a min-height, preserving vertical space for the message: */}
              <div className={theme.atoms.height.standardText} />
              {renderIcon(theme, tone)}
              <div>{message}</div>
            </div>
          </Text>
        )}
      </ThemeConsumer>
    );
  }
}
