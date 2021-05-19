import React, { ReactNode } from 'react';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { IconCritical, IconPositive } from '../icons';
import buildDataAttributes, {
  DataAttributeMap,
} from '../private/buildDataAttributes';

export const tones = ['neutral', 'critical', 'positive'] as const;
type FieldTone = typeof tones[number];

export interface FieldMessageProps {
  id: string;
  message: ReactNode;
  reserveMessageSpace?: boolean;
  tone?: FieldTone;
  secondaryMessage?: ReactNode;
  disabled?: boolean;
  data?: DataAttributeMap;
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
  data,
}: FieldMessageProps) => {
  if (tones.indexOf(tone) === -1) {
    throw new Error(`Invalid tone: ${tone}`);
  }

  if (!message && !secondaryMessage && !reserveMessageSpace) {
    return null;
  }

  const showMessage = !disabled && message;

  return (
    <Box
      id={id}
      display="flex"
      justifyContent="flexEnd"
      {...(data ? buildDataAttributes(data) : undefined)}
    >
      <Box flexGrow={1}>
        <Text size="small" tone={tone === 'neutral' ? 'secondary' : tone}>
          <Box display="flex" userSelect={showMessage ? undefined : 'none'}>
            {showMessage && tone !== 'neutral' ? (
              <Box paddingRight="xxsmall" flexShrink={0} flexGrow={0}>
                {Icon[tone]}
              </Box>
            ) : null}
            {showMessage ? message : '\u00A0'}
          </Box>
        </Text>
      </Box>
      {secondaryMessage && !disabled ? (
        <Box paddingLeft="xsmall" flexGrow={0}>
          {secondaryMessage}
        </Box>
      ) : null}
    </Box>
  );
};
