import clsx, { ClassValue } from 'clsx';
import React, {
  createElement,
  forwardRef,
  AllHTMLAttributes,
  ElementType,
  useEffect,
} from 'react';
import dedent from 'dedent';
import { base as baseReset } from '../../css/reset/reset.css';
import { atoms, Atoms } from '../../css/atoms/atoms';
import { sprinkles, ColorModeValue } from '../../css/atoms/sprinkles.css';
import { ColoredBox } from './ColoredBox';
import { Background } from '../../css/atoms/atomicProperties';

export type BoxBackgroundVariant = Background | 'customDark' | 'customLight';

export interface BoxBaseProps extends Omit<Atoms, 'reset' | 'background'> {
  className?: ClassValue;
  background?: ColorModeValue<BoxBackgroundVariant>;
}

export interface BoxProps
  extends BoxBaseProps,
    Omit<AllHTMLAttributes<HTMLElement>, 'width' | 'height' | 'className'> {
  component?: ElementType;
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
      useEffect(() => {
        if (userClasses.includes(baseReset)) {
          throw new Error(
            dedent`
              Reset class has been applied more than once. This is normally caused when asking for an explicit reset on the \`atoms\` function. This can be removed as Box automatically adds reset classes.

              atoms({
                reset: '...' // <-- Remove this
              })
            `,
          );
        }
      }, [userClasses]);
    }

    const atomicClasses = atoms({
      reset: typeof component === 'string' ? component : 'div',
      ...atomProps,
      background: undefined,
    });

    const combinedClasses = `${atomicClasses}${
      userClasses ? ` ${userClasses}` : ''
    }`;

    return props.background ? (
      <ColoredBox
        component={component}
        background={props.background}
        className={combinedClasses}
        ref={ref}
        {...nativeProps}
      />
    ) : (
      createElement(component, {
        className: combinedClasses,
        ...nativeProps,
        ref,
      })
    );
  },
);

Box.displayName = 'Box';
