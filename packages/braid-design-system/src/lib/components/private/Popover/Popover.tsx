import { assignInlineVars } from '@vanilla-extract/dynamic';
import dedent from 'dedent';
import {
  type ReactNode,
  useEffect,
  useState,
  forwardRef,
  useRef,
  useImperativeHandle,
  useCallback,
  type RefObject,
} from 'react';

import type { ResponsiveSpace } from '../../../css/atoms/atoms';
import { useIsomorphicLayoutEffect } from '../../../hooks/useIsomorphicLayoutEffect';
import { Box } from '../../Box/Box';
import { BraidPortal } from '../../BraidPortal/BraidPortal';

import * as styles from './Popover.css';

const animationDelayInMs = 250;

type Placement = 'top' | 'bottom';

export interface PopoverProps {
  id?: string;
  role?: string;
  align?: 'left' | 'right' | 'center';
  width?: 'content' | 'full';
  placement?: Placement;
  lockPlacement?: boolean;
  offsetSpace?: ResponsiveSpace;
  open: boolean;
  onClose?: () => void;
  triggerRef: RefObject<HTMLElement>;
  enterFocusRef?: RefObject<HTMLElement>;
  delayVisibility?: boolean;
  children: ReactNode;
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

export const Popover = forwardRef<HTMLElement, PopoverProps>(
  (
    {
      id,
      role,
      align: alignProp = 'left',
      width = 'content',
      placement = 'bottom',
      lockPlacement = false,
      offsetSpace = 'none',
      open,
      onClose,
      triggerRef,
      enterFocusRef,
      delayVisibility = false,
      children,
    },
    forwardedRef,
  ) => {
    const [triggerPosition, setTriggerPosition] = useState<
      Position | undefined
    >(undefined);

    const ref = useRef<HTMLElement>(null);
    useImperativeHandle(forwardedRef, () => ref.current as HTMLElement);

    const [horizontalOffset, setHorizontalOffset] = useState(0);
    const [flipPlacement, setFlipPlacement] = useState<Placement>(placement);

    const showPopover = open && triggerPosition;

    const align = alignProp === 'center' ? 'left' : alignProp;

    const handleOnClose = useCallback(
      ({ closeTrigger }: { closeTrigger: 'backdrop' | 'keyboard' }) => {
        if (closeTrigger !== 'backdrop' && triggerRef) {
          if (triggerRef?.current) {
            triggerRef.current.focus();
          } else {
            // eslint-disable-next-line no-console
            console.error(
              dedent`
          The triggerRef element could not be found.
          Ensure it is being assigned to the Popover trigger, and is available on close.
          `,
            );
          }
        }

        if (onClose) {
          onClose();
        }
      },
      [onClose, triggerRef],
    );

    useEffect(() => {
      if (!open || !onClose) {
        return;
      }

      const handleKeydown = (event: globalThis.KeyboardEvent) => {
        if (event.key === 'Escape' || event.key === 'Tab') {
          handleOnClose({ closeTrigger: 'keyboard' });
        }
      };

      window.addEventListener('keydown', handleKeydown);

      return () => {
        window.removeEventListener('keydown', handleKeydown);
      };
    }, [open, onClose, handleOnClose]);

    useEffect(() => {
      if (!open) {
        setTriggerPosition(undefined);
        setHorizontalOffset(0);
        return;
      }

      setTriggerPosition(getPosition(triggerRef.current));
      // Without timeout, focus will not work on first render
      // Needs to be 10ms to work in Safari - 0 for other browsers
      setTimeout(() => {
        if (!enterFocusRef) {
          return;
        }

        if (enterFocusRef.current) {
          enterFocusRef.current.focus();
        } else {
          // eslint-disable-next-line no-console
          console.error(
            dedent`
                The enterFocusRef element could not be found.
                Ensure it is being assigned to a child element of Popover, and is available on open.
                `,
          );
        }
      }, 10);
    }, [open, forwardedRef, enterFocusRef, triggerRef]);

    useEffect(() => {
      const handleResize = () => {
        setTriggerPosition(getPosition(triggerRef.current));
      };

      if (!open) {
        return;
      }

      window.addEventListener('resize', handleResize);
      const resizeObserver = new ResizeObserver(handleResize);
      resizeObserver.observe(document.body);

      return () => {
        window.removeEventListener('resize', handleResize);
        resizeObserver.disconnect();
      };
    }, [open, triggerRef]);

    const handleFlipPlacement = () => {
      const popoverBoundingRect = ref?.current?.getBoundingClientRect();
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

      const popoverBoundingRect = ref?.current?.getBoundingClientRect();
      if (!popoverBoundingRect) {
        return;
      }

      const { width: popoverWidth } = popoverBoundingRect;

      const triggerCenter =
        triggerPosition.width &&
        triggerPosition.left + triggerPosition.width / 2;

      const popoverLeft =
        alignProp === 'center' && triggerCenter
          ? triggerCenter - popoverWidth / 2
          : triggerPosition.left;

      const clampedPopoverLeft = clamp(
        scrollX,
        popoverLeft,
        window.innerWidth + scrollX - popoverWidth,
      );

      const triggerRightFromLeft = window.innerWidth - triggerPosition.right;

      const clampedTriggerRightFromLeft = clamp(
        scrollX + popoverWidth,
        triggerRightFromLeft,
        scrollX + window.innerWidth,
      );

      if (
        align === 'right' &&
        clampedTriggerRightFromLeft !== triggerPosition.right + horizontalOffset
      ) {
        setHorizontalOffset(
          window.innerWidth -
            clampedTriggerRightFromLeft -
            triggerPosition.right,
        );
      }
      if (
        align === 'left' &&
        clampedPopoverLeft !== triggerPosition.left + horizontalOffset
      ) {
        setHorizontalOffset(clampedPopoverLeft - triggerPosition.left);
      }

      return;
    };

    useIsomorphicLayoutEffect(() => {
      if (!showPopover) {
        setFlipPlacement(placement);
        return;
      }

      if (width !== 'full') {
        handleHorizontalShift();
      }
      if (!lockPlacement) {
        handleFlipPlacement();
      }
    });

    const triggerPositionVars = triggerPosition && {
      [styles.triggerVars[flipPlacement]]:
        `${triggerPosition[flipPlacement]}px`,
      ...(width === 'full'
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
      [styles.animationDelayInMs]: delayVisibility
        ? `${animationDelayInMs}ms`
        : '0',
    };

    if (!showPopover) {
      return null;
    }

    return (
      <BraidPortal>
        <Box
          data-testid={
            process.env.NODE_ENV !== 'production' ? 'backdrop' : undefined
          }
          onClick={(event) => {
            event.stopPropagation();
            event.preventDefault();
            if (onClose) {
              handleOnClose({ closeTrigger: 'backdrop' });
            }
          }}
          pointerEvents={!onClose ? 'none' : undefined}
          position="fixed"
          zIndex="modal"
          top={0}
          left={0}
          className={styles.backdrop}
        />
        <Box
          id={id}
          ref={ref}
          role={role || 'dialog'}
          component="section"
          tabIndex={-1}
          zIndex="modal"
          position="absolute"
          marginTop={flipPlacement === 'bottom' ? offsetSpace : undefined}
          marginBottom={flipPlacement === 'top' ? offsetSpace : undefined}
          style={assignInlineVars({ ...triggerPositionVars, ...inlineVars })}
          className={[styles.popoverPosition, styles.animation]}
        >
          {children}
        </Box>
      </BraidPortal>
    );
  },
);
