import React, { ReactNode } from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Placeholder } from '../private/Placeholder/Placeholder';
import { InlineProps } from './Inline';
import { Box, Inline, Stack, Text, TextLink } from '../';
import { padding } from '../Box/useBoxStyles.treat';

const spaces = Object.keys(padding.top).filter(
  (space) => space !== 'none',
) as Array<InlineProps['space']>;

const Container = ({ children }: { children: ReactNode }) => (
  <Box background="neutralLight" style={{ maxWidth: '240px' }}>
    {children}
  </Box>
);

const docs: ComponentDocs = {
  category: 'Layout',
  screenshotWidths: [320, 768, 1200],
  description: (
    <Stack space="large">
      <Text>
        Renders content horizontally with consistent{' '}
        <TextLink href="/foundations/layout#Spacing">spacing</TextLink> between
        all items, spanning multiple lines if needed.
      </Text>
    </Stack>
  ),
  examples: [
    {
      label: 'Basic example',
      Container,
      storybook: false,
      Example: () => (
        <Inline space="small">
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
        </Inline>
      ),
    },
    ...spaces.map((space) => ({
      label: `Space: ${space}`,
      Container,
      docsSite: false,
      Example: () => (
        <Inline space={space}>
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
        </Inline>
      ),
    })),
    {
      label: "Responsive space, e.g. ['xxsmall', 'medium']",
      Container,
      Example: () => (
        <Inline space={['xxsmall', 'medium']}>
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
        </Inline>
      ),
    },
    {
      label: 'Align horizontally to center',
      Container,
      Example: () => (
        <Inline space="small" align="center">
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
        </Inline>
      ),
    },
    {
      label: 'Align horizontally to right',
      Container,
      Example: () => (
        <Inline space="small" align="right">
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
        </Inline>
      ),
    },
    {
      label:
        'Responsive alignment (e.g. center on mobile, left from tablet upwards)',
      Container,
      Example: () => (
        <Inline space="small" align={['center', 'left']}>
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
        </Inline>
      ),
    },
    {
      label: 'Align vertically',
      Container,
      Example: () => (
        <Inline space="small" alignY="center">
          <Placeholder width={48} height={40} />
          <Placeholder width={48} height={100} />
          <Placeholder width={48} height={60} />
        </Inline>
      ),
    },
    {
      label: 'Collapse below tablet',
      Container,
      Example: () => (
        <Inline space="small" collapseBelow="tablet">
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
        </Inline>
      ),
    },
    {
      label: 'Collapse below desktop',
      Container,
      Example: () => (
        <Inline space="small" collapseBelow="desktop">
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
        </Inline>
      ),
    },
    {
      label:
        'Collapse below desktop with responsive space (e.g. "xxsmall" on mobile, "small" on tablet, "large" on desktop)',
      Container,
      Example: () => (
        <Inline space={['xxsmall', 'medium', 'large']} collapseBelow="desktop">
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
        </Inline>
      ),
    },
    {
      label: 'Collapse below desktop with alignment (e.g. "center")',
      Container,
      Example: () => (
        <Inline space="small" collapseBelow="desktop" align="center">
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
        </Inline>
      ),
    },
    {
      label:
        'Test - collapseBelow + align: On mobile should be vertical and left aligned, on tablet should be vertical and centre aligned, on desktop should be horizontal and right aligned',
      docsSite: false,
      Container,
      Example: () => (
        <Inline
          space="small"
          collapseBelow="desktop"
          align={['left', 'center', 'right']}
        >
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
        </Inline>
      ),
    },
    {
      label:
        'Test - collapseBelow + align + reverse: On mobile should be vertical and left aligned, on tablet should be reversed horizontally and centre aligned, on desktop should be reversed horizontally and right aligned',
      docsSite: false,
      Container,
      Example: () => (
        <Inline
          space="small"
          collapseBelow="tablet"
          align={['left', 'center', 'right']}
          reverse
        >
          <Placeholder width={48} height={48} label="1" />
          <Placeholder width={48} height={48} label="2" />
          <Placeholder width={48} height={48} label="3" />
          <Placeholder width={48} height={48} label="4" />
          <Placeholder width={48} height={48} label="5" />
          <Placeholder width={48} height={48} label="6" />
        </Inline>
      ),
    },
    {
      label:
        'Test - collapseBelow + align + reverse: On mobile should be vertical and left aligned, on tablet should be vertical and centre aligned, on desktop should be reversed horizontally and right aligned',
      docsSite: false,
      Container,
      Example: () => (
        <Inline
          space="small"
          collapseBelow="desktop"
          align={['left', 'center', 'right']}
          reverse
        >
          <Placeholder width={48} height={48} label="1" />
          <Placeholder width={48} height={48} label="2" />
          <Placeholder width={48} height={48} label="3" />
          <Placeholder width={48} height={48} label="4" />
          <Placeholder width={48} height={48} label="5" />
          <Placeholder width={48} height={48} label="6" />
        </Inline>
      ),
    },
  ],
  snippets: [
    {
      name: 'Small space',
      code: (
        <Inline space="small">
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
        </Inline>
      ),
    },
    {
      name: 'Medium space',
      code: (
        <Inline space="medium">
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
        </Inline>
      ),
    },
    {
      name: 'Responsive space',
      code: (
        <Inline space={['small', 'large']}>
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
        </Inline>
      ),
    },
    {
      name: 'Responsive horizontal alignment',
      code: (
        <Inline space="small" align={['center', 'left']}>
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
        </Inline>
      ),
    },
    {
      name: 'Vertically centered',
      code: (
        <Inline space="small" alignY="center">
          <Placeholder width={48} height={40} />
          <Placeholder width={48} height={100} />
          <Placeholder width={48} height={60} />
        </Inline>
      ),
    },
  ],
};

export default docs;
