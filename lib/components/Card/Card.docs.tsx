import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Card, Text, TextLink, Strong } from '../';
import {
  Box,
  Column,
  Columns,
  Placeholder,
  Stack,
} from '../../playroom/components';
import source from '../../utils/source.macro';

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
          A Card can have a <Strong>tone</Strong> which will provide a keyline
          down the left hand side of the container. The supported tones are{' '}
          <Strong>info</Strong> and <Strong>promote</Strong>.
        </Text>
      ),
      Example: () =>
        source(
          <Columns space="gutter" collapseBelow="tablet">
            <Column>
              <Stack space="small">
                <Text size="xsmall" tone="secondary">
                  INFO
                </Text>
                <Card tone="info">
                  <Box style={{ height: 100 }} width="full" />
                </Card>
              </Stack>
            </Column>
            <Column>
              <Stack space="small">
                <Text size="xsmall" tone="secondary">
                  PROMOTE
                </Text>
                <Card tone="promote">
                  <Box style={{ height: 100 }} width="full" />
                </Card>
              </Stack>
            </Column>
          </Columns>,
        ),
    },
    {
      label: 'Interactivity',
      description: (
        <>
          <Text>
            To support interactivity a Card can be marked as{' '}
            <Strong>clickable</Strong>. This provides affordance to a user that
            the entire Card is a clickable target for an action.
          </Text>
        </>
      ),
      Example: () =>
        source(
          <Columns space="gutter" collapseBelow="tablet">
            <Column>
              <Card clickable>
                <Box style={{ height: 100 }} width="full" />
              </Card>
            </Column>
            <Column>
              <Card clickable>
                <Box style={{ height: 100 }} width="full" />
              </Card>
            </Column>
          </Columns>,
        ),
    },
    {
      label: 'Development considerations',
      description: (
        <Text>
          The design of this component may change in the future, so please
          ensure that you only use it where card semantics make sense. An easy
          way to check this is to imagine that your card has rounded corners and
          a shadow—would the design still work correctly, or would it look
          broken? If it’s the latter, consider using a{' '}
          <TextLink href="/components/Box">Box</TextLink> with a{' '}
          <Strong>background</Strong> of <Strong>{'"card"'}</Strong> instead.
        </Text>
      ),
    },
  ],
};

export default docs;
