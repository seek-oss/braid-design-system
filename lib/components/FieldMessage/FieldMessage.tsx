import React, { ReactNode } from 'react';
import { useClassNames } from 'sku/treat';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { ErrorIcon } from '../icons/ErrorIcon/ErrorIcon';
import { TickCircleIcon } from '../icons/TickCircleIcon/TickCircleIcon';
import * as styles from './FieldMessage.treat';
import { useThemeName } from '../ThemeNameConsumer/ThemeNameContext';

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

  // Temporary switch to support maintaining a consistent UX
  // while consumers migrate forms from seek-style-guide.
  // Can be removed once we have form field parity and have
  // given consumers the opportunity to migrate.
  const isSeekAu = useThemeName() === 'seekAnz';

  return (
    <Box
      id={id}
      paddingBottom={isSeekAu ? 'xxsmall' : 'xsmall'}
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
