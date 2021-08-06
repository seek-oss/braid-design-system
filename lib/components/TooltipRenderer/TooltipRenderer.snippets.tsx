import React from 'react';
import { Snippets } from '../private/Snippets';
import {
  Box,
  IconHelp,
  Inline,
  Text,
  TooltipRenderer,
} from '../../playroom/components';
import source from '../../utils/source.macro';

export const snippets: Snippets = [
  {
    name: 'Standard',
    code: source(
      <Inline space="small">
        <TooltipRenderer tooltip={<Text>This is a tooltip!</Text>}>
          {({ triggerProps }) => (
            <Box aria-label="Help" {...triggerProps}>
              <IconHelp />
            </Box>
          )}
        </TooltipRenderer>
      </Inline>,
    ),
  },
];
