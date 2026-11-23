import assert from 'assert';

import { type ReactNode, useContext } from 'react';

import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';

import { ChatMessageGroupContext } from './ChatMessageGroupContext';

import * as styles from './ChatMessage.css';

export interface ChatMessageProps {
  children: ReactNode;
  data?: DataAttributeMap;
}

const backgroundForSender = {
  assistant: undefined,
  participant: 'neutralLight',
  user: { lightMode: 'brandAccentSoft', darkMode: 'neutral' },
} as const;

export const ChatMessage = ({
  children,
  data,
  ...restProps
}: ChatMessageProps) => {
  const group = useContext(ChatMessageGroupContext);

  assert(
    group,
    'ChatMessage must be rendered inside a ChatMessageGroup. See the documentation for correct usage: https://seek-oss.github.io/braid-design-system/components/ChatMessageList',
  );

  const { sender, isFirst } = group;

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

  const joined = !isFirst;
  const bubbleRadius = {
    user: joined ? styles.radius.userJoined : styles.radius.user,
    participant: joined ? styles.radius.startJoined : styles.radius.start,
    assistant: joined ? styles.radius.startJoined : styles.radius.start,
  }[sender];

  return (
    <Box
      className={styles.root}
      {...buildDataAttributes({ data, validateRestProps: restProps })}
    >
      <Box
        display="flex"
        justifyContent={sender === 'user' ? 'flexEnd' : undefined}
      >
        <Box
          padding={sender !== 'assistant' ? 'small' : undefined}
          background={backgroundForSender[sender]}
          borderRadius="large"
          className={[
            styles.bubble,
            bubbleRadius,
            sender === 'user' ? styles.text : undefined,
          ]}
        >
          <Text>{children}</Text>
        </Box>
      </Box>
    </Box>
  );
};

ChatMessage.__isChatMessage__ = true;
