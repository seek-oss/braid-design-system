import { createContext } from 'react';

export const validChatMessageListVariants = ['name', 'avatar'] as const;

export type ChatMessageListVariant =
  (typeof validChatMessageListVariants)[number];

export const ChatMessageListContext =
  createContext<ChatMessageListVariant | null>(null);

/**
 * The local day a group starts, set by ChatMessageList on the first group of each day.
 * Null for every other group, including groups with no dated message.
 */
export const ChatMessageDayContext = createContext<Date | null>(null);
