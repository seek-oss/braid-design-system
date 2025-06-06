import type { ComponentScreenshot } from 'site/types';

import { Stack, Text, Box, TooltipRenderer, Inline } from '../';

import { StaticTooltipProvider } from './TooltipRenderer';

const triggerStyles = { width: 50, height: 20, background: 'pink' } as const;

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320],
  examples: [
    {
      label: 'Top placement',
      Example: () => (
        <StaticTooltipProvider>
          <Box style={{ paddingTop: 100 }}>
            <TooltipRenderer placement="top" tooltip={<Text>Tooltip</Text>}>
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
      Example: () => (
        <StaticTooltipProvider>
          <Box style={{ paddingBottom: 100 }}>
            <TooltipRenderer placement="bottom" tooltip={<Text>Tooltip</Text>}>
              {({ triggerProps }) => (
                <Box style={triggerStyles} {...triggerProps} />
              )}
            </TooltipRenderer>
          </Box>
        </StaticTooltipProvider>
      ),
    },
    {
      label: 'Left aligned',
      Example: () => (
        <Inline space="small" align="left">
          <StaticTooltipProvider>
            <Box style={{ paddingBottom: 100 }}>
              <TooltipRenderer
                placement="bottom"
                tooltip={<Text>Tooltip</Text>}
              >
                {({ triggerProps }) => (
                  <Box style={triggerStyles} {...triggerProps} />
                )}
              </TooltipRenderer>
            </Box>
          </StaticTooltipProvider>
        </Inline>
      ),
    },
    {
      label: 'Center aligned',
      Example: () => (
        <Inline space="small" align="center">
          <StaticTooltipProvider>
            <Box style={{ paddingBottom: 100 }}>
              <TooltipRenderer
                placement="bottom"
                tooltip={<Text>Tooltip</Text>}
              >
                {({ triggerProps }) => (
                  <Box style={triggerStyles} {...triggerProps} />
                )}
              </TooltipRenderer>
            </Box>
          </StaticTooltipProvider>
        </Inline>
      ),
    },
    {
      label: 'Right aligned',
      Example: () => (
        <Inline space="small" align="right">
          <StaticTooltipProvider>
            <Box style={{ paddingBottom: 100 }}>
              <TooltipRenderer
                placement="bottom"
                tooltip={<Text>Tooltip</Text>}
              >
                {({ triggerProps }) => (
                  <Box style={triggerStyles} {...triggerProps} />
                )}
              </TooltipRenderer>
            </Box>
          </StaticTooltipProvider>
        </Inline>
      ),
    },
    {
      label: 'Multiple lines of text',
      Example: () => (
        <StaticTooltipProvider>
          <Box style={{ paddingBottom: 200 }}>
            <TooltipRenderer
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
      label: 'Handle long-unbroken text',
      Example: () => (
        <StaticTooltipProvider>
          <Box style={{ paddingBottom: 200 }}>
            <TooltipRenderer
              placement="bottom"
              tooltip={<Text>ReallyLongUnbrokenWordShouldBeHandled</Text>}
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
      Example: () => (
        <StaticTooltipProvider>
          <Box style={{ paddingBottom: 200 }}>
            <TooltipRenderer
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
