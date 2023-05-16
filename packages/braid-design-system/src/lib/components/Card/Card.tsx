import assert from 'assert';
import React, { type ReactNode } from 'react';
import { optimizeResponsiveArray } from '../../utils/optimizeResponsiveArray';
import {
  type ResponsiveRangeProps,
  resolveResponsiveRangeProps,
} from '../../utils/resolveResponsiveRangeProps';
import { type BoxProps, Box } from '../Box/Box';
import { useBraidTheme } from '../BraidProvider/BraidThemeContext';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';
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
  height?: Extract<BoxProps['height'], 'full'> | 'content';
  data?: DataAttributeMap;
} & (SimpleCardRounding | ResponsiveCardRounding);

export const Card = ({
  children,
  component = 'div',
  tone,
  data,
  height,
  ...restProps
}: CardProps) => {
  assert(
    validCardComponents.includes(component),
    `Invalid Card component: '${component}'. Should be one of [${validCardComponents
      .map((c) => `'${c}'`)
      .join(', ')}]`,
  );
  const isLegacyTheme = useBraidTheme().legacy;

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

  const roundingForTheme = !isLegacyTheme ? borderRadius : resolvedRounding;

  return (
    <Box
      component={component}
      position="relative"
      background="surface"
      padding="gutter"
      borderRadius={roundingForTheme}
      boxShadow={!isLegacyTheme ? 'borderNeutralLight' : undefined}
      height={height === 'full' ? height : undefined}
      {...buildDataAttributes({ data, validateRestProps: restProps })}
    >
      {tone ? <Keyline tone={tone} borderRadius={roundingForTheme} /> : null}
      {children}
    </Box>
  );
};
