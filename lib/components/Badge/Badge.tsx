import React from 'react';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import * as styleRefs from './Badge.treat';
import { useStyles } from 'sku/treat';

type Tone = 'info' | 'critical' | 'positive' | 'secondary';
type BadgeWeight = 'strong' | 'regular';
export interface BadgeProps {
  tone?: Tone;
  weight?: BadgeWeight;
  children: string;
  id?: string;
}

const backgroundForTone = (tone: Tone, weight: BadgeWeight) => {
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

  if (tone === 'secondary') {
    return 'secondaryLight';
  }
};

export const Badge = ({
  tone = 'info',
  weight = 'regular',
  children,
  id,
}: BadgeProps) => {
  const styles = useStyles(styleRefs);

  if (typeof children !== 'string') {
    throw new Error('Badge may only contain a `string`');
  }

  return (
    <Box className={styles.outer}>
      <Box
        id={id}
        display="inlineBlock"
        background={backgroundForTone(tone, weight)}
        paddingX="xsmall"
        borderRadius="standard"
        className={styles.inner}
      >
        <Text component="span" weight="medium" size="xsmall" baseline={false}>
          {children}
        </Text>
      </Box>
    </Box>
  );
};
