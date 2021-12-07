import React, { Fragment } from 'react';
import { ComponentScreenshot } from '../../../site/src/types';
import { Button } from '../';
// TODO: COLORMODE RELEASE
// Use public import
import { Box } from '../Box/Box';
import { Inline } from '../Inline/Inline';
import { Heading } from '../Heading/Heading';
import { backgrounds } from '../../utils/docsHelpers';

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [768],
  examples: [
    {
      label: 'Default',
      Example: () => (
        <Inline space="small">
          <Button>Solid</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="soft">Soft</Button>
          <Button variant="transparent">Transparent</Button>
        </Inline>
      ),
    },
    {
      label: 'Critical',
      Example: () => (
        <Inline space="small">
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
        </Inline>
      ),
    },
    {
      label: 'BrandAccent',
      Example: () => (
        <Inline space="small">
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
        </Inline>
      ),
    },
    {
      label: 'Neutral',
      Example: () => (
        <Inline space="small">
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
        </Inline>
      ),
    },
    {
      label: 'Small size',
      Example: () => (
        <Inline space="small">
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
        </Inline>
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
      Example: () => (
        <Fragment>
          {backgrounds.map((background) => (
            <Box key={background} background={background} padding="small">
              <Inline space="small">
                <Button>Solid</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="soft">Soft</Button>
                <Button variant="transparent">Transparent</Button>
              </Inline>
            </Box>
          ))}
        </Fragment>
      ),
    },
    {
      label: 'Contrast - critical',
      Example: () => (
        <Fragment>
          {backgrounds.map((background) => (
            <Box key={background} background={background} padding="small">
              <Inline space="small">
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
              </Inline>
            </Box>
          ))}
        </Fragment>
      ),
    },
    {
      label: 'Contrast - brandAccent',
      Example: () => (
        <Fragment>
          {backgrounds.map((background) => (
            <Box key={background} background={background} padding="small">
              <Inline space="small">
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
              </Inline>
            </Box>
          ))}
        </Fragment>
      ),
    },
    {
      label: 'Contrast - neutral',
      Example: () => (
        <Fragment>
          {backgrounds.map((background) => (
            <Box key={background} background={background} padding="small">
              <Inline space="small">
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
              </Inline>
            </Box>
          ))}
        </Fragment>
      ),
    },
  ],
};
