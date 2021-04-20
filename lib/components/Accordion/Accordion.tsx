import assert from 'assert';
import React, { useMemo } from 'react';
import { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';
import { Box } from '../Box/Box';
import { Stack } from '../Stack/Stack';
import { Divider } from '../Divider/Divider';
import {
  AccordionContext,
  AccordionContextValue,
  validTones,
} from './AccordionContext';
import {
  normaliseResponsiveProp,
  ResponsiveProp,
} from '../../utils/responsiveProp';

export const validSpaceValues = ['medium', 'large', 'xlarge'] as const;

export interface AccordionProps {
  children: ReactNodeNoStrings;
  dividers?: boolean;
  size?: AccordionContextValue['size'];
  tone?: AccordionContextValue['tone'];
  space?: ResponsiveProp<typeof validSpaceValues[number]>;
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
}: AccordionProps) => {
  assert(
    spaceProp === undefined ||
      normaliseResponsiveProp(spaceProp).every((value) =>
        validSpaceValues.includes(value),
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
        <Stack space={space}>{children}</Stack>
      ) : (
        <Box>
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
