import type { FC, ReactNode } from 'react';

import {
  type ChatMessageProps,
  ChatMessage as BraidChatMessage,
} from './ChatMessage';

export const ChatMessage: FC<
  Omit<ChatMessageProps, 'children'> & {
    children?: ReactNode;
  }
> = ({ children, ...restProps }) => (
  <BraidChatMessage {...restProps}>{children}</BraidChatMessage>
);

// @ts-expect-error __isChatMessage__ Braid custom property
ChatMessage.__isChatMessage__ = true;
