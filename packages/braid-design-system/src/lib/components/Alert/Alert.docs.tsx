import source from '@braid-design-system/source.macro';
import type { ComponentDocs } from 'site/types';

import { Alert, Card, Text, Strong, Stack, TextLink, List, Notice } from '../';
import { IconLanguage } from '../icons';
import { dataAttributeDocs } from '../private/dataAttribute.docs';

const docs: ComponentDocs = {
  category: 'Content',
  description: (
    <Text>
      An Alert is a conditional message provided in response to user action or
      system activity, and presented in the context of the user flow.
    </Text>
  ),
  Example: () =>
    source(
      <Stack space="medium">
        <Alert tone="promote">
          <Text>This is a promoted message.</Text>
        </Alert>
        <Alert tone="info" data={{ testid: 'alert-1' }}>
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
  accessibility: (
    <Text>
      Follows the{' '}
      <TextLink href="https://www.w3.org/WAI/ARIA/apg/patterns/alert/">
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
        <>
          <Text>
            An Alert can be made dismissable by providing an{' '}
            <Strong>onClose</Strong> handler.
          </Text>

          <Text tone="promote" id="translations">
            <IconLanguage title="Translation hint" titleId="translations" /> The{' '}
            <Strong>aria-label</Strong> for the close button can be customised
            via the <Strong>closeLabel</Strong> prop.
          </Text>
        </>
      ),
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
        <>
          <Notice>
            <Text>
              Only applicable to themes with grey body backgrounds, e.g.{' '}
              <Strong>apac</Strong>.
            </Text>
          </Notice>
          <Text>
            When an Alert is used on a <Strong>surface</Strong> background
            colour, i.e. in a <TextLink href="/components/Card">Card</TextLink>,
            the outline is omitted.
          </Text>
          {/*
          TODO: COLORMODE RELEASE
          <Notice>
            <Text>
              This only applies in a light context, i.e. when the soft
              background colours require differentiation from the surrounding
              background colour.
            </Text>
          </Notice>
          */}
        </>
      ),
      Example: () =>
        source(
          <Card>
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
    },
    dataAttributeDocs({
      code: `
        <Alert
          data={{ testid: 'alert-1' }}
          // => data-testid="alert-1"
        >
          ...
        </Alert>
      `,
      supportsNativeSyntax: false,
    }),
  ],
};

export default docs;
