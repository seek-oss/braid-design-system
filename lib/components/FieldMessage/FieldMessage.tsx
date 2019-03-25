import React, { ReactNode } from 'react';
import { Box } from '../Box/Box';
import { Text, TextProps } from '../Text/Text';
import { ErrorIcon } from '../icons/ErrorIcon/ErrorIcon';
import { TickCircleIcon } from '../icons/TickCircleIcon/TickCircleIcon';
import styles from './FieldMessage.css.js';
import { FieldTone } from '../../themes/theme';

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

export const FieldMessage = ({
  id,
  tone = 'neutral',
  message,
  secondaryMessage,
}: FieldMessageProps) => {
  if (message === false) {
    return null;
  }

  return (
    <Box id={id} paddingBottom="small" display="flex" className={styles.root}>
      <Box minHeight="standardText" className={styles.grow}>
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
  );
};
