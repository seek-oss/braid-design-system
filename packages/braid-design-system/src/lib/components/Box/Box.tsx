import clsx, { type ClassValue } from 'clsx';
import dedent from 'dedent';
import {
  type AllHTMLAttributes,
  type ElementType,
  createElement,
  forwardRef,
  useEffect,
} from 'react';

import type { Background, BoxShadow } from '../../css/atoms/atomicProperties';
import { type Atoms, atoms } from '../../css/atoms/atoms';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';

import { ColoredBox } from './ColoredBox';

import { type ColorModeValue, sprinkles } from '../../css/atoms/sprinkles.css';
import { base as baseReset } from '../../css/reset/reset.css';

export type BoxBackgroundVariant = Background | 'customDark' | 'customLight';

export interface BoxBaseProps extends Omit<Atoms, 'reset' | 'background'> {
  className?: ClassValue;
  background?: ColorModeValue<BoxBackgroundVariant>;
}

export interface BoxProps
  extends BoxBaseProps,
    Omit<
      AllHTMLAttributes<HTMLElement>,
      'width' | 'height' | 'className' | 'data'
    > {
  component?: ElementType;
  data?: DataAttributeMap;
}

export const Box = forwardRef<HTMLElement, BoxProps>(
  (
    { component = 'div', className, background, boxShadow, data, ...restProps },
    ref,
  ) => {
    const atomProps: Record<string, unknown> = {};
    const nativeProps: Record<string, unknown> = {
      ...(data
        ? // Not validating rest props as Box supports native HTML element props
          // and we do not want to warn against using the native syntax.
          buildDataAttributes({ data, validateRestProps: false })
        : undefined),
    };

    for (const key in restProps) {
      if (sprinkles.properties.has(key as keyof Omit<Atoms, 'reset'>)) {
        atomProps[key] = restProps[key as keyof typeof restProps];
      } else {
        nativeProps[key] = restProps[key as keyof typeof restProps];
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
    });

    const combinedClasses = `${atomicClasses}${
      userClasses ? ` ${userClasses}` : ''
    }`;

    return background || boxShadow ? (
      <ColoredBox
        component={component}
        background={background}
        boxShadow={boxShadow}
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

// TODO: COLORMODE RELEASE
// Remove PublicBox
export type SimpleBackground = Exclude<Background, 'bodyDark' | 'surfaceDark'>;
export interface PublicBoxProps extends BoxProps {
  background?: SimpleBackground | 'customDark' | 'customLight';
  boxShadow?: BoxShadow;
}

export const PublicBox = forwardRef<HTMLElement, PublicBoxProps>(
  (props, ref) => {
    if (process.env.NODE_ENV !== 'production') {
      if (
        typeof props.background !== 'undefined' &&
        typeof props.background !== 'string'
      ) {
        throw new Error('Conditional backgrounds are not suppported');
      }

      if (
        typeof props.boxShadow !== 'undefined' &&
        typeof props.boxShadow !== 'string'
      ) {
        throw new Error('Conditional boxShadows are not suppported');
      }
    }
    return <Box {...props} ref={ref} />;
  },
);

PublicBox.displayName = 'Box';
