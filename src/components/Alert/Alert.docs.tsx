import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import source from '../../utils/source.macro';
import { Alert, Text, Strong, Stack, TextLink, List } from '../';
import { Card } from '../Card/Card';

const docs: ComponentDocs = {
  category: 'Content',
  migrationGuide: true,
  Example: () =>
    source(
      <Card rounded>
        <Stack space="medium">
          <Alert tone="promote">
            <Text>This is a promoted message.</Text>
          </Alert>
          <Alert tone="info">
            <Text>This is an informative message.</Text>
          </Alert>
          <Alert tone="positive">
            <Text>This is a positive message.</Text>
          </Alert>
          <Alert tone="caution">
            <Text>This is a cautionary message.</Text>
          </Alert>
          <Alert tone="critical">
            <Text>This is a critical message.</Text>
          </Alert>
        </Stack>
      </Card>,
    ),
  accessibility: (
    <Text>
      Follows the{' '}
      <TextLink href="https://www.w3.org/TR/wai-aria-practices/#alert">
        WAI-ARIA Alert Pattern
      </TextLink>
      , announcing messages with a{' '}
      <TextLink href="https://www.w3.org/TR/wai-aria/#aria-live">
        polite
      </TextLink>{' '}
      level of importance.
    </Text>
  ),
  alternatives: [
    {
      name: 'Notice',
      description: 'For a lighter visual treatment.',
    },
    {
      name: 'useToast',
      description: 'For asynchronous messages that float above the page.',
    },
  ],
  additional: [
    {
      label: 'Content guidelines',
      description: (
        <Stack space="large">
          <Text>
            An Alert can contain layout components such as{' '}
            <TextLink href="/components/Stack">Stack</TextLink> and{' '}
            <TextLink href="/components/Inline">Inline</TextLink>, as well as
            typographic components such as{' '}
            <TextLink href="/components/Text">Text</TextLink>,{' '}
            <TextLink href="/components/TextLink">TextLink</TextLink> and{' '}
            <TextLink href="/components/List">List</TextLink>. We do not
            recommend using{' '}
            <TextLink href="/components/Button">Button</TextLink> elements
            inside of message.
          </Text>
          <Text>
            This component has only been designed to use standard size text. Any
            other size of text will break the alignment with the icon.
          </Text>
        </Stack>
      ),
      background: 'card',
      Example: () =>
        source(
          <Alert tone="info">
            <Stack space="large">
              <Text>
                This is an informative message with a{' '}
                <TextLink href="#">TextLink.</TextLink>
              </Text>
              <List space="medium">
                <Text>Bullet 1</Text>
                <Text>Bullet 2</Text>
                <Text>Bullet 3</Text>
              </List>
            </Stack>
          </Alert>,
        ),
    },
    {
      label: 'Dismissable alerts',
      description: (
        <Text>
          An Alert can be made dismissable by providing an{' '}
          <Strong>onClose</Strong> handler.
        </Text>
      ),
      background: 'card',
      Example: () =>
        /* eslint-disable no-alert */
        source(
          <Alert
            tone="info"
            onClose={() => alert('Dismiss this message')}
            closeLabel="Close info alert"
          >
            <Text>This is an informative message.</Text>
          </Alert>,
        ),
      /* eslint-enable no-alert */
    },
    {
      label: 'Contextual design',
      description: (
        <Text>
          When outside of a <TextLink href="/components/Card">Card</TextLink>,
          an outline is used to provide sufficient contrast against the
          background.
        </Text>
      ),
      Example: () =>
        source(
          <Stack space="medium">
            <Alert tone="promote">
              <Text>This is a promoted message.</Text>
            </Alert>
            <Alert tone="info">
              <Text>This is an informative message.</Text>
            </Alert>
            <Alert tone="positive">
              <Text>This is a positive message.</Text>
            </Alert>
            <Alert tone="caution">
              <Text>This is a cautionary message.</Text>
            </Alert>
            <Alert tone="critical">
              <Text>This is a critical message.</Text>
            </Alert>
          </Stack>,
        ),
    },
  ],
};

export default docs;
