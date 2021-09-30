import React, { ReactElement } from 'react';
import clsx from 'clsx';
import { renderBackgroundProvider } from './BackgroundContext';
import { atoms, Atoms } from '../../css/atoms/atoms';
import { BoxBaseProps } from './Box';
import { resolveBackgroundAtom } from './ColoredBox';

export interface BoxRendererProps extends BoxBaseProps {
  component?: Atoms['reset'];
  children: (className: string) => ReactElement | null;
}

const ColoredBoxRenderer = ({
  background,
  children,
  className,
}: {
  background: NonNullable<BoxRendererProps['background']>;
  children: BoxRendererProps['children'];
  className: string;
}) => {
  const colorClasses = resolveBackgroundAtom(background);
  const element = children(clsx(className, colorClasses));

  return renderBackgroundProvider(background, element);
};

export const BoxRenderer = ({
  children,
  component = 'div',
  className,
  background,
  ...props
}: BoxRendererProps) => {
  const classes = clsx(className, atoms({ reset: component, ...props }));

  return background ? (
    <ColoredBoxRenderer background={background} className={classes}>
      {children}
    </ColoredBoxRenderer>
  ) : (
    children(classes)
  );
};
