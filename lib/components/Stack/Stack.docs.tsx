import React, { ReactNode } from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Box, Stack } from '../';
import { StackProps } from './Stack';
import { Placeholder } from '../private/Placeholder/Placeholder';
import { padding } from '../Box/useBoxStyles.treat';

const spaces = Object.keys(padding.top).filter(
  space => space !== 'none',
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
    ...spaces.map(space => ({
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
