import type { FC, ReactNode } from 'react';

import { Box } from '../Box/Box';
import { type TextProps, Text } from '../Text/Text';
import { IconCaution, IconCritical, IconPositive } from '../icons';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';

export const tones = ['neutral', 'critical', 'positive', 'caution'] as const;
type FieldTone = (typeof tones)[number];

export interface FieldMessageProps {
  id: string;
  message: ReactNode;
  reserveMessageSpace?: boolean;
  tone?: FieldTone;
  secondaryMessage?: ReactNode;
  disabled?: boolean;
  data?: DataAttributeMap;
}

const icon: Record<'critical' | 'positive' | 'caution', TextProps['icon']> = {
  critical: <IconCritical tone="critical" />,
  positive: <IconPositive tone="positive" />,
  caution: <IconCaution tone="caution" />,
};
export const FieldMessage: FC<FieldMessageProps> = ({
  id,
  tone = 'neutral',
  message,
  secondaryMessage,
  reserveMessageSpace = true,
  disabled,
  data,
  ...restProps
}) => {
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
      textAlign="left"
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
