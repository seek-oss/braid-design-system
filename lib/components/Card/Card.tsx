import assert from 'assert';
import React, { ReactNode } from 'react';
import { useStyles } from 'sku/react-treat';
import { Box, BoxProps } from '../Box/Box';
import * as styleRefs from './Card.treat';

export const validCardComponents = [
  'div',
  'article',
  'aside',
  'details',
  'main',
  'section',
] as const;

export interface CardProps {
  children: ReactNode;
  tone?: 'info' | 'promote' | 'formAccent';
  radius?: Exclude<BoxProps['borderRadius'], 'full'>;
  component?: typeof validCardComponents[number];
}

export const Card = ({
  children,
  component = 'div',
  radius,
  tone,
}: CardProps) => {
  const styles = useStyles(styleRefs);

  assert(
    validCardComponents.includes(component),
    `Invalid Card component: '${component}'. Should be one of [${validCardComponents
      .map((c) => `'${c}'`)
      .join(', ')}]`,
  );

  assert(
    // @ts-ignore typescript knows it can't be full, but this is preventing it being passed through in a javascript context.
    typeof radius === 'undefined' || radius !== 'full',
    'Full is not a supported `radius` on Card. See documentation https://seek-oss.github.io/braid-design-system/components/Card#radius',
  );

  return (
    <Box
      component={component}
      position={tone ? 'relative' : undefined} // Thoughts on this?
      background="card"
      padding="gutter"
      borderRadius={radius}
    >
      {tone ? (
        <Box
          position="absolute"
          top={0}
          bottom={0}
          left={0}
          paddingLeft="xxsmall"
          borderRadius={radius}
          background={tone}
          className={styles.toneKeyline}
        />
      ) : null}
      {children}
    </Box>
  );
};
