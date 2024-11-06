import React from 'react';
import type { ComponentScreenshot } from 'site/types';
import { Badge, Inline, Heading, List, Text, Stack, Box, Tiles } from '../';
import { heading, textSizeUntrimmed } from '../../css/typography.css';
import { LayoutTest } from '../../utils/LayoutTest';

const textSizes = Object.keys(textSizeUntrimmed) as Array<
  keyof typeof textSizeUntrimmed
>;
const headingLevels = Object.keys(heading).sort() as Array<
  keyof typeof heading
>;

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320],
  examples: [
    {
      label: 'Regular Badge',
      background: 'surface',
      Example: () => <Badge tone="positive">Regular</Badge>,
    },
    {
      label: 'Strong Badge',
      Example: () => (
        <Badge tone="positive" weight="strong">
          Strong
        </Badge>
      ),
    },
    {
      label: 'Badge with Vertical Bleed',
      background: 'surface',
      Example: () => (
        <Inline space="xsmall" alignY="center">
          <Heading level="4">Heading</Heading>
          <Badge tone="positive" bleedY>
            New
          </Badge>
        </Inline>
      ),
    },
    {
      label: 'Positive Badge',
      background: 'surface',
      Example: () => <Badge tone="positive">Positive</Badge>,
    },
    {
      label: 'Strong Positive Badge',
      Example: () => (
        <Badge tone="positive" weight="strong">
          Positive
        </Badge>
      ),
    },
    {
      label: 'Critical Badge',
      background: 'surface',
      Example: () => <Badge tone="critical">Critical</Badge>,
    },
    {
      label: 'Strong Critical Badge',
      Example: () => (
        <Badge tone="critical" weight="strong">
          Critical
        </Badge>
      ),
    },
    {
      label: 'Caution Badge',
      background: 'surface',
      Example: () => <Badge tone="caution">Caution</Badge>,
    },
    {
      label: 'Strong Caution Badge',
      Example: () => (
        <Badge tone="caution" weight="strong">
          Caution
        </Badge>
      ),
    },
    {
      label: 'Info Badge',
      background: 'surface',
      Example: () => <Badge tone="info">Info</Badge>,
    },
    {
      label: 'Strong Info Badge',
      Example: () => (
        <Badge tone="info" weight="strong">
          Info
        </Badge>
      ),
    },
    {
      label: 'Promote Badge',
      background: 'surface',
      Example: () => <Badge tone="promote">Promote</Badge>,
    },
    {
      label: 'Strong Promote Badge',
      Example: () => (
        <Badge tone="promote" weight="strong">
          Promote
        </Badge>
      ),
    },
    {
      label: 'Neutral Badge',
      background: 'surface',
      Example: () => <Badge tone="neutral">Neutral</Badge>,
    },
    {
      label: 'Strong Neutral Badge',
      Example: () => (
        <Badge tone="neutral" weight="strong">
          Neutral
        </Badge>
      ),
    },
    {
      label: 'Test: Badge text should follow tone not default set by `List`',
      Example: () => (
        <List tone="secondary">
          <Badge tone="critical">Critical</Badge>
          <Badge tone="critical" weight="strong">
            Critical
          </Badge>
        </List>
      ),
    },
    {
      label: 'Test: Badge should not impact line height of text',
      Example: () => (
        <Text>
          Incididunt consequat id nisi est dolore ipsum culpa eiusmod aliquip
          est deserunt incididunt aliqua culpa.{' '}
          <Badge tone="critical" weight="strong">
            Critical
          </Badge>{' '}
          Incididunt consequat id nisi est dolore ipsum culpa eiusmod aliquip
          est deserunt incididunt aliqua culpa.
        </Text>
      ),
    },
    {
      label: 'Test: Badge should not impact line height of text',
      Example: () => (
        <Stack space="large">
          {textSizes.map((size) => (
            <Tiles key={size} space="none" columns={2}>
              <Box position="relative">
                <Box style={{ border: '1px solid red' }} />
                <Text size={size}>
                  Hg{' '}
                  <Badge tone="positive" weight="strong">
                    Badge
                  </Badge>
                </Text>
                <Box style={{ border: '1px solid red' }} />
              </Box>
              <Box position="relative">
                <Box style={{ border: '1px solid green' }} />
                <Text size={size}>Hg</Text>
                <Box style={{ border: '1px solid green' }} />
              </Box>
            </Tiles>
          ))}
          {headingLevels.reverse().map((level) => (
            <Tiles key={level} space="none" columns={2}>
              <Box position="relative">
                <Box style={{ border: '1px solid red' }} />
                <Heading level={level}>
                  Hg{' '}
                  <Badge tone="positive" weight="strong">
                    Badge
                  </Badge>
                </Heading>
                <Box style={{ border: '1px solid red' }} />
              </Box>
              <Box position="relative">
                <Box style={{ border: '1px solid green' }} />
                <Heading level={level}>Hg</Heading>
                <Box style={{ border: '1px solid green' }} />
              </Box>
            </Tiles>
          ))}
        </Stack>
      ),
    },
    {
      label: 'Layout',
      Example: () => (
        <Box maxWidth="xsmall">
          <LayoutTest>
            <Box>
              <Badge tone="positive" weight="strong">
                Lorem et veniam
              </Badge>
              <Badge tone="positive" weight="strong">
                Culpa Lorem et veniam tempor eiusmod fugiat mollit cillum. Do
                velit eu in.
              </Badge>
            </Box>
          </LayoutTest>
        </Box>
      ),
    },
  ],
};
