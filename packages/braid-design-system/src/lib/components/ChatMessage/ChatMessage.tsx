import assert from 'assert';

import { type ReactNode, useState } from 'react';

import { Box } from '../Box/Box';
import { ButtonIcon } from '../ButtonIcon/ButtonIcon';
import { Inline } from '../Inline/Inline';
import { Text } from '../Text/Text';
import { IconCopy, IconThumb } from '../icons';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';

import * as styles from './ChatMessage.css';

export const validChatMessageSenders = [
  'user',
  'participant',
  'assistant',
] as const;
type Sender = (typeof validChatMessageSenders)[number];
type Feedback = 'positive' | 'negative';

const feedbackIconTone = {
  positive: 'positive',
  negative: 'critical',
} as const;

export interface ChatMessageProps {
  sender: Sender;
  avatar?: ReactNode;
  name: string;
  sent?: Date | string | number;
  onCopy?: () => void;
  onFeedback?: (feedback: 'positive' | 'negative') => void;
  children: ReactNode;
  data?: DataAttributeMap;
}

const backgroundForSender = {
  assistant: undefined,
  participant: 'neutralLight',
  user: { lightMode: 'brandAccentSoft', darkMode: 'neutral' },
} as const;

const timeFormat = new Intl.DateTimeFormat(undefined, {
  hour: 'numeric',
  minute: '2-digit',
  hour12: true,
});

export const ChatMessage = ({
  sender,
  avatar,
  name,
  sent,
  onCopy,
  onFeedback,
  children,
  data,
  ...restProps
}: ChatMessageProps) => {
  const [feedback, setFeedback] = useState<Feedback>();

  assert(
    validChatMessageSenders.indexOf(sender) >= 0,
    `ChatMessage sender of "${sender}" is not valid.`,
  );

  assert(
    typeof name === 'string' && name.length > 0,
    `ChatMessage name of "${name}" is not valid.`,
  );

  const sentDate = sent !== undefined ? new Date(sent) : undefined;

  assert(
    !sentDate || !isNaN(sentDate.getTime()),
    `ChatMessage sent of "${sent}" is not a valid date.`,
  );
  const align = sender === 'user' ? 'right' : 'left';
  const showCopy = Boolean(onCopy) && sender === 'assistant';
  const showFeedback = Boolean(onFeedback) && sender === 'assistant';
  const showActions = showCopy || showFeedback;

  const selectFeedback = (value: Feedback) => {
    setFeedback((current) => (current === value ? undefined : value));
    onFeedback?.(value);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={sender === 'assistant' ? 'small' : 'xsmall'}
      className={[styles.root, styles.sender[sender]]}
      {...buildDataAttributes({ data, validateRestProps: restProps })}
    >
      {sender !== 'user' && name && !avatar ? (
        <Box className={styles.name}>
          <Text size="xsmall" tone="secondary" align={align}>
            {name}
          </Text>
        </Box>
      ) : null}
      <Box display="flex" alignItems="flexEnd" gap="small">
        {avatar ? (
          <Box flexShrink={0} minWidth={0} className={styles.avatar}>
            {avatar}
          </Box>
        ) : null}
        <Box
          padding={sender !== 'assistant' ? 'small' : undefined}
          background={backgroundForSender[sender]}
          borderRadius="large"
          className={[
            styles.bubble,
            sender === 'user' ? styles.text : undefined,
          ]}
        >
          <Text>{children}</Text>
        </Box>
      </Box>
      {sender !== 'assistant' && sentDate ? (
        <Box
          component="time"
          dateTime={sentDate.toISOString()}
          className={[styles.sent, avatar ? styles.avatarOffset : undefined]}
        >
          <Text size="xsmall" tone="secondary" align={align}>
            {timeFormat.format(sentDate)}
          </Text>
        </Box>
      ) : null}
      {showActions ? (
        <Box
          className={[styles.actions, avatar ? styles.avatarOffset : undefined]}
        >
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
                icon={
                  <IconThumb
                    tone={
                      feedback === 'positive'
                        ? feedbackIconTone.positive
                        : undefined
                    }
                  />
                }
                label="Good response"
                variant="transparent"
                size="small"
                type="button"
                aria-pressed={feedback === 'positive'}
                onClick={() => selectFeedback('positive')}
              />
            ) : null}
            {showFeedback ? (
              <ButtonIcon
                icon={
                  <IconThumb
                    direction="down"
                    tone={
                      feedback === 'negative'
                        ? feedbackIconTone.negative
                        : undefined
                    }
                  />
                }
                label="Bad response"
                variant="transparent"
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
