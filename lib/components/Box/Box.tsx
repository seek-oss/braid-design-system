import React, { AllHTMLAttributes, ReactType, createElement } from 'react';
import useBox, { UseBoxProps } from '../../hooks/useBox';
import useReset from '../../hooks/useReset';
import { ContrastProvider } from './ContrastContext';
import { Omit } from 'utility-types';

export interface BoxProps
  extends UseBoxProps,
    Omit<AllHTMLAttributes<HTMLElement>, 'width'> {
  component?: ReactType;
}

export const Box = ({
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
}: BoxProps) => {
  const boxStyles = useBox({
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

  const ResetBox = createElement(component, {
    className: `${useReset(component)} ${boxStyles}${
      className ? ` ${className}` : ''
    }`,
    ...restProps,
  });

  return backgroundColor ? (
    <ContrastProvider value={backgroundColor}>{ResetBox}</ContrastProvider>
  ) : (
    ResetBox
  );
};
