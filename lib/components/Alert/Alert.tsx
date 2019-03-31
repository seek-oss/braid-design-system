import React, { ReactNode } from 'react';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { InfoIcon } from '../icons/InfoIcon/InfoIcon';
import { ErrorIcon } from '../icons/ErrorIcon/ErrorIcon';
import { TickCircleIcon } from '../icons/TickCircleIcon/TickCircleIcon';
import styles from './Alert.css.js';

type Tone = 'info' | 'critical' | 'positive';
type AlertWeight = 'weak' | 'regular';

export interface AlertProps {
  tone?: Tone;
  weight?: AlertWeight;
  children: ReactNode;
}

const iconForTone = (tone: Tone, weight: AlertWeight) => {
  if (tone === 'info') {
    return (
      <Box paddingRight="small">
        <InfoIcon fill={weight === 'weak' ? 'info' : 'white'} />
      </Box>
    );
  }

  if (tone === 'critical') {
    return (
      <Box paddingRight="small">
        <ErrorIcon fill="critical" />
      </Box>
    );
  }

  if (tone === 'positive') {
    return (
      <Box paddingRight="small">
        <TickCircleIcon fill={weight === 'weak' ? 'positive' : 'white'} />
      </Box>
    );
  }

  return null;
};

const textColorForTone = (tone: Tone) => {
  if (tone === 'info' || tone === 'positive') {
    return 'white';
  }

  if (tone === 'critical') {
    return 'critical';
  }

  return 'neutral';
};

export const Alert = ({
  tone = 'info',
  weight = 'regular',
  children,
}: AlertProps) => {
  const icon = iconForTone(tone, weight);
  const color = weight === 'weak' ? 'neutral' : textColorForTone(tone);

  return (
    <Box
      backgroundColor={weight === 'weak' ? undefined : tone}
      paddingLeft="gutter"
      paddingRight="gutter"
      paddingTop="medium"
      paddingBottom="medium"
    >
      <div className={styles.root}>
        <div className={styles.icon}>{icon}</div>
        <Text color={color} baseline={false}>
          {children}
        </Text>
      </div>
    </Box>
  );
};
