import React, { forwardRef, Children } from 'react';
import assert from 'assert';
import type { BoxProps } from '../Box/Box';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import type { DataAttributeMap } from '../private/buildDataAttributes';
import buildDataAttributes from '../private/buildDataAttributes';
import { Bleed } from '../Bleed/Bleed';

const validTones = [
  'promote',
  'info',
  'neutral',
  'positive',
  'caution',
  'critical',
] as const;
type Tone = (typeof validTones)[number];
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

const lightModeBackgroundForTone = {
  positive: 'positiveLight',
  critical: 'criticalLight',
  info: 'infoLight',
  promote: 'promoteLight',
  neutral: 'neutralLight',
  caution: 'cautionLight',
} as const;

const verticalPadding = 'xxsmall';

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
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
      ...restProps
    },
    ref,
  ) => {
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

    const content = (
      <Box
        component="span"
        display="flex"
        cursor="default"
        {...buildDataAttributes({ data, validateRestProps: restProps })}
      >
        <Box
          component="span"
          id={id}
          ref={ref}
          tabIndex={tabIndex}
          aria-describedby={ariaDescribedBy}
          title={title ?? (!ariaDescribedBy ? children : undefined)}
          background={
            weight === 'strong' ? tone : lightModeBackgroundForTone[tone]
          }
          paddingY={verticalPadding}
          paddingX="xsmall"
          borderRadius="standard"
          overflow="hidden"
        >
          <Text size="xsmall" weight="medium" truncate>
            {children}
          </Text>
        </Box>
      </Box>
    );

    return bleedY ? (
      <Bleed component="span" vertical={verticalPadding}>
        {content}
      </Bleed>
    ) : (
      content
    );
  },
);

Badge.displayName = 'Badge';
// @ts-expect-error
Badge.__isBadge__ = true;
