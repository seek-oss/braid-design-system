import clsx from 'clsx';
import React, { type ReactElement } from 'react';

import type { BoxShadow } from '../../css/atoms/atomicProperties';
import { type Atoms, atoms } from '../../css/atoms/atoms';

import { BackgroundProvider } from './BackgroundContext';
import type { BoxBaseProps, SimpleBackground } from './Box';
import { useColoredBoxClasses } from './ColoredBox';

export interface BoxRendererProps extends BoxBaseProps {
  component?: Atoms['reset'];
  // TODO: COLORMODE RELEASE
  // Remove overrides
  background?: SimpleBackground | 'customDark' | 'customLight';
  boxShadow?: BoxShadow;
  children: (className: string) => ReactElement | null;
}

const ColoredBoxRenderer = ({
  background,
  boxShadow,
  children,
  className,
}: {
  background: BoxRendererProps['background'];
  boxShadow: BoxRendererProps['boxShadow'];
  children: BoxRendererProps['children'];
  className: string;
}) => {
  const { backgroundContext, classList } = useColoredBoxClasses({
    background,
    boxShadow,
  });
  const element = children(clsx(className, classList));

  return backgroundContext ? (
    <BackgroundProvider value={backgroundContext}>{element}</BackgroundProvider>
  ) : (
    element
  );
};

export const BoxRenderer = ({
  children,
  component = 'div',
  className,
  background,
  boxShadow,
  ...props
}: BoxRendererProps) => {
  const classes = clsx(className, atoms({ reset: component, ...props }));

  return background || boxShadow ? (
    <ColoredBoxRenderer
      background={background}
      boxShadow={boxShadow}
      className={classes}
    >
      {children}
    </ColoredBoxRenderer>
  ) : (
    children(classes)
  );
};
