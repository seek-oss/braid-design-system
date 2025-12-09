import {
  useFloating,
  offset as floatingUiOffset,
  flip,
  shift,
  arrow as floatingUiArrow,
  autoUpdate,
  size as floatingUiSize,
} from '@floating-ui/react-dom';
import dedent from 'dedent';
import {
  type ReactNode,
  useEffect,
  forwardRef,
  useRef,
  useImperativeHandle,
  type RefObject,
  type AllHTMLAttributes,
  createContext,
  useContext,
} from 'react';

import type { ResponsiveSpace } from '../../../css/atoms/atoms';
import { Box } from '../../Box/Box';
import { BraidPortal } from '../../BraidPortal/BraidPortal';
import { useResponsiveValue } from '../../useResponsiveValue/useResponsiveValue';
import { useSpace } from '../../useSpace/useSpace';
import { animationTimeout } from '../animationTimeout';

import * as styles from './Popover.css';
import { normalizeResponsiveValue } from '../../../css/atoms/sprinkles.css';

type Placement = 'top' | 'bottom' | 'left' | 'right';
type Align = 'start' | 'end' | 'center';

type FloatingUiPosition = Extract<
  ReturnType<typeof useFloating>['placement'],
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'top-start'
  | 'top-end'
  | 'bottom-start'
  | 'bottom-end'
  | 'left-start'
  | 'left-end'
  | 'right-start'
  | 'right-end'
>;

const positionMap: Record<Placement, Record<Align, FloatingUiPosition>> = {
  top: {
    start: 'top-start',
    center: 'top',
    end: 'top-end',
  },
  bottom: {
    start: 'bottom-start',
    center: 'bottom',
    end: 'bottom-end',
  },
  left: {
    start: 'left-start',
    center: 'left',
    end: 'left-end',
  },
  right: {
    start: 'right-start',
    center: 'right',
    end: 'right-end',
  },
};

function getFloatingUiPosition(
  placement: Placement,
  align: Align,
): FloatingUiPosition {
  return positionMap[placement][align];
}

// Ensures it matches the highest available zIndex. Not semantically correct
const zIndex = 'notification';

export interface PopoverPlacementData {
  placement: Placement;
  arrow?: {
    x?: number;
    y?: number;
  };
}

export interface PopoverProps {
  id?: string;
  role: NonNullable<AllHTMLAttributes<HTMLElement>['role'] | false>;
  align?: 'start' | 'end' | 'center';
  width?: 'content' | 'full';
  placement?: Placement;
  lockPlacement?: boolean;
  offsetSpace?: ResponsiveSpace;
  delayVisibility?: boolean;
  modal?: boolean;
  open: boolean;
  onClose?: () => void;
  onPlacementChange?: (data: PopoverPlacementData) => void;
  triggerRef: RefObject<HTMLElement | null>;
  enterFocusRef?: RefObject<HTMLElement | null>;
  arrowRef?: RefObject<HTMLElement | null>;
  children: ReactNode;
}

export interface PopoverMiddlewareData {
  arrow?: {
    x?: number;
    y?: number;
  };
  resolvedPlacement?: Placement;
}

const PopoverContext = createContext<PopoverMiddlewareData | null>(null);

export const usePopoverContext = () => {
  const context = useContext(PopoverContext);
  return context;
};

const PopoverContent = forwardRef<HTMLElement, PopoverProps>(
  (
    {
      id,
      role,
      align = 'start',
      width = 'content',
      placement = 'bottom',
      lockPlacement = false,
      offsetSpace = 'none',
      delayVisibility = false,
      modal = true,
      open,
      onClose,
      onPlacementChange,
      triggerRef,
      enterFocusRef,
      arrowRef,
      children,
    },
    forwardedRef,
  ) => {
    const ref = useRef<HTMLElement>(null);
    useImperativeHandle(forwardedRef, () => ref.current as HTMLElement);

    const normalized = normalizeResponsiveValue(offsetSpace);
    const mobile = normalized.mobile ?? 'none';
    const tablet = normalized.tablet ?? mobile;
    const desktop = normalized.desktop ?? tablet;
    const wide = normalized.wide ?? desktop;
    const resolvedOffsetSpace =
      useResponsiveValue()({ mobile, tablet, desktop, wide }) ?? mobile;

    const spaceScale = useSpace();
    let offsetSpacePx = 0;
    if (resolvedOffsetSpace !== 'none') {
      offsetSpacePx = spaceScale.space[resolvedOffsetSpace] * spaceScale.grid;
    }

    const floatingUiRequestedPosition = getFloatingUiPosition(placement, align);

    const middleware = [
      floatingUiOffset(offsetSpacePx),
      !lockPlacement && flip(),
      width === 'full'
        ? floatingUiSize({
            apply({ rects, elements }) {
              Object.assign(elements.floating.style, {
                width: `${rects.reference.width}px`,
              });
            },
          })
        : shift({
            crossAxis: align === 'center',
          }),
      arrowRef && floatingUiArrow({ element: arrowRef }),
    ].filter(Boolean);

    const {
      refs,
      floatingStyles,
      middlewareData,
      placement: floatingUiEvaluatedPosition,
      isPositioned,
    } = useFloating({
      placement: floatingUiRequestedPosition,
      middleware,
      whileElementsMounted: autoUpdate,
    });

    useEffect(() => {
      refs.setReference(triggerRef.current);
    }, [triggerRef, refs]);

    useEffect(() => {
      if (ref.current) {
        refs.setFloating(ref.current);
      }
    }, [refs]);

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
    }, [open, enterFocusRef]);

    const resolvedPlacement =
      (floatingUiEvaluatedPosition?.split('-')[0] as Placement) ?? 'bottom';

    useEffect(() => {
      if (onPlacementChange) {
        onPlacementChange({
          placement: resolvedPlacement,
          arrow: middlewareData.arrow,
        });
      }
    }, [resolvedPlacement, middlewareData.arrow, onPlacementChange]);

    const combinedStyles = {
      ...floatingStyles,
      ...(!isPositioned ? { opacity: 0, pointerEvents: 'none' as const } : {}),
    };

    const popoverContextValue: PopoverMiddlewareData = {
      arrow: middlewareData.arrow,
      resolvedPlacement,
    };

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
          style={combinedStyles}
        >
          <Box
            className={{
              [styles.animation]: true,
              [styles.invertPlacement]: resolvedPlacement === 'bottom',
              [styles.delayVisibility]: delayVisibility,
            }}
          >
            <PopoverContext.Provider value={popoverContextValue}>
              {children}
            </PopoverContext.Provider>
          </Box>
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
