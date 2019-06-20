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
      backgroundColor,
      boxShadow,
      transition,
      transform,
      width,
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
      backgroundColor,
      boxShadow,
      transition,
      transform,
      width,
    });

    const element = createElement(component, {
      className: `${boxStyles}${className ? ` ${className}` : ''}`,
      ...restProps,
      ref,
    });

    return backgroundColor ? (
      <BackgroundProvider value={backgroundColor}>{element}</BackgroundProvider>
    ) : (
      element
    );
  },
);
