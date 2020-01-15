import React, { ReactNode } from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Box } from '../Box/Box';
import { Stack, StackProps } from './Stack';
import { HideCode } from '../private/HideCode';
import { Heading } from '../Heading/Heading';
import { padding } from '../Box/useBoxStyles.treat';

const spaces = Object.keys(padding.top).filter(
  space => space !== 'none',
) as Array<StackProps['space']>;

const Container = ({ children }: { children: ReactNode }) => (
  <Box background="infoLight" style={{ maxWidth: '300px' }}>
    {children}
  </Box>
);

const Item = () => (
  <Box
    background="card"
    boxShadow="borderStandard"
    borderRadius="standard"
    padding="small"
  />
);

const Header = ({ children = 'Content' }: { children?: ReactNode }) => (
  <Box background="card">
    <Heading level="3">{children}</Heading>
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
          <HideCode>
            <Header>{`Stack space: ${space}`}</Header>
          </HideCode>
          <HideCode>
            <Item />
          </HideCode>
          <HideCode>
            <Item />
          </HideCode>
        </Stack>
      ),
    })),
    {
      label: 'Align to center',
      Container,
      Example: () => (
        <Stack space="gutter" align="center">
          <Box padding="small" background="info" style={{ width: 50 }} />
          <Box padding="small" background="info" style={{ width: 70 }} />
          <Box padding="small" background="info" style={{ width: 100 }} />
        </Stack>
      ),
    },
    {
      label: 'Align to right',
      Container,
      Example: () => (
        <Stack space="gutter" align="right">
          <Box padding="small" background="info" style={{ width: 50 }} />
          <Box padding="small" background="info" style={{ width: 70 }} />
          <Box padding="small" background="info" style={{ width: 100 }} />
        </Stack>
      ),
    },
    {
      label:
        'Responsive alignment (e.g. center on mobile, left from tablet upwards)',
      Container,
      Example: () => (
        <Stack space="gutter" align={['center', 'left']}>
          <Box padding="small" background="info" style={{ width: 50 }} />
          <Box padding="small" background="info" style={{ width: 70 }} />
          <Box padding="small" background="info" style={{ width: 100 }} />
        </Stack>
      ),
    },
    {
      label: 'Dividers',
      Container,
      Example: () => (
        <Stack space="gutter" dividers>
          <HideCode>
            <Header>Stack with dividers</Header>
          </HideCode>
          <HideCode>
            <Item />
          </HideCode>
          <HideCode>
            <Item />
          </HideCode>
        </Stack>
      ),
    },
  ],
};

export default docs;
