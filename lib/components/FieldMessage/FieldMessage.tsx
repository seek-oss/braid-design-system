import React, { Component, ReactNode } from 'react';
import classnames from 'classnames';
import ThemeConsumer from '../ThemeConsumer/ThemeConsumer';
import Box from '../Box/Box';
import Text, { TextProps } from '../Text/Text';
import ErrorIcon from '../icons/ErrorIcon/ErrorIcon';
import TickCircleIcon from '../icons/TickCircleIcon/TickCircleIcon';
import styles from './FieldMessage.css.js';

type FieldTone = 'neutral' | 'critical' | 'positive';

export interface FieldMessageProps extends TextProps {
  id: string;
  message: ReactNode | false;
  tone?: FieldTone;
  secondaryMessage?: ReactNode;
}

const renderIcon = (tone: FieldTone = 'neutral') => {
  if (tone === 'neutral') {
    return null;
  }

  const Icon: Record<FieldTone, ReactNode> = {
    neutral: null,
    critical: <ErrorIcon fill="critical" />,
    positive: <TickCircleIcon fill="positive" />,
  };

  return (
    <Box paddingRight="xsmall" className={styles.fixedSize}>
      {Icon[tone]}
    </Box>
  );
};

export default class FieldMessage extends Component<FieldMessageProps> {
  static displayName = 'FieldMessage';

  render() {
    const { id, tone = 'neutral', message, secondaryMessage } = this.props;

    return message === false ? null : (
      <ThemeConsumer>
        {({ atoms }) => (
          <Box
            id={id}
            paddingBottom="small"
            display="flex"
            className={styles.root}
          >
            <Box
              className={classnames(styles.grow, atoms.minHeight.standardText)}
            >
              <Text color={tone}>
                <Box display="flex">
                  {renderIcon(tone)}
                  {message}
                </Box>
              </Text>
            </Box>
            {secondaryMessage ? (
              <Box paddingLeft="xsmall" className={styles.fixedSize}>
                {secondaryMessage}
              </Box>
            ) : null}
          </Box>
        )}
      </ThemeConsumer>
    );
  }
}
