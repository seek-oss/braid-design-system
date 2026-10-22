import type { FC, ReactNode } from 'react';

import {
  type ChatMessageProps,
  ChatMessage as BraidChatMessage,
  validChatMessageSenders,
} from './ChatMessage';

const isSender = (sender: string): sender is ChatMessageProps['sender'] =>
  validChatMessageSenders.includes(sender as ChatMessageProps['sender']);

const isValidDate = (value: ChatMessageProps['sent']) =>
  value !== undefined && !isNaN(new Date(value).getTime());

const isHandler = <Handler extends (...args: never[]) => void>(
  handler: unknown,
): handler is Handler => typeof handler === 'function';

export const ChatMessage: FC<
  Omit<
    ChatMessageProps,
    'sender' | 'name' | 'children' | 'onCopy' | 'onFeedback'
  > & {
    sender?: string | boolean;
    name?: string | boolean;
    children?: ReactNode;
    onCopy?: ChatMessageProps['onCopy'] | boolean;
    onFeedback?: ChatMessageProps['onFeedback'] | boolean;
  }
> = ({ sender, name, sent, onCopy, onFeedback, children, ...restProps }) => (
  <BraidChatMessage
    {...restProps}
    sender={
      typeof sender === 'string' && isSender(sender) ? sender : 'participant'
    }
    name={typeof name === 'string' && name.length > 0 ? name : 'Name'}
    sent={isValidDate(sent) ? sent : undefined}
    onCopy={isHandler(onCopy) ? onCopy : undefined}
    onFeedback={isHandler(onFeedback) ? onFeedback : undefined}
  >
    {children}
  </BraidChatMessage>
);
