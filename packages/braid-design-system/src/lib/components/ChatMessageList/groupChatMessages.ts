import assert from 'assert';

import type { ReactNode } from 'react';

import {
  type ChatMessageSender,
  validChatMessageSenders,
} from './ChatMessageGroupContext';
import {
  type ChatMessageSentDate,
  getDayKey,
  parseSentDate,
} from './chatMessageDay';

export interface GroupableChatMessage {
  sender: ChatMessageSender;
  /** Required unless the sender is `system`. */
  name?: string;
  avatar?: ReactNode;
}

interface DatedChatMessage {
  sentDate?: ChatMessageSentDate;
}

export interface ChatMessageRun<Message extends GroupableChatMessage> {
  sender: ChatMessageSender;
  name?: string;
  avatar?: ReactNode;
  messages: Array<Omit<Message, keyof GroupableChatMessage>>;
}

const isSender = (sender: unknown): sender is ChatMessageSender =>
  typeof sender === 'string' &&
  validChatMessageSenders.includes(sender as ChatMessageSender);

const senderList = validChatMessageSenders
  .map((sender) => `"${sender}"`)
  .join(', ');

/**
 * Groups messages into runs. A run ends when the sender changes, or when a dated
 * message falls on a different local day from the run's dated messages.
 * Messages without a `sentDate` join the current run.
 */
export function groupChatMessages<
  Message extends GroupableChatMessage & DatedChatMessage,
>(messages: readonly Message[]): Array<ChatMessageRun<Message>> {
  assert(
    Array.isArray(messages),
    'Expected an array of messages to be passed to "groupChatMessages".',
  );

  const groups: Array<ChatMessageRun<Message>> = [];
  let runDay: string | undefined;

  for (const message of messages) {
    assert(
      typeof message === 'object' &&
        message !== null &&
        isSender(message.sender),
      `Each message passed to "groupChatMessages" must have a sender of ${senderList}.`,
    );

    const hasName = typeof message.name === 'string' && message.name.length > 0;

    assert(
      hasName || (message.sender === 'system' && message.name === undefined),
      'Each message passed to "groupChatMessages" must have a name, unless its sender is "system".',
    );

    const { sender, name, avatar, ...rest } = message;
    const sentDate = parseSentDate(message.sentDate);
    const day = sentDate ? getDayKey(sentDate) : undefined;
    let group = groups[groups.length - 1];

    if (
      !group ||
      group.sender !== sender ||
      (day !== undefined && runDay !== undefined && day !== runDay)
    ) {
      group = { sender, name, messages: [] };
      groups.push(group);
      runDay = undefined;
    }

    if (runDay === undefined && day !== undefined) {
      runDay = day;
    }

    if (avatar !== undefined) {
      group.avatar = avatar;
    }

    group.messages.push(rest);
  }

  return groups;
}
