import source from '@braid-design-system/source.macro';
import { Fragment } from 'react';
import type { ComponentDocs } from 'site/types';

import { Box, Stack, Card, Text, Tiles, Strong, Columns, Column } from '../';
import { Placeholder } from '../../playroom/components';
import { dataAttributeDocs } from '../private/dataAttribute.docs';

import { validCardComponents } from './Card';

const docs: ComponentDocs = {
  category: 'Content',
  description: (
    <Text>
      A visual container for information and actions related to a single
      subject.
    </Text>
  ),
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
      label: 'Controlling the height',
      description: (
        <>
          <Text>
            By default, <Strong>height</Strong> will be set to{' '}
            <Strong>content</Strong> — growing to accomodate what is inside it.
          </Text>
          <Text>
            Alternatively, choose a height of <Strong>full</Strong> to use all
            available vertical space. This is useful when composing rows of Card
            components that should all be equal height.
          </Text>
        </>
      ),
      Example: () =>
        source(
          <Columns space={{ mobile: 'xsmall', tablet: 'gutter' }}>
            <Column>
              <Card height="full">
                <Placeholder height={60} />
              </Card>
            </Column>
            <Column>
              <Card height="full">
                <Placeholder height={200} />
              </Card>
            </Column>
            <Column>
              <Card height="full">
                <Placeholder height={100} />
              </Card>
            </Column>
          </Columns>,
        ),
    },
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
    dataAttributeDocs({
      code: `
        <Card
          data={{ testid: 'card-1' }}
          // => data-testid="card-1"
        >
          ...
        </Card>
      `,
      supportsNativeSyntax: false,
    }),
  ],
};

export default docs;
