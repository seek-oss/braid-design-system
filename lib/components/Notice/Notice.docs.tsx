import React from 'react';
import source from '../../utils/source.macro';
import { ComponentDocs } from '../../../site/src/types';
import { Notice, Card, Text, Strong, Stack, TextLink, List } from '../';

const docs: ComponentDocs = {
  category: 'Content',
  migrationGuide: true,
  Example: () =>
    source(
      <Card rounded>
        <Stack space="medium">
          <Notice tone="promote">
            <Text>This is a promoted message.</Text>
          </Notice>
          <Notice tone="info">
            <Text>This is an informative message.</Text>
          </Notice>
          <Notice tone="positive">
            <Text>This is a positive message.</Text>
          </Notice>
          <Notice tone="critical">
            <Text>This is a critical message.</Text>
          </Notice>
        </Stack>
      </Card>,
    ),
  accessibility: (
    <>
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
      <Text>
        Note that the <Strong>caution</Strong> tone is not supported because
        it’s not possible to achieve an accessible contrast ratio while
        maintining an acceptable semantic colour. For this case, consider using
        an <TextLink href="/components/Alert">Alert</TextLink> instead.
      </Text>
    </>
  ),
  alternatives: [
    {
      name: 'Alert',
      description: 'For a stronger visual treatment.',
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
            A Notice can contain layout components such as{' '}
            <TextLink href="/components/Stack">Stack</TextLink> and{' '}
            <TextLink href="/components/Inline">Inline</TextLink>, as well as
            typographic components such as{' '}
            <TextLink href="/components/Text">Text</TextLink>,
            <TextLink href="/components/TextLink">TextLink</TextLink> and{' '}
            <TextLink href="/components/List">List</TextLink>. We do not
            recommend using{' '}
            <TextLink href="/components/Button">Button</TextLink> elements
            inside of Notice.
          </Text>
          <Text>
            This component has only been designed to use standard size text. Any
            other size of text will break the alignment with the icon.
          </Text>
        </Stack>
      ),
      Example: () =>
        source(
          <Card>
            <Notice tone="info">
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
            </Notice>
          </Card>,
        ),
    },
  ],
};

export default docs;
