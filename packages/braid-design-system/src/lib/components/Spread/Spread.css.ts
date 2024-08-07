import {
  defineProperties,
  createSprinkles,
  type RequiredConditionalValue,
} from '@vanilla-extract/sprinkles';
import { breakpoints } from '../../css/breakpoints';
import { space } from '../../css/atoms/atomicProperties';

const responsiveGapProperties = defineProperties({
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
  properties: {
    gap: space,
  },
});

export const responsiveGap = createSprinkles(responsiveGapProperties);

export type RequiredResponsiveValue<Value extends string | number> =
  RequiredConditionalValue<typeof responsiveGapProperties, Value>;
