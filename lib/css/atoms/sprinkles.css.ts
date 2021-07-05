import {
  ConditionalValue,
  RequiredConditionalValue,
  createAtomicStyles,
  createAtomsFn,
  createMapValueFn,
  createNormalizeValueFn,
} from '@vanilla-extract/sprinkles';

import { breakpoints, breakpointNames, Breakpoint } from '../breakpoints';
import {
  responsiveProperties,
  unresponsiveProperties,
  pseudoProperties,
} from './atomicProperties';

const unresponsiveAtomicStyles = createAtomicStyles({
  properties: unresponsiveProperties,
});

const pseudoAtomicStyles = createAtomicStyles({
  defaultCondition: false,
  conditions: {
    active: {
      selector: '&:active',
    },
  },
  properties: pseudoProperties,
});

const responsiveAtomicStyles = createAtomicStyles({
  defaultCondition: 'mobile',
  conditions: {
    mobile: {},
    tablet: {
      '@media': `screen and (min-width: ${breakpoints.tablet}px)`,
    },
    desktop: {
      '@media': `screen and (min-width: ${breakpoints.desktop}px)`,
    },
    wide: {
      '@media': `screen and (min-width: ${breakpoints.wide}px)`,
    },
  },
  responsiveArray: breakpointNames,
  properties: responsiveProperties,
  shorthands: {
    padding: ['paddingBottom', 'paddingTop', 'paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    paddingX: ['paddingLeft', 'paddingRight'],
    margin: ['marginBottom', 'marginTop', 'marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    marginX: ['marginLeft', 'marginRight'],
  },
});

export const sprinkles = createAtomsFn(
  unresponsiveAtomicStyles,
  responsiveAtomicStyles,
  pseudoAtomicStyles,
);

export type OptionalResponsiveValue<
  Value extends string | number
> = ConditionalValue<typeof responsiveAtomicStyles, Value>;
export type RequiredResponsiveValue<
  Value extends string | number
> = RequiredConditionalValue<typeof responsiveAtomicStyles, Value>;

export type RequiredResponsiveObject<Value> = Partial<
  Record<Breakpoint, Value>
> &
  Record<typeof breakpointNames[0], Value>;

export const normalizeResponsiveValue = createNormalizeValueFn(
  responsiveAtomicStyles,
);
export const mapResponsiveValue = createMapValueFn(responsiveAtomicStyles);
