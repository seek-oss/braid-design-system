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
  radius?: BoxProps['borderRadius'];
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
