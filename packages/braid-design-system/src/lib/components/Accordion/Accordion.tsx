import assert from 'assert';
import React, { useMemo } from 'react';
import type { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';
import {
  type RequiredResponsiveValue,
  normalizeResponsiveValue,
} from '../../css/atoms/sprinkles.css';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';
import { Box } from '../Box/Box';
import { Stack } from '../Stack/Stack';
import { Divider } from '../Divider/Divider';
import {
  type AccordionContextValue,
  AccordionContext,
  validTones,
} from './AccordionContext';

export const validSpaceValues = ['medium', 'large', 'xlarge'] as const;

export interface AccordionProps {
  children: ReactNodeNoStrings;
  dividers?: boolean;
  size?: AccordionContextValue['size'];
  tone?: AccordionContextValue['tone'];
  weight?: AccordionContextValue['weight'];
  space?: RequiredResponsiveValue<(typeof validSpaceValues)[number]>;
  data?: DataAttributeMap;
}

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
} as const;

export const Accordion = ({
  children,
  size = 'large',
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

  const contextValue = useMemo(
    () => ({ size, tone, weight }),
    [size, tone, weight],
  );

  const space =
    spaceProp ?? defaultSpaceForSize[dividers ? 'divided' : 'undivided'][size];

  return (
    <AccordionContext.Provider value={contextValue}>
      {!dividers ? (
        <Stack space={space} data={data}>
          {children}
        </Stack>
      ) : (
        <Box {...buildDataAttributes({ data, validateRestProps: restProps })}>
          <Divider />
          <Box paddingY={space}>
            <Stack space={space} dividers>
              {children}
            </Stack>
          </Box>
          <Divider />
        </Box>
      )}
    </AccordionContext.Provider>
  );
};
