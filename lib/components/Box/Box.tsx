import classNames from 'classnames';
import {
  createElement,
  forwardRef,
  useContext,
  AllHTMLAttributes,
  ElementType,
} from 'react';
import dedent from 'dedent';
import { base as baseReset } from '../../reset/reset.css';
import { atoms, Atoms } from '../../atoms/atoms';
import { renderBackgroundProvider } from './BackgroundContext';
import TextLinkRendererContext from '../TextLinkRenderer/TextLinkRendererContext';

export interface BoxProps
  extends Omit<Atoms, 'reset'>,
    Omit<AllHTMLAttributes<HTMLElement>, 'width' | 'height' | 'className'> {
  component?: ElementType;
  className?: Parameters<typeof classNames>[0];
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

    const classes = classNames(className);

    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const inTextLinkRenderer = useContext(TextLinkRendererContext);

      if (classes.split(' ').includes(baseReset) && !inTextLinkRenderer) {
        throw new Error(
          dedent`
            Reset class has been applied more than once. This is normally caused when asking for an explicit reset on the \`atoms\` function. This can be removed as Box automatically adds reset classes.

            atoms({
              reset: '...' // <-- Remove this
            })
          `,
        );
      }
    }

    const element = createElement(component, {
      className: classNames(
        atoms({
          reset: typeof component === 'string' ? component : 'div',
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
        }),
        classes,
      ),
      ...restProps,
      ref,
    });

    return renderBackgroundProvider(background, element);
  },
);

NamedBox.displayName = 'Box';

export const Box = NamedBox;
