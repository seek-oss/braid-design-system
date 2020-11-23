import React from 'react';
import { ComponentDetail } from '../../../site/src/types';
import source from '../../utils/source.macro';
import { Alert, Text, Strong, Stack, TextLink, List } from '../';
import { Card } from '../Card/Card';

const docs: ComponentDetail = {
  category: 'Content',
  migrationGuide: true,
  Example: () =>
    source(
      <Stack space="medium">
        <Alert tone="promote">
          <Text>This is a promoted Alert message.</Text>
        </Alert>
        <Alert tone="info">
          <Text>This is an informative Alert message.</Text>
        </Alert>
        <Alert tone="positive">
          <Text>This is a positive Alert message.</Text>
        </Alert>
        <Alert tone="caution">
          <Text>This is a cautionary Alert message.</Text>
        </Alert>
        <Alert tone="critical">
          <Text>This is a critical Alert message.</Text>
        </Alert>
      </Stack>,
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
      description:
        'For a lighter visual treatment, with less page-level prominance.',
    },
    {
      name: 'useToast',
      description:
        'For dynamic, asynchronous messaging that is outside the flow of the current experience.',
    },
  ],
  additional: [
    {
      label: 'Behaviour',
      description: (
        <Text>
          An Alert can be made dismissable by providing an `onClose` handler.
          This handler will be called when the user clicks on the cross.
        </Text>
      ),
      Example: () =>
        /* eslint-disable no-alert */
        source(
          <Alert
            tone="info"
            onClose={() => {
              alert('Dismiss this message');
            }}
            closeLabel="Close info alert"
          >
            <Text>This is an important piece of information.</Text>
          </Alert>,
        ),
      /* eslint-enable no-alert */
    },
    {
      label: 'Content guidelines',
      description: (
        <Stack space="large">
          <Text>
            An Alert can contain layout components, for example{' '}
            <TextLink href="/components/Stack">Stack</TextLink> and{' '}
            <TextLink href="/components/Inline">Inline</TextLink>, as well as
            typographic components such as{' '}
            <TextLink href="/components/Text">Text</TextLink>,
            <TextLink href="/components/TextLink">TextLink</TextLink>,{' '}
            <TextLink href="/components/List">List</TextLink>, etc. We do not
            recommend using{' '}
            <TextLink href="/components/Button">Button</TextLink>s inside of
            Alert.
          </Text>
          <Text>
            Assistive technologies will announce the content to a user in a
            &ldquo;polite&rdquo; tone, and any dynamic changes to the messaging
            will not interrupt the user&rsquo;s current task. For more
            information, see the{' '}
            <TextLink href="https://www.w3.org/TR/wai-aria/#aria-live">
              aria-live
            </TextLink>{' '}
            documentation.
          </Text>
          <Text>
            <Strong>Note:</Strong> This component has only been designed to
            contain standard size text. Any other size of text will break the
            alignment with the icon.
          </Text>
        </Stack>
      ),
      Example: () =>
        source(
          <Alert tone="info">
            <Stack space="large">
              <Text>
                This is an important piece of information with a{' '}
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
      label: 'Contextual design',
      description: (
        <Text>
          To reduce visual noise, when an Alert is inside a{' '}
          <TextLink href="/components/Card">Card</TextLink> the surrounding
          keyline is removed given the background colour has sufficient contrast
          without it.
        </Text>
      ),
      Example: () =>
        source(
          <Card>
            <Stack space="medium">
              <Alert tone="promote">
                <Text>This is a promoted Alert message.</Text>
              </Alert>
              <Alert tone="info">
                <Text>This is an informative Alert message.</Text>
              </Alert>
              <Alert tone="positive">
                <Text>This is a positive Alert message.</Text>
              </Alert>
              <Alert tone="caution">
                <Text>This is a cautionary Alert message.</Text>
              </Alert>
              <Alert tone="critical">
                <Text>This is a critical Alert message.</Text>
              </Alert>
            </Stack>
          </Card>,
        ),
    },
  ],
};

export default docs;
