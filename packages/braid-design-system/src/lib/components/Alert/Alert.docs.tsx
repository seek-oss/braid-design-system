import source from '@braid-design-system/source.macro';
import type { ComponentDocs } from 'site/types';

import { Alert, Card, Text, Strong, Stack, TextLink, List } from '../';
import { IconInfo } from '../icons';
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
      description:
        'For messages that sit within a section, card, or widget; or for a lighter visual treatment.',
    },
    {
      name: 'useToast',
      description:
        'To acknowledges a user action without interrupting their flow.',
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
            Read more about{' '}
            <TextLink href="/foundations/tones">Braid tones</TextLink>.
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
            <TextLink href="/components/Text">Text</TextLink>,
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
      label: 'Contextual design',
      description: (
        <>
          <Text>
            When an Alert is used on a <Strong>surface</Strong> background
            colour, i.e. in a <TextLink href="/components/Card">Card</TextLink>,
            the outline is omitted.
          </Text>
          <Text size="small" tone="secondary" icon={<IconInfo />}>
            Only applicable to themes with grey body backgrounds, e.g.{' '}
            <Strong>apac</Strong>.
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
    {
      label: 'Dismissable alerts',
      description: (
        <>
          <Text>
            An Alert can be made dismissable by providing an{' '}
            <Strong>onClose</Strong> handler.
          </Text>

          <Text size="small" tone="secondary" icon={<IconInfo />}>
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
        <Stack space="xxlarge">
          <Stack space="large">
            <Text>Use an Alert if your message:</Text>
            <List space="large">
              <Text>
                relates to an important condition, status or system change;
              </Text>
              <Text>sits at the page or section level; and</Text>
              <Text>is relevant to the user's current task.</Text>
            </List>
          </Stack>
          <Stack space="large">
            <Text>Don't use an Alert if your message:</Text>
            <List space="large">
              <Text>
                needs to be permanently on the screen (use plain{' '}
                <TextLink href="/components/Text">Text</TextLink> instead).
              </Text>
              <Text>
                sits within a section, card, or bounded box such as a widget
                (use a <TextLink href="/components/Notice">Notice</TextLink>{' '}
                instead).
              </Text>
              <Text>
                needs to acknowledge a user action without interrupting their
                flow (use a <TextLink href="/components/Toast">Toast</TextLink>{' '}
                instead).
              </Text>
              <Text>
                relates to an upcoming global system outage (use a{' '}
                <TextLink href="/components/ServiceOutageBanner">
                  Service Outage Banner
                </TextLink>{' '}
                instead).
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
  ],
};

export default docs;
