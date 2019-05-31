import React, { ReactNode } from 'react';
import { useClassNames } from 'sku/treat';
import { Box } from '../Box/Box';
import { Text, TextProps } from '../Text/Text';
import { ErrorIcon } from '../icons/ErrorIcon/ErrorIcon';
import { TickCircleIcon } from '../icons/TickCircleIcon/TickCircleIcon';
import * as styles from './FieldMessage.treat';

type FieldTone = 'neutral' | 'critical' | 'positive';

export interface FieldMessageProps extends TextProps {
  id: string;
  message: ReactNode | false;
  tone?: FieldTone;
  secondaryMessage?: ReactNode;
  disabled?: boolean;
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
    <Box paddingRight="xsmall" className={useClassNames(styles.fixedSize)}>
      {Icon[tone]}
    </Box>
  );
};

export const FieldMessage = ({
  id,
  tone = 'neutral',
  message,
  secondaryMessage,
  disabled = false,
}: FieldMessageProps) => {
  if (message === false) {
    return null;
  }

  return (
    <Box
      id={id}
      paddingBottom="small"
      display="flex"
      className={useClassNames(styles.root)}
    >
      <Box className={useClassNames(styles.minHeight, styles.grow)}>
        {disabled ? null : (
          <Text color={tone}>
            <Box display="flex">
              {renderIcon(tone)}
              {message}
            </Box>
          </Text>
        )}
      </Box>
      {secondaryMessage && !disabled ? (
        <Box paddingLeft="xsmall" className={useClassNames(styles.fixedSize)}>
          {secondaryMessage}
        </Box>
      ) : null}
    </Box>
  );
};
