import React from 'react';
import useBox, { UseBoxProps } from '../../hooks/useBox';
import { Reset, ResetProps } from '../Reset/Reset';
import { ContrastProvider } from './ContrastContext';
import { Omit } from 'utility-types';

export interface BoxProps extends UseBoxProps, Omit<ResetProps, 'width'> {}

export const Box = ({
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

  const ResetBox = (
    <Reset
      className={`${className ? `${className} ` : ''}${boxStyles}`}
      {...restProps}
    />
  );

  return backgroundColor ? (
    <ContrastProvider value={backgroundColor}>{ResetBox}</ContrastProvider>
  ) : (
    ResetBox
  );
};
