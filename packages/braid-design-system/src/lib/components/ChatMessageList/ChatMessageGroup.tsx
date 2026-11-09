import assert from 'assert';

import {
  type ReactElement,
  type ReactNode,
  isValidElement,
  useContext,
} from 'react';

import flattenChildren from '../../utils/flattenChildren';
import { Avatar } from '../Avatar/Avatar';
import { Badge } from '../Badge/Badge';
import { Box } from '../Box/Box';
import { HiddenVisually } from '../HiddenVisually/HiddenVisually';
import { Text } from '../Text/Text';
import type { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';

import type { ChatMessageProps } from './ChatMessage';
import {
  type ChatMessageSender,
  ChatMessageGroupContext,
  validChatMessageSenders,
} from './ChatMessageGroupContext';
import {
  ChatMessageDayContext,
  ChatMessageListContext,
} from './ChatMessageListContext';
import { formatDayLabel, getDayKey } from './chatMessageDay';

import * as styles from './ChatMessageGroup.css';

export interface ChatMessageGroupProps {
  sender: ChatMessageSender;
  /** Required for every sender except `system`. */
  name?: string;
  avatar?: ReactNode;
  children: ReactNodeNoStrings;
  data?: DataAttributeMap;
}

const isChatMessageElement = (
  child: ReturnType<typeof flattenChildren>[number],
): child is ReactElement<ChatMessageProps> =>
  isValidElement<ChatMessageProps>(child) &&
  // @ts-expect-error __isChatMessage__ Braid custom property
  child.type.__isChatMessage__ === true;

export const ChatMessageGroup = ({
  sender,
  name,
  avatar,
  children,
  data,
  ...restProps
}: ChatMessageGroupProps) => {
  const variant = useContext(ChatMessageListContext);
  const dayStarted = useContext(ChatMessageDayContext);

  assert(
    variant,
    'ChatMessageGroup must be rendered inside a ChatMessageList. See the documentation for correct usage: https://seek-oss.github.io/braid-design-system/components/ChatMessageList',
  );

  assert(
    validChatMessageSenders.indexOf(sender) >= 0,
    `ChatMessageGroup sender of "${sender}" is not valid.`,
  );

  const hasName = typeof name === 'string' && name.length > 0;

  assert(
    hasName || (sender === 'system' && name === undefined),
    `ChatMessageGroup name of "${name}" is not valid. Only system runs can leave out name.`,
  );

  const messages = flattenChildren(children);

  assert(
    messages.length > 0 && messages.every(isChatMessageElement),
    'Only ChatMessage elements can be direct children of a ChatMessageGroup. See the documentation for correct usage: https://seek-oss.github.io/braid-design-system/components/ChatMessageList',
  );

  const chatMessages = messages.filter(isChatMessageElement);

  assert(
    variant === 'avatar' || avatar === undefined,
    'ChatMessageGroup avatar is only available when ChatMessageList variant is "avatar".',
  );

  assert(
    sender !== 'user' || avatar === undefined,
    'ChatMessageGroup avatar is for participant and assistant runs. User runs stay end-aligned.',
  );

  assert(
    sender !== 'system' || avatar === undefined,
    'ChatMessageGroup avatar is for participant and assistant runs. System runs are centered text.',
  );

  const showsIdentity = sender === 'participant' || sender === 'assistant';
  const resolvedAvatar =
    variant === 'avatar' && showsIdentity && name !== undefined
      ? (avatar ?? <Avatar name={name} />)
      : undefined;
  const showName = variant === 'name' && showsIdentity;
  // Assistant and system text have no bubble padding, so they use the `small`
  // space. A tighter gap is only for user and participant bubbles that join.
  const open = sender === 'assistant' || sender === 'system';
  const listGap = open ? 'small' : 'xsmall';

  const content = (
    <>
      {showName ? (
        <Text size="xsmall" tone="secondary">
          {name}
        </Text>
      ) : null}
      {!showName && name !== undefined ? (
        <HiddenVisually>{name}</HiddenVisually>
      ) : null}
      <Box
        display="flex"
        flexDirection="column"
        gap={open ? 'small' : undefined}
        className={open ? undefined : styles.tight}
      >
        {chatMessages.map((message, index) => (
          <ChatMessageGroupContext.Provider
            key={message.key}
            value={{
              sender,
              avatar: resolvedAvatar,
              isFirst: index === 0,
              isLast: index === chatMessages.length - 1,
            }}
          >
            {message}
          </ChatMessageGroupContext.Provider>
        ))}
      </Box>
    </>
  );

  return (
    <Box
      component="li"
      display="flex"
      flexDirection="column"
      gap={dayStarted ? 'large' : 'small'}
      {...buildDataAttributes({ data, validateRestProps: restProps })}
    >
      {dayStarted ? (
        <Box
          component="time"
          dateTime={getDayKey(dayStarted)}
          display="flex"
          justifyContent="center"
          position="sticky"
          top={0}
        >
          <Badge tone="neutral" weight="regular">
            {formatDayLabel(dayStarted)}
          </Badge>
        </Box>
      ) : null}
      {dayStarted ? (
        <Box display="flex" flexDirection="column" gap={listGap}>
          {content}
        </Box>
      ) : (
        content
      )}
    </Box>
  );
};

ChatMessageGroup.__isChatMessageGroup__ = true;
