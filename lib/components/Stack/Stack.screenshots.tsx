import React, { Fragment, ReactNode } from 'react';
import { ComponentScreenshot } from '../../../site/src/types';
import { Box, Stack, Hidden } from '../';
import { Placeholder } from '../private/Placeholder/Placeholder';
import { spaces } from '../../utils/docsHelpers';

const Container = ({ children }: { children: ReactNode }) => (
  <Box style={{ maxWidth: '300px' }}>{children}</Box>
);

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320, 768, 992, 1200],
  screenshotOnlyInWireframe: true,
  examples: [
    ...spaces.map((space) => ({
      label: `Space: ${space}`,
      Container,
      Example: () => (
        <Stack space={space}>
          <Placeholder height={40} />
          <Placeholder height={40} />
          <Placeholder height={40} />
        </Stack>
      ),
    })),
    {
      label: 'Align to center',
      Container,
      Example: () => (
        <Stack space="gutter" align="center">
          <Placeholder height={40} width={40} />
          <Placeholder height={40} width={60} />
          <Placeholder height={40} width={80} />
        </Stack>
      ),
    },
    {
      label: 'Align to right',
      Container,
      Example: () => (
        <Stack space="gutter" align="right">
          <Placeholder height={40} width={40} />
          <Placeholder height={40} width={60} />
          <Placeholder height={40} width={80} />
        </Stack>
      ),
    },
    {
      label:
        'Responsive alignment (e.g. center on mobile, left from tablet upwards)',
      Container,
      Example: () => (
        <Stack space="gutter" align={['center', 'left']}>
          <Placeholder height={40} width={40} />
          <Placeholder height={40} width={60} />
          <Placeholder height={40} width={80} />
        </Stack>
      ),
    },
    {
      label: 'Dividers',
      Container,
      Example: () => (
        <Stack space="gutter" dividers>
          <Placeholder height={40} />
          <Placeholder height={40} />
          <Placeholder height={40} />
        </Stack>
      ),
    },
    {
      label: 'Strong dividers',
      Container,
      Example: () => (
        <Stack space="gutter" dividers="strong">
          <Placeholder height={40} />
          <Placeholder height={40} />
          <Placeholder height={40} />
        </Stack>
      ),
    },
    {
      label:
        'Test - Should flatten fragments (6 placeholders should be evenly spaced)',
      Container,
      Example: () => (
        <Stack space="small">
          <Fragment>
            <Placeholder height={40} />
            <Placeholder height={40} />
            <Fragment>
              <Placeholder height={40} />
              <Fragment>
                <Placeholder height={40} />
              </Fragment>
            </Fragment>
          </Fragment>
          <Placeholder height={40} />
          <Placeholder height={40} />
        </Stack>
      ),
    },
    {
      label: 'Responsively hiding stack items',
      Container,
      Example: () => (
        <Stack space="gutter">
          <Placeholder height={40} label="1" />
          <Hidden below="tablet">
            <Placeholder height={40} label="2" />
          </Hidden>
          <Hidden above="mobile">
            <Placeholder height={40} label="3" />
          </Hidden>
          <Placeholder height={40} label="4" />
        </Stack>
      ),
    },
    {
      label:
        'Test - Hidden stack items with responsive alignment (should be center aligned showing 4 + 5 + 6 on mobile, right aligned showing 3 + 4 + 5 + 6 on tablet, left aligned showing 2 + 3 + 4 + 6 on desktop, left aligned showing 1 + 2 + 3 + 4 on wide)',
      Container,
      Example: () => (
        <Stack space="gutter" align={['center', 'right', 'left']}>
          <Hidden below="wide">
            <Placeholder width={40} height={40} label="1" />
          </Hidden>
          <Hidden below="desktop">
            <Placeholder width={40} height={40} label="2" />
          </Hidden>
          <Hidden below="tablet">
            <Placeholder width={40} height={40} label="3" />
          </Hidden>
          <Hidden print>
            <Placeholder width={40} height={40} label="4" />
          </Hidden>
          <Hidden above="tablet">
            <Placeholder width={40} height={40} label="5" />
          </Hidden>
          <Hidden above="desktop">
            <Placeholder width={40} height={40} label="6" />
          </Hidden>
          <Hidden screen>
            <Placeholder
              width={40}
              height={40}
              label="This should not be visible"
            />
          </Hidden>
        </Stack>
      ),
    },
    {
      label:
        'Test - Hidden stack items with dividers (should show 4 + 5 + 6 on mobile, 3 + 4 + 5 + 6 on tablet, 2 + 3 + 4 + 6 on desktop, 1 + 2 + 3 + 4 on wide)',
      Container,
      Example: () => (
        <Stack space="gutter" dividers>
          <Hidden below="wide">
            <Placeholder height={40} label="1" />
          </Hidden>
          <Hidden below="desktop">
            <Placeholder height={40} label="2" />
          </Hidden>
          <Hidden below="tablet">
            <Placeholder height={40} label="3" />
          </Hidden>
          <Placeholder height={40} label="4" />
          <Hidden above="tablet">
            <Placeholder height={40} label="5" />
          </Hidden>
          <Hidden above="desktop">
            <Placeholder height={40} label="6" />
          </Hidden>
          <Hidden screen>
            <Placeholder height={40} label="This should not be visible" />
          </Hidden>
        </Stack>
      ),
    },
  ],
};
