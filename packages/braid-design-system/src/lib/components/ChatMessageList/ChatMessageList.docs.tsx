import source from '@braid-design-system/source.macro';
import dedent from 'dedent';
import { useEffect, useState } from 'react';
import Code from 'site/App/Code/Code';
import type { ComponentDocs } from 'site/types';

import {
  Avatar,
  Box,
  ChatMessage,
  ChatMessageGroup,
  ChatMessageList,
  List,
  Notice,
  Stack,
  Strong,
  Text,
  TextLink,
} from '../';
import { palette } from '../../color/palette';
import type { StackProps } from '../Stack/Stack';
import { dataAttributeDocs } from '../private/dataAttribute.docs';

import { photoExampleUrl } from '../Avatar/photoPlaceholder.css';

const incomingMessages: Array<{
  sender: 'assistant' | 'participant' | 'user' | 'system';
  name?: string;
  text: string;
}> = [
  {
    sender: 'participant',
    name: 'Alex Nguyen',
    text: 'Can you summarise this role?',
  },
  {
    sender: 'system',
    text: 'Assistant joined the conversation.',
  },
  {
    sender: 'participant',
    name: 'Assistant',
    text: 'This is a product designer role, working with the hiring team on candidate experience.',
  },
  {
    sender: 'user',
    name: 'You',
    text: 'Make it shorter.',
  },
  {
    sender: 'assistant',
    name: 'Assistant',
    text: 'A product designer, working on candidate experience.',
  },
  {
    sender: 'user',
    name: 'You',
    text: 'Thanks. Can you draft a reply?',
  },
  {
    sender: 'assistant',
    name: 'Assistant',
    text: 'Here is a short reply you can send to Alex.',
  },
  {
    sender: 'participant',
    name: 'Alex Nguyen',
    text: 'That sounds right. What happens next?',
  },
  {
    sender: 'assistant',
    name: 'Assistant',
    text: 'Share the summary with the hiring manager, then book a chat with Alex.',
  },
  {
    sender: 'user',
    name: 'You',
    text: 'I will send it now.',
  },
];

const openingMessageCount = 1;

const opacityForDepth = {
  list: 1,
  group: 0.35,
  message: 0.7,
} as const;

const ChatSection = ({
  name,
  type,
  children,
}: {
  name: string;
  type: keyof typeof opacityForDepth;
  children?: StackProps['children'];
}) => (
  <Box background="customDark" padding="small" position="relative">
    <Box
      position="absolute"
      inset={0}
      borderRadius={type === 'list' ? 'large' : 'standard'}
      style={{
        background: palette.grey[type === 'list' ? 800 : 500],
        opacity: opacityForDepth[type],
      }}
    />
    <Box position="relative">
      <Stack space="small">
        <Text size="small" weight="strong">
          {name}
        </Text>
        {children}
      </Stack>
    </Box>
  </Box>
);

const IncomingConversation = () => {
  const [messages, setMessages] = useState(() =>
    incomingMessages.slice(0, openingMessageCount),
  );

  useEffect(() => {
    const id = window.setInterval(() => {
      setMessages((current) => {
        const next = incomingMessages[current.length];

        if (!next) {
          return incomingMessages.slice(0, openingMessageCount);
        }

        return [...current, next];
      });
    }, 2200);

    return () => window.clearInterval(id);
  }, []);

  return (
    <Box style={{ height: 280 }}>
      <ChatMessageList label="Conversation">
        {messages.map((message, index) => (
          <ChatMessageGroup
            key={`${message.sender}-${index}`}
            sender={message.sender}
            name={message.name}
          >
            <ChatMessage>{message.text}</ChatMessage>
          </ChatMessageGroup>
        ))}
      </ChatMessageList>
    </Box>
  );
};

const docs: ComponentDocs = {
  category: 'Content',
  description: (
    <Text>
      A conversation between the person using the product, other people, and an
      assistant. Each <Strong>ChatMessageGroup</Strong> is a run of messages
      from one sender, and each <Strong>ChatMessage</Strong> is one message in
      that run.
    </Text>
  ),
  subComponents: ['ChatMessageGroup', 'ChatMessage'],
  Example: () =>
    source(
      <ChatMessageList label="Conversation">
        <ChatMessageGroup sender="participant" name="Alex Nguyen">
          <ChatMessage sentDate={new Date('2026-10-23T09:40:00')}>
            Can you summarise this role?
          </ChatMessage>
        </ChatMessageGroup>
        <ChatMessageGroup sender="assistant" name="Assistant">
          <ChatMessage onCopy={() => undefined} onFeedback={() => undefined}>
            This is a product designer role, working with the hiring team on
            candidate experience.
          </ChatMessage>
        </ChatMessageGroup>
        <ChatMessageGroup sender="user" name="You">
          <ChatMessage sentDate={new Date('2026-10-23T09:42:00')}>
            Make it shorter.
          </ChatMessage>
        </ChatMessageGroup>
      </ChatMessageList>,
    ),
  accessibility: (
    <Stack space="large">
      <Text>
        <Strong>ChatMessageList</Strong> uses the{' '}
        <TextLink href="https://w3c.github.io/aria/#log">
          ARIA log role
        </TextLink>
        , named by <Strong>label</Strong>, on the ordered list. Messages on the
        page when it loads are not announced. Groups and messages added after
        that are announced politely. Keep the list mounted and add to it.
        Replacing the whole list can announce the conversation again.
      </Text>
      <Text>
        The list can be focused. It opens on the latest message, and slides to
        the bottom when a message is added.
      </Text>
      <Text>
        Each <Strong>ChatMessageGroup</Strong> is one list item, so a run of
        messages from one sender is announced as one item. The sender{' '}
        <Strong>name</Strong> is read once, at the start of the item. When the
        name is not shown, for a <Strong>user</Strong> run, or in the{' '}
        <Strong>avatar</Strong> variant, it is still available to assistive
        technology. The name is announced once. A <Strong>system</Strong> run
        has no name, so its item is read as the message alone.
      </Text>
      <Text>
        Each <Strong>ChatMessage</Strong> is plain text inside that item. On a{' '}
        <Strong>user</Strong> or <Strong>participant</Strong> run, the{' '}
        <Strong>sentDate</Strong> is a <Strong>time</Strong> element with a
        machine-readable <Strong>dateTime</Strong>, and the visible time uses
        the reader&rsquo;s locale. <Strong>assistant</Strong> and{' '}
        <Strong>system</Strong> messages do not show a sent time.
      </Text>
      <Text>
        Copy is a button labelled Copy. Feedback follows the{' '}
        <TextLink href="https://www.w3.org/WAI/ARIA/apg/patterns/button/">
          WAI-ARIA Button Pattern
        </TextLink>{' '}
        for toggle buttons. Good response and Bad response use{' '}
        <Strong>aria-pressed</Strong> to show the chosen response. These buttons
        are only on the last message in a group.
      </Text>
      <Text>
        The date stamp at the start of a day is a <Strong>time</Strong> element
        in the first group of that day, before the sender name. It is read as
        part of that group, so the day is announced once, not on every message.
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
        label: 'Chat structure',
        description: (
          <Text>
            A <Strong>ChatMessageList</Strong> is made up of one or more{' '}
            <Strong>ChatMessageGroup</Strong> components. Each group contains
            one or more <Strong>ChatMessage</Strong> components.
          </Text>
        ),
        background: false,
        code: false,
        playroom: false,
        Example: () =>
          source(
            <ChatSection name="ChatMessageList" type="list">
              <ChatSection name="ChatMessageGroup" type="group">
                <ChatSection name="ChatMessage" type="message" />
                <ChatSection name="ChatMessage" type="message" />
              </ChatSection>
              <ChatSection name="ChatMessageGroup" type="group">
                <ChatSection name="ChatMessage" type="message" />
              </ChatSection>
            </ChatSection>,
          ),
      },
      {
        label: 'Choosing a sender',
        description: (
          <Stack space="large">
            <Text>
              Set <Strong>sender</Strong> on <Strong>ChatMessageGroup</Strong>{' '}
              to say who the run is from. This chooses the alignment, the
              bubble, and which actions can appear.
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
              <Text>
                <Strong>system</Strong> is the conversation itself, such as
                someone joining. The message is centered <Strong>xsmall</Strong>{' '}
                <Strong>secondary</Strong> text, with no bubble, no avatar and
                no name.
              </Text>
            </List>
            <Text>
              On a <Strong>user</Strong> or <Strong>participant</Strong> bubble,
              the corner on the sender&rsquo;s side is squared, which gives the
              bubble a tail.
            </Text>
          </Stack>
        ),
        Example: () =>
          source(
            <ChatMessageList label="Conversation">
              <ChatMessageGroup sender="participant" name="Alex Nguyen">
                <ChatMessage>Can you summarise this role?</ChatMessage>
              </ChatMessageGroup>
              <ChatMessageGroup sender="system">
                <ChatMessage>Assistant joined the conversation.</ChatMessage>
              </ChatMessageGroup>
              <ChatMessageGroup sender="assistant" name="Assistant">
                <ChatMessage>
                  This is a product designer role, working with the hiring team
                  on candidate experience.
                </ChatMessage>
              </ChatMessageGroup>
              <ChatMessageGroup sender="user" name="You">
                <ChatMessage>Make it shorter.</ChatMessage>
              </ChatMessageGroup>
            </ChatMessageList>,
          ),
      },
      {
        label: 'Grouping messages',
        description: (
          <Stack space="large">
            <Text>
              Wrap a run of messages from the same sender in{' '}
              <Strong>ChatMessageGroup</Strong>. The group shows the name and
              avatar once, and decides which message is first and which is last.
            </Text>
            <Text>
              The first message keeps the outer corner. Later messages square
              that corner too, so the bubbles join. The{' '}
              <Strong>sentDate</Strong> and actions are shown on the last
              message.
            </Text>
            <Text>
              To turn a list of messages into those runs, use{' '}
              <Strong>groupChatMessages</Strong>. Each run has the{' '}
              <Strong>sender</Strong>, <Strong>name</Strong> and{' '}
              <Strong>avatar</Strong> for the group, and its{' '}
              <Strong>messages</Strong>. Each message keeps its own fields, such
              as <Strong>sentDate</Strong>, <Strong>onCopy</Strong> and{' '}
              <Strong>onFeedback</Strong>.
            </Text>
            <Text>
              A run also ends at local midnight. The first run on each day shows
              a date stamp above it, labelled Today, Yesterday or the date. Pass{' '}
              <Strong>sentDate</Strong> to each message so the list can tell the
              days apart.
            </Text>
            <Code playroom={false}>
              {`
                import {
                  ChatMessage,
                  ChatMessageGroup,
                  ChatMessageList,
                  groupChatMessages,
                } from 'braid-design-system';

                <ChatMessageList label="Conversation">
                  {groupChatMessages(messages).map((group) => (
                    <ChatMessageGroup
                      key={group.messages[0].id}
                      sender={group.sender}
                      name={group.name}
                      avatar={group.avatar}
                    >
                      {group.messages.map((message) => (
                        <ChatMessage
                          key={message.id}
                          sentDate={message.sentDate}
                          onCopy={message.onCopy}
                          onFeedback={message.onFeedback}
                        >
                          {message.text}
                        </ChatMessage>
                      ))}
                    </ChatMessageGroup>
                  ))}
                </ChatMessageList>
              `}
            </Code>
            <Notice>
              <Text>
                Grouping follows <Strong>sender</Strong>, not the person. Two{' '}
                <Strong>participant</Strong> messages in a row are one group,
                even when the names differ. The group uses the first name.
              </Text>
            </Notice>
          </Stack>
        ),
        Example: () =>
          source(
            <ChatMessageList label="Conversation">
              <ChatMessageGroup sender="participant" name="Alex Nguyen">
                <ChatMessage sentDate={new Date('2026-10-23T09:40:00')}>
                  Can you summarise this role?
                </ChatMessage>
                <ChatMessage sentDate={new Date('2026-10-23T09:41:00')}>
                  The hiring manager wants a short version.
                </ChatMessage>
              </ChatMessageGroup>
              <ChatMessageGroup sender="user" name="You">
                <ChatMessage sentDate={new Date('2026-10-23T09:42:00')}>
                  I can do that.
                </ChatMessage>
                <ChatMessage sentDate={new Date('2026-10-23T09:43:00')}>
                  Give me a minute.
                </ChatMessage>
              </ChatMessageGroup>
            </ChatMessageList>,
          ),
      },
      {
        label: 'Name',
        description: (
          <Text>
            <Strong>name</Strong> is required on every group, except{' '}
            <Strong>system</Strong>, which has no name.{' '}
            <Strong>ChatMessageList</Strong> <Strong>variant</Strong> chooses
            how it is shown, and the default is <Strong>name</Strong>. For{' '}
            <Strong>participant</Strong> and <Strong>assistant</Strong> it
            renders as <Strong>xsmall</Strong> secondary text above the first
            message. It is not shown for <Strong>user</Strong>, or in the{' '}
            <Strong>avatar</Strong> variant, and stays available to assistive
            technology in both cases.
          </Text>
        ),
        Example: () =>
          source(
            <ChatMessageList label="Conversation">
              <ChatMessageGroup sender="participant" name="Alex Nguyen">
                <ChatMessage>Can you summarise this role?</ChatMessage>
              </ChatMessageGroup>
              <ChatMessageGroup sender="user" name="You">
                <ChatMessage>Make it shorter.</ChatMessage>
              </ChatMessageGroup>
            </ChatMessageList>,
          ),
      },
      {
        label: 'Sent date',
        description: (
          <Stack space="large">
            <Text>
              Pass <Strong>sentDate</Strong> to each{' '}
              <Strong>ChatMessage</Strong> as a <Strong>Date</Strong>, date
              string or timestamp. It is formatted as local time, such as 9:42
              am, in <Strong>xsmall</Strong> secondary text under the last
              message in the group. Earlier messages keep their{' '}
              <Strong>sentDate</Strong> value without showing it.
            </Text>
            <Text>
              Assistant messages do not show a sent time. An invalid date throws
              in development.
            </Text>
          </Stack>
        ),
        Example: () =>
          source(
            <ChatMessageList label="Conversation">
              <ChatMessageGroup sender="user" name="You">
                <ChatMessage sentDate={new Date('2026-10-23T09:42:00')}>
                  Make it shorter.
                </ChatMessage>
              </ChatMessageGroup>
              <ChatMessageGroup sender="assistant" name="Assistant">
                <ChatMessage sentDate={new Date('2026-10-23T09:43:00')}>
                  This is a product designer role, working with the hiring team.
                </ChatMessage>
              </ChatMessageGroup>
            </ChatMessageList>,
          ),
      },
    ],
    layout: [
      {
        label: 'Scrolling',
        description: (
          <Stack space="large">
            <Text>
              <Strong>ChatMessageList</Strong> fills the height of its parent.
              Give the parent a height. In a column, the list grows to fill the
              space left by the other pieces, such as a composer, and shrinks so
              the messages can scroll.
            </Text>
            <Text>
              When the conversation is taller than that space, the list scrolls.
              The top fades when older messages are out of view.
            </Text>
            <Text>
              The list opens on the latest message. When the conversation grows,
              it slides to reveal the new message, including while the messages
              are still shorter than the list. A message taller than the list
              opens at its start, below the top fade, so it can be read from the
              top. A reader who has scrolled up stays there. Following starts
              again when they return to the end.
            </Text>
            <Text>
              This example adds a message every two seconds, then starts again.
            </Text>
          </Stack>
        ),
        Example: () => ({
          code: dedent`
            <Box style={{ height: 280 }}>
              <ChatMessageList label="Conversation">
                <ChatMessageGroup sender="participant" name="Alex Nguyen">
                  <ChatMessage>Can you summarise this role?</ChatMessage>
                </ChatMessageGroup>
                <ChatMessageGroup sender="assistant" name="Assistant">
                  <ChatMessage>
                    This is a product designer role, working with the hiring
                    team on candidate experience.
                  </ChatMessage>
                </ChatMessageGroup>
                <ChatMessageGroup sender="user" name="You">
                  <ChatMessage>Make it shorter.</ChatMessage>
                </ChatMessageGroup>
              </ChatMessageList>
            </Box>
          `,
          value: <IncomingConversation />,
        }),
      },
      {
        label: 'Spacing',
        description: (
          <Stack space="large">
            <Text>
              <Strong>ChatMessageList</Strong> sets the space between groups,
              and <Strong>ChatMessageGroup</Strong> sets the space between the
              messages it contains. Neither adds space outside itself, so a
              parent gap is not doubled.
            </Text>
            <List space="large">
              <Text>
                Between groups: a <Strong>large</Strong> space.
              </Text>
              <Text>
                <Strong>user</Strong> and <Strong>participant</Strong> messages
                in a group: one grid unit (4px).
              </Text>
              <Text>
                <Strong>assistant</Strong> and <Strong>system</Strong> messages
                in a group: a <Strong>small</Strong> space. The message has no
                padding, so the lines need the extra room.
              </Text>
            </List>
            <Text>
              The space between an assistant name and its message is{' '}
              <Strong>small</Strong>. The space between an assistant message and
              its actions is <Strong>small</Strong>. For <Strong>user</Strong>{' '}
              and <Strong>participant</Strong> messages, the space between the
              name, bubble and time is <Strong>xsmall</Strong>.
            </Text>
            <Text>
              A date stamp sits above the first group on a day, with a{' '}
              <Strong>large</Strong> space between it and the group. It adds no
              space outside that group.
            </Text>
          </Stack>
        ),
        Example: () =>
          source(
            <ChatMessageList label="Conversation">
              <ChatMessageGroup sender="participant" name="Alex Nguyen">
                <ChatMessage>Can you summarise this role?</ChatMessage>
                <ChatMessage>
                  The hiring manager wants a short version.
                </ChatMessage>
              </ChatMessageGroup>
              <ChatMessageGroup sender="assistant" name="Assistant">
                <ChatMessage>This is a product designer role.</ChatMessage>
                <ChatMessage>
                  They work with the hiring team on candidate experience.
                </ChatMessage>
              </ChatMessageGroup>
              <ChatMessageGroup sender="user" name="You">
                <ChatMessage>Make it shorter.</ChatMessage>
              </ChatMessageGroup>
            </ChatMessageList>,
          ),
      },
      {
        label: 'Aligning with an avatar',
        description: (
          <Stack space="large">
            <Text>
              Set <Strong>variant</Strong> to <Strong>avatar</Strong> on{' '}
              <Strong>ChatMessageList</Strong>. Every{' '}
              <Strong>participant</Strong> and <Strong>assistant</Strong> run
              uses the avatar column, so the bubbles line up. Pass{' '}
              <Strong>avatar</Strong> to <Strong>ChatMessageGroup</Strong> to
              identify the sender. It can be an{' '}
              <TextLink href="/components/Avatar">Avatar</TextLink> or your own
              component. It is shown once, beside the last message. Earlier
              messages, the sent time and actions are inset by a{' '}
              <Strong>small</Strong> avatar plus a <Strong>small</Strong> space.
            </Text>
            <Text>
              A run with no <Strong>avatar</Strong> shows an{' '}
              <Strong>Avatar</Strong> of the <Strong>name</Strong>, so the
              sender&rsquo;s initial fills the same column.{' '}
              <Strong>user</Strong> runs stay end-aligned and do not use the
              column. <Strong>system</Strong> runs are centered and do not use
              it either.
            </Text>
            <Text>
              A Braid <Strong>Avatar</Strong> must not set <Strong>size</Strong>
              . The group renders it at <Strong>small</Strong>, which is the
              width of that inset. Any other avatar is rendered as provided, so
              it needs to fit that width.
            </Text>
          </Stack>
        ),
        Example: () =>
          source(
            <ChatMessageList label="Conversation" variant="avatar">
              <ChatMessageGroup
                sender="participant"
                name="Alex Nguyen"
                avatar={
                  <Avatar name="Alex Nguyen" imageUrl={photoExampleUrl} />
                }
              >
                <ChatMessage sentDate={new Date('2026-10-23T09:40:00')}>
                  Can you summarise this role?
                </ChatMessage>
                <ChatMessage sentDate={new Date('2026-10-23T09:41:00')}>
                  The hiring manager wants a short version.
                </ChatMessage>
              </ChatMessageGroup>
              <ChatMessageGroup
                sender="assistant"
                name="Assistant"
                avatar={<Avatar name="Assistant" imageUrl={photoExampleUrl} />}
              >
                <ChatMessage
                  onCopy={() => undefined}
                  onFeedback={() => undefined}
                >
                  This is a product designer role, working with the hiring team
                  on candidate experience.
                </ChatMessage>
              </ChatMessageGroup>
            </ChatMessageList>,
          ),
      },
    ],
    interaction: [
      {
        label: 'Copy',
        description: (
          <Text>
            Pass <Strong>onCopy</Strong> to each <Strong>ChatMessage</Strong> to
            show a copy button on the last message in an{' '}
            <Strong>assistant</Strong> group. It sits with the feedback buttons
            under the message. <Strong>user</Strong>,{' '}
            <Strong>participant</Strong> and <Strong>system</Strong> messages do
            not show it. The handler is called with no arguments, so copy the
            message text from your own state.
          </Text>
        ),
        Example: () =>
          source(
            <ChatMessageList label="Conversation">
              <ChatMessageGroup sender="assistant" name="Assistant">
                <ChatMessage onCopy={() => undefined}>
                  This is a product designer role, working with the hiring team
                  on candidate experience.
                </ChatMessage>
              </ChatMessageGroup>
            </ChatMessageList>,
          ),
      },
      {
        label: 'Feedback',
        description: (
          <Text>
            Pass <Strong>onFeedback</Strong> to show the positive and negative
            buttons together on the last message in an{' '}
            <Strong>assistant</Strong> group. Choosing a response calls{' '}
            <Strong>onFeedback</Strong> with <Strong>positive</Strong> or{' '}
            <Strong>negative</Strong>, and that icon uses the{' '}
            <Strong>positive</Strong> or <Strong>critical</Strong> tone.
            Choosing the same response again clears it.
          </Text>
        ),
        Example: () =>
          source(
            <ChatMessageList label="Conversation">
              <ChatMessageGroup sender="assistant" name="Assistant">
                <ChatMessage
                  onCopy={() => undefined}
                  onFeedback={() => undefined}
                >
                  This is a product designer role, working with the hiring team
                  on candidate experience.
                </ChatMessage>
              </ChatMessageGroup>
            </ChatMessageList>,
          ),
      },
    ],
    bestPractices: [
      {
        label: 'When to use',
        description: (
          <Stack space="xlarge">
            <Stack space="large">
              <Text>Use ChatMessageList:</Text>
              <List space="large">
                <Text>
                  for a conversation between the person using the product, other
                  people, and an assistant
                </Text>
                <Text>
                  to show a system line in the conversation, such as someone
                  joining
                </Text>
                <Text>to offer copy or feedback on an assistant response</Text>
              </List>
            </Stack>
            <Stack space="large">
              <Text>Don&rsquo;t use ChatMessageList:</Text>
              <List space="large">
                <Text>
                  for a status outside the conversation. Use{' '}
                  <TextLink href="/components/Notice">Notice</TextLink> or{' '}
                  <TextLink href="/components/Alert">Alert</TextLink>
                </Text>
                <Text>
                  for a comment or review that is not part of a back-and-forth
                  conversation
                </Text>
              </List>
            </Stack>
          </Stack>
        ),
      },
      dataAttributeDocs({
        code: `
          <ChatMessageList
            label="Conversation"
            data={{ testid: 'conversation' }}
            // => data-testid="conversation"
          >
            ...
          </ChatMessageList>
        `,
        supportsNativeSyntax: false,
      }),
    ],
  },
};

export default docs;
