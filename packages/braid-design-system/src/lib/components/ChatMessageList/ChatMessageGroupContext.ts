import { createContext } from 'react';

export const validChatMessageSenders = [
  'user',
  'participant',
  'assistant',
  'system',
] as const;

export type ChatMessageSender = (typeof validChatMessageSenders)[number];

export type ChatMessageFeedback = 'positive' | 'negative';

export interface ChatMessageGroupContextValue {
  sender: ChatMessageSender;
  isFirst: boolean;
}

export const ChatMessageGroupContext =
  createContext<ChatMessageGroupContextValue | null>(null);
