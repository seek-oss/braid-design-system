import React, { ReactNode } from 'react';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { InfoIcon } from '../icons/InfoIcon/InfoIcon';
import { ErrorIcon } from '../icons/ErrorIcon/ErrorIcon';
import { TickCircleIcon } from '../icons/TickCircleIcon/TickCircleIcon';
import { Fill } from '../../themes/theme';
import styles from './Alert.css.js';

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

const iconForTone = (tone: Tone, color: Fill) => {
  if (tone === 'info') {
    return (
      <Box paddingRight="small">
        <InfoIcon fill={color} />
      </Box>
    );
  }

  if (tone === 'critical') {
    return (
      <Box paddingRight="small">
        <ErrorIcon fill={color} />
      </Box>
    );
  }

  if (tone === 'positive') {
    return (
      <Box paddingRight="small">
        <TickCircleIcon fill={color} />
      </Box>
    );
  }

  return null;
};

const textColorForTone = (tone: Tone, weight: AlertWeight) => {
  if (weight === 'regular') {
    if (tone === 'positive') {
      return 'positiveDark';
    }

    if (tone === 'critical') {
      return 'criticalDark';
    }

    if (tone === 'info') {
      return 'infoDark';
    }
  }

  if (weight === 'strong') {
    return 'white';
  }

  return tone;
};

export const Alert = ({
  tone = 'info',
  weight = 'regular',
  children,
}: AlertProps) => {
  const backgroundColor = backgroundColorForTone(tone, weight);
  const color = textColorForTone(tone, weight);
  const icon = iconForTone(tone, color);

  return (
    <Box
      backgroundColor={backgroundColor}
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
