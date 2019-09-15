import React, { AllHTMLAttributes, createElement, forwardRef } from 'react';
import useBox, { UseBoxProps } from '../../hooks/useBox';
import { BackgroundProvider } from './BackgroundContext';
import { Optional, Omit } from 'utility-types';

export interface BoxProps
  extends Optional<UseBoxProps, 'component'>,
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
    const boxStyles = useBox({
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

    return background ? (
      <BackgroundProvider value={background}>{element}</BackgroundProvider>
    ) : (
      element
    );
  },
);

NamedBox.displayName = 'Box';

export const Box = NamedBox;
