import React, { ReactNode } from 'react';
import { useStyles } from 'sku/react-treat';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { IconCritical, IconPositive } from '../icons';
import * as styleRefs from './FieldMessage.treat';

const tones = ['neutral', 'critical', 'positive'] as const;
type FieldTone = typeof tones[number];

export interface FieldMessageProps {
  id: string;
  message: ReactNode;
  reserveMessageSpace?: boolean;
  tone?: FieldTone;
  secondaryMessage?: ReactNode;
  disabled?: boolean;
}

const Icon: Record<'critical' | 'positive', ReactNode> = {
  critical: <IconCritical tone="critical" />,
  positive: <IconPositive tone="positive" />,
};
export const FieldMessage = ({
  id,
  tone = 'neutral',
  message,
  secondaryMessage,
  reserveMessageSpace = true,
  disabled,
}: FieldMessageProps) => {
  const styles = useStyles(styleRefs);

  if (tones.indexOf(tone) === -1) {
    throw new Error(`Invalid tone: ${tone}`);
  }

  if (!message && !reserveMessageSpace) {
    return null;
  }

  const showMessage = !disabled && message;

  return (
    <Box id={id} display="flex" justifyContent="flexEnd">
      <Box className={styles.grow}>
        <Text size="small" tone={tone === 'neutral' ? 'secondary' : tone}>
          <Box
            display="flex"
            className={showMessage ? undefined : styles.noSelect}
          >
            {showMessage && tone !== 'neutral' ? (
              <Box paddingRight="xxsmall" className={styles.fixedSize}>
                {Icon[tone]}
              </Box>
            ) : null}
            {showMessage ? message : '\u00A0'}
          </Box>
        </Text>
      </Box>
      {secondaryMessage && !disabled ? (
        <Box paddingLeft="xsmall" className={styles.fixedSize}>
          {secondaryMessage}
        </Box>
      ) : null}
    </Box>
  );
};
