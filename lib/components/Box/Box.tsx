import {
  createElement,
  forwardRef,
  AllHTMLAttributes,
  ElementType,
} from 'react';
import { useBoxStyles, UseBoxStylesProps } from './useBoxStyles';
import { renderBackgroundProvider } from './BackgroundContext';

export interface BoxProps
  extends Omit<UseBoxStylesProps, 'component'>,
    Omit<AllHTMLAttributes<HTMLElement>, 'width' | 'height'> {
  component?: ElementType;
}

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
      flexWrap,
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
      overflow,
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
      flexWrap,
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
      overflow,
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
