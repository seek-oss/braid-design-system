import assert from 'assert';
import React, { ReactNode } from 'react';
import { useStyles } from 'sku/react-treat';
import { Box, BoxProps } from '../Box/Box';
import { Overlay } from '../private/Overlay/Overlay';

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
  tone?: 'info' | 'promote';
  clickable?: boolean;
  onClick?: BoxProps['onClick'];
  component?: typeof validCardComponents[number];
}

const BasicCard = ({ children, component, tone }: CardProps) => {
  const styles = useStyles(styleRefs);

  return (
    <Box
      component={component}
      position={tone ? 'relative' : undefined} // Thoughts on this?
      background="card"
      padding="gutter"
      borderRadius="standard"
      boxShadow="small"
    >
      {tone ? (
        <Box
          position="absolute"
          top={0}
          bottom={0}
          left={0}
          paddingLeft="xxsmall"
          borderRadius="standard"
          background={tone}
          className={styles.toneKeyline}
        />
      ) : null}
      {children}
    </Box>
  );
};

export const Card = ({
  children,
  onClick,
  component = 'div',
  clickable,
  tone,
}: CardProps) => {
  const styles = useStyles(styleRefs);

  assert(
    validCardComponents.includes(component),
    `Invalid Card component: '${component}'. Should be one of [${validCardComponents
      .map((c) => `'${c}'`)
      .join(', ')}]`,
  );

  return clickable ? (
    <Box
      component={component}
      position="relative"
      cursor="pointer"
      className={styles.root}
      tabIndex={0}
      onClick={onClick}
    >
      <Box transition="fast" className={styles.content}>
        <Overlay
          boxShadow="outlineFocus"
          borderRadius="standard"
          transition="fast"
          onlyVisibleForKeyboardNavigation
          className={styles.focusOverlay}
        />
        <Overlay
          boxShadow="medium"
          borderRadius="standard"
          transition="fast"
          className={styles.hoverOverlay}
        />
        <BasicCard tone={tone}>{children}</BasicCard>
      </Box>
    </Box>
  ) : (
    <BasicCard component={component} tone={tone}>
      {children}
    </BasicCard>
  );
};
