import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import source from '../../utils/source.macro';
import { TooltipRenderer, Box, Text, Stack, Button } from '..';

const docs: ComponentDocs = {
  category: 'Content',
  Example: ({ id }) =>
    source(
      <TooltipRenderer
        id={id}
        // interactive
        content={
          <Stack space="small">
            <Text>Tooltip!</Text>
            <Button>Yo!</Button>
          </Stack>
        }
      >
        {(tooltipProps) => (
          <Box component="button" display="inlineBlock" {...tooltipProps}>
            <Text>Yo!</Text>
          </Box>
        )}
      </TooltipRenderer>,
    ),
  alternatives: [],
  additional: [],
};

export default docs;
