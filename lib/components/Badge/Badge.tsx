import React, { forwardRef, Children } from 'react';
import assert from 'assert';
import { Box, BoxProps } from '../Box/Box';
import { Text } from '../Text/Text';
import * as styleRefs from './Badge.treat';
import { useStyles } from 'sku/react-treat';
import buildDataAttributes, {
  DataAttributeMap,
} from '../private/buildDataAttributes';

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
  bleedY?: boolean;
  title?: string;
  children: string;
  id?: string;
  data?: DataAttributeMap;
  tabIndex?: BoxProps['tabIndex'];
  'aria-describedby'?: string;
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

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  (
    {
      tone = 'info',
      weight = 'regular',
      bleedY = false,
      title,
      children,
      id,
      data,
      tabIndex,
      'aria-describedby': ariaDescribedBy,
    },
    ref,
  ) => {
    const styles = useStyles(styleRefs);

    assert(
      validTones.indexOf(tone) >= 0,
      `Badge tone of "${tone}" is not valid.`,
    );

    assert(
      Children.toArray(children).every((child) =>
        ['string', 'number'].includes(typeof child),
      ),
      'Badge may only contain strings or numbers',
    );

    return (
      <Box
        display="flex"
        cursor="default"
        className={[styles.outer, bleedY ? styles.bleedY : null]}
        {...(data ? buildDataAttributes(data) : undefined)}
      >
        <Box
          id={id}
          ref={ref}
          tabIndex={tabIndex}
          aria-describedby={ariaDescribedBy}
          title={title ?? (!ariaDescribedBy ? children : undefined)}
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
  },
);

Badge.displayName = 'Badge';
