import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Box, Text, Stack, Strong, TextLink, Inline, List } from '../';
import source from '../../utils/source.macro';

const docs: ComponentDocs = {
  category: 'Content',
  migrationGuide: true,
  Example: () =>
    source(
      <Stack space="large">
        <Stack space="medium">
          <Text size="large">Text size large regular</Text>
          <Text size="large" weight="medium">
            Text size large medium
          </Text>
          <Text size="large" weight="strong">
            Text size large strong
          </Text>
        </Stack>
        <Stack space="medium">
          <Text size="standard">Text size standard regular</Text>
          <Text size="standard" weight="medium">
            Text size standard medium
          </Text>
          <Text size="standard" weight="strong">
            Text size standard strong
          </Text>
        </Stack>
        <Stack space="small">
          <Text size="small">Text size small regular</Text>
          <Text size="small" weight="medium">
            Text size small medium
          </Text>
          <Text size="small" weight="strong">
            Text size small strong
          </Text>
        </Stack>
        <Stack space="small">
          <Text size="xsmall">Text size xsmall regular</Text>
          <Text size="xsmall" weight="medium">
            Text size xsmall medium
          </Text>
          <Text size="xsmall" weight="strong">
            Text size xsmall strong
          </Text>
        </Stack>
      </Stack>,
    ),
  alternatives: [
    {
      name: 'Heading',
      description: 'For titles.',
    },
    {
      name: 'Strong',
      description: 'For emphasising a piece of text.',
    },
    {
      name: 'Secondary',
      description: 'For de-emphasising a piece of text.',
    },
    {
      name: 'Notice',
      description: 'For tone-specific messaging.',
    },
  ],
  additional: [
    {
      label: 'Alignment',
      description: (
        <Text>
          Text can be aligned via the <Strong>align</Strong> prop. If you need
          alignment to differ across various screen sizes, you can provide
          responsive values describing the alignment of each breakpoint, e.g.{' '}
          <Strong>{"align={{ mobile: 'center', tablet: 'left' }}"}</Strong>
        </Text>
      ),
      Example: () =>
        source(
          <Stack space="large" dividers>
            <Text align="left">Left</Text>
            <Text align="center">Center</Text>
            <Text align="right">Right</Text>
            <Text align={{ mobile: 'center', tablet: 'left' }}>
              Center on mobile
            </Text>
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
            <Text truncate>Really long text that won’t fit in the layout</Text>
          </Box>,
        ),
    },
    {
      label: 'Tones',
      description: (
        <>
          <Text>
            The foreground colour of text can be set by applying the correct
            tone. In addition to the{' '}
            <TextLink href="/foundations/tones">foundation tones</TextLink>,{' '}
            <Strong>secondary</Strong> provides a way to de-emphasise text. It
            is not recommended to use <Strong>caution</Strong> on light
            backgrounds due to contrast issues around yellow text.
          </Text>
          <Text tone="secondary">
            When using tones other than <Strong>neutral</Strong> and{' '}
            <Strong>secondary</Strong>, consider using{' '}
            <TextLink href="/componentes/Notice">Notice</TextLink> instead.
          </Text>
        </>
      ),
      background: 'surface',
      Example: () =>
        source(
          <Inline space="gutter">
            <Text tone="neutral">neutral</Text>
            <Text tone="secondary">secondary</Text>
            <Text tone="promote">promote</Text>
            <Text tone="info">info</Text>
            <Text tone="positive">positive</Text>
            <Text tone="critical">critical</Text>
          </Inline>,
        ),
    },
    {
      label: 'Additional tones',
      description: (
        <>
          <Text>Text supports some additional tones for special cases:</Text>
          <List>
            <Text>
              <Strong>link</Strong> — For navigation text.
            </Text>
            <Text>
              <Strong>formAccent</Strong> — For highlight text within form
              components.
            </Text>
          </List>
        </>
      ),
      background: 'surface',
      Example: () =>
        source(
          <Inline space="gutter">
            <Text tone="link">link</Text>
            <Text tone="formAccent">formAccent</Text>
          </Inline>,
        ),
    },
    {
      label: 'Contextual tones',
      description: (
        <Text>
          When inside a container that specifies a tone-based background, the
          text tone will be matched by default.
        </Text>
      ),
      background: 'surface',
      Example: () =>
        source(
          <Inline space="gutter">
            <Box background="neutralLight" padding="small">
              <Text>neutral</Text>
            </Box>
            <Box background="promoteLight" padding="small">
              <Text>promote</Text>
            </Box>
            <Box background="infoLight" padding="small">
              <Text>info</Text>
            </Box>
            <Box background="positiveLight" padding="small">
              <Text>positive</Text>
            </Box>
            <Box background="cautionLight" padding="small">
              <Text>caution</Text>
            </Box>
            <Box background="criticalLight" padding="small">
              <Text>critical</Text>
            </Box>
          </Inline>,
        ),
    },
    {
      label: 'Custom semantics',
      description: (
        <Text>
          The HTML tag can be customised to ensure the underlying document
          semantics are meaningful. For example, using a <Strong>p</Strong>{' '}
          element for marking-up a paragraph. This can be done using the{' '}
          <Strong>component</Strong> prop.
        </Text>
      ),
      Example: () =>
        source(
          <Text component="p">
            Uses a <Strong>p</Strong> element to provide paragraph semantics.
          </Text>,
        ),
    },
    {
      label: 'Contrast',
      description: (
        <>
          <Text>
            To ensure text has sufficient contrast, when on a dark background
            the foreground colour either inverts or lightens.
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
          <Stack space="small">
            <Text>Neutral text</Text>
            <Text tone="secondary">Secondary text</Text>
            <Text tone="critical">Critical text</Text>
            <Text tone="caution">Caution text</Text>
            <Text tone="positive">Positive text</Text>
            <Text tone="info">Info text</Text>
            <Text tone="promote">Promote text</Text>
            <Text tone="formAccent">FormAccent text</Text>
            <Text tone="brandAccent">BrandAccent text</Text>
          </Stack>,
        ),
    },
  ],
};

export default docs;
