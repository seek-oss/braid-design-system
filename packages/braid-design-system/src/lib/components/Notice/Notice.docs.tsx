import source from '@braid-design-system/source.macro';
import type { ComponentDocs } from 'site/types';

import { Notice, Text, Strong, Stack, TextLink, List } from '../';
import { dataAttributeDocs } from '../private/dataAttribute.docs';

const docs: ComponentDocs = {
  category: 'Content',
  description: (
    <Text>
      A Notice is a conditional message provided in response to user action or
      system activity, and presented in the context of the user flow.
    </Text>
  ),
  Example: () =>
    source(
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
      </Stack>,
    ),
  accessibility: (
    <>
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
      description:
        'For page and section level messages, or for a stronger visual treatment.',
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
            meaning behind the Notice. Notices support{' '}
            <Strong>promote, info, positive</Strong> and{' '}
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
          </Notice>,
        ),
    },
    {
      label: 'When to use',
      description: (
        <Stack space="xxlarge">
          <Stack space="large">
            <Text>Use a Notice if your message:</Text>
            <List space="large">
              <Text>
                relates to an important condition, status or system change
              </Text>
              <Text>
                sits within a section, card, or bounded box and is relevant to
                the user&rsquo;s current task.
              </Text>
            </List>
          </Stack>
          <Stack space="large">
            <Text>Don&rsquo;t use a Notice if your message:</Text>
            <List space="large">
              <Text>
                needs to be permanently on the screen (use plain{' '}
                <TextLink href="/components/Text">Text</TextLink> instead)
              </Text>
              <Text>
                sits at the page or section level (use an{' '}
                <TextLink href="/components/Alert">Alert</TextLink> instead)
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
        <Notice
          data={{ testid: 'Notice-1' }}
          // => data-testid="Notice-1"
        >
          ...
        </Notice>
      `,
      supportsNativeSyntax: false,
    }),
  ],
};

export default docs;
