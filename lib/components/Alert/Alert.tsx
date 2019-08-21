import React, { ReactNode } from 'react';
import { useStyles } from 'sku/react-treat';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { InfoIcon } from '../icons/InfoIcon/InfoIcon';
import { ErrorIcon } from '../icons/ErrorIcon/ErrorIcon';
import { TickCircleIcon } from '../icons/TickCircleIcon/TickCircleIcon';
import * as styleRefs from './Alert.treat';

type Tone = 'info' | 'critical' | 'positive';
type AlertWeight = 'strong' | 'regular';

export interface AlertProps {
  tone?: Tone;
  weight?: AlertWeight;
  children: ReactNode;
  id?: string;
}

const backgroundForTone = (tone: Tone, weight: AlertWeight) => {
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
  id,
}: AlertProps) => {
  const styles = useStyles(styleRefs);
  const background = backgroundForTone(tone, weight);
  const Icon = icons[tone];

  return (
    <Box
      id={id}
      background={background}
      paddingX="gutter"
      paddingY="medium"
      display="flex"
    >
      {Icon ? (
        <Box paddingRight="small" className={styles.icon}>
          <Icon />
        </Box>
      ) : null}
      <Text baseline={false}>{children}</Text>
    </Box>
  );
};
