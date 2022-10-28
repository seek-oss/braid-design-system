import type { ReactNode } from 'react';
import React from 'react';
import { Box } from '../Box/Box';
import type { TextProps } from '../Text/Text';
import { Text } from '../Text/Text';
import { IconCritical, IconPositive } from '../icons';
import type { DataAttributeMap } from '../private/buildDataAttributes';
import buildDataAttributes from '../private/buildDataAttributes';

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

const icon: Record<'critical' | 'positive', TextProps['icon']> = {
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
  ...restProps
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
      {...buildDataAttributes({ data, validateRestProps: restProps })}
    >
      <Box flexGrow={1} userSelect={showMessage ? undefined : 'none'}>
        <Text
          size="small"
          tone={tone === 'neutral' ? 'secondary' : tone}
          icon={showMessage && tone !== 'neutral' ? icon[tone] : undefined}
        >
          {showMessage ? message : '\u00A0'}
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
