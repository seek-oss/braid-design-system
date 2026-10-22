import source from '@braid-design-system/source.macro';
import type { ComponentDocs } from 'site/types';

import {
  Avatar,
  ChatMessage,
  Divider,
  IconAI,
  List,
  Notice,
  Stack,
  Strong,
  Text,
  TextLink,
} from '../';
import { dataAttributeDocs } from '../private/dataAttribute.docs';

const docs: ComponentDocs = {
  category: 'Content',
  description: (
    <Text>
      A single message in a conversation between the person using the product,
      other people, and an assistant.
    </Text>
  ),
  Example: () =>
    source(
      <Stack space="none">
        <ChatMessage
          sender="participant"
          name="Alex Nguyen"
          sent={new Date('2026-10-23T09:40:00')}
        >
          Can you summarise this role?
        </ChatMessage>
        <ChatMessage
          sender="assistant"
          name="Assistant"
          onCopy={() => undefined}
          onFeedback={() => undefined}
        >
          This is a product designer role, working with the hiring team on
          candidate experience.
        </ChatMessage>
        <ChatMessage
          sender="user"
          name="You"
          sent={new Date('2026-10-23T09:42:00')}
        >
          Make it shorter.
        </ChatMessage>
      </Stack>,
    ),
  accessibility: (
    <Stack space="large">
      <Text>
        The message is plain text. When <Strong>sent</Strong> is shown, it is a{' '}
        <Strong>time</Strong> element with a machine-readable{' '}
        <Strong>dateTime</Strong>. The visible time uses the reader&rsquo;s
        locale, including am or pm.
      </Text>
      <Text>
        Copy and feedback are icon buttons labelled Copy, Good response and Bad
        response. On an <Strong>assistant</Strong> message, copy is present when
        you pass <Strong>onCopy</Strong>, and both feedback buttons are present
        when you pass <Strong>onFeedback</Strong>. The chosen response is marked
        pressed, and its icon uses the positive or critical tone.
      </Text>
      <Text>
        The name is only available on the first message in a group. The avatar,
        sent time and actions are only available on the last message in a group.
      </Text>
    </Stack>
  ),
  alternatives: [
    {
      name: 'Notice',
      description:
        'For a conditional message in response to an action or system activity.',
    },
    {
      name: 'Alert',
      description: 'For a strong message at page or section level.',
    },
    {
      name: 'Card',
      description: 'For a contained block of content outside a conversation.',
    },
  ],
  docSections: {
    appearance: [
      {
        label: 'Choosing a sender',
        description: (
          <Stack space="large">
            <Text>
              Set <Strong>sender</Strong> to say who the message is from. This
              chooses the alignment, the bubble, and which actions can appear.
            </Text>
            <List space="large">
              <Text>
                <Strong>user</Strong> is the person using the product. The
                bubble sits at the end and uses a soft accent background. In
                dark mode the background is neutral and the text uses the light
                accent colour.
              </Text>
              <Text>
                <Strong>participant</Strong> is another person. The bubble sits
                at the start on a neutral background.
              </Text>
              <Text>
                <Strong>assistant</Strong> is a responding AI. The message sits
                at the start with no background and no padding, so it reads as
                body text.
              </Text>
            </List>
            <Text>
              The corner on the sender&rsquo;s side is squared, which gives the
              bubble a tail.
            </Text>
          </Stack>
        ),
        Example: () =>
          source(
            <Stack space="none">
              <ChatMessage sender="participant" name="Alex Nguyen">
                Can you summarise this role?
              </ChatMessage>
              <ChatMessage sender="assistant" name="Assistant">
                This is a product designer role, working with the hiring team on
                candidate experience.
              </ChatMessage>
              <ChatMessage sender="user" name="You">
                Make it shorter.
              </ChatMessage>
            </Stack>,
          ),
      },
      {
        label: 'Grouping messages',
        description: (
          <Stack space="large">
            <Text>
              Place <Strong>ChatMessage</Strong> elements as direct siblings.
              Consecutive messages with the same <Strong>sender</Strong> form a
              group. You do not pass a first or last prop.
            </Text>
            <Text>
              The first message in a group keeps the outer corner. Later
              messages square that corner too, so the bubbles join.
            </Text>
            <Text>
              The <Strong>name</Strong> is shown above the first message in the
              group. The <Strong>avatar</Strong>, <Strong>sent</Strong> time and
              actions are shown on the last message.
            </Text>
            <Notice>
              <Text>
                Grouping follows <Strong>sender</Strong>, not the person. Two{' '}
                <Strong>participant</Strong> messages in a row are one group,
                even when the names differ. The second name is hidden.
              </Text>
            </Notice>
          </Stack>
        ),
        Example: () =>
          source(
            <Stack space="none">
              <ChatMessage
                sender="participant"
                name="Alex Nguyen"
                sent={new Date('2026-10-23T09:40:00')}
              >
                Can you summarise this role?
              </ChatMessage>
              <ChatMessage
                sender="participant"
                name="Alex Nguyen"
                sent={new Date('2026-10-23T09:41:00')}
              >
                The hiring manager wants a short version.
              </ChatMessage>
              <ChatMessage
                sender="user"
                name="You"
                sent={new Date('2026-10-23T09:42:00')}
              >
                I can do that.
              </ChatMessage>
              <ChatMessage
                sender="user"
                name="You"
                sent={new Date('2026-10-23T09:43:00')}
              >
                Give me a minute.
              </ChatMessage>
            </Stack>,
          ),
      },
      {
        label: 'Name',
        description: (
          <Text>
            <Strong>name</Strong> is required on every message. It renders as{' '}
            <Strong>xsmall</Strong> secondary text above the first message in
            the group, aligned with that sender. When an <Strong>avatar</Strong>{' '}
            is provided, the name is not shown here, so pass it to{' '}
            <TextLink href="/components/Avatar">Avatar</TextLink> as well.
          </Text>
        ),
        Example: () =>
          source(
            <Stack space="none">
              <ChatMessage sender="participant" name="Alex Nguyen">
                Can you summarise this role?
              </ChatMessage>
              <ChatMessage sender="user" name="You">
                Make it shorter.
              </ChatMessage>
            </Stack>,
          ),
      },
      {
        label: 'Sent time',
        description: (
          <Stack space="large">
            <Text>
              Pass <Strong>sent</Strong> as a <Strong>Date</Strong>, date string
              or timestamp. It is formatted as local time, such as 9:42 am, in{' '}
              <Strong>xsmall</Strong> secondary text under the last message in
              the group.
            </Text>
            <Text>
              Assistant messages do not show a sent time. An invalid date throws
              in development.
            </Text>
          </Stack>
        ),
        Example: () =>
          source(
            <Stack space="none">
              <ChatMessage
                sender="user"
                name="You"
                sent={new Date('2026-10-23T09:42:00')}
              >
                Make it shorter.
              </ChatMessage>
              <ChatMessage
                sender="assistant"
                name="Assistant"
                sent={new Date('2026-10-23T09:43:00')}
              >
                This is a product designer role, working with the hiring team.
              </ChatMessage>
            </Stack>,
          ),
      },
    ],
    layout: [
      {
        label: 'Space between messages',
        description: (
          <Stack space="large">
            <Text>
              <Strong>ChatMessage</Strong> owns the space before the next
              sibling. Keep the messages as direct siblings inside a{' '}
              <TextLink href="/components/Stack">Stack</TextLink> with{' '}
              <Strong>space</Strong> set to <Strong>none</Strong>, or inside a{' '}
              <TextLink href="/components/Box">Box</TextLink>. A parent gap is
              added on top of this space.
            </Text>
            <List space="large">
              <Text>
                The next message has the same <Strong>sender</Strong>: one grid
                unit (4px).
              </Text>
              <Text>
                The next message is a <Strong>ChatMessage</Strong> from another
                sender: a <Strong>medium</Strong> space.
              </Text>
              <Text>
                There is no next sibling, or the next sibling is not a{' '}
                <Strong>ChatMessage</Strong>: no space. A{' '}
                <TextLink href="/components/Divider">Divider</TextLink> between
                messages is left tight on both sides.
              </Text>
            </List>
            <Text>
              Assistant messages have no bubble padding. A following assistant
              message in the same group adds a <Strong>small</Strong> space
              above its bubble so the lines stay apart. The space between an
              assistant bubble and its actions is <Strong>small</Strong>. For{' '}
              <Strong>user</Strong> and <Strong>participant</Strong> messages,
              the space between the name, bubble and time is{' '}
              <Strong>xsmall</Strong>.
            </Text>
          </Stack>
        ),
        Example: () =>
          source(
            <>
              <Stack space="none">
                <ChatMessage sender="participant" name="Alex Nguyen">
                  Can you summarise this role?
                </ChatMessage>
                <ChatMessage sender="participant" name="Alex Nguyen">
                  The hiring manager wants a short version.
                </ChatMessage>
                <Divider />
                <ChatMessage sender="assistant" name="Assistant">
                  This is a product designer role.
                </ChatMessage>
                <ChatMessage sender="assistant" name="Assistant">
                  They work with the hiring team on candidate experience.
                </ChatMessage>
                <ChatMessage sender="user" name="You">
                  Make it shorter.
                </ChatMessage>
              </Stack>
              <Divider />
            </>,
          ),
      },
      {
        label: 'Aligning with an avatar',
        description: (
          <Stack space="large">
            <Text>
              Pass an <Strong>avatar</Strong> to identify the sender. Use{' '}
              <TextLink href="/components/Avatar">Avatar</TextLink> at{' '}
              <Strong>small</Strong> so it fits the 32px slot.
            </Text>
            <Text>
              Earlier messages in the group hide the avatar and keep the slot
              width, so the bubbles stay aligned. The sent time and actions line
              up with the bubble, inset past the avatar.
            </Text>
          </Stack>
        ),
        Example: () =>
          source(
            <Stack space="none">
              <ChatMessage
                sender="participant"
                name="Alex Nguyen"
                avatar={<Avatar name="Alex Nguyen" size="small" />}
                sent={new Date('2026-10-23T09:40:00')}
              >
                Can you summarise this role?
              </ChatMessage>
              <ChatMessage
                sender="participant"
                name="Alex Nguyen"
                avatar={<Avatar name="Alex Nguyen" size="small" />}
                sent={new Date('2026-10-23T09:41:00')}
              >
                The hiring manager wants a short version.
              </ChatMessage>
              <ChatMessage
                sender="assistant"
                name="Assistant"
                avatar={<Avatar size="small" icon={<IconAI />} />}
                onCopy={() => undefined}
                onFeedback={() => undefined}
              >
                This is a product designer role, working with the hiring team on
                candidate experience.
              </ChatMessage>
            </Stack>,
          ),
      },
    ],
    interaction: [
      {
        label: 'Copy',
        description: (
          <Text>
            Pass <Strong>onCopy</Strong> to show a copy button on the last{' '}
            <Strong>assistant</Strong> message in a group. It sits with the
            feedback buttons under the message. <Strong>user</Strong> and{' '}
            <Strong>participant</Strong> messages do not show it. The handler is
            called with no arguments, so copy the message text from your own
            state.
          </Text>
        ),
        Example: () =>
          source(
            <ChatMessage
              sender="assistant"
              name="Assistant"
              onCopy={() => undefined}
            >
              This is a product designer role, working with the hiring team on
              candidate experience.
            </ChatMessage>,
          ),
      },
      {
        label: 'Feedback',
        description: (
          <Text>
            Pass <Strong>onFeedback</Strong> to show the positive and negative
            buttons together on an <Strong>assistant</Strong> message. They sit
            with copy on the last message in the group. Choosing a response
            calls <Strong>onFeedback</Strong> with <Strong>positive</Strong> or{' '}
            <Strong>negative</Strong>, and that icon uses the{' '}
            <Strong>positive</Strong> or <Strong>critical</Strong> tone.
            Choosing the same response again clears it.
          </Text>
        ),
        Example: () =>
          source(
            <ChatMessage
              sender="assistant"
              name="Assistant"
              onCopy={() => undefined}
              onFeedback={() => undefined}
            >
              This is a product designer role, working with the hiring team on
              candidate experience.
            </ChatMessage>,
          ),
      },
    ],
    bestPractices: [
      {
        label: 'When to use',
        description: (
          <Stack space="xlarge">
            <Stack space="large">
              <Text>Use ChatMessage:</Text>
              <List space="large">
                <Text>
                  for a conversation between the person using the product, other
                  people, and an assistant
                </Text>
                <Text>
                  when messages from the same sender should read as one group
                </Text>
                <Text>
                  to offer copy or feedback on an assistant response
                </Text>
              </List>
            </Stack>
            <Stack space="large">
              <Text>Don&rsquo;t use ChatMessage:</Text>
              <List space="large">
                <Text>
                  for a status or system message. Use{' '}
                  <TextLink href="/components/Notice">Notice</TextLink> or{' '}
                  <TextLink href="/components/Alert">Alert</TextLink>
                </Text>
                <Text>
                  for a comment or review that is not part of a back-and-forth
                  conversation
                </Text>
                <Text>
                  when each message is wrapped in its own parent, because
                  grouping and spacing need the messages to be direct siblings
                </Text>
              </List>
            </Stack>
          </Stack>
        ),
      },
      dataAttributeDocs({
        code: `
          <ChatMessage
            sender="assistant"
            name="Assistant"
            data={{ testid: 'chat-message-1' }}
            // => data-testid="chat-message-1"
          >
            ...
          </ChatMessage>
        `,
        supportsNativeSyntax: false,
      }),
    ],
  },
};

export default docs;
