import { createElement, forwardRef, AllHTMLAttributes } from 'react';
import { useBoxStyles, UseBoxStylesProps } from './useBoxStyles';
import { renderBackgroundProvider } from './BackgroundContext';
import { Optional, Omit } from 'utility-types';

export interface BoxProps
  extends Optional<UseBoxStylesProps, 'component'>,
    Omit<AllHTMLAttributes<HTMLElement>, 'width' | 'height'> {}

const NamedBox = forwardRef<HTMLElement, BoxProps>(
  (
    {
      component = 'div',
      padding,
      paddingX,
      paddingY,
      paddingTop,
      paddingBottom,
      paddingLeft,
      paddingRight,
      margin,
      marginX,
      marginY,
      marginTop,
      marginBottom,
      marginLeft,
      marginRight,
      display,
      flexDirection,
      alignItems,
      justifyContent,
      textAlign,
      borderRadius,
      background,
      boxShadow,
      transition,
      transform,
      height,
      width,
      position,
      cursor,
      pointerEvents,
      className,
      ...restProps
    },
    ref,
  ) => {
    const boxStyles = useBoxStyles({
      component,
      padding,
      paddingX,
      paddingY,
      paddingTop,
      paddingBottom,
      paddingLeft,
      paddingRight,
      margin,
      marginX,
      marginY,
      marginTop,
      marginBottom,
      marginLeft,
      marginRight,
      display,
      flexDirection,
      alignItems,
      justifyContent,
      textAlign,
      borderRadius,
      background,
      boxShadow,
      transition,
      transform,
      height,
      width,
      position,
      cursor,
      pointerEvents,
    });

    const element = createElement(component, {
      className: `${boxStyles}${className ? ` ${className}` : ''}`,
      ...restProps,
      ref,
    });

    return renderBackgroundProvider(background, element);
  },
);

NamedBox.displayName = 'Box';

export const Box = NamedBox;
