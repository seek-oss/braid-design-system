import React, { Fragment } from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Box, Heading, Stack, Card, Text, Tiles, Strong } from '../';
import { Placeholder } from '../../playroom/components';
import source from '../../utils/source.macro';
import { validCardComponents } from './Card';

const docs: ComponentDocs = {
  category: 'Layout',
  migrationGuide: true,
  Example: () =>
    source(
      <Card>
        <Placeholder label="This content is inside a card" height={60} />
      </Card>,
    ),
  alternatives: [
    {
      name: 'Box',
      description: 'For custom layouts.',
    },
  ],
  additional: [
    {
      label: 'Tones',
      description: (
        <Text>
          Providing a <Strong>tone</Strong> prop will add a keyline down the
          left hand side of the container. The supported tones are{' '}
          <Strong>info</Strong>, <Strong>promote</Strong> and{' '}
          <Strong>formAccent</Strong>.
        </Text>
      ),
      Example: () =>
        source(
          <Tiles space="large" columns={[1, 2]}>
            <Stack space="small">
              <Text size="xsmall" tone="secondary">
                INFO
              </Text>
              <Card tone="info">
                <Box style={{ height: 100 }} width="full" />
              </Card>
            </Stack>

            <Stack space="small">
              <Text size="xsmall" tone="secondary">
                PROMOTE
              </Text>
              <Card tone="promote">
                <Box style={{ height: 100 }} width="full" />
              </Card>
            </Stack>

            <Stack space="small">
              <Text size="xsmall" tone="secondary">
                FORMACCENT
              </Text>
              <Card tone="formAccent">
                <Box style={{ height: 100 }} width="full" />
              </Card>
            </Stack>
          </Tiles>,
        ),
    },
    {
      label: 'Radius',
      description: (
        <>
          <Text>
            A <Strong>radius</Strong> prop can be specified to round the corners
            of the container. The supported radii are <Strong>none</Strong>{' '}
            (default) and <Strong>standard</Strong>.
          </Text>
          <Text>
            Responsive values are supported, e.g.{' '}
            <Strong>{"['none', 'standard']"}</Strong>. This enables cards edges
            to be softened on larger screens, but squared off if it runs full
            bleed on smaller devices.
          </Text>
        </>
      ),
      Example: () =>
        source(
          <Tiles space="large" columns={[1, 2]}>
            <Stack space="small">
              <Text size="xsmall" tone="secondary">
                NONE
              </Text>
              <Card radius="none">
                <Box style={{ height: 100 }} width="full" />
              </Card>
            </Stack>

            <Stack space="small">
              <Text size="xsmall" tone="secondary">
                STANDARD
              </Text>
              <Card radius="standard">
                <Box style={{ height: 100 }} width="full" />
              </Card>
            </Stack>

            <Stack space="small">
              <Text size="xsmall" tone="secondary">
                STANDARD ABOVE MOBILE
              </Text>
              <Card radius={['none', 'standard']}>
                <Box style={{ height: 100 }} width="full" />
              </Card>
            </Stack>
          </Tiles>,
        ),
    },
    {
      label: 'Custom semantics',
      description: (
        <Text>
          The HTML tag can be customised to ensure the underlying document
          semantics are meaningful. This can be done using the{' '}
          <Strong>component</Strong> prop and supports{' '}
          {validCardComponents.map((c, i) => {
            const notLastTwo = validCardComponents.length - 2;
            const joiningLastElements = i === notLastTwo ? ' and ' : '.';

            return (
              <Fragment key={c}>
                <Strong>{c}</Strong>
                {c === 'div' ? ' (default)' : ''}
                {i < notLastTwo ? ', ' : joiningLastElements}
              </Fragment>
            );
          })}
        </Text>
      ),
      Example: () =>
        source(
          <Card component="article">
            <Stack space="gutter">
              <Heading level="3">Uses an &lt;article&gt; element</Heading>
              <Text tone="secondary">
                Provides <Strong>article</Strong> semantics to indicate that
                this is a self-contained piece of content that could be used
                elsewhere as a standalone unit, e.g. a job.
              </Text>
            </Stack>
          </Card>,
        ),
    },
  ],
};

export default docs;
