import React, { Component, ReactNode } from 'react';
import ThemeConsumer from '../ThemeConsumer/ThemeConsumer';
import Box from '../Box/Box';
import Text, { TextProps } from '../Text/Text';
import ErrorIcon from '../icons/ErrorIcon/ErrorIcon';
import TickCircleIcon from '../icons/TickCircleIcon/TickCircleIcon';
import styles from './FieldMessage.css.js';

export interface FieldMessageProps extends TextProps {
  id?: string;
  tone?: 'neutral' | 'critical' | 'positive';
  message: ReactNode | false;
}

const renderIcon = (tone: FieldMessageProps['tone']) => {
  if (tone === 'critical') {
    return (
      <Box paddingRight="xsmall" className={styles.icon}>
        <ErrorIcon fill="critical" />
      </Box>
    );
  }

  if (tone === 'positive') {
    return (
      <Box paddingRight="xsmall" className={styles.icon}>
        <TickCircleIcon fill="positive" />
      </Box>
    );
  }

  return null;
};

export default class FieldMessage extends Component<FieldMessageProps> {
  static displayName = 'FieldMessage';

  render() {
    const { id, tone = 'neutral', message } = this.props;

    return message === false ? null : (
      <ThemeConsumer>
        {theme => (
          <Box id={id} paddingBottom="small" tabIndex={-1}>
            <Text color={tone}>
              <div className={styles.content}>
                {/* This element acts as a min-height, preserving vertical space for the message: */}
                <div className={theme.atoms.height.standardText} />
                {renderIcon(tone)}
                <div>{message}</div>
              </div>
            </Text>
          </Box>
        )}
      </ThemeConsumer>
    );
  }
}
