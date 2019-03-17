import React, { ReactNode } from 'react';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { InfoIcon } from '../icons/InfoIcon/InfoIcon';
import { ErrorIcon } from '../icons/ErrorIcon/ErrorIcon';
import styles from './Alert.css.js';

type Tone = 'info' | 'critical';

export interface AlertProps {
  tone?: Tone;
  children: ReactNode;
}

const iconForTone = (tone: Tone) => {
  if (tone === 'info') {
    return (
      <Box paddingRight="small">
        <InfoIcon fill="white" />
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

  return null;
};

const textColorForTone = (tone: Tone) => {
  if (tone === 'info') {
    return 'white';
  }

  if (tone === 'critical') {
    return 'critical';
  }

  return 'neutral';
};

export const Alert = ({ tone = 'info', children }: AlertProps) => {
  const icon = iconForTone(tone);
  const color = textColorForTone(tone);

  return (
    <Box
      backgroundColor={tone}
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
