import assert from 'assert';
import React, { ReactNode } from 'react';
import { useStyles } from 'sku/react-treat';
import {
  resolveResponsiveRangeProps,
  ResponsiveRangeProps,
} from '../../utils/responsiveRangeProps';
import { Box, BoxProps } from '../Box/Box';
import buildDataAttributes, {
  DataAttributeMap,
} from '../private/buildDataAttributes';
import * as styleRefs from './Card.treat';

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
  const styles = useStyles(styleRefs);

  assert(
    validCardComponents.includes(component),
    `Invalid Card component: '${component}'. Should be one of [${validCardComponents
      .map((c) => `'${c}'`)
      .join(', ')}]`,
  );

  let resolvedRounding: BoxProps['borderRadius'];

  if ('rounded' in restProps) {
    resolvedRounding = 'standard';
  } else if ('roundedAbove' in restProps) {
    const [
      roundedOnMobile,
      roundedOnTablet,
      roundedOnDesktop,
    ] = resolveResponsiveRangeProps({ above: restProps.roundedAbove });

    resolvedRounding = [
      roundedOnMobile ? 'standard' : 'none',
      roundedOnTablet ? 'standard' : 'none',
      roundedOnDesktop ? 'standard' : 'none',
    ];
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
