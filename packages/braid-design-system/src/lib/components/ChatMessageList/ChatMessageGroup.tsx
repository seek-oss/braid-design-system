import assert from 'assert';

import { assignInlineVars } from '@vanilla-extract/dynamic';
import {
  cloneElement,
  type ReactElement,
  type ReactNode,
  isValidElement,
  useContext,
  useState,
} from 'react';

import flattenChildren from '../../utils/flattenChildren';
import { Avatar, type AvatarProps } from '../Avatar/Avatar';
import { Badge } from '../Badge/Badge';
import { Box } from '../Box/Box';
import { ButtonIcon } from '../ButtonIcon/ButtonIcon';
import { HiddenVisually } from '../HiddenVisually/HiddenVisually';
import { Inline } from '../Inline/Inline';
import { Text } from '../Text/Text';
import { IconCopy, IconThumb } from '../icons';
import type { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';

import {
  type ChatMessageFeedback,
  type ChatMessageSender,
  ChatMessageGroupContext,
  validChatMessageSenders,
} from './ChatMessageGroupContext';
import {
  ChatMessageDayContext,
  ChatMessageListContext,
} from './ChatMessageListContext';
import {
  type ChatMessageSentDate,
  formatDayLabel,
  getDayKey,
  parseSentDate,
} from './chatMessageDay';

import * as styles from './ChatMessageGroup.css';

export type { ChatMessageFeedback };

export interface ChatMessageGroupProps {
  sender: ChatMessageSender;
  /** Required for every sender except `system`. */
  name?: string;
  avatar?: ReactNode;
  /** Shown under a `user` or `participant` group. Also sets the day stamp. */
  sentDate?: ChatMessageSentDate;
  /** Shows a copy button under an `assistant` group. */
  onCopy?: () => void;
  /** Shows feedback buttons under an `assistant` group. */
  onFeedback?: (feedback: ChatMessageFeedback) => void;
  children: ReactNodeNoStrings;
  data?: DataAttributeMap;
}

const timeFormat = new Intl.DateTimeFormat(undefined, {
  hour: 'numeric',
  minute: '2-digit',
  hour12: true,
});

const isBraidAvatar = (
  avatar: ReactNode,
): avatar is ReactElement<AvatarProps> =>
  isValidElement<AvatarProps>(avatar) &&
  // @ts-expect-error __isAvatar__ Braid custom property
  avatar.type.__isAvatar__ === true;

const avatarForGroup = (avatar: ReactNode) => {
  if (!isBraidAvatar(avatar)) {
    return avatar;
  }

  assert(
    avatar.props.size === undefined,
    'ChatMessageGroup sets the Avatar size so it lines up with the surrounding messages. Remove the size prop.',
  );

  return cloneElement(avatar, { size: styles.avatarSize });
};

export const ChatMessageGroup = ({
  sender,
  name,
  avatar,
  sentDate,
  onCopy,
  onFeedback,
  children,
  data,
  ...restProps
}: ChatMessageGroupProps) => {
  const variant = useContext(ChatMessageListContext);
  const dayStarted = useContext(ChatMessageDayContext);
  const [feedback, setFeedback] = useState<ChatMessageFeedback>();

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

  const chatMessages = flattenChildren(children).filter(isValidElement);
  const date = parseSentDate(sentDate);

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
  const showSent =
    (sender === 'user' || sender === 'participant') && Boolean(date);
  const showCopy = sender === 'assistant' && Boolean(onCopy);
  const showFeedback = sender === 'assistant' && Boolean(onFeedback);
  const align = sender === 'user' ? 'right' : 'left';
  const selectFeedback = (value: ChatMessageFeedback) => {
    setFeedback((current) => (current === value ? undefined : value));
    onFeedback?.(value);
  };

  const sentTime =
    showSent && date ? (
      <Text size="xsmall" tone="secondary" align={align}>
        {timeFormat.format(date)}
      </Text>
    ) : null;
  const actions =
    showCopy || showFeedback ? (
      <Inline space="small">
        {showCopy ? (
          <ButtonIcon
            icon={<IconCopy />}
            label="Copy"
            variant="transparent"
            size="small"
            type="button"
            onClick={onCopy}
          />
        ) : null}
        {showFeedback ? (
          <ButtonIcon
            icon={<IconThumb />}
            label="Good response"
            variant={feedback === 'positive' ? 'solid' : 'transparent'}
            bleed
            size="small"
            type="button"
            aria-pressed={feedback === 'positive'}
            onClick={() => selectFeedback('positive')}
          />
        ) : null}
        {showFeedback ? (
          <ButtonIcon
            icon={<IconThumb direction="down" />}
            label="Bad response"
            variant={feedback === 'negative' ? 'solid' : 'transparent'}
            bleed
            size="small"
            type="button"
            aria-pressed={feedback === 'negative'}
            onClick={() => selectFeedback('negative')}
          />
        ) : null}
      </Inline>
    ) : null;

  const messages = chatMessages.map((message, index) => (
    <ChatMessageGroupContext.Provider
      key={message.key}
      value={{
        sender,
        isFirst: index === 0,
      }}
    >
      {message}
    </ChatMessageGroupContext.Provider>
  ));

  // The sent time and actions follow every child, so they still show when the
  // last child is not a message. In the avatar grid they are later children,
  // placed in the message column by the grid.
  const trailing = (
    <>
      {sentTime && date ? (
        <Box
          component="time"
          dateTime={date.toISOString()}
          className={styles.sentRow}
        >
          {sentTime}
        </Box>
      ) : null}
      {actions}
    </>
  );

  const messageStack = (
    <Box
      display="flex"
      flexDirection="column"
      gap={open ? 'small' : undefined}
      className={open ? undefined : styles.tight}
    >
      {messages}
      {trailing}
    </Box>
  );

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
      {resolvedAvatar ? (
        <Box
          className={[
            styles.avatarGrid,
            open ? styles.avatarGridRowGap.open : styles.avatarGridRowGap.tight,
          ]}
          style={assignInlineVars({
            [styles.chatMessageCount]: String(Math.max(chatMessages.length, 1)),
          })}
        >
          <Box className={styles.avatarSlot}>
            {avatarForGroup(resolvedAvatar)}
          </Box>
          {messages}
          {trailing}
        </Box>
      ) : (
        messageStack
      )}
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
