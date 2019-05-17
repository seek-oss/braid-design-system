import React, { ReactNode } from 'react';
import { useClassNames } from 'sku/treat';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { InfoIcon } from '../icons/InfoIcon/InfoIcon';
import { ErrorIcon } from '../icons/ErrorIcon/ErrorIcon';
import { TickCircleIcon } from '../icons/TickCircleIcon/TickCircleIcon';
import * as styles from './Alert.treat';

type Tone = 'info' | 'critical' | 'positive';
type AlertWeight = 'strong' | 'regular';

export interface AlertProps {
  tone?: Tone;
  weight?: AlertWeight;
  children: ReactNode;
}

const backgroundColorForTone = (tone: Tone, weight: AlertWeight) => {
  if (weight === 'strong') {
    return tone;
  }

  if (tone === 'positive') {
    return 'positiveLight';
  }

  if (tone === 'critical') {
    return 'criticalLight';
  }

  if (tone === 'info') {
    return 'infoLight';
  }
};

const icons = {
  info: InfoIcon,
  critical: ErrorIcon,
  positive: TickCircleIcon,
};

export const Alert = ({
  tone = 'info',
  weight = 'regular',
  children,
}: AlertProps) => {
  const backgroundColor = backgroundColorForTone(tone, weight);
  const color = weight === 'strong' ? 'white' : tone;
  const Icon = icons[tone];

  return (
    <Box
      backgroundColor={backgroundColor}
      paddingLeft="gutter"
      paddingRight="gutter"
      paddingTop="medium"
      paddingBottom="medium"
      display="flex"
    >
      {Icon ? (
        <Box
          paddingRight="small"
          display="flex"
          className={useClassNames(styles.icon)}
        >
          <Icon fill={color} />
        </Box>
      ) : null}
      <Text color={color} baseline={false}>
        {children}
      </Text>
    </Box>
  );
};
