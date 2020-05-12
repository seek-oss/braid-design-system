import React, { Fragment, ReactNode } from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Box, Stack, Hidden } from '../';
import { StackProps } from './Stack';
import { Placeholder } from '../private/Placeholder/Placeholder';
import { padding } from '../Box/useBoxStyles.treat';

const spaces = Object.keys(padding.top).filter(
  (space) => space !== 'none',
) as Array<StackProps['space']>;

const Container = ({ children }: { children: ReactNode }) => (
  <Box background="neutralLight" style={{ maxWidth: '300px' }}>
    {children}
  </Box>
);

const docs: ComponentDocs = {
  category: 'Layout',
  screenshotWidths: [320, 768],
  migrationGuide: true,
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
      docsSite: false,
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
        'Test - Hidden stack items with responsive alignment (should be center aligned showing 3 on mobile, right aligned showing 2 and 3 on tablet, left aligned showing 1-3 on desktop)',
      Container,
      docsSite: false,
      Example: () => (
        <Stack space="gutter" align={['center', 'right', 'left']}>
          <Hidden below="desktop">
            <Placeholder width={40} height={40} label="1" />
          </Hidden>
          <Hidden below="tablet">
            <Placeholder width={40} height={40} label="2" />
          </Hidden>
          <Hidden print>
            <Placeholder width={40} height={40} label="3" />
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
        'Test - Hidden stack items with dividers (should show 3 on mobile, 2 and 3 on tablet, and 1-3 on desktop)',
      Container,
      docsSite: false,
      Example: () => (
        <Stack space="gutter" dividers>
          <Hidden below="desktop">
            <Placeholder height={40} label="1" />
          </Hidden>
          <Hidden below="tablet">
            <Placeholder height={40} label="2" />
          </Hidden>
          <Placeholder height={40} label="3" />
          <Hidden screen>
            <Placeholder height={40} label="This should not be visible" />
          </Hidden>
        </Stack>
      ),
    },
  ],
  snippets: [
    {
      name: 'XXSmall Space',
      code: (
        <Stack space="xxsmall">
          <Placeholder height={40} />
          <Placeholder height={40} />
          <Placeholder height={40} />
        </Stack>
      ),
    },
    {
      name: 'XSmall Space',
      code: (
        <Stack space="xsmall">
          <Placeholder height={40} />
          <Placeholder height={40} />
          <Placeholder height={40} />
        </Stack>
      ),
    },
    {
      name: 'Small Space',
      code: (
        <Stack space="small">
          <Placeholder height={40} />
          <Placeholder height={40} />
          <Placeholder height={40} />
        </Stack>
      ),
    },
    {
      name: 'Medium Space',
      code: (
        <Stack space="medium">
          <Placeholder height={40} />
          <Placeholder height={40} />
          <Placeholder height={40} />
        </Stack>
      ),
    },
    {
      name: 'Gutter Space',
      code: (
        <Stack space="gutter">
          <Placeholder height={40} />
          <Placeholder height={40} />
          <Placeholder height={40} />
        </Stack>
      ),
    },
    {
      name: 'Large Space',
      code: (
        <Stack space="large">
          <Placeholder height={40} />
          <Placeholder height={40} />
          <Placeholder height={40} />
        </Stack>
      ),
    },
    {
      name: 'Responsive Space',
      code: (
        <Stack space={['small', 'large', 'none']}>
          <Placeholder height={40} />
          <Placeholder height={40} />
          <Placeholder height={40} />
        </Stack>
      ),
    },
  ],
};

export default docs;
