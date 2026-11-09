import assert from 'assert';

import { type ReactNode, isValidElement, useRef } from 'react';

import flattenChildren from '../../utils/flattenChildren';
import { Box } from '../Box/Box';
import type { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';
import { ScrollContainer } from '../private/ScrollContainer/ScrollContainer';
import type { DataAttributeMap } from '../private/buildDataAttributes';

import type { ChatMessageProps } from './ChatMessage';
import {
  type ChatMessageListVariant,
  ChatMessageDayContext,
  ChatMessageListContext,
  validChatMessageListVariants,
} from './ChatMessageListContext';
import { getDayKey, parseSentDate } from './chatMessageDay';
import { usePinChatToEnd } from './pinChatToEnd';

import * as styles from './ChatMessageList.css';

export interface ChatMessageListProps {
  label: string;
  variant?: ChatMessageListVariant;
  children: ReactNodeNoStrings;
  data?: DataAttributeMap;
}

const isChatMessageGroupElement = (
  child: ReturnType<typeof flattenChildren>[number],
) =>
  isValidElement(child) &&
  // @ts-expect-error __isChatMessageGroup__ Braid custom property
  child.type.__isChatMessageGroup__ === true;

/**
 * The first dated message in a group sets the day for that group.
 */
const firstSentDate = (group: ReactNode) => {
  if (!isValidElement<{ children?: ReactNode }>(group)) {
    return undefined;
  }

  const dated = flattenChildren(group.props.children).find(
    (child) =>
      isValidElement<ChatMessageProps>(child) &&
      child.props.sentDate !== undefined,
  );

  return isValidElement<ChatMessageProps>(dated)
    ? dated.props.sentDate
    : undefined;
};

/**
 * For each group, the local day it starts, or null when it continues the previous day.
 * Groups with no dated message leave the current day unchanged.
 */
const daysStartedByGroup = (groups: ReturnType<typeof flattenChildren>) => {
  let currentDay: string | undefined;

  return groups.map((group) => {
    const sentDate = parseSentDate(firstSentDate(group));

    if (!sentDate) {
      return null;
    }

    const day = getDayKey(sentDate);

    if (day === currentDay) {
      return null;
    }

    currentDay = day;

    return sentDate;
  });
};

export const ChatMessageList = ({
  label,
  variant = 'name',
  children,
  data,
  ...restProps
}: ChatMessageListProps) => {
  const scrollerRef = useRef<HTMLElement>(null);
  const logRef = useRef<HTMLElement>(null);

  usePinChatToEnd(scrollerRef, logRef, children);

  assert(
    typeof label === 'string' && label.length > 0,
    'ChatMessageList requires a label so the conversation has an accessible name.',
  );

  assert(
    validChatMessageListVariants.includes(variant),
    `ChatMessageList variant of "${variant}" is not valid. It must be "name" or "avatar".`,
  );

  const groups = flattenChildren(children);

  assert(
    groups.every(isChatMessageGroupElement),
    'Only ChatMessageGroup elements can be direct children of a ChatMessageList. See the documentation for correct usage: https://seek-oss.github.io/braid-design-system/components/ChatMessageList',
  );

  const daysStarted = daysStartedByGroup(groups);

  return (
    <Box className={styles.frame}>
      <ScrollContainer ref={scrollerRef} direction="vertical" fadeSize="small">
        <Box
          ref={logRef}
          component="ol"
          display="flex"
          flexDirection="column"
          justifyContent="flexEnd"
          gap="large"
          className={styles.messages}
          role="log"
          aria-label={label}
          tabIndex={0}
          data={data}
          style={{ minHeight: '100%' }}
          {...restProps}
        >
          <ChatMessageListContext.Provider value={variant}>
            {groups.map((group, index) => (
              <ChatMessageDayContext.Provider
                key={isValidElement(group) ? group.key : index}
                value={daysStarted[index]}
              >
                {group}
              </ChatMessageDayContext.Provider>
            ))}
          </ChatMessageListContext.Provider>
        </Box>
      </ScrollContainer>
    </Box>
  );
};
