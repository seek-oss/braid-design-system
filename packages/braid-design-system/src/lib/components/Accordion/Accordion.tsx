import assert from 'assert';
import React, { Children, useMemo } from 'react';
import type { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';
import { normalizeResponsiveValue } from '../../css/atoms/sprinkles.css';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';
import { Stack } from '../Stack/Stack';
import { Divider } from '../Divider/Divider';
import {
  type AccordionContextValue,
  AccordionContext,
  type validSizeValues,
  validSpaceValues,
  validTones,
} from './AccordionContext';
import flattenChildren from '../../utils/flattenChildren';

export interface AccordionProps {
  children: ReactNodeNoStrings;
  dividers?: AccordionContextValue['dividers'];
  size?: AccordionContextValue['size'];
  tone?: AccordionContextValue['tone'];
  weight?: AccordionContextValue['weight'];
  space?: AccordionContextValue['space'];
  data?: DataAttributeMap;
}

export const defaultSize = 'large';

const defaultSpaceForSize = {
  divided: {
    xsmall: 'medium',
    small: 'medium',
    standard: 'medium',
    large: 'large',
  },
  undivided: {
    xsmall: 'large',
    small: 'large',
    standard: 'large',
    large: 'large',
  },
} satisfies Record<
  'divided' | 'undivided',
  Record<NonNullable<validSizeValues>, (typeof validSpaceValues)[number]>
>;

export const Accordion = ({
  children,
  size = defaultSize,
  tone,
  weight,
  space: spaceProp,
  dividers = true,
  data,
  ...restProps
}: AccordionProps) => {
  assert(
    spaceProp === undefined ||
      Object.values(normalizeResponsiveValue(spaceProp)).every(
        (value) => value === undefined || validSpaceValues.includes(value),
      ),
    `To ensure adequate space for touch targets, 'space' prop values must be one of the following: ${validSpaceValues
      .map((x) => `"${x}"`)
      .join(', ')}`,
  );

  assert(
    tone === undefined || validTones.includes(tone),
    `The 'tone' prop should be one of the following: ${validTones
      .map((x) => `"${x}"`)
      .join(', ')}`,
  );

  const space =
    spaceProp ?? defaultSpaceForSize[dividers ? 'divided' : 'undivided'][size];

  const contextValue = useMemo(
    () => ({ dividers, size, tone, weight, space }),
    [dividers, size, tone, weight, space],
  );

  return (
    <AccordionContext.Provider value={contextValue}>
      <Stack
        space={space}
        {...buildDataAttributes({ data, validateRestProps: restProps })}
      >
        {!dividers ? (
          children
        ) : (
          <>
            <Divider />
            {Children.map(flattenChildren(children), (child, index) => (
              <>
                {index > 0 ? (
                  <Divider
                    weight={typeof dividers === 'string' ? dividers : undefined}
                  />
                ) : null}
                {child}
              </>
            ))}
            <Divider />
          </>
        )}
      </Stack>
    </AccordionContext.Provider>
  );
};
