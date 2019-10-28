import React, {
  useState,
  ReactElement,
  KeyboardEvent,
  createContext,
  Children,
  useRef,
  useCallback,
} from 'react';
import classnames from 'classnames';
import { useStyles } from 'sku/treat';
import { Box } from '../Box/Box';
import { normalizeKey } from '../private/normalizeKey';
import { OverflowButton } from '../iconButtons/OverflowButton/OverflowButton';
import { Overlay } from '../private/Overlay/Overlay';
import { OverflowMenuItemProps } from '../OverflowMenuItem/OverflowMenuItem';
import * as styleRefs from './OverflowMenu.treat';

interface OverflowMenuContextValues {
  isHighlighted: boolean;
  keyboardNavigationHandler: (event: KeyboardEvent<HTMLButtonElement>) => void;
  mouseNavigationHandler: () => void;
  closeMenu: () => void;
}
const noop = () => {
  /* noop */
};

export const OverflowMenuContext = createContext<OverflowMenuContextValues>({
  isHighlighted: false,
  keyboardNavigationHandler: noop,
  mouseNavigationHandler: noop,
  closeMenu: noop,
});

interface OverflowMenuProps {
  onOpen?: () => void;
  onClose?: () => void;
  label: string;
  children:
    | Array<ReactElement<OverflowMenuItemProps>>
    | ReactElement<OverflowMenuItemProps>;
}

const CLOSED_INDEX = -1;
export const OverflowMenu = ({
  onOpen,
  onClose,
  label,
  children,
}: OverflowMenuProps) => {
  const styles = useStyles(styleRefs);
  const [openState, setOpenState] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(CLOSED_INDEX);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const items = Children.toArray(children);

  const open = ({ highlightFirst }: { highlightFirst: boolean }) => {
    if (!openState) {
      setOpenState(true);

      if (highlightFirst) {
        setHighlightIndex(0);
      }

      if (typeof onOpen === 'function') {
        onOpen();
      }
    }
  };

  const close = () => {
    if (openState) {
      setOpenState(false);
      setHighlightIndex(CLOSED_INDEX);

      if (buttonRef && buttonRef.current) {
        buttonRef.current.focus();
      }

      if (typeof onClose === 'function') {
        onClose();
      }
    }
  };

  const onTriggerKeyDown = useCallback(
    (event: KeyboardEvent<HTMLButtonElement>) => {
      const targetKey = normalizeKey(event);

      const openMenuKeys = ['ArrowDown', 'ArrowUp', ' ', 'Enter'];

      if (openMenuKeys.indexOf(targetKey) > -1) {
        if (targetKey === 'ArrowUp') {
          // Open and highlight last
          setHighlightIndex(items.length - 1);
          open({
            highlightFirst: false,
          });
        } else {
          // Open and highlight first
          open({
            highlightFirst: true,
          });
        }

        // Prevents the double trigger of `Enter` firing onKeyDown
        // and subsequently triggering the `onClick` handler.
        event.preventDefault();
      }

      if (targetKey === 'Escape') {
        close();
      }
    },
    [],
  );

  const down = () => {
    const isLast = highlightIndex === items.length - 1;
    setHighlightIndex(isLast ? 0 : highlightIndex + 1);
  };

  const up = () => {
    const isFirst = highlightIndex === 0;
    setHighlightIndex(isFirst ? items.length - 1 : highlightIndex - 1);
  };

  const keyboardNavigationHandler = useCallback(
    (event: KeyboardEvent<HTMLButtonElement>) => {
      const targetKey = normalizeKey(event);

      const actions: Record<string, () => void> = {
        ArrowDown: down,
        ArrowUp: up,
        Escape: close,
        Tab: close,
      };

      if (actions[targetKey]) {
        actions[targetKey]();
        // Stops arrow keys scrolling the document when navigating the list
        event.preventDefault();
      }
    },
    [openState, highlightIndex],
  );

  const mouseOutOfMenuHandler = useCallback(
    () => setHighlightIndex(CLOSED_INDEX),
    [],
  );

  return (
    <Box className={styles.root}>
      <Box display="inlineBlock" position="relative">
        <Box width="touchable" className={styles.triggerOffset}>
          <OverflowButton
            label={label}
            aria-haspopup="true"
            aria-expanded={openState}
            active={openState}
            ref={buttonRef}
            onKeyDown={onTriggerKeyDown}
            onClick={() => {
              openState ? close() : open({ highlightFirst: false });
            }}
          />
        </Box>

        <Box
          role="menu"
          position="absolute"
          onMouseLeave={mouseOutOfMenuHandler}
          boxShadow="medium"
          borderRadius="standard"
          background="card"
          marginTop="small"
          transition="fast"
          className={classnames(styles.menu, !openState && styles.menuIsClosed)}
        >
          <Box paddingY="xxsmall">
            {items.map((item, index) => (
              <OverflowMenuContext.Provider
                key={index}
                value={{
                  isHighlighted: index === highlightIndex,
                  keyboardNavigationHandler,
                  mouseNavigationHandler: () => setHighlightIndex(index),
                  closeMenu: close,
                }}
              >
                {item}
              </OverflowMenuContext.Provider>
            ))}
          </Box>
          <Overlay
            boxShadow="borderStandard"
            borderRadius="standard"
            className={styles.showOverlay}
          />
        </Box>
      </Box>

      {openState ? (
        <Box onClick={close} position="fixed" className={styles.backdrop} />
      ) : null}
    </Box>
  );
};
