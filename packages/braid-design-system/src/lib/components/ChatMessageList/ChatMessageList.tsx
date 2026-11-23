import assert from 'assert';

import { type ReactNode, isValidElement, useRef } from 'react';

import flattenChildren from '../../utils/flattenChildren';
import { Box } from '../Box/Box';
import { ButtonIcon } from '../ButtonIcon/ButtonIcon';
import { ScrollContainer } from '../ScrollContainer/ScrollContainer';
import { IconArrow } from '../icons';
import type { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';
import type { DataAttributeMap } from '../private/buildDataAttributes';

import {
  type ChatMessageListVariant,
  ChatMessageDayContext,
  ChatMessageListContext,
  validChatMessageListVariants,
} from './ChatMessageListContext';
import {
  type ChatMessageSentDate,
  getDayKey,
  parseSentDate,
} from './chatMessageDay';
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
 * The group's sentDate sets the day for that group.
 */
const sentDateForGroup = (group: ReactNode) => {
  if (!isValidElement<{ sentDate?: ChatMessageSentDate }>(group)) {
    return undefined;
  }

  return group.props.sentDate;
};

/**
 * For each group, the local day it starts, or null when it continues the previous day.
 * Groups with no dated message leave the current day unchanged.
 */
const daysStartedByGroup = (groups: ReturnType<typeof flattenChildren>) => {
  let currentDay: string | undefined;

  return groups.map((group) => {
    const sentDate = parseSentDate(sentDateForGroup(group));

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

  const { awayFromEnd, scrollToEnd } = usePinChatToEnd(
    scrollerRef,
    logRef,
    children,
  );

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
    <Box
      className={styles.frame}
      position="relative"
      flexGrow={1}
      height="full"
    >
      <ScrollContainer ref={scrollerRef} direction="vertical" fadeSize="small">
        {/*
          End padding keeps the last message's actions inside the clip.
          Cropped text and touch targets can extend past their boxes, and
          clipping them here keeps that overflow from making the list scroll.
        */}
        <Box
          ref={logRef}
          component="ol"
          display="flex"
          flexDirection="column"
          justifyContent="flexEnd"
          gap="large"
          overflow="hidden"
          paddingBottom={styles.messageEndSpace}
          outline="focus"
          className={styles.messages}
          role="log"
          aria-label={label}
          tabIndex={0}
          data={data}
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
      <Box
        className={[
          styles.jumpToLatest,
          awayFromEnd ? undefined : styles.jumpToLatestHidden,
        ]}
        transition="fast"
        borderRadius="full"
        boxShadow="medium"
        position="absolute"
        zIndex={1}
        opacity={awayFromEnd ? undefined : 0}
        pointerEvents={awayFromEnd ? undefined : 'none'}
        aria-hidden={awayFromEnd ? undefined : true}
      >
        <ButtonIcon
          variant="solid"
          tone="neutral"
          icon={<IconArrow direction="down" />}
          label="Jump to latest"
          tooltipPlacement="top"
          tabIndex={awayFromEnd ? 0 : -1}
          onClick={scrollToEnd}
        />
      </Box>
    </Box>
  );
};
