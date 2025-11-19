import {
  useFloating,
  offset as floatingOffset,
  flip,
  shift,
  arrow as floatingArrow,
  autoUpdate,
  type Placement as FloatingPlacement,
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
  arrowRef?: RefObject<HTMLElement | null>;
  children: ReactNode;
}

export interface PopoverMiddlewareData {
  arrow?: {
    x?: number;
    y?: number;
  };
  actualPlacement?: Placement;
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
      arrowRef,
      children,
    },
    forwardedRef,
  ) => {
    const ref = useRef<HTMLElement>(null);
    useImperativeHandle(forwardedRef, () => ref.current as HTMLElement);

    const spaceScale = useSpace();
    let offsetSpacePx = 0;
    if (offsetSpace !== 'none' && typeof offsetSpace === 'string') {
      offsetSpacePx = spaceScale.space[offsetSpace] * spaceScale.grid;
    }

    const middleware = [
      floatingOffset(offsetSpacePx),
      lockPlacement ? undefined : flip(),
      width !== 'full'
        ? shift({
            padding: 8,
            crossAxis: align === 'center',
          })
        : undefined,
      arrowRef ? floatingArrow({ element: arrowRef }) : undefined,
    ].filter((m): m is NonNullable<typeof m> => m !== undefined);

    const floatingPlacement: FloatingPlacement =
      placement === 'top' ? 'top' : 'bottom';

    const {
      refs,
      floatingStyles,
      middlewareData,
      placement: actualPlacement,
      isPositioned,
    } = useFloating({
      placement: floatingPlacement,
      middleware,
      whileElementsMounted: autoUpdate,
      elements: {
        reference: triggerRef.current,
      },
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

    const inferredPlacement: Placement = actualPlacement?.startsWith('top')
      ? 'top'
      : 'bottom';

    const combinedStyles = {
      ...floatingStyles,
      ...(width === 'full' && triggerRef.current
        ? {
            width: `${triggerRef.current.getBoundingClientRect().width}px`,
          }
        : {}),
      ...(!isPositioned ? { opacity: 0, pointerEvents: 'none' as const } : {}),
    };

    const popoverContextValue: PopoverMiddlewareData = {
      arrow: middlewareData.arrow,
      actualPlacement: inferredPlacement,
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
              [styles.invertPlacement]: inferredPlacement === 'bottom',
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
