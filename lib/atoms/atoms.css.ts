import {
  ConditionalValue,
  createAtomicStyles,
  createAtomsFn,
  createUtils,
} from '@vanilla-extract/sprinkles';

import { breakpoints } from '../themes/nextThemeUtils';
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

const reponsiveAtomicStyles = createAtomicStyles({
  defaultCondition: 'mobile',
  conditions: {
    mobile: {},
    tablet: {
      '@media': `screen and (min-width: ${breakpoints.tablet}px)`,
    },
    desktop: {
      '@media': `screen and (min-width: ${breakpoints.desktop}px)`,
    },
  },
  responsiveArray: ['mobile', 'tablet', 'desktop'],
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

export const atoms = createAtomsFn(
  unresponsiveAtomicStyles,
  reponsiveAtomicStyles,
  pseudoAtomicStyles,
);

export const responsiveValue = createUtils(reponsiveAtomicStyles);
export type ResponsiveValue<Value> = ConditionalValue<
  typeof reponsiveAtomicStyles,
  Value
>;
