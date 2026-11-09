import type { FC } from 'react';

import {
  type ChatMessageListProps,
  ChatMessageList as BraidChatMessageList,
} from './ChatMessageList';
import { validChatMessageListVariants } from './ChatMessageListContext';

const isVariant = (
  variant: unknown,
): variant is ChatMessageListProps['variant'] =>
  typeof variant === 'string' &&
  validChatMessageListVariants.includes(
    variant as (typeof validChatMessageListVariants)[number],
  );

export const ChatMessageList: FC<
  Omit<ChatMessageListProps, 'label' | 'variant'> & {
    label?: string | boolean;
    variant?: string | boolean;
  }
> = ({ label, variant, children, ...restProps }) => (
  <BraidChatMessageList
    {...restProps}
    label={
      typeof label === 'string' && label.length > 0 ? label : 'Conversation'
    }
    variant={isVariant(variant) ? variant : 'name'}
  >
    {children}
  </BraidChatMessageList>
);
