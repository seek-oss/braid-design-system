import React, { ReactElement } from 'react';
import clsx from 'clsx';
import { renderBackgroundProvider } from './BackgroundContext';
import { atoms, Atoms } from '../../css/atoms/atoms';
import { BoxBaseProps } from './Box';
import { useColoredBoxClasses } from './ColoredBox';

export interface BoxRendererProps extends BoxBaseProps {
  component?: Atoms['reset'];
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

  return backgroundContext
    ? renderBackgroundProvider(backgroundContext, element)
    : element;
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
