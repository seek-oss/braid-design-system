import source from '@braid-design-system/source.macro';
import type { ComponentDocs } from 'site/types';

import { Alert, Text, Strong, Stack, TextLink, List } from '../';
import { IconLanguage } from '../icons';
import { dataAttributeDocs } from '../private/dataAttribute.docs';

const docs: ComponentDocs = {
  category: 'Content',
  description: (
    <Text>
      A conditional message provided in response to user action or system
      activity, and presented in the context of the user flow.
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
      description:
        'For light in-flow messages that sit within a section, card, or widget.',
    },
    {
      name: 'useToast',
      description:
        'To briefly acknowledge a user action without interrupting their flow.',
    },
  ],
  additional: [
    {
      label: 'Choosing a tone',
      description: (
        <Stack space="large">
          <Text>
            Use the <Strong>tone</Strong> property to help communicate the
            meaning behind the Alert. Alerts support{' '}
            <Strong>promote, info, positive, caution</Strong> and{' '}
            <Strong>critcal</Strong> tones.
          </Text>
          <Text>
            Read more about <TextLink href="/foundations/tones">Tones</TextLink>
            .
          </Text>
        </Stack>
      ),
    },
    {
      label: 'Formatting your message',
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
            inside of Alerts.
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
            <IconLanguage title="Translation hint" titleId="translations" />
            The <Strong>aria-label</Strong> for the close button can be
            customised via the <Strong>closeLabel</Strong> prop.
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
      label: 'When to use',
      description: (
        <Stack space="xlarge">
          <Stack space="large">
            <Text>Use an Alert if your message:</Text>
            <List space="large">
              <Text>
                relates to an important condition, status or system change
              </Text>
              <Text>
                sits at the page or section level and is relevant to the
                user&rsquo;s current task.
              </Text>
            </List>
          </Stack>
          <Stack space="large">
            <Text>Don&rsquo;t use an Alert if your message:</Text>
            <List space="large">
              <Text>
                needs to be permanently on the screen (use plain{' '}
                <TextLink href="/components/Text">Text</TextLink> instead)
              </Text>
              <Text>
                sits within a section, card, or bounded box such as a widget
                (use a <TextLink href="/components/Notice">Notice</TextLink>{' '}
                instead)
              </Text>
              <Text>
                needs to acknowledge a user action without interrupting their
                flow (use a{' '}
                <TextLink href="/components/useToast">Toast</TextLink> instead).
              </Text>
            </List>
          </Stack>
        </Stack>
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
    {
      label: 'Content guidelines',
      description: (
        <Stack space="large">
          <List space="large">
            <Text>
              Write Alerts as short phrases or sentences. The key is to let the
              user know the information they need, and the actions they need to
              take, in a clear and concise way.
            </Text>
            <Text>
              Using a CTA is optional, depending on whether you want the user to
              take an action or not.
            </Text>
            <Text>
              There&rsquo;s no need to add a full stop on a short sentence or
              phrase. Include full stops for full sentences.
            </Text>
            <Text>Don&rsquo;t use headings for Alerts.</Text>
          </List>
        </Stack>
      ),
    },
  ],
};

export default docs;
