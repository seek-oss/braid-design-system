import { createElement, forwardRef } from 'react';
import { atoms } from '../../css/atoms/atoms';
import { renderBackgroundProvider } from './BackgroundContext';
import { BoxProps } from './Box';

export interface ColoredBoxProps extends BoxProps {
  component: NonNullable<BoxProps['component']>;
  background: NonNullable<BoxProps['background']>;
}

export const resolveBackgroundAtom = (
  background: ColoredBoxProps['background'],
) =>
  background === 'customDark' || background === 'customLight'
    ? undefined
    : atoms({ background });

export const ColoredBox = forwardRef<HTMLElement, ColoredBoxProps>(
  ({ component, background, className, ...props }, ref) => {
    const colorClasses = resolveBackgroundAtom(background);

    const element = createElement(component, {
      className: `${className} ${colorClasses}`,
      ...props,
      ref,
    });

    return renderBackgroundProvider(background, element);
  },
);

ColoredBox.displayName = 'ColoredBox';
