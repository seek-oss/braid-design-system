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
import * as styles from './Card.css';

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

const borderRadius = 'xlarge';

export type CardProps = {
  children: ReactNode;
  tone?: 'promote' | 'formAccent';
  component?: typeof validCardComponents[number];
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
      background="card"
      padding="gutter"
      borderRadius={resolvedRounding}
      {...(data ? buildDataAttributes(data) : undefined)}
    >
      {tone ? (
        <Box
          position="absolute"
          top={0}
          bottom={0}
          left={0}
          paddingLeft="xxsmall"
          borderRadius={resolvedRounding}
          background={tone}
          className={styles.toneKeyline}
        />
      ) : null}
      {children}
    </Box>
  );
};
