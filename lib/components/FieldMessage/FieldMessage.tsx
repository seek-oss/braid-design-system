import React, { ReactNode } from 'react';
import { useClassNames } from 'sku/treat';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { ErrorIcon } from '../icons/ErrorIcon/ErrorIcon';
import { TickCircleIcon } from '../icons/TickCircleIcon/TickCircleIcon';
import * as styles from './FieldMessage.treat';

type FieldTone = 'neutral' | 'critical' | 'positive';

export interface FieldMessageProps {
  id: string;
  message: ReactNode;
  reserveMessageSpace?: boolean;
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
    critical: <ErrorIcon fill="critical" size="small" inline />,
    positive: <TickCircleIcon fill="positive" size="small" inline />,
  };

  return (
    <Box paddingRight="xxsmall" className={useClassNames(styles.fixedSize)}>
      {Icon[tone]}
    </Box>
  );
};

export const FieldMessage = ({
  id,
  tone = 'neutral',
  message,
  secondaryMessage,
  reserveMessageSpace = true,
  disabled = false,
}: FieldMessageProps) => {
  if (!message && !reserveMessageSpace) {
    return null;
  }

  return (
    <Box
      id={id}
      display="flex"
      className={useClassNames(styles.root, styles.minHeight)}
    >
      <Box className={useClassNames(styles.grow)}>
        {disabled ? null : (
          <Text size="small" color={tone}>
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
