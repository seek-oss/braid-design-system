import type { FC, ReactNode } from 'react';

import {
  type ChatMessageProps,
  ChatMessage as BraidChatMessage,
} from './ChatMessage';

const isValidDate = (value: ChatMessageProps['sentDate']) =>
  value !== undefined && !isNaN(new Date(value).getTime());

const isHandler = <Handler extends (...args: never[]) => void>(
  handler: unknown,
): handler is Handler => typeof handler === 'function';

export const ChatMessage: FC<
  Omit<ChatMessageProps, 'children' | 'onCopy' | 'onFeedback'> & {
    children?: ReactNode;
    onCopy?: ChatMessageProps['onCopy'] | boolean;
    onFeedback?: ChatMessageProps['onFeedback'] | boolean;
  }
> = ({ sentDate, onCopy, onFeedback, children, ...restProps }) => (
  <BraidChatMessage
    {...restProps}
    sentDate={isValidDate(sentDate) ? sentDate : undefined}
    onCopy={isHandler(onCopy) ? onCopy : undefined}
    onFeedback={isHandler(onFeedback) ? onFeedback : undefined}
  >
    {children}
  </BraidChatMessage>
);

// @ts-expect-error __isChatMessage__ Braid custom property
ChatMessage.__isChatMessage__ = true;
