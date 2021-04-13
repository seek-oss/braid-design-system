import React, { useMemo } from 'react';
import { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';
import { Box } from '../Box/Box';
import { Stack } from '../Stack/Stack';
import { Divider } from '../Divider/Divider';
import { AccordionContext, AccordionContextValue } from './AccordionContext';

export interface AccordionProps {
  children: ReactNodeNoStrings;
  dividers?: boolean;
  size?: AccordionContextValue['size'];
  tone?: AccordionContextValue['tone'];
}

const stackSpace = 'large';

export const Accordion = ({
  children,
  size,
  tone,
  dividers = true,
}: AccordionProps) => {
  const contextValue = useMemo(() => ({ size, tone }), [size, tone]);

  return (
    <AccordionContext.Provider value={contextValue}>
      {!dividers ? (
        <Stack space={stackSpace}>{children}</Stack>
      ) : (
        <Box>
          <Divider />
          <Box paddingY={stackSpace}>
            <Stack space={stackSpace} dividers>
              {children}
            </Stack>
          </Box>
          <Divider />
        </Box>
      )}
    </AccordionContext.Provider>
  );
};
