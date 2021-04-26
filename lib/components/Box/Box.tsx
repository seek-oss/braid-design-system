import {
  createElement,
  forwardRef,
  AllHTMLAttributes,
  ElementType,
} from 'react';
import dedent from 'dedent';
import { useBoxStyles, UseBoxStylesProps } from './useBoxStyles';
import { renderBackgroundProvider } from './BackgroundContext';

export interface BoxProps
  extends Omit<UseBoxStylesProps, 'component'>,
    Omit<AllHTMLAttributes<HTMLElement>, 'width' | 'height' | 'className'> {
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
      flexShrink,
      flexGrow,
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
      minWidth,
      maxWidth,
      top,
      bottom,
      right,
      left,
      userSelect,
      outline,
      opacity,
      zIndex,
      className,
      ...restProps
    },
    ref,
  ) => {
    let resolvedTransform = transform;
    if (typeof transform === 'string' && transform === 'touchable') {
      if (process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line no-console
        console.warn(
          dedent`
            The \`touchable\` value has been deprecated as a standalone value for \`transform\`. The atom is now explicitly scoped to the \`active\` selector:
            %c  -<Box transform="touchable">...</Box>
            %c  +<Box transform="{{ active: 'touchable' }}">...</Box>
          `,
          'color: red',
          'color: green',
        );
      }
      resolvedTransform = {
        active: 'touchable',
      };
    }

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
      flexShrink,
      flexGrow,
      alignItems,
      justifyContent,
      textAlign,
      borderRadius,
      background,
      boxShadow,
      transition,
      transform: resolvedTransform,
      height,
      width,
      position,
      cursor,
      pointerEvents,
      overflow,
      minWidth,
      maxWidth,
      top,
      bottom,
      right,
      left,
      userSelect,
      outline,
      opacity,
      zIndex,
      className,
    });

    const element = createElement(component, {
      className: boxStyles,
      ...restProps,
      ref,
    });

    return renderBackgroundProvider(background, element);
  },
);

NamedBox.displayName = 'Box';

export const Box = NamedBox;
