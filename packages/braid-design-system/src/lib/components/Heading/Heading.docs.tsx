import React from 'react';
import source from '@braid-design-system/source.macro';
import type { ComponentDocs } from 'site/types';
import {
  Box,
  Heading,
  Stack,
  Text,
  Strong,
  TextLink,
  IconImage,
  Alert,
  Divider,
} from '../';

const docs: ComponentDocs = {
  category: 'Content',
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
          <Stack space="large">
            <Heading level="2" align="left">
              Left
            </Heading>
            <Divider />
            <Heading level="2" align="center">
              Center
            </Heading>
            <Divider />
            <Heading level="2" align="right">
              Right
            </Heading>
            <Divider />
            <Heading level="2" align={{ mobile: 'center', tablet: 'left' }}>
              Center on mobile
            </Heading>
          </Stack>,
        ),
    },
    {
      label: 'Limiting the number of lines',
      description: (
        <>
          <Text>
            When displaying user-generated content that may not fit within your
            layout, you can control the number of lines to display with the{' '}
            <Strong>maxLines</Strong> prop.
          </Text>
          <Alert tone="caution">
            <Text>
              The <Strong>truncate</Strong> prop has been deprecated in favour
              of <Strong>{`maxLines={1}`}</Strong>, and will be removed in a
              future version.
            </Text>
          </Alert>
        </>
      ),
      Example: () =>
        source(
          <Box style={{ width: 240 }}>
            <Stack space="large">
              <Heading level="2" maxLines={1}>
                Limited to 1 line that won’t fit in the layout
              </Heading>
              <Heading level="2" maxLines={3}>
                Another example of long text, but limited to 3 lines, and won’t
                fit in the layout.
              </Heading>
            </Stack>
          </Box>,
        ),
    },
    {
      label: 'Inserting an icon',
      description: (
        <>
          <Text>
            For decoration or help distinguishing between headings, an{' '}
            <Strong>icon</Strong> can be provided. This will be placed to the
            left of the text.
          </Text>
          <Text>
            In the case of wrapping text, the icon will remain on the left —
            with the text not wrapping beneath it. If this is not desired, place
            the icon inside the Heading component, instead of providing it to
            the <Strong>icon</Strong> prop.
          </Text>
        </>
      ),
      Example: () =>
        source(
          <Heading level="2" icon={<IconImage />}>
            Heading with an icon
          </Heading>,
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
            <TextLink href="/components/Box">Box</TextLink> component, this
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
