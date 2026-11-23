---
'braid-design-system': minor
---

---
new:
  - ChatMessageList
  - ChatMessageGroup
updated:
  - ChatMessage
---

**ChatMessageList:** Render a conversation as a list of message groups

`ChatMessageList` is a log named by `label`, with an ordered list of `ChatMessageGroup` items and a `large` space between them. `variant` is `name` or `avatar`, and `name` is the default.

The list fills the height of its parent and scrolls. Give the parent a height, or place the list in a column and it fills the space that is left. The top fades when older messages are out of view. The list opens on the latest message and slides to reveal it when the conversation grows. A message taller than the list opens at its start, below the top fade. While the reader is away from the end, a jump to latest button slides in at the bottom of the list. Choosing it scrolls back to the end.

`ChatMessageGroup` takes `sender`, `name` and `avatar` and shows them once for the run. In the `avatar` variant, every participant and assistant run is two columns: the avatar, then the messages. The avatar sits at the end of the group's content, and the space between that content comes from the group, so a short message stays as tall as its text. A run with no `avatar` shows an `Avatar` of the `name`. A Braid `Avatar` must not set `size`; the group renders it at `small`. User runs stay end-aligned.
`ChatMessage` is a bubble inside a group. `sentDate`, `onCopy` and `onFeedback` belong to `ChatMessageGroup`, and the sent time and assistant actions render after the group's content. A `system` sender is centered xsmall secondary text, with no bubble, avatar, name, sent time, or actions. `name` is optional for `system` and required for every other sender.

`groupChatMessages` turns a list of messages into runs of the same sender, with `sender`, `name`, `avatar`, `sentDate`, `onCopy` and `onFeedback` on each run and the bubbles in `messages`. It keeps the last `sentDate`, `onCopy` and `onFeedback` that were set. A run also ends at local midnight, so a conversation can be passed in as one list.

The first run on each local day shows a date stamp, labelled Today, Yesterday or the date, in a neutral regular `Badge`. Pass `sentDate` on the group to show it.

**EXAMPLE USAGE:**

```jsx
import {
  ChatMessage,
  ChatMessageGroup,
  ChatMessageList,
  groupChatMessages,
} from 'braid-design-system';

<ChatMessageList label="Conversation" variant="avatar">
  {groupChatMessages(messages).map((group) => (
    <ChatMessageGroup
      key={group.messages[0].id}
      sender={group.sender}
      name={group.name}
      avatar={group.avatar}
      sentDate={group.sentDate}
      onCopy={group.onCopy}
      onFeedback={group.onFeedback}
    >
      {group.messages.map((message) => (
        <ChatMessage key={message.id}>{message.text}</ChatMessage>
      ))}
    </ChatMessageGroup>
  ))}
</ChatMessageList>;
```
