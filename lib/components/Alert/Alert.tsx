import React, { ReactNode } from 'react';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { InfoIcon } from '../icons/InfoIcon/InfoIcon';
import { ErrorIcon } from '../icons/ErrorIcon/ErrorIcon';
import { TickCircleIcon } from '../icons/TickCircleIcon/TickCircleIcon';
import styles from './Alert.css.js';

type Tone = 'info' | 'critical' | 'positive';
type AlertWeight = 'strong' | 'regular' | 'weak';
type Fill = Tone | 'white';

export interface AlertProps {
  tone?: Tone;
  weight?: AlertWeight;
  children: ReactNode;
}

const backgroundColorForTone = (tone: Tone, weight: AlertWeight) => {
  if (weight === 'strong') {
    return tone;
  }

  if (weight === 'weak') {
    return undefined;
  }

  if (weight === 'regular') {
    if (tone === 'positive') {
      return 'positiveLight';
    }

    if (tone === 'critical') {
      return 'criticalLight';
    }

    if (tone === 'info') {
      return 'infoLight';
    }
  }
};

const iconForTone = (tone: Tone, weight: AlertWeight) => {
  let fill: Fill = weight === 'strong' ? 'white' : tone;

  if (tone === 'info') {
    return (
      <Box paddingRight="small">
        <InfoIcon fill={fill} />
      </Box>
    );
  }

  if (tone === 'critical') {
    return (
      <Box paddingRight="small">
        <ErrorIcon fill={fill} />
      </Box>
    );
  }

  if (tone === 'positive') {
    return (
      <Box paddingRight="small">
        <TickCircleIcon fill={fill} />
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
  const icon = iconForTone(tone, weight);

  return (
    <Box
      backgroundColor={backgroundColor}
      paddingLeft={weight === 'weak' ? 'none' : 'gutter'}
      paddingRight={weight === 'weak' ? 'none' : 'gutter'}
      paddingTop={weight === 'weak' ? 'none' : 'medium'}
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
