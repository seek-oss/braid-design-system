import clsx, { ClassValue } from 'clsx';
import {
  createElement,
  forwardRef,
  useContext,
  AllHTMLAttributes,
  ElementType,
  useEffect,
} from 'react';
import dedent from 'dedent';
import { base as baseReset } from '../../css/reset/reset.css';
import { atoms, Atoms } from '../../css/atoms/atoms';
import { sprinkles } from '../../css/atoms/sprinkles.css';
import { renderBackgroundProvider } from './BackgroundContext';
import TextLinkRendererContext from '../TextLinkRenderer/TextLinkRendererContext';

export interface BoxProps
  extends Omit<Atoms, 'reset'>,
    Omit<AllHTMLAttributes<HTMLElement>, 'width' | 'height' | 'className'> {
  component?: ElementType;
  className?: ClassValue;
}

export const Box = forwardRef<HTMLElement, BoxProps>(
  ({ component = 'div', className, ...props }, ref) => {
    const atomProps: Record<string, unknown> = {};
    const nativeProps: Record<string, unknown> = {};

    for (const key in props) {
      if (sprinkles.properties.has(key as keyof Omit<Atoms, 'reset'>)) {
        atomProps[key] = props[key as keyof typeof props];
      } else {
        nativeProps[key] = props[key as keyof typeof props];
      }
    }

    const userClasses = clsx(className);

    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const inTextLinkRenderer = Boolean(useContext(TextLinkRendererContext));

      // eslint-disable-next-line react-hooks/rules-of-hooks
      useEffect(() => {
        if (userClasses.includes(baseReset) && !inTextLinkRenderer) {
          throw new Error(
            dedent`
              Reset class has been applied more than once. This is normally caused when asking for an explicit reset on the \`atoms\` function. This can be removed as Box automatically adds reset classes.

              atoms({
                reset: '...' // <-- Remove this
              })
            `,
          );
        }
      }, [userClasses, inTextLinkRenderer]);
    }

    const atomicClasses = atoms({
      reset: typeof component === 'string' ? component : 'div',
      ...atomProps,
    });

    const element = createElement(component, {
      className: `${atomicClasses}${userClasses ? ` ${userClasses}` : ''}`,
      ...nativeProps,
      ref,
    });

    return renderBackgroundProvider(props.background, element);
  },
);

Box.displayName = 'Box';
