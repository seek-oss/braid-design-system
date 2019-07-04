import React, { AllHTMLAttributes, createElement, forwardRef } from 'react';
import useBox, { UseBoxProps } from '../../hooks/useBox';
import { BackgroundProvider } from './BackgroundContext';
import { Optional, Omit } from 'utility-types';

export interface BoxProps
  extends Optional<UseBoxProps, 'component'>,
    Omit<AllHTMLAttributes<HTMLElement>, 'width'> {}

export const Box = forwardRef<HTMLElement, BoxProps>(
  (
    {
      component = 'div',
      paddingTop,
      paddingBottom,
      paddingLeft,
      paddingRight,
      marginTop,
      marginBottom,
      marginLeft,
      marginRight,
      display,
      flexDirection,
      borderRadius,
      background,
      boxShadow,
      transition,
      transform,
      width,
      position,
      className,
      ...restProps
    },
    ref,
  ) => {
    const boxStyles = useBox({
      component,
      paddingTop,
      paddingBottom,
      paddingLeft,
      paddingRight,
      marginTop,
      marginBottom,
      marginLeft,
      marginRight,
      display,
      flexDirection,
      borderRadius,
      background,
      boxShadow,
      transition,
      transform,
      width,
      position,
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
