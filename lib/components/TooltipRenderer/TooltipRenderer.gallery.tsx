import React from 'react';
import { ComponentExample } from '../../../site/src/types';
import source from '../../utils/source.macro';
import { TooltipRenderer, Inline, Stack, Text, IconHelp, Box } from '../';
import { MockTooltip } from './MockTooltip';

export const galleryItems: ComponentExample[] = [
  {
    label: 'Single line of text',
    Example: () =>
      source(
        <MockTooltip placement="top">
          <Text>Tooltip</Text>
        </MockTooltip>,
      ),
  },
  {
    label: 'Multiple lines of text',
    Example: () =>
      source(
        <MockTooltip placement="top">
          <Text>
            The quick brown fox jumps over the lazy dog. The quick brown fox
            jumps over the lazy dog. The quick brown fox jumps over the lazy
            dog.
          </Text>
        </MockTooltip>,
      ),
  },
  {
    label: 'Custom formatting',
    Example: () =>
      source(
        <MockTooltip placement="top">
          <Stack space="medium">
            <Text weight="strong">Strong text</Text>
            <Text>
              The quick brown fox jumps over the lazy dog. The quick brown fox
              jumps over the lazy dog. The quick brown fox jumps over the lazy
              dog.
            </Text>
          </Stack>
        </MockTooltip>,
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
