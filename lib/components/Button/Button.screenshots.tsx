import React, { Fragment, ReactNode } from 'react';
import { ComponentScreenshot } from '../../../site/src/types';
import { Box, Button } from '../';
import { Inline } from '../Inline/Inline';
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
        <Inline space="small" collapseBelow="desktop">
          <Button>Solid</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="soft">Soft</Button>
          <Button variant="transparent">Transparent</Button>
        </Inline>
      ),
    },
    {
      label: 'Critical',
      Container,
      Example: () => (
        <Inline space="small" collapseBelow="desktop">
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
      Container,
      Example: () => (
        <Inline space="small" collapseBelow="desktop">
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
      label: 'Small size',
      Container,
      Example: () => (
        <Inline space="small" collapseBelow="desktop">
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
      background: 'card',
      Example: () => (
        <Box background="neutralLight" borderRadius="standard" padding="gutter">
          <Box background="card">
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
      background: 'card',
      Example: () => (
        <Box background="neutralLight" borderRadius="standard" padding="gutter">
          <Box background="card">
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
      label: 'Legacy weights',
      Container,
      Example: () => (
        <Inline space="small" collapseBelow="desktop">
          <Button weight="strong">Strong</Button>
          <Button weight="regular">Regular</Button>
          <Button weight="weak">Weak</Button>
        </Inline>
      ),
    },
    {
      label: 'Contrast',
      Container,
      Example: () => (
        <Fragment>
          {backgrounds.map((background) => (
            <Box key={background} background={background} padding="medium">
              <Inline space="small" collapseBelow="desktop">
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
      Container,
      Example: () => (
        <Fragment>
          {backgrounds.map((background) => (
            <Box key={background} background={background} padding="medium">
              <Inline space="small" collapseBelow="desktop">
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
      Container,
      Example: () => (
        <Fragment>
          {backgrounds.map((background) => (
            <Box key={background} background={background} padding="medium">
              <Inline space="small" collapseBelow="desktop">
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
  ],
};
