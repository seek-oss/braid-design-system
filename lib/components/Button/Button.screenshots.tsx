import React, { Fragment, ReactNode } from 'react';
import { ComponentScreenshot } from '../../../site/src/types';
import { Box, Button } from '../';
import { Inline } from '../Inline/Inline';
import { Stack } from '../Stack/Stack';
import { Heading } from '../Heading/Heading';
import { backgrounds } from '../../utils/docsHelpers';

const Container = ({ children }: { children: ReactNode }) => (
  <div style={{ maxWidth: '300px' }}>{children}</div>
);

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320],
  examples: [
    {
      label: 'Default',
      Container,
      Example: () => (
        <Stack space="small">
          <Button>Solid</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="soft">Soft</Button>
          <Button variant="transparent">Transparent</Button>
        </Stack>
      ),
    },
    {
      label: 'Critical',
      Container,
      Example: () => (
        <Stack space="small">
          <Button tone="critical">Solid</Button>
          <Button tone="critical" variant="ghost">
            Ghost
          </Button>
          <Button tone="critical" variant="soft">
            Soft
          </Button>
          <Button tone="critical" variant="transparent">
            Transparent
          </Button>
        </Stack>
      ),
    },
    {
      label: 'BrandAccent',
      Container,
      Example: () => (
        <Stack space="small">
          <Button tone="brandAccent">Solid</Button>
          <Button tone="brandAccent" variant="ghost">
            Ghost
          </Button>
          <Button tone="brandAccent" variant="soft">
            Soft
          </Button>
          <Button tone="brandAccent" variant="transparent">
            Transparent
          </Button>
        </Stack>
      ),
    },
    {
      label: 'Neutral',
      Container,
      Example: () => (
        <Stack space="small">
          <Button tone="neutral">Solid</Button>
          <Button tone="neutral" variant="ghost">
            Ghost
          </Button>
          <Button tone="neutral" variant="soft">
            Soft
          </Button>
          <Button tone="neutral" variant="transparent">
            Transparent
          </Button>
        </Stack>
      ),
    },
    {
      label: 'Small size',
      Container,
      Example: () => (
        <Stack space="small">
          <Button size="small">Solid</Button>
          <Button size="small" variant="ghost">
            Ghost
          </Button>
          <Button size="small" variant="soft">
            Soft
          </Button>
          <Button size="small" variant="transparent">
            Transparent
          </Button>
        </Stack>
      ),
    },
    {
      label: 'With vertical bleed (standard)',
      background: 'surface',
      Example: () => (
        <Box background="neutralLight" borderRadius="standard" padding="gutter">
          <Box background="surface">
            <Inline space="xsmall" alignY="center">
              <Heading level="2">Heading</Heading>
              <Button bleedY>Button</Button>
            </Inline>
          </Box>
        </Box>
      ),
    },
    {
      label: 'With vertical bleed (small)',
      background: 'surface',
      Example: () => (
        <Box background="neutralLight" borderRadius="standard" padding="gutter">
          <Box background="surface">
            <Inline space="xsmall" alignY="center">
              <Heading level="2">Heading</Heading>
              <Button bleedY size="small">
                Button
              </Button>
            </Inline>
          </Box>
        </Box>
      ),
    },
    {
      label: 'Contrast',
      Container,
      Example: () => (
        <Fragment>
          {backgrounds.map((background) => (
            <Box key={background} background={background} padding="medium">
              <Stack space="small">
                <Button>Solid</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="soft">Soft</Button>
                <Button variant="transparent">Transparent</Button>
              </Stack>
            </Box>
          ))}
        </Fragment>
      ),
    },
    {
      label: 'Contrast - critical',
      Container,
      Example: () => (
        <Fragment>
          {backgrounds.map((background) => (
            <Box key={background} background={background} padding="medium">
              <Stack space="small">
                <Button tone="critical">Solid</Button>
                <Button tone="critical" variant="ghost">
                  Ghost
                </Button>
                <Button tone="critical" variant="soft">
                  Soft
                </Button>
                <Button tone="critical" variant="transparent">
                  Transparent
                </Button>
              </Stack>
            </Box>
          ))}
        </Fragment>
      ),
    },
    {
      label: 'Contrast - brandAccent',
      Container,
      Example: () => (
        <Fragment>
          {backgrounds.map((background) => (
            <Box key={background} background={background} padding="medium">
              <Stack space="small">
                <Button tone="brandAccent">Solid</Button>
                <Button tone="brandAccent" variant="ghost">
                  Ghost
                </Button>
                <Button tone="brandAccent" variant="soft">
                  Soft
                </Button>
                <Button tone="brandAccent" variant="transparent">
                  Transparent
                </Button>
              </Stack>
            </Box>
          ))}
        </Fragment>
      ),
    },
    {
      label: 'Contrast - neutral',
      Container,
      Example: () => (
        <Fragment>
          {backgrounds.map((background) => (
            <Box key={background} background={background} padding="medium">
              <Stack space="small">
                <Button tone="neutral">Solid</Button>
                <Button tone="neutral" variant="ghost">
                  Ghost
                </Button>
                <Button tone="neutral" variant="soft">
                  Soft
                </Button>
                <Button tone="neutral" variant="transparent">
                  Transparent
                </Button>
              </Stack>
            </Box>
          ))}
        </Fragment>
      ),
    },
  ],
};
