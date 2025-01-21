import { assignInlineVars } from '@vanilla-extract/dynamic';
import type { ReactNode } from 'react';
import type { ComponentScreenshot } from 'site/types';

import { Box, Page } from '..';
import { Placeholder } from '../private/Placeholder/Placeholder';

import { heightLimit } from './Page.css';

const viewportHeight = 300;

const Container = ({ children }: { children: ReactNode }) => (
  <Box
    position="relative"
    style={assignInlineVars({ [heightLimit]: `${viewportHeight}px` })}
  >
    <Box
      boxShadow="borderNeutralLarge"
      borderRadius="large"
      position="absolute"
      top={0}
      left={0}
      right={0}
      height="full"
      style={{
        maxHeight: viewportHeight,
      }}
    />
    {children}
  </Box>
);

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320],
  screenshotOnlyInWireframe: true,
  examples: [
    {
      label: 'Default',
      Container,
      Example: () => (
        <Page
          footer={
            <Box background="promoteLight">
              <Placeholder label="Footer above fold" height={50} />
            </Box>
          }
        >
          <Placeholder label="Header" height={50} />
          <Placeholder label="Content" height={50} />
        </Page>
      ),
    },
    {
      label: 'Below fold',
      Container,
      Example: () => (
        <Page
          footerPosition="belowFold"
          footer={
            <Box background="promoteLight">
              <Placeholder label="Footer below fold" height={50} />
            </Box>
          }
        >
          <Placeholder label="Header" height={50} />
          <Placeholder label="Content" height={50} />
        </Page>
      ),
    },
    {
      label: 'Default - long page (should push footer below fold organically)',
      Container,
      Example: () => (
        <Page
          footer={
            <Box background="promoteLight">
              <Placeholder label="Footer above fold" height={50} />
            </Box>
          }
        >
          <Placeholder label="Header" height={50} />
          <Placeholder label="Content" height={viewportHeight * 1.2} />
        </Page>
      ),
    },
    {
      label:
        'Below fold - long page (should push footer below fold organically)',
      Container,
      Example: () => (
        <Page
          footerPosition="belowFold"
          footer={
            <Box background="promoteLight">
              <Placeholder label="Footer" height={50} />
            </Box>
          }
        >
          <Placeholder label="Header" height={50} />
          <Placeholder label="Content" height={viewportHeight * 1.2} />
        </Page>
      ),
    },
  ],
};
