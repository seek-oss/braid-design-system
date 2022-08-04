import React from 'react';
import source from '../../utils/source.macro';
import { ComponentDocs } from '../../../site/src/types';
import { Box, Heading, Stack, Text, Strong } from '../';
import { TextLink } from '../TextLink/TextLink';

const docs: ComponentDocs = {
  category: 'Content',
  migrationGuide: true,
  Example: () =>
    source(
      <Stack space="large">
        <Stack space="medium">
          <Heading level="1">Heading Level 1 Regular</Heading>
          <Heading level="1" weight="weak">
            Heading Level 1 Weak
          </Heading>
        </Stack>
        <Stack space="medium">
          <Heading level="2">Heading Level 2 Regular</Heading>
          <Heading level="2" weight="weak">
            Heading Level 2 Weak
          </Heading>
        </Stack>
        <Stack space="small">
          <Heading level="3">Heading Level 3 Regular</Heading>
          <Heading level="3" weight="weak">
            Heading Level 3 Weak
          </Heading>
        </Stack>
        <Stack space="small">
          <Heading level="4">Heading Level 4 Regular</Heading>
          <Heading level="4" weight="weak">
            Heading Level 4 Weak
          </Heading>
        </Stack>
      </Stack>,
    ),
  alternatives: [
    {
      name: 'Accordion',
      description: 'For expanding/collapsing sections with headings.',
    },
    {
      name: 'Text',
      description: 'For body copy.',
    },
  ],
  additional: [
    {
      label: 'Custom semantics',
      description: (
        <Text>
          By default, the semantic heading level matches the visual heading
          level, e.g.{' '}
          <Strong>
            <Box component="pre" display="inline">
              {'<Heading level="2">'}
            </Box>
          </Strong>{' '}
          will render an <Strong>h2</Strong> element. If you need the semantics
          to be different from the visuals, you can provide the desired HTML tag
          via the <Strong>component</Strong> prop.
        </Text>
      ),
      Example: () =>
        source(
          <Heading level="2" component="h3">
            This looks like an H2, but it’s actually an H3.
          </Heading>,
        ),
    },
    {
      label: 'Alignment',
      description: (
        <Text>
          Headings can be aligned via the <Strong>align</Strong> prop. If you
          need alignment to differ across various screen sizes, you can provide
          responsive values describing the alignment of each breakpoint, e.g.{' '}
          <Strong>{"align={{ mobile: 'center', tablet: 'left' }}"}</Strong>
        </Text>
      ),
      Example: () =>
        source(
          <Stack space="large" dividers>
            <Heading level="2" align="left">
              Left
            </Heading>
            <Heading level="2" align="center">
              Center
            </Heading>
            <Heading level="2" align="right">
              Right
            </Heading>
            <Heading level="2" align={{ mobile: 'center', tablet: 'left' }}>
              Center on mobile
            </Heading>
          </Stack>,
        ),
    },
    {
      label: 'Truncation',
      description: (
        <Text>
          If you’re displaying user-generated content that may not fit within
          your layout, you can truncate text with the <Strong>truncate</Strong>{' '}
          prop.
        </Text>
      ),
      Example: () =>
        source(
          <Box style={{ width: 215 }}>
            <Heading level="2" truncate>
              Really long text that won’t fit in the layout
            </Heading>
          </Box>,
        ),
    },
    {
      label: 'Contrast',
      description: (
        <>
          <Text>
            To ensure headings have sufficient contrast, when on a dark
            background the foreground colour is inverted.
          </Text>
          <Text>
            When using custom backgrounds or images on a{' '}
            <TextLink href="components/Box">Box</TextLink> component, this
            behaviour can be applied by setting the <Strong>background</Strong>{' '}
            to either <Strong>customLight</Strong> or{' '}
            <Strong>customDark</Strong>.
          </Text>
        </>
      ),
      background: 'neutral',
      Example: () =>
        source(
          <Box background="neutral">
            <Heading level="2">
              This Heading is inverted to improve contrast.
            </Heading>
          </Box>,
        ),
    },
  ],
};

export default docs;
