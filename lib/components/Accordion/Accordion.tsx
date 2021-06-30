import assert from 'assert';
import React, { useMemo } from 'react';
import { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';
import {
  normalizeResponsiveValue,
  RequiredResponsiveValue,
} from '../../css/atoms/sprinkles.css';
import buildDataAttributes, {
  DataAttributeMap,
} from '../private/buildDataAttributes';
import { Box } from '../Box/Box';
import { Stack } from '../Stack/Stack';
import { Divider } from '../Divider/Divider';
import {
  AccordionContext,
  AccordionContextValue,
  validTones,
} from './AccordionContext';

export const validSpaceValues = ['medium', 'large', 'xlarge'] as const;

export interface AccordionProps {
  children: ReactNodeNoStrings;
  dividers?: boolean;
  size?: AccordionContextValue['size'];
  tone?: AccordionContextValue['tone'];
  space?: RequiredResponsiveValue<typeof validSpaceValues[number]>;
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
  space: spaceProp,
  dividers = true,
  data,
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

  const contextValue = useMemo(() => ({ size, tone }), [size, tone]);

  const space =
    spaceProp ?? defaultSpaceForSize[dividers ? 'divided' : 'undivided'][size];

  return (
    <AccordionContext.Provider value={contextValue}>
      {!dividers ? (
        <Stack space={space} data={data}>
          {children}
        </Stack>
      ) : (
        <Box {...(data ? buildDataAttributes(data) : undefined)}>
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
