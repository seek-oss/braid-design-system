import {
  type KeyboardEvent,
  type ReactNode,
  useEffect,
  useState,
  type RefObject,
  useRef,
} from 'react';
import { BraidPortal } from '../BraidPortal/BraidPortal';
import type { ResponsiveSpace } from '../../css/atoms/atoms';
import { Box } from '../Box/Box';
import * as styles from './Popover.css';
import { assignInlineVars } from '@vanilla-extract/dynamic';

// Todo - if enter ref, add element at the bottom of the popover to focus and trigger onClose

interface PopoverProps {
  align?: 'left' | 'right' | 'full';
  placement?: 'top' | 'bottom';
  offsetSpace?: ResponsiveSpace;
  open: boolean;
  onKeyDown?: (event: KeyboardEvent<HTMLButtonElement>) => void;
  onClose?: () => void;
  // Separate from exitRef, as button size changes on active, which causes triggerPosition to be wrong
  // Todo - come up with better solution
  triggerWrapperRef: RefObject<HTMLElement>;
  // Todo - rename, initialFocus ?
  enterRef?: RefObject<HTMLElement>;
  // Todo - rename, returnFocus ?
  exitRef?: RefObject<HTMLElement>;
  children: ReactNode;
}

type Position = { top: number; bottom: number; left: number; right: number };

const getPosition = (element: HTMLElement | null): Position | undefined => {
  if (!element) {
    return undefined;
  }

  const { top, bottom, left, right } = element.getBoundingClientRect();
  const { scrollX, scrollY, innerWidth, innerHeight } = window;

  return {
    top: innerHeight - top - scrollY,
    bottom: bottom + scrollY,
    left: left + scrollX,
    right: innerWidth - right - scrollX,
  };
};

export const Popover = ({
  align = 'left',
  placement = 'bottom',
  offsetSpace = 'none',
  open,
  onClose,
  triggerWrapperRef,
  enterRef,
  exitRef,
  children,
}: PopoverProps) => {
  const [triggerPosition, setTriggerPosition] = useState<Position | undefined>(
    undefined,
  );

  // Todo - do I need this
  const menuContainerRef = useRef<HTMLDivElement | null>(null);
  // const menuContainerRef = useCallback((node: HTMLElement) => {
  //   if (node) {
  //     console.log('in here');
  //     setTriggerPosition(getPosition(node));
  //   }
  // }, []);

  // Todo - internal prop for showing hiding popover visual element.
  // always on for consumers but always off for popover, autosuggest and menuRenderer

  // Todo - add error messaging for missing refs
  useEffect(() => {
    if (open) {
      setTriggerPosition(getPosition(triggerWrapperRef.current));
      // Without timeout, focus will not work on first render
      // Todo - find a better solution
      setTimeout(() => {
        if (enterRef && enterRef.current) {
          enterRef.current.focus();
        }
      }, 0);
    } else if (exitRef && exitRef.current) {
      exitRef.current.focus();
    }
  }, [open, enterRef, exitRef, triggerWrapperRef]);

  useEffect(() => {
    const handleResize = () => {
      console.log('handleResize');
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

  useEffect(() => {
    if (open) {
      window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && onClose) {
          onClose();
        }
      });
    }

    return () => {
      // Todo - this is not the best code
      window.removeEventListener('keydown', () => {});
    };
  }, [open, exitRef, onClose, triggerWrapperRef]);

  const inlineVars = assignInlineVars({
    ...(triggerPosition && {
      [styles.triggerVars[placement]]: `${triggerPosition[placement]}px`,
      ...(align === 'full'
        ? {
            [styles.triggerVars.left]: `${triggerPosition?.left}px`,
            [styles.triggerVars.right]: `${triggerPosition?.right}px`,
          }
        : { [styles.triggerVars[align]]: `${triggerPosition[align]}px` }),
    }),
  });

  // Todo - rename
  const LastTabbableElement = () => (
    <Box
      aria-hidden
      tabIndex={0}
      onFocus={() => {
        if (onClose) {
          onClose();
        }
      }}
    />
  );

  if (open && triggerPosition) {
    return (
      <>
        <BraidPortal>
          <Box
            zIndex="modal"
            position="absolute"
            style={inlineVars}
            className={[styles.popoverPosition]}
            marginTop={placement === 'bottom' ? offsetSpace : undefined}
            marginBottom={placement === 'top' ? offsetSpace : undefined}
            ref={menuContainerRef}
          >
            {children}
            <LastTabbableElement />
          </Box>
        </BraidPortal>
        <Box
          onClick={(event) => {
            event.stopPropagation();
            event.preventDefault();
            if (onClose) {
              onClose();
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
