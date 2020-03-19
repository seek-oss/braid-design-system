import * as React from 'react';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import * as styleRefs from './Badge.treat';
import { useStyles } from 'sku/react-treat';

const validTones = [
  'promote',
  'info',
  'neutral',
  'positive',
  'caution',
  'critical',
] as const;
type Tone = typeof validTones[number];
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

  if (tone === 'caution') {
    return 'cautionLight';
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
      throw new Error('Badge may only contain strings or numbers');
    }

    if (validTones.indexOf(tone) < 0) {
      throw new Error(`Badge tone of "${tone}" is not valid.`);
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
          tone={weight === 'regular' ? tone : undefined}
          truncate
          baseline={false}
        >
          {children}
        </Text>
      </Box>
    </Box>
  );
};
