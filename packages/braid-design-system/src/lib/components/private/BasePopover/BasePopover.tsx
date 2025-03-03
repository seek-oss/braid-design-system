import { assignInlineVars } from '@vanilla-extract/dynamic';
import dedent from 'dedent';
import isMobile from 'is-mobile';
import {
  type KeyboardEvent as ReactKeyboardEvent,
  type ReactNode,
  useEffect,
  useState,
  type RefObject,
  useRef,
} from 'react';

import type { ResponsiveSpace } from '../../../css/atoms/atoms';
import { useIsomorphicLayoutEffect } from '../../../hooks/useIsomorphicLayoutEffect';
import { Box } from '../../Box/Box';
import { BraidPortal } from '../../BraidPortal/BraidPortal';
import { normalizeKey } from '../normalizeKey';

import { BasePopoverContext } from './BasePopoverContext';

import * as styles from './BasePopover.css';

const tooltipAnimationDelayInMs = 250;

export type Placement = 'top' | 'bottom';

export interface BasePopoverProps {
  id?: string;
  align?: 'left' | 'right' | 'full' | 'center';
  placement?: Placement;
  lockPlacement?: boolean;
  offsetSpace?: ResponsiveSpace;
  open: boolean;
  onClose?: () => void;
  // Todo - come up with better solution
  // Separate from exitRef, as button size changes on active, which causes triggerPosition to be wrong
  triggerWrapperRef: RefObject<HTMLElement>;
  initialFocusRef?: RefObject<HTMLElement>;
  returnFocusRef?: RefObject<HTMLElement>;
  disableAnimation?: boolean;
  focusPopoverOnOpen?: boolean;
  tabToExit?: boolean;
  children: ReactNode;
  // todo - rename?
  type?: 'popover' | 'tooltip';
}

type Position = {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
};

const getPosition = (element: HTMLElement | null): Position | undefined => {
  if (!element) {
    return undefined;
  }

  const rect = element.getBoundingClientRect();
  const { top, bottom, left, right, width } = rect;
  const { scrollX, scrollY, innerWidth, innerHeight } = window;

  return {
    top: innerHeight - top - scrollY,
    bottom: bottom + scrollY,
    left: left + scrollX,
    right: innerWidth - right - scrollX,
    width,
  };
};

function clamp(min: number, preferred: number, max: number) {
  return Math.min(Math.max(preferred, min), max);
}

export const BasePopover = ({
  id,
  align: alignProp = 'left',
  placement = 'bottom',
  lockPlacement = false,
  offsetSpace = 'none',
  open,
  onClose,
  triggerWrapperRef,
  initialFocusRef,
  returnFocusRef,
  disableAnimation = false,
  focusPopoverOnOpen = false,
  tabToExit = true,
  type = 'popover',
  children,
}: BasePopoverProps) => {
  const [triggerPosition, setTriggerPosition] = useState<Position | undefined>(
    undefined,
  );
  const [horizontalOffset, setHorizontalOffset] = useState(0);
  const [arrowOffset, setArrowOffset] = useState(0);
  const [flipPlacement, setFlipPlacement] = useState<Placement>(placement);

  const showPopover = open && triggerPosition;

  const popoverContainerRef = useRef<HTMLDivElement | null>(null);

  const align = alignProp === 'center' ? 'left' : alignProp;

  const handleOnClose = () => {
    // Todo - returnFocusRef should be required
    if (!returnFocusRef) {
      return;
    }

    if (returnFocusRef?.current) {
      returnFocusRef.current.focus();
    } else {
      // eslint-disable-next-line no-console
      console.error(
        dedent`
          The returnFocusRef element could not be found.
          Ensure it is being assigned to the Popover trigger, and is available on close.
          `,
      );
    }

    if (onClose) {
      onClose();
    }
  };

  useEffect(() => {
    if (!open) {
      setTriggerPosition(undefined);
      setHorizontalOffset(0);
      setArrowOffset(0);
      return;
    }

    setTriggerPosition(getPosition(triggerWrapperRef.current));
    // Without timeout, focus will not work on first render
    // Needs to be 10ms to work in Safari - 0 for other browsers
    // Todo - find a better solution
    setTimeout(() => {
      if (initialFocusRef) {
        if (initialFocusRef.current) {
          initialFocusRef.current.focus();
        } else {
          // eslint-disable-next-line no-console
          console.error(
            dedent`
                The initialFocusRef element could not be found.
                Ensure it is being assigned to a child element of Popover, and is available on open.
                `,
          );
        }
      } else if (focusPopoverOnOpen && popoverContainerRef.current) {
        popoverContainerRef.current.focus();
      }
    }, 10);
  }, [
    open,
    initialFocusRef,
    returnFocusRef,
    triggerWrapperRef,
    focusPopoverOnOpen,
  ]);

  useEffect(() => {
    const handleResize = () => {
      setTriggerPosition(getPosition(triggerWrapperRef.current));
    };

    if (!open) {
      return;
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [open, triggerWrapperRef]);

  const handleFlipPlacement = () => {
    const popoverBoundingRect =
      popoverContainerRef?.current?.getBoundingClientRect();
    if (!popoverBoundingRect) {
      return;
    }

    const { top, bottom } = popoverBoundingRect;
    const distanceFromBottom = window.innerHeight - bottom;

    if (top < 0) {
      setFlipPlacement('bottom');
    } else if (distanceFromBottom < 0) {
      setFlipPlacement('top');
    }
  };

  const handleHorizontalShift = () => {
    if (!triggerPosition) {
      return;
    }

    const popoverBoundingRect =
      popoverContainerRef?.current?.getBoundingClientRect();
    if (!popoverBoundingRect) {
      return;
    }

    const { width, left, right } = popoverBoundingRect;

    const triggerCenter =
      triggerPosition.width && triggerPosition.left + triggerPosition.width / 2;
    const popoverWidth = right - left;

    // todo - rename
    // If alignProp is center, use left align but adjust the left position for centering
    const inferredLeft =
      alignProp === 'center' && triggerCenter
        ? triggerCenter - popoverWidth / 2
        : triggerPosition.left;

    // Todo - can this use braid tokens?
    const edgeOffset = 12;

    const updatedLeft = clamp(
      scrollX + edgeOffset,
      inferredLeft,
      window.innerWidth + scrollX - width - edgeOffset,
    );

    // Todo - better solution if possible
    const normalisedRight = window.innerWidth - triggerPosition.right;

    const updatedRight = clamp(
      scrollX + width + edgeOffset,
      normalisedRight,
      scrollX + window.innerWidth - edgeOffset,
    );

    if (
      align === 'right' &&
      updatedRight !== triggerPosition.right + horizontalOffset
    ) {
      setHorizontalOffset(
        window.innerWidth - updatedRight - triggerPosition.right,
      );
    }
    if (
      align === 'left' &&
      updatedLeft !== triggerPosition.left + horizontalOffset
    ) {
      setHorizontalOffset(updatedLeft - triggerPosition.left);
      setArrowOffset(
        triggerPosition.left + triggerPosition.width / 2 - updatedLeft,
      );
    }

    return;
  };

  useIsomorphicLayoutEffect(() => {
    if (!showPopover) {
      setFlipPlacement(placement);
      return;
    }

    if (align !== 'full') {
      handleHorizontalShift();
    }
    if (!lockPlacement) {
      handleFlipPlacement();
    }
  });

  const triggerPositionVars = triggerPosition && {
    [styles.triggerVars[flipPlacement]]: `${triggerPosition[flipPlacement]}px`,
    ...(align === 'full'
      ? {
          [styles.triggerVars.left]: `${triggerPosition?.left}px`,
          [styles.triggerVars.right]: `${triggerPosition?.right}px`,
        }
      : {
          [styles.triggerVars[align]]: `${
            triggerPosition[align] + horizontalOffset
          }px`,
        }),
  };

  const inlineVars = {
    [styles.flipPlacement]: flipPlacement === 'top' ? '1' : '-1',
    [styles.animationDelayInMs]:
      type === 'tooltip' && !isMobile()
        ? `${tooltipAnimationDelayInMs}ms`
        : '0',
  };

  const handleKeyboard = (event: ReactKeyboardEvent) => {
    const targetKey = normalizeKey(event);

    if (targetKey === 'Escape' || (tabToExit && targetKey === 'Tab')) {
      handleOnClose();
    }
  };

  const ExitFocusCapture = () => (
    <Box
      aria-hidden
      tabIndex={0}
      onFocus={() => {
        if (onClose) {
          handleOnClose();
        }
      }}
    />
  );

  if (!showPopover) {
    return null;
  }

  const contextValue = { arrowOffset, flipPlacement };

  return (
    <BasePopoverContext.Provider value={contextValue}>
      <BraidPortal>
        <Box
          // Todo - add aria-label if focussed
          id={id}
          role={type === 'tooltip' ? 'tooltip' : undefined}
          component="section"
          tabIndex={-1}
          ref={popoverContainerRef}
          onKeyDown={handleKeyboard}
          zIndex="modal"
          position="absolute"
          marginTop={flipPlacement === 'bottom' ? offsetSpace : undefined}
          marginBottom={flipPlacement === 'top' ? offsetSpace : undefined}
          style={assignInlineVars({ ...triggerPositionVars, ...inlineVars })}
          className={[
            styles.popoverPosition,
            !disableAnimation && styles.animation,
          ]}
        >
          {children}
          {!tabToExit && <ExitFocusCapture />}
        </Box>
        <Box
          onClick={(event) => {
            event.stopPropagation();
            event.preventDefault();
            if (onClose) {
              handleOnClose();
            }
          }}
          pointerEvents={!onClose ? 'none' : undefined}
          position="fixed"
          zIndex="modal"
          top={0}
          left={0}
          className={styles.backdrop}
        />
      </BraidPortal>
    </BasePopoverContext.Provider>
  );
};
