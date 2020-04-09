import React from 'react';
import { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';
import { Box } from '../Box/Box';
import { Stack } from '../Stack/Stack';
import { Divider } from '../Divider/Divider';

export interface AccordionProps {
  children: ReactNodeNoStrings;
}

export const Accordion = ({ children }: AccordionProps) => (
  <Box>
    <Divider />
    <Box paddingY="large">
      <Stack space="large" dividers>
        {children}
      </Stack>
    </Box>
    <Divider />
  </Box>
);
