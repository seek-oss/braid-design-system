import {
  type KeyboardEvent as ReactKeyboardEvent,
  type ReactNode,
  useEffect,
  useState,
  type RefObject,
  useRef,
} from 'react';
import { BraidPortal } from '../../BraidPortal/BraidPortal';
import type { ResponsiveSpace } from '../../../css/atoms/atoms';
import { Box } from '../../Box/Box';
import * as styles from './BasePopover.css';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import dedent from 'dedent';
import { normalizeKey } from '../normalizeKey';
import { useIsomorphicLayoutEffect } from '../../../hooks/useIsomorphicLayoutEffect';

type Placement = 'top' | 'bottom';

export interface BasePopoverProps {
  align?: 'left' | 'right' | 'full' | 'center';
  placement?: Placement;
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
}

type Position = {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width?: number;
};

const getPosition = (element: HTMLElement | null): Position | undefined => {
  if (!element) {
    return undefined;
  }

  const { top, bottom, left, right, width } = element.getBoundingClientRect();
  const { scrollX, scrollY, innerWidth, innerHeight } = window;

  return {
    top: innerHeight - top - scrollY,
    bottom: bottom + scrollY,
    left: left + scrollX,
    right: innerWidth - right - scrollX,
    width,
  };
};

export const BasePopover = ({
  align = 'left',
  placement = 'bottom',
  offsetSpace = 'none',
  open,
  onClose,
  triggerWrapperRef,
  initialFocusRef,
  returnFocusRef,
  disableAnimation = false,
  focusPopoverOnOpen = false,
  tabToExit = true,
  children,
}: BasePopoverProps) => {
  const [triggerPosition, setTriggerPosition] = useState<Position | undefined>(
    undefined,
  );
  const [popoverPlacement, setPopoverPlacement] =
    useState<Placement>(placement);
  const showPopover = open && triggerPosition;

  const popoverContainerRef = useRef<HTMLDivElement | null>(null);

  const handleOnClose = () => {
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

    if (open) {
      window.addEventListener('resize', handleResize);
    } else {
      setTriggerPosition(undefined);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [open, triggerWrapperRef]);

  const triggerCentre =
    triggerPosition?.width && triggerPosition.left + triggerPosition.width / 2;

  const handleFlipPlacement = () => {
    const popOverBoundingRect =
      popoverContainerRef?.current?.getBoundingClientRect();
    if (!popOverBoundingRect) {
      return;
    }

    const { top, bottom } = popOverBoundingRect;
    const distanceFromBottom = window.innerHeight - bottom;

    if (top < 0) {
      setPopoverPlacement('bottom');
    } else if (distanceFromBottom < 0) {
      setPopoverPlacement('top');
    }
  };

  useIsomorphicLayoutEffect(() => {
    if (!showPopover) {
      setPopoverPlacement(placement);
      return;
    }

    handleFlipPlacement();
  });

  useEffect(() => {
    if (!showPopover) {
      return;
    }

    window.addEventListener('scroll', handleFlipPlacement);

    return () => {
      window.removeEventListener('scroll', handleFlipPlacement);
    };
  });

  let triggerPositionStyles;

  if (align === 'full') {
    triggerPositionStyles = {
      [styles.triggerVars.left]: `${triggerPosition?.left}px`,
      [styles.triggerVars.right]: `${triggerPosition?.right}px`,
    };
  } else if (align === 'center') {
    triggerPositionStyles = {
      [styles.triggerVars.left]: `calc(${triggerCentre}px - ${
        styles.maxWidth / 2
      }px)`,
    };
  } else {
    triggerPositionStyles = triggerPosition && {
      [styles.triggerVars[align]]: `${triggerPosition[align]}px`,
    };
  }

  const inlineVars = assignInlineVars({
    ...(triggerPosition && {
      [styles.triggerVars[
        popoverPlacement
      ]]: `${triggerPosition[popoverPlacement]}px`,
      ...triggerPositionStyles,
    }),
  });

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

  if (showPopover) {
    return (
      <>
        <BraidPortal>
          <Box
            component="section"
            tabIndex={-1}
            ref={popoverContainerRef}
            onKeyDown={handleKeyboard}
            zIndex="modal"
            position="absolute"
            marginTop={popoverPlacement === 'bottom' ? offsetSpace : undefined}
            marginBottom={popoverPlacement === 'top' ? offsetSpace : undefined}
            style={inlineVars}
            className={[
              align === 'center' && styles.alignCenter,
              styles.popoverPosition,
              !disableAnimation && styles.animation,
            ]}
          >
            {children}
            {!tabToExit && <ExitFocusCapture />}
          </Box>
        </BraidPortal>
        <Box
          onClick={(event) => {
            event.stopPropagation();
            event.preventDefault();
            if (onClose) {
              handleOnClose();
            }
          }}
          position="fixed"
          zIndex="modal"
          top={0}
          left={0}
          className={styles.backdrop}
        />
      </>
    );
  }

  return null;
};
