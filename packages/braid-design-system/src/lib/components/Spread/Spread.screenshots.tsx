import React from 'react';
import type { ComponentScreenshot } from 'site/types';
import { Box, Spread, Stack, Text, Tiles } from '../';
import { Placeholder } from '../private/Placeholder/Placeholder';

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320, 768, 992, 1200],
  screenshotOnlyInWireframe: true,
  examples: [
    {
      label: 'Horizontal',
      Example: () => (
        <Spread space="large">
          <Placeholder height={60} width={50} />
          <Placeholder height={60} width={80} />
        </Spread>
      ),
    },
    {
      label:
        'Horizontal single full width (should be content width and spread to each side)',
      Example: () => (
        <Spread space="large">
          <Box background="neutral" width="full" padding="small">
            <Text>100% width</Text>
          </Box>
          <Box background="neutral" style={{ width: 80 }} padding="small">
            <Text>80px</Text>
          </Box>
        </Spread>
      ),
    },
    {
      label:
        'Horizontal both full width (should be content width and spread to each side)',
      Example: () => (
        <Spread space="large">
          <Box background="neutral" width="full" padding="small">
            <Text>100% width</Text>
          </Box>
          <Box background="neutral" width="full" padding="small">
            <Text>100% width</Text>
          </Box>
        </Spread>
      ),
    },
    {
      label: 'Horizontal single child full width (should be content width)',
      Example: () => (
        <Spread space="large">
          <Box background="neutral" width="full" padding="small">
            <Text>100% width</Text>
          </Box>
        </Spread>
      ),
    },
    {
      label: 'Horizontal responsive space',
      Example: () => (
        <Spread
          space={{
            mobile: 'small',
            tablet: 'large',
            desktop: 'xlarge',
            wide: 'xxlarge',
          }}
        >
          <Placeholder height={60} width="100%" />
          <Placeholder height={60} width={80} />
        </Spread>
      ),
    },
    {
      label: 'Horizontal alignY top',
      Example: () => (
        <Spread space="large" alignY="top">
          <Placeholder height={20} width={80} label="top" />
          <Placeholder height={60} width="100%" />
        </Spread>
      ),
    },
    {
      label: 'Horizontal alignY center',
      Example: () => (
        <Spread space="large" alignY="center">
          <Placeholder height={20} width={80} label="center" />
          <Placeholder height={60} width="100%" />
        </Spread>
      ),
    },
    {
      label: 'Horizontal alignY bottom',
      Example: () => (
        <Spread space="large" alignY="bottom">
          <Placeholder height={20} width={80} label="bottom" />
          <Placeholder height={60} width="100%" />
        </Spread>
      ),
    },
    {
      label: 'Horizontal align center (no impact)',
      Example: () => (
        <Spread space="large" align="center">
          <Placeholder height={60} width="100%" />
          <Placeholder height={60} width={80} />
        </Spread>
      ),
    },
    {
      label: 'Vertical',
      Example: () => (
        <Tiles space="large" columns={3}>
          <Spread direction="vertical" space="large">
            <Placeholder height={60} width={50} />
            <Placeholder height={20} />
          </Spread>
          <Spread direction="vertical" space="large">
            <Placeholder height={20} width={50} />
            <Placeholder height={20} />
          </Spread>
          <Spread direction="vertical" space="large">
            <Placeholder height={100} width={50} />
            <Placeholder height={20} />
          </Spread>
        </Tiles>
      ),
    },
    {
      label: 'Vertical single full width',
      Example: () => (
        <Spread direction="vertical" space="large">
          <Placeholder height={60} width="100%" />
          <Placeholder height={20} width={80} />
        </Spread>
      ),
    },
    {
      label: 'Vertical responsive space',
      Example: () => (
        <Spread
          direction="vertical"
          space={{
            mobile: 'small',
            tablet: 'large',
            desktop: 'xlarge',
            wide: 'xxlarge',
          }}
        >
          <Placeholder height={60} width="100%" />
          <Placeholder height={60} width={80} />
        </Spread>
      ),
    },
    {
      label: 'Vertical align left',
      Example: () => (
        <Spread direction="vertical" space="large" align="left">
          <Placeholder height={20} width={80} label="left" />
          <Placeholder height={60} width={100} />
        </Spread>
      ),
    },
    {
      label: 'Vertical align center',
      Example: () => (
        <Spread direction="vertical" space="large" align="center">
          <Placeholder height={20} width={80} label="center" />
          <Placeholder height={60} width={100} />
        </Spread>
      ),
    },
    {
      label: 'Vertical align right',
      Example: () => (
        <Spread direction="vertical" space="large" align="right">
          <Placeholder height={20} width={80} label="right" />
          <Placeholder height={60} width={100} />
        </Spread>
      ),
    },
    {
      label: 'Vertical alignY center (no impact)',
      Example: () => (
        <Spread direction="vertical" space="large" alignY="center">
          <Placeholder height={60} width="100%" />
          <Placeholder height={60} width={80} />
        </Spread>
      ),
    },
    {
      label:
        'Test: Horizontal without alignY (`Content` should align top and not stretch)',
      Example: () => (
        <Spread space="large">
          <Box background="neutral" style={{ width: 105 }} padding="small">
            <Text>Wrapping lines of content</Text>
          </Box>
          <Box background="promote" padding="small">
            <Text>Content</Text>
          </Box>
        </Spread>
      ),
    },
    {
      label:
        'Test: Text truncation horizontal, should consume available space without pushing `Content` out of screen',
      Example: () => (
        <Spread space="large" alignY="center">
          <Text maxLines={1}>
            Should end in ellipsis. Another example of really really long text
            that will truncate even on the largest of screen resolutions.
          </Text>
          <Box background="neutral" padding="small">
            <Text>Content</Text>
          </Box>
        </Spread>
      ),
    },
    {
      label:
        'Test: Text truncation vertical, should be limited to container width and respect `align` prop',
      Example: () => (
        <Stack space="xlarge">
          {(['left', 'center', 'right'] as const).map((align) => (
            <Spread
              space="medium"
              direction="vertical"
              align={align}
              key={align}
            >
              <Text maxLines={1}>
                Should end in ellipsis. Another example of really really long
                text that will truncate even on the largest of screen
                resolutions.
              </Text>
              <Box background="promote" padding="small">
                <Text>Align {align}</Text>
              </Box>
              <Box background="neutral" width="full" padding="large">
                <Text>Full width</Text>
              </Box>
            </Spread>
          ))}
        </Stack>
      ),
    },
  ],
};
