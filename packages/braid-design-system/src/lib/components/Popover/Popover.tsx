import {
  type KeyboardEvent,
  type Ref,
  type ReactNode,
  useRef,
  useEffect,
  useState,
} from 'react';
import { BraidPortal } from '../BraidPortal/BraidPortal';
import type { ResponsiveSpace } from '../../css/atoms/atoms';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';
import { Box } from '../Box/Box';
import * as styles from './Popover.css';
import { normalizeKey } from '../private/normalizeKey';
import { assignInlineVars } from '@vanilla-extract/dynamic';

export interface TriggerProps {
  'aria-haspopup': boolean;
  'aria-expanded': boolean;
  ref: Ref<HTMLButtonElement>;
  onKeyDown: (event: KeyboardEvent<HTMLButtonElement>) => void;
}

interface PopoverProps {
  trigger: (props: TriggerProps) => ReactNode;
  align?: 'left' | 'right' | 'full';
  placement?: 'top' | 'bottom';
  offsetSpace?: ResponsiveSpace;
  open: boolean;
  onKeyDown?: (event: KeyboardEvent<HTMLButtonElement>) => void;
  onClose?: () => void;
  data?: DataAttributeMap;
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
  trigger,
  align = 'left',
  placement = 'bottom',
  offsetSpace = 'none',
  open,
  onKeyDown,
  onClose,
  children,
  data,
  ...restProps
}: PopoverProps) => {
  const menuContainerRef = useRef<HTMLButtonElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const [triggerPosition, setTriggerPosition] = useState<Position | undefined>(
    undefined,
  );

  const focusTrigger = () => {
    if (buttonRef && buttonRef.current) {
      buttonRef.current.focus();
    }
  };

  useEffect(() => {
    if (open) {
      setTriggerPosition(getPosition(buttonRef.current));
    }
  }, [open]);

  useEffect(() => {
    const handleResize = () => {
      setTriggerPosition(getPosition(buttonRef.current));
    };

    if (open) {
      window.addEventListener('resize', handleResize);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [open]);

  const onTriggerKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const targetKey = normalizeKey(event);

    // Space key in keyup/keydown handler in Firefox triggers a click event.
    // This means the menu never opens, by returning early for Firefox the
    // menu is opened by firing the click handler. Only trade off is the
    // first menu item is not highlighted automatically, but considering
    // space keyboard interactions are optional this is acceptable.
    //   See Firefox bug details: https://bugzilla.mozilla.org/show_bug.cgi?id=1220143
    //   See WAI-ARIA keyboard interactions: https://www.w3.org/WAI/ARIA/apg/patterns/menu/#keyboard-interaction-12
    //
    // Firefox useragent check taken from the `bowser` package:
    // https://github.com/lancedikson/bowser/blob/ea8d9c54271d7b52fecd507ae8b1ba495842bc68/src/parser-browsers.js#L520
    if (
      targetKey === ' ' &&
      /firefox|iceweasel|fxios/i.test(navigator.userAgent)
    ) {
      return;
    }

    if (onClose) {
      if (targetKey === 'Tab') {
        onClose();
      }
      if (targetKey === 'Escape') {
        onClose();
        // Todo - this is not working
        focusTrigger();
      }
    }

    if (onKeyDown) {
      onKeyDown(event);
    }

    // Prevent arrow keys scrolling the document while navigating the menu
    const isArrowPress = targetKey.indexOf('Arrow') === 0;
    // Prevent enter or space press from triggering the click handler
    const isActionKeyPress = targetKey === 'Enter' || targetKey === ' ';

    if (isArrowPress || (isActionKeyPress && open)) {
      event.preventDefault();
    }
  };

  const triggerProps = {
    'aria-haspopup': true,
    'aria-expanded': open,
    role: 'button',
    tabIndex: 0,
    ref: buttonRef,
    onKeyDown: onTriggerKeyDown,
  };

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

  return (
    <Box
      {...buildDataAttributes({ data, validateRestProps: restProps })}
      ref={menuContainerRef}
    >
      {trigger(triggerProps)}
      {open && triggerPosition ? (
        <>
          <BraidPortal>
            <Box
              zIndex="modal"
              position="absolute"
              style={inlineVars}
              className={[styles.popoverPosition]}
              marginTop={placement === 'bottom' ? offsetSpace : undefined}
              marginBottom={placement === 'top' ? offsetSpace : undefined}
            >
              {children}
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
      ) : null}
    </Box>
  );
};
