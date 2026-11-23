import { type FC, isValidElement } from 'react';

import {
  type ChatMessageGroupProps,
  ChatMessageGroup as BraidChatMessageGroup,
} from './ChatMessageGroup';
import {
  type ChatMessageSender,
  validChatMessageSenders,
} from './ChatMessageGroupContext';

const isSender = (sender: string): sender is ChatMessageSender =>
  validChatMessageSenders.includes(sender as ChatMessageSender);

const isSentDate = (
  value: unknown,
): value is NonNullable<ChatMessageGroupProps['sentDate']> =>
  (typeof value === 'string' ||
    typeof value === 'number' ||
    value instanceof Date) &&
  !isNaN(new Date(value).getTime());

const isHandler = <Handler extends (...args: never[]) => void>(
  handler: unknown,
): handler is Handler => typeof handler === 'function';

export const ChatMessageGroup: FC<
  Omit<
    ChatMessageGroupProps,
    'sender' | 'name' | 'avatar' | 'sentDate' | 'onCopy' | 'onFeedback'
  > & {
    sender?: string | boolean;
    name?: string | boolean;
    avatar?: ChatMessageGroupProps['avatar'] | boolean;
    sentDate?: ChatMessageGroupProps['sentDate'] | boolean;
    onCopy?: ChatMessageGroupProps['onCopy'] | boolean;
    onFeedback?: ChatMessageGroupProps['onFeedback'] | boolean;
  }
> = ({
  sender,
  name,
  avatar,
  sentDate,
  onCopy,
  onFeedback,
  children,
  ...restProps
}) => {
  const groupSender =
    typeof sender === 'string' && isSender(sender) ? sender : 'participant';
  // System runs have no name, so there is no placeholder to show.
  const placeholderName = groupSender === 'system' ? undefined : 'Name';

  return (
    <BraidChatMessageGroup
      {...restProps}
      sender={groupSender}
      name={
        typeof name === 'string' && name.length > 0 ? name : placeholderName
      }
      avatar={isValidElement(avatar) ? avatar : undefined}
      sentDate={isSentDate(sentDate) ? sentDate : undefined}
      onCopy={isHandler(onCopy) ? onCopy : undefined}
      onFeedback={isHandler(onFeedback) ? onFeedback : undefined}
    >
      {children}
    </BraidChatMessageGroup>
  );
};

// @ts-expect-error __isChatMessageGroup__ Braid custom property
ChatMessageGroup.__isChatMessageGroup__ = true;
