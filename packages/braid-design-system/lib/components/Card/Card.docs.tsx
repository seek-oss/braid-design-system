import React, { Fragment } from 'react';
import { ComponentDocs } from '../../../../../site/src/types';
import { Box, Stack, Card, Text, Tiles, Strong } from '../';
import { Placeholder } from '../../playroom/components';
import source from '../../utils/source.macro';
import { validCardComponents } from './Card';

const docs: ComponentDocs = {
  category: 'Layout',
  migrationGuide: true,
  Example: () =>
    source(
      <Card rounded>
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
          <Strong>promote</Strong> and <Strong>formAccent</Strong>.
        </Text>
      ),
      Example: () =>
        source(
          <Tiles space="large" columns={{ mobile: 1, tablet: 2 }}>
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
      label: 'Rounded corners',
      description: (
        <>
          <Text>
            Card corners can be rounded by providing the{' '}
            <Strong>rounded</Strong> prop.
          </Text>
          <Text>
            Alternatively, rounding may be applied responsively using the{' '}
            <Strong>roundAbove</Strong> prop, and providing either{' '}
            <Strong>mobile</Strong>, <Strong>tablet</Strong> or{' '}
            <Strong>desktop</Strong>. This enables card edges to be softened on
            larger screens, but squared off if it runs full bleed on smaller
            devices.
          </Text>
        </>
      ),
      Example: () =>
        source(
          <Tiles space="large" columns={{ mobile: 1, tablet: 2 }}>
            <Stack space="small">
              <Text size="xsmall" tone="secondary">
                DEFAULT
              </Text>
              <Card>
                <Box style={{ height: 100 }} width="full" />
              </Card>
            </Stack>

            <Stack space="small">
              <Text size="xsmall" tone="secondary">
                ROUNDED
              </Text>
              <Card rounded>
                <Box style={{ height: 100 }} width="full" />
              </Card>
            </Stack>

            <Stack space="small">
              <Text size="xsmall" tone="secondary">
                RESPONSIVELY ROUNDED (e.g. above mobile)
              </Text>
              <Card roundedAbove="mobile">
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
    },
  ],
};

export default docs;
