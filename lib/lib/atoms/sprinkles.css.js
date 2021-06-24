import * as __vanilla_filescope__ from '@vanilla-extract/css/fileScope';

__vanilla_filescope__.setFileScope("src/atoms/sprinkles.css.ts", "braid-design-system");

import { createAtomicStyles, createAtomsFn, createMapValueFn, createNormalizeValueFn } from '@vanilla-extract/sprinkles';
import { breakpoints, breakpointNames } from './breakpoints';
import { responsiveProperties, unresponsiveProperties, pseudoProperties } from './atomicProperties';
var unresponsiveAtomicStyles = createAtomicStyles({
  properties: unresponsiveProperties
});
var pseudoAtomicStyles = createAtomicStyles({
  defaultCondition: false,
  conditions: {
    active: {
      selector: '&:active'
    }
  },
  properties: pseudoProperties
});
var responsiveAtomicStyles = createAtomicStyles({
  defaultCondition: 'mobile',
  conditions: {
    mobile: {},
    tablet: {
      '@media': "screen and (min-width: ".concat(breakpoints.tablet, "px)")
    },
    desktop: {
      '@media': "screen and (min-width: ".concat(breakpoints.desktop, "px)")
    }
  },
  responsiveArray: breakpointNames,
  properties: responsiveProperties,
  shorthands: {
    padding: ['paddingBottom', 'paddingTop', 'paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    paddingX: ['paddingLeft', 'paddingRight'],
    margin: ['marginBottom', 'marginTop', 'marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    marginX: ['marginLeft', 'marginRight']
  }
});
export var sprinkles = createAtomsFn(unresponsiveAtomicStyles, responsiveAtomicStyles, pseudoAtomicStyles);
export var normalizeResponsiveValue = createNormalizeValueFn(responsiveAtomicStyles);
export var mapResponsiveValue = createMapValueFn(responsiveAtomicStyles);

__vanilla_filescope__.endFileScope();