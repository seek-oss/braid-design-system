import { type ReactNode, createContext } from 'react';

export const validChatMessageSenders = [
  'user',
  'participant',
  'assistant',
  'system',
] as const;

export type ChatMessageSender = (typeof validChatMessageSenders)[number];

export interface ChatMessageGroupContextValue {
  sender: ChatMessageSender;
  avatar?: ReactNode;
  isFirst: boolean;
  isLast: boolean;
}

export const ChatMessageGroupContext =
  createContext<ChatMessageGroupContextValue | null>(null);
