import React, { ReactNode } from 'react';
import { useStyles } from 'sku/react-treat';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { IconInfo, IconCritical, IconPositive, IconPromote } from '../icons';
import * as styleRefs from './Alert.treat';

type Tone = 'info' | 'critical' | 'positive' | 'promote';
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

  if (tone === 'promote') {
    return 'promoteLight';
  }
};

const icons = {
  info: IconInfo,
  critical: IconCritical,
  positive: IconPositive,
  promote: IconPromote,
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
        <Box paddingRight="small" flexShrink={0} className={styles.icon}>
          <Icon />
        </Box>
      ) : null}
      <Text baseline={false}>{children}</Text>
    </Box>
  );
};
