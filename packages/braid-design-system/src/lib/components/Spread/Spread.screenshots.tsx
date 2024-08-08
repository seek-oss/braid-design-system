import React from 'react';
import type { ComponentScreenshot } from 'site/types';
import { Spread, Tiles } from '../';
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
      label: 'Horizontal single full width',
      Example: () => (
        <Spread space="large">
          <Placeholder height={60} width="100%" />
          <Placeholder height={60} width={80} />
        </Spread>
      ),
    },
    {
      label: 'Horizontal both full width',
      Example: () => (
        <Spread space="large">
          <Placeholder height={60} width="100%" />
          <Placeholder height={60} width="100%" />
        </Spread>
      ),
    },
    {
      label: 'Horizontal single child full width',
      Example: () => (
        <Spread space="large">
          <Placeholder height={60} width="100%" />
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
            <Placeholder height={20} width={80} />
          </Spread>
          <Spread direction="vertical" space="large">
            <Placeholder height={20} width={50} />
            <Placeholder height={20} width={80} />
          </Spread>
          <Spread direction="vertical" space="large">
            <Placeholder height={100} width={50} />
            <Placeholder height={20} width={80} />
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
  ],
};
