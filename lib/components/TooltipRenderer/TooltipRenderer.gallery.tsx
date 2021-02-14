import React from 'react';
import { ComponentExample } from '../../../site/src/types';
import source from '../../utils/source.macro';
import { TooltipRenderer, Inline, Stack, Text, IconHelp, Box } from '../';
import { TooltipContent } from './TooltipRenderer';

export const galleryItems: ComponentExample[] = [
  {
    label: 'Single line of text',
    Example: () =>
      source(
        <TooltipContent opacity={100}>
          <Text>Tooltip</Text>
        </TooltipContent>,
      ),
  },
  {
    label: 'Multiple lines of text',
    Example: () =>
      source(
        <TooltipContent opacity={100}>
          <Text>
            The quick brown fox jumps over the lazy dog. The quick brown fox
            jumps over the lazy dog. The quick brown fox jumps over the lazy
            dog.
          </Text>
        </TooltipContent>,
      ),
  },
  {
    label: 'Custom formatting',
    Example: () =>
      source(
        <TooltipContent opacity={100}>
          <Stack space="medium">
            <Text weight="strong">Strong text</Text>
            <Text>
              The quick brown fox jumps over the lazy dog. The quick brown fox
              jumps over the lazy dog. The quick brown fox jumps over the lazy
              dog.
            </Text>
          </Stack>
        </TooltipContent>,
      ),
  },
  {
    label: 'Preview animation',
    Example: ({ id }) =>
      source(
        <Inline space="small">
          <TooltipRenderer
            id={id}
            tooltip={
              <Text>
                This is a tooltip! If you provide enough content, the text will
                wrap onto multiple lines.
              </Text>
            }
          >
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
