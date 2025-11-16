import { assignInlineVars } from '@vanilla-extract/dynamic';
import dedent from 'dedent';
import {
  type ReactNode,
  useEffect,
  useState,
  forwardRef,
  useRef,
  useImperativeHandle,
  type RefObject,
  type AllHTMLAttributes,
} from 'react';

import type { ResponsiveSpace } from '../../../css/atoms/atoms';
import { useIsomorphicLayoutEffect } from '../../../hooks/useIsomorphicLayoutEffect';
import { Box } from '../../Box/Box';
import { BraidPortal } from '../../BraidPortal/BraidPortal';
import { useSpace } from '../../useSpace/useSpace';
import { animationTimeout } from '../animationTimeout';

import * as styles from './Popover.css';

type Placement = 'top' | 'bottom';

// Ensures it matches the highest available zIndex. Not semantically correct
const zIndex = 'notification';

export interface PopoverProps {
  id?: string;
  role: NonNullable<AllHTMLAttributes<HTMLElement>['role'] | false>;
  align?: 'left' | 'right' | 'center';
  width?: 'content' | 'full';
  placement?: Placement;
  lockPlacement?: boolean;
  offsetSpace?: ResponsiveSpace;
  delayVisibility?: boolean;
  modal?: boolean;
  open: boolean;
  onClose?: () => void;
  triggerRef: RefObject<HTMLElement | null>;
  enterFocusRef?: RefObject<HTMLElement | null>;
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
  const { scrollX, scrollY } = window;
  const viewportWidth = document.documentElement.clientWidth;

  return {
    // For `top`, we subtract this from the dynamic viewport height in `Popover.css.ts`
    // which can't be accessed from Javascript.
    top: top + scrollY,
    bottom: bottom + scrollY,
    left: left + scrollX,
    right: viewportWidth - right - scrollX,
    width,
  };
};

function clamp(min: number, preferred: number, max: number) {
  return Math.min(Math.max(preferred, min), max);
}

const PopoverContent = forwardRef<HTMLElement, PopoverProps>(
  (
    {
      id,
      role,
      align = 'left',
      width = 'content',
      placement = 'bottom',
      lockPlacement = false,
      offsetSpace = 'none',
      delayVisibility = false,
      modal = true,
      open,
      onClose,
      triggerRef,
      enterFocusRef,
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
    const [actualPlacement, setActualPlacement] =
      useState<Placement>(placement);

    const showPopover = open && triggerPosition;

    const transitionThresholdInPx =
      useSpace().space[styles.transitionThreshold];

    const alignmentAnchor = align === 'center' ? 'left' : align;

    useEffect(() => {
      const handleKeydown = (event: globalThis.KeyboardEvent) => {
        if (event.key === 'Escape' || event.key === 'Tab') {
          triggerRef.current?.focus();
          if (process.env.NODE_ENV !== 'production') {
            if (!triggerRef.current) {
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
        }
      };

      window.addEventListener('keydown', handleKeydown);

      return () => {
        window.removeEventListener('keydown', handleKeydown);
      };
    }, [onClose, triggerRef]);

    useEffect(() => {
      setTriggerPosition(getPosition(triggerRef.current));
    }, [triggerRef]);

    useEffect(() => {
      // Without timeout, focus will not work on first render
      setTimeout(() => {
        if (!enterFocusRef) {
          return;
        }

        enterFocusRef.current?.focus();

        if (process.env.NODE_ENV !== 'production') {
          if (!enterFocusRef.current) {
            // eslint-disable-next-line no-console
            console.error(
              dedent`
                The enterFocusRef element could not be found.
                Ensure it is being assigned to a child element of Popover, and is available on open.
                `,
            );
          }
        }
      }, animationTimeout);
    }, [open, enterFocusRef, triggerRef]);

    useEffect(() => {
      const handleResize = () => {
        setTriggerPosition(getPosition(triggerRef.current));
      };

      window.addEventListener('resize', handleResize);
      const resizeObserver = new ResizeObserver(handleResize);
      resizeObserver.observe(document.body);

      return () => {
        window.removeEventListener('resize', handleResize);
        resizeObserver.disconnect();
      };
    }, [triggerRef]);

    const handlePlacement = () => {
      const popoverBoundingRect = ref?.current?.getBoundingClientRect();
      if (!popoverBoundingRect) {
        return;
      }

      const triggerBoundingRect = triggerRef.current?.getBoundingClientRect();
      if (!triggerBoundingRect) {
        return;
      }

      const { height: popoverHeight } = popoverBoundingRect;

      const heightRequired = popoverHeight + transitionThresholdInPx;
      const fitsAbove = triggerBoundingRect.top >= heightRequired;
      const fitsBelow =
        window.innerHeight - triggerBoundingRect.bottom >= heightRequired;

      if (!fitsAbove && fitsBelow) {
        setActualPlacement('bottom');
      } else if (!fitsBelow && fitsAbove) {
        setActualPlacement('top');
      } else {
        setActualPlacement(placement);
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
      const viewportWidth = document.documentElement.clientWidth;

      const triggerCenter =
        triggerPosition.width &&
        triggerPosition.left + triggerPosition.width / 2;

      const popoverLeft =
        align === 'center' && triggerCenter
          ? triggerCenter - popoverWidth / 2
          : triggerPosition.left;

      const clampedPopoverLeft = clamp(
        scrollX,
        popoverLeft,
        viewportWidth + scrollX - popoverWidth,
      );

      const triggerRightFromLeft = viewportWidth - triggerPosition.right;

      const clampedTriggerRightFromLeft = clamp(
        scrollX + popoverWidth,
        triggerRightFromLeft,
        scrollX + viewportWidth,
      );

      if (
        alignmentAnchor === 'right' &&
        clampedTriggerRightFromLeft !== triggerPosition.right + horizontalOffset
      ) {
        setHorizontalOffset(
          viewportWidth - clampedTriggerRightFromLeft - triggerPosition.right,
        );
      }
      if (
        alignmentAnchor === 'left' &&
        clampedPopoverLeft !== triggerPosition.left + horizontalOffset
      ) {
        setHorizontalOffset(clampedPopoverLeft - triggerPosition.left);
      }

      return;
    };

    useIsomorphicLayoutEffect(() => {
      if (!showPopover) {
        return;
      }

      if (width !== 'full') {
        handleHorizontalShift();
      }
      if (!lockPlacement) {
        handlePlacement();
      }
    }, [showPopover]);

    const triggerPositionVars = triggerPosition && {
      // Vertical positioning
      [styles.triggerVars[actualPlacement]]:
        `${triggerPosition[actualPlacement]}`,

      // Horizontal positioning
      [styles.triggerVars.left]:
        width === 'full' || alignmentAnchor === 'left'
          ? `${triggerPosition?.left}`
          : undefined,
      [styles.triggerVars.right]:
        width === 'full' || alignmentAnchor === 'right'
          ? `${triggerPosition?.right}`
          : undefined,

      // Horizontal scroll offset
      [styles.horizontalOffset]: width !== 'full' ? `${horizontalOffset}` : '0',
    };

    if (!showPopover) {
      return null;
    }

    return (
      <BraidPortal>
        {modal && (
          <Box
            data-testid={
              process.env.NODE_ENV !== 'production' ? 'backdrop' : undefined
            }
            onClick={(event) => {
              event.stopPropagation();
              event.preventDefault();
              if (onClose) {
                onClose();
              }
            }}
            position="fixed"
            zIndex={zIndex}
            top={0}
            left={0}
            className={styles.backdrop}
          />
        )}

        <Box
          id={id}
          ref={ref}
          role={role || undefined}
          tabIndex={-1}
          zIndex={zIndex}
          position="absolute"
          marginTop={actualPlacement === 'bottom' ? offsetSpace : undefined}
          marginBottom={actualPlacement === 'top' ? offsetSpace : undefined}
          style={triggerPositionVars && assignInlineVars(triggerPositionVars)}
          className={{
            [styles.popoverPosition]: true,
            [styles.animation]: true,
            [styles.invertPlacement]: actualPlacement === 'bottom',
            [styles.delayVisibility]: delayVisibility,
          }}
        >
          {children}
        </Box>
      </BraidPortal>
    );
  },
);

// Wrapper element ensures that Popover is unmounted when closed
// and state is reset
export const Popover = forwardRef<HTMLElement, PopoverProps>(
  (props, forwardedRef) => {
    const { open, children, ...restProps } = props;

    if (!open) {
      return null;
    }

    return (
      <PopoverContent open={open} ref={forwardedRef} {...restProps}>
        {children}
      </PopoverContent>
    );
  },
);
