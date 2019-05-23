import React from 'react';
import useBox, { BoxProps } from '../../hooks/useBox';
import { Reset } from '../Reset/Reset';
import { ContrastProvider } from './ContrastContext';

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
