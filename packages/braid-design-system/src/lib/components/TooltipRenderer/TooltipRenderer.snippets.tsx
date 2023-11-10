import React from 'react';
import type { Snippets } from '../private/Snippets';
import {
  Box,
  Placeholder,
  Text,
  TooltipRenderer,
} from '../../playroom/components';
import source from '@braid-design-system/source.macro';

export const snippets: Snippets = [
  {
    name: 'Standard',
    code: source(
      <TooltipRenderer tooltip={<Text>This is a tooltip!</Text>}>
        {({ triggerProps }) => (
          <Box {...triggerProps}>
            <Placeholder label="Tooltip trigger" height={100} />
          </Box>
        )}
      </TooltipRenderer>,
    ),
  },
];
