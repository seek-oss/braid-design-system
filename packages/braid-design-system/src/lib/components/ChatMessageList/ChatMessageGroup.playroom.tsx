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

export const ChatMessageGroup: FC<
  Omit<ChatMessageGroupProps, 'sender' | 'name' | 'avatar'> & {
    sender?: string | boolean;
    name?: string | boolean;
    avatar?: ChatMessageGroupProps['avatar'] | boolean;
  }
> = ({ sender, name, avatar, children, ...restProps }) => {
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
    >
      {children}
    </BraidChatMessageGroup>
  );
};

// @ts-expect-error __isChatMessageGroup__ Braid custom property
ChatMessageGroup.__isChatMessageGroup__ = true;
