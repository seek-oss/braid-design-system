import assert from 'assert';
import type { ReactNode } from 'react';
import React from 'react';
import { optimizeResponsiveArray } from '../../utils/optimizeResponsiveArray';
import type { ResponsiveRangeProps } from '../../utils/resolveResponsiveRangeProps';
import { resolveResponsiveRangeProps } from '../../utils/resolveResponsiveRangeProps';
import type { BoxProps } from '../Box/Box';
import { Box } from '../Box/Box';
import type { DataAttributeMap } from '../private/buildDataAttributes';
import buildDataAttributes from '../private/buildDataAttributes';
import { Keyline } from '../private/Keyline/Keyline';

export const validCardComponents = [
  'div',
  'article',
  'aside',
  'details',
  'main',
  'section',
] as const;

type SimpleCardRounding = {
  rounded?: boolean;
  roundedAbove?: never;
};

type ResponsiveCardRounding = {
  rounded?: never;
  roundedAbove?: ResponsiveRangeProps['above'];
};

const borderRadius = 'large';

export type CardProps = {
  children: ReactNode;
  tone?: 'promote' | 'formAccent';
  component?: (typeof validCardComponents)[number];
  data?: DataAttributeMap;
} & (SimpleCardRounding | ResponsiveCardRounding);

export const Card = ({
  children,
  component = 'div',
  tone,
  data,
  ...restProps
}: CardProps) => {
  assert(
    validCardComponents.includes(component),
    `Invalid Card component: '${component}'. Should be one of [${validCardComponents
      .map((c) => `'${c}'`)
      .join(', ')}]`,
  );

  let resolvedRounding: BoxProps['borderRadius'];

  if ('rounded' in restProps) {
    resolvedRounding = borderRadius;
  } else if ('roundedAbove' in restProps) {
    const [roundedOnMobile, roundedOnTablet, roundedOnDesktop, roundedOnWide] =
      resolveResponsiveRangeProps({ above: restProps.roundedAbove });

    resolvedRounding = optimizeResponsiveArray([
      roundedOnMobile ? borderRadius : 'none',
      roundedOnTablet ? borderRadius : 'none',
      roundedOnDesktop ? borderRadius : 'none',
      roundedOnWide ? borderRadius : 'none',
    ]);
  }

  return (
    <Box
      component={component}
      position="relative"
      background="surface"
      padding="gutter"
      borderRadius={resolvedRounding}
      {...buildDataAttributes({ data, validateRestProps: restProps })}
    >
      {tone ? <Keyline tone={tone} borderRadius={resolvedRounding} /> : null}
      {children}
    </Box>
  );
};
