import React from 'react';
import { ComponentScreenshot } from '../../../site/src/types';
import { Stack, Text, Box } from '../';
import { TooltipRenderer, StaticTooltipProvider } from './TooltipRenderer';

const triggerStyles = { width: 50, height: 20, background: 'pink' } as const;

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320],
  examples: [
    {
      label: 'Top placement',
      Example: ({ id }) => (
        <StaticTooltipProvider>
          <Box style={{ paddingTop: 100 }}>
            <TooltipRenderer
              id={id}
              placement="top"
              tooltip={<Text>Tooltip</Text>}
            >
              {({ triggerProps }) => (
                <Box style={triggerStyles} {...triggerProps} />
              )}
            </TooltipRenderer>
          </Box>
        </StaticTooltipProvider>
      ),
    },
    {
      label: 'Bottom placement',
      Example: ({ id }) => (
        <StaticTooltipProvider>
          <Box style={{ paddingBottom: 100 }}>
            <TooltipRenderer
              id={id}
              placement="bottom"
              tooltip={<Text>Tooltip</Text>}
            >
              {({ triggerProps }) => (
                <Box style={triggerStyles} {...triggerProps} />
              )}
            </TooltipRenderer>
          </Box>
        </StaticTooltipProvider>
      ),
    },
    {
      label: 'Multiple lines of text',
      Example: ({ id }) => (
        <StaticTooltipProvider>
          <Box style={{ paddingBottom: 200 }}>
            <TooltipRenderer
              id={id}
              placement="bottom"
              tooltip={
                <Text>
                  The quick brown fox jumps over the lazy dog. The quick brown
                  fox jumps over the lazy dog.
                </Text>
              }
            >
              {({ triggerProps }) => (
                <Box style={triggerStyles} {...triggerProps} />
              )}
            </TooltipRenderer>
          </Box>
        </StaticTooltipProvider>
      ),
    },
    {
      label: 'Text style overrides',
      Example: ({ id }) => (
        <StaticTooltipProvider>
          <Box style={{ paddingBottom: 200 }}>
            <TooltipRenderer
              id={id}
              placement="bottom"
              tooltip={
                <Stack space="medium">
                  <Text weight="strong">Strong text</Text>
                  <Text>
                    The quick brown fox jumps over the lazy dog. The quick brown
                    fox jumps over the lazy dog.
                  </Text>
                </Stack>
              }
            >
              {({ triggerProps }) => (
                <Box style={triggerStyles} {...triggerProps} />
              )}
            </TooltipRenderer>
          </Box>
        </StaticTooltipProvider>
      ),
    },
  ],
};
