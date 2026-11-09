import assert from 'assert';

import {
  cloneElement,
  isValidElement,
  type ReactElement,
  type ReactNode,
  useContext,
  useState,
} from 'react';

import type { AvatarProps } from '../Avatar/Avatar';
import { Box } from '../Box/Box';
import { ButtonIcon } from '../ButtonIcon/ButtonIcon';
import { Inline } from '../Inline/Inline';
import { Text } from '../Text/Text';
import { IconCopy, IconThumb } from '../icons';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';

import { ChatMessageGroupContext } from './ChatMessageGroupContext';

import * as styles from './ChatMessage.css';

type Feedback = 'positive' | 'negative';

export interface ChatMessageProps {
  sentDate?: Date | string | number;
  onCopy?: () => void;
  onFeedback?: (feedback: Feedback) => void;
  children: ReactNode;
  data?: DataAttributeMap;
}

const backgroundForSender = {
  assistant: undefined,
  participant: 'neutralLight',
  user: { lightMode: 'brandAccentSoft', darkMode: 'neutral' },
} as const;

const isBraidAvatar = (
  avatar: ReactNode,
): avatar is ReactElement<AvatarProps> =>
  isValidElement<AvatarProps>(avatar) &&
  // @ts-expect-error __isAvatar__ Braid custom property
  avatar.type.__isAvatar__ === true;

const avatarForMessage = (avatar: ReactNode) => {
  if (!isBraidAvatar(avatar)) {
    return avatar;
  }

  assert(
    avatar.props.size === undefined,
    'ChatMessageGroup sets the Avatar size so it lines up with the surrounding messages. Remove the size prop.',
  );

  return cloneElement(avatar, { size: styles.avatarSize });
};

const timeFormat = new Intl.DateTimeFormat(undefined, {
  hour: 'numeric',
  minute: '2-digit',
  hour12: true,
});

export const ChatMessage = ({
  sentDate,
  onCopy,
  onFeedback,
  children,
  data,
  ...restProps
}: ChatMessageProps) => {
  const [feedback, setFeedback] = useState<Feedback>();
  const group = useContext(ChatMessageGroupContext);

  assert(
    group,
    'ChatMessage must be rendered inside a ChatMessageGroup. See the documentation for correct usage: https://seek-oss.github.io/braid-design-system/components/ChatMessageList',
  );

  const { sender, avatar, isFirst, isLast } = group;
  const date = sentDate !== undefined ? new Date(sentDate) : undefined;

  assert(
    !date || !isNaN(date.getTime()),
    `ChatMessage sentDate of "${sentDate}" is not a valid date.`,
  );

  if (sender === 'system') {
    return (
      <Box
        className={styles.root}
        {...buildDataAttributes({ data, validateRestProps: restProps })}
      >
        <Text size="xsmall" tone="secondary" align="center">
          {children}
        </Text>
      </Box>
    );
  }

  const align = sender === 'user' ? 'right' : 'left';
  const showSent = isLast && sender !== 'assistant' && Boolean(date);
  const showCopy = isLast && sender === 'assistant' && Boolean(onCopy);
  const showFeedback = isLast && sender === 'assistant' && Boolean(onFeedback);
  const joined = !isFirst;
  const bubbleRadius = {
    user: joined ? styles.radius.userJoined : styles.radius.user,
    participant: joined ? styles.radius.startJoined : styles.radius.start,
    assistant: joined ? styles.radius.startJoined : styles.radius.start,
  }[sender];
  const avatarOffset = avatar ? styles.avatarOffset : undefined;

  const selectFeedback = (value: Feedback) => {
    setFeedback((current) => (current === value ? undefined : value));
    onFeedback?.(value);
  };

  return (
    <Box
      className={styles.root}
      display="flex"
      flexDirection="column"
      gap={sender === 'assistant' ? 'small' : 'xsmall'}
      {...buildDataAttributes({ data, validateRestProps: restProps })}
    >
      <Box
        display="flex"
        alignItems="flexEnd"
        gap="small"
        className={isLast ? undefined : avatarOffset}
      >
        {avatar && isLast ? (
          <Box flexShrink={0} className={styles.avatarSlot}>
            {avatarForMessage(avatar)}
          </Box>
        ) : null}
        <Box
          padding={sender !== 'assistant' ? 'small' : undefined}
          background={backgroundForSender[sender]}
          borderRadius="large"
          className={[
            styles.bubble,
            bubbleRadius,
            sender === 'user' ? styles.alignEnd : undefined,
            sender === 'user' ? styles.text : undefined,
          ]}
        >
          <Text>{children}</Text>
        </Box>
      </Box>
      {showSent && date ? (
        <Box
          component="time"
          dateTime={date.toISOString()}
          className={avatarOffset}
        >
          <Text size="xsmall" tone="secondary" align={align}>
            {timeFormat.format(date)}
          </Text>
        </Box>
      ) : null}
      {showCopy || showFeedback ? (
        <Box className={avatarOffset}>
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
        </Box>
      ) : null}
    </Box>
  );
};

ChatMessage.__isChatMessage__ = true;
