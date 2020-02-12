import React from 'react';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import * as styleRefs from './Badge.treat';
import { useStyles } from 'sku/react-treat';

type Tone = 'info' | 'critical' | 'positive' | 'neutral' | 'promote';
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

  if (tone === 'promote') {
    return 'promoteLight';
  }

  if (tone === 'neutral') {
    return 'neutralLight';
  }
};

export const Badge = ({
  tone = 'info',
  weight = 'regular',
  children,
  id,
}: BadgeProps) => {
  const styles = useStyles(styleRefs);

  if (process.env.NODE_ENV !== 'production') {
    const invalidChildren = React.Children.toArray(children).some(
      child => !['string', 'number'].includes(typeof child),
    );

    if (invalidChildren) {
      throw new Error('Badge may only contain a `string`');
    }
  }

  return (
    <Box display="flex" className={styles.outer}>
      <Box
        id={id}
        title={children}
        background={backgroundForTone(tone, weight)}
        paddingX="xsmall"
        borderRadius="standard"
        overflow="hidden"
      >
        <Text
          component="span"
          weight="medium"
          size="xsmall"
          truncate
          baseline={false}
        >
          {children}
        </Text>
      </Box>
    </Box>
  );
};
