import { type ReactNode, type RefObject, useRef } from 'react';

import { useIsomorphicLayoutEffect } from '../../hooks/useIsomorphicLayoutEffect';

import { root as messageRoot } from './ChatMessage.css';
import { scrollOverlaySizeName } from '../private/ScrollContainer/ScrollContainer.css';

const messageClass = messageRoot.split(' ').find(Boolean) ?? messageRoot;

const isJSDom =
  typeof navigator !== 'undefined' && navigator.userAgent.includes('jsdom');

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  typeof window.matchMedia === 'function' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const slideDuration = (distance: number) =>
  Math.min(700, Math.max(480, Math.abs(distance) * 2.4));

const easeInOut = (progress: number) =>
  progress > 0.5
    ? 4 * Math.pow(progress - 1, 3) + 1
    : 4 * Math.pow(progress, 3);

/**
 * Height of the groups in the log. The log is stretched to the scrollport,
 * so its own size stays put while new groups still fit.
 */
const measureContent = (log: HTMLElement) => {
  let top = Infinity;
  let bottom = -Infinity;
  let count = 0;

  for (const item of log.children) {
    if (!(item instanceof HTMLElement)) {
      continue;
    }

    count += 1;
    top = Math.min(top, item.offsetTop);
    bottom = Math.max(bottom, item.offsetTop + item.offsetHeight);
  }

  if (count === 0) {
    return 0;
  }

  return Math.round(bottom - top);
};

/**
 * Part of a growth that did not become new scroll room. End-aligned groups
 * use that part to sit further along the list, so they have to be moved
 * back and eased into place. The rest is covered by scrolling.
 */
export const slackBeyondScroll = (
  growth: number,
  previousScrollSize: number,
  nextScrollSize: number,
  clientSize: number,
) => {
  const previousRoom = Math.max(0, previousScrollSize - clientSize);
  const nextRoom = Math.max(0, nextScrollSize - clientSize);

  return Math.max(0, growth - Math.max(0, nextRoom - previousRoom));
};

/**
 * Shift the groups, not the log. A transform on the log becomes scrollable
 * overflow, which changes the scroll size mid-slide and restarts the animation.
 * The log clips the shifted groups instead.
 */
const setShift = (log: HTMLElement, y: number) => {
  const transform = y === 0 ? '' : `translate3d(0, ${y}px, 0)`;

  for (const item of log.children) {
    if (item instanceof HTMLElement) {
      item.style.transform = transform;
    }
  }
};

const endThreshold = 2;

const distanceFromEnd = (scroller: HTMLElement) =>
  scroller.scrollHeight - scroller.clientHeight - scroller.scrollTop;

const lastMessage = (log: HTMLElement) => {
  const messages = log.getElementsByClassName(messageClass);
  const message = messages[messages.length - 1];

  return message instanceof HTMLElement ? message : null;
};

/**
 * Layout position of a message in the scroller. offsetTop ignores a slide
 * transform, which would otherwise move the measured top mid-animation.
 */
const offsetWithin = (element: HTMLElement, ancestor: HTMLElement) => {
  let top = 0;
  let current: Element | null = element;

  while (current instanceof HTMLElement && current !== ancestor) {
    top += current.offsetTop;
    current = current.offsetParent;
  }

  return top;
};

/**
 * Distance the top fade covers. The configured size stays on the scroller
 * even while the fade is hidden at the top of the list.
 */
const topFadeOffset = (scroller: HTMLElement) => {
  const value = getComputedStyle(scroller).getPropertyValue(
    scrollOverlaySizeName,
  );
  const size = Number.parseFloat(value);

  return Number.isFinite(size) ? size : 0;
};

/**
 * Scroll offset that reveals the latest message. A message taller than the
 * scrollport opens below the top fade, so the mask does not cover its first
 * line. A message that fits, or one the reader has already followed to the
 * end, stays at the end.
 */
export const pinTarget = (
  messageTop: number,
  messageHeight: number,
  scrollHeight: number,
  clientHeight: number,
  readerAtEnd: boolean,
  topOffset = 0,
) => {
  const end = Math.max(0, scrollHeight - clientHeight);

  if (readerAtEnd || messageHeight <= clientHeight) {
    return end;
  }

  return Math.min(end, Math.max(0, messageTop - topOffset));
};

/**
 * Keeps the latest message in view while the reader is following the end.
 * The first view jumps there. Later growth slides to reveal it, including
 * while the messages are still shorter than the list. A message taller than
 * the list opens below the top fade until the reader scrolls to its end.
 * Scrolling away leaves that position in place until the reader returns to
 * the end.
 */
export const usePinChatToEnd = (
  scrollerRef: RefObject<HTMLElement | null>,
  logRef: RefObject<HTMLElement | null>,
  children: ReactNode,
) => {
  const pinnedScroll = useRef(-1);
  const pinnedContent = useRef(-1);
  const hasPinned = useRef(false);
  const slideFrame = useRef(0);
  const shift = useRef(0);
  const released = useRef(false);
  const writingScroll = useRef(false);
  const ownedScroll = useRef<number | null>(null);
  const trackedMessage = useRef<HTMLElement | null>(null);
  // Set only when the reader scrolls to the end. Pinning there ourselves
  // leaves this clear, so a message that grows past the list still opens
  // at its top.
  const readerAtEnd = useRef(false);

  useIsomorphicLayoutEffect(() => {
    const scroller = scrollerRef.current;
    const log = logRef.current;

    if (!scroller || !log) {
      return;
    }

    // The browser otherwise keeps a scroller that is already at the end
    // stuck to that end when content is added. That happens before we can
    // measure the gap, so a slide to reveal new content never starts.
    scroller.style.overflowAnchor = 'none';

    const moveGroups = (y: number) => {
      shift.current = y;
      setShift(log, y);
    };

    const writeScroll = (value: number) => {
      writingScroll.current = true;
      scroller.scrollTop = value;
      ownedScroll.current = scroller.scrollTop;
      writingScroll.current = false;
    };

    const readTarget = () => {
      const message = lastMessage(log);

      return pinTarget(
        message ? offsetWithin(message, scroller) : 0,
        message ? message.offsetHeight : 0,
        scroller.scrollHeight,
        scroller.clientHeight,
        readerAtEnd.current,
        topFadeOffset(scroller),
      );
    };

    const jumpToTarget = () => {
      writeScroll(readTarget());
    };

    const stopSlide = () => {
      cancelAnimationFrame(slideFrame.current);
      slideFrame.current = 0;
      moveGroups(0);
    };

    const slideToTarget = (slack: number) => {
      cancelAnimationFrame(slideFrame.current);
      slideFrame.current = 0;

      const startY = shift.current + slack;
      const startTop = scroller.scrollTop;
      const distance = Math.abs(startY) + Math.abs(readTarget() - startTop);

      // Shift before the first paint, so growth that fits in the free space
      // does not appear and then move.
      moveGroups(startY);

      if (
        distance === 0 ||
        prefersReducedMotion() ||
        isJSDom ||
        typeof requestAnimationFrame !== 'function'
      ) {
        moveGroups(0);
        jumpToTarget();
        return;
      }

      const duration = slideDuration(distance);
      // The first callback can be late if the page was busy. Start the clock
      // then, so that delay does not skip the beginning of the slide.
      let startTime: number | undefined;

      const step = (now: number) => {
        startTime ??= now;
        const progress = Math.min(1, (now - startTime) / duration);
        const eased = easeInOut(progress);
        const target = readTarget();

        moveGroups(startY * (1 - eased));
        writeScroll(startTop + (target - startTop) * eased);

        if (progress < 1) {
          slideFrame.current = requestAnimationFrame(step);
          return;
        }

        slideFrame.current = 0;
        moveGroups(0);
        jumpToTarget();
      };

      slideFrame.current = requestAnimationFrame(step);
    };

    const pinToEnd = () => {
      const nextScroll = scroller.scrollHeight;
      const nextContent = measureContent(log);

      if (
        nextScroll === pinnedScroll.current &&
        nextContent === pinnedContent.current
      ) {
        return;
      }

      const grew =
        nextContent > pinnedContent.current ||
        nextScroll > pinnedScroll.current;
      const slack = slackBeyondScroll(
        Math.max(0, nextContent - pinnedContent.current),
        pinnedScroll.current,
        nextScroll,
        scroller.clientHeight,
      );
      const previousEnd = Math.max(
        0,
        pinnedScroll.current - scroller.clientHeight,
      );
      const following =
        !released.current &&
        (slideFrame.current !== 0 ||
          shift.current !== 0 ||
          scroller.scrollTop >= previousEnd - endThreshold);

      pinnedScroll.current = nextScroll;
      pinnedContent.current = nextContent;

      const message = lastMessage(log);

      if (message !== trackedMessage.current) {
        trackedMessage.current = message;
        readerAtEnd.current = false;
      }

      // The first view jumps. Later growth follows only while the reader
      // is still at the end, or at the top of a tall message we opened.
      if (!hasPinned.current) {
        hasPinned.current = true;
        released.current = false;
        stopSlide();
        jumpToTarget();
        return;
      }

      if (!grew || !following) {
        if (!following) {
          stopSlide();
        }
        return;
      }

      slideToTarget(slack);
    };

    const onScroll = () => {
      if (writingScroll.current) {
        return;
      }

      if (
        ownedScroll.current !== null &&
        Math.abs(scroller.scrollTop - ownedScroll.current) <= endThreshold
      ) {
        return;
      }

      ownedScroll.current = null;
      const atEnd = distanceFromEnd(scroller) <= endThreshold;
      released.current = !atEnd;
      readerAtEnd.current = atEnd;

      if (atEnd) {
        return;
      }

      stopSlide();
    };

    pinToEnd();

    scroller.addEventListener('scroll', onScroll);

    const observer = new ResizeObserver(pinToEnd);

    for (const item of log.children) {
      observer.observe(item);
    }

    return () => {
      scroller.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, [children, logRef, scrollerRef]);

  useIsomorphicLayoutEffect(
    () => () => {
      cancelAnimationFrame(slideFrame.current);

      if (logRef.current) {
        setShift(logRef.current, 0);
      }
    },
    [logRef],
  );
};
