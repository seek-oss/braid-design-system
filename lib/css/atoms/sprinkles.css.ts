import {
  ConditionalValue,
  RequiredConditionalValue,
  defineProperties,
  createSprinkles,
  createMapValueFn,
  createNormalizeValueFn,
} from '@vanilla-extract/sprinkles';

import { breakpoints, breakpointNames, Breakpoint } from '../breakpoints';
import {
  responsiveProperties,
  unresponsiveProperties,
  pseudoProperties,
} from './atomicProperties';

const unresponsiveAtomicProperties = defineProperties({
  properties: unresponsiveProperties,
});

const pseudoAtomicProperties = defineProperties({
  defaultCondition: false,
  conditions: {
    active: {
      selector: '&:active',
    },
  },
  properties: pseudoProperties,
});

const responsiveAtomicProperties = defineProperties({
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

export const sprinkles = createSprinkles(
  unresponsiveAtomicProperties,
  responsiveAtomicProperties,
  pseudoAtomicProperties,
);

export type OptionalResponsiveValue<Value extends string | number> =
  ConditionalValue<typeof responsiveAtomicProperties, Value>;
export type RequiredResponsiveValue<Value extends string | number> =
  RequiredConditionalValue<typeof responsiveAtomicProperties, Value>;

export type RequiredResponsiveObject<Value> = Partial<
  Record<Breakpoint, Value>
> &
  Record<typeof breakpointNames[0], Value>;

export const normalizeResponsiveValue = createNormalizeValueFn(
  responsiveAtomicProperties,
);
export const mapResponsiveValue = createMapValueFn(responsiveAtomicProperties);
