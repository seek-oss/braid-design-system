import React, {
  useState,
  ReactElement,
  KeyboardEvent,
  createContext,
  Children,
  useContext,
  useRef,
  useEffect,
  useCallback,
} from 'react';
import classnames from 'classnames';
import { useStyles } from 'sku/treat';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { useTouchableSpace } from '../../hooks/typography';
import { normalizeKey } from '../private/normalizeKey';
import { OverflowButton } from '../iconButtons/OverflowButton/OverflowButton';
import * as styleRefs from './OverflowMenu.treat';
import { Overlay } from '../private/Overlay/Overlay';

interface OverflowMenuContextValues {
  isHighlighted: boolean;
  keyboardNavigationHandler: (event: KeyboardEvent<HTMLButtonElement>) => void;
  mouseNavigationHandler: () => void;
  closeMenu: () => void;
}
const noop = () => {
  /* noop */
};

const OverflowMenuContext = createContext<OverflowMenuContextValues>({
  isHighlighted: false,
  keyboardNavigationHandler: noop,
  mouseNavigationHandler: noop,
  closeMenu: noop,
});

interface OverflowMenuProps {
  align?: 'left' | 'right';
  onOpen?: () => void;
  onClose?: () => void;
  children:
    | Array<ReactElement<OverflowMenuItemProps>>
    | ReactElement<OverflowMenuItemProps>;
}

const CLOSED_INDEX = -1;
export const OverflowMenu = ({
  align = 'right',
  onOpen,
  onClose,
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
            aria-haspopup="true"
            aria-expanded={openState}
            ref={buttonRef}
            onKeyDown={onTriggerKeyDown}
            onClick={() => {
              openState ? close() : open({ highlightFirst: false });
            }}
          />
        </Box>

        <Box
          role="menu"
          hidden={!openState}
          display={openState ? 'block' : 'none'}
          position="absolute"
          onMouseLeave={mouseOutOfMenuHandler}
          boxShadow="medium"
          borderRadius="standard"
          background="card"
          marginTop="small"
          className={classnames(
            styles.menu,
            align === 'right' && styles.alignRight,
          )}
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
            className={styles.menuBorder}
          />
        </Box>
      </Box>

      {openState ? (
        <Box onClick={close} position="fixed" className={styles.backdrop} />
      ) : null}
    </Box>
  );
};

interface OverflowMenuItemProps {
  children: string;
  onClick?: () => void;
}
export const MenuItem = ({ children, onClick }: OverflowMenuItemProps) => {
  const styles = useStyles(styleRefs);
  const {
    isHighlighted,
    keyboardNavigationHandler,
    mouseNavigationHandler,
    closeMenu,
  } = useContext(OverflowMenuContext);
  const menuItemRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (menuItemRef.current && isHighlighted) {
      menuItemRef.current.focus();
    }
  }, [isHighlighted]);

  const clickHandler = useCallback(() => {
    closeMenu();

    if (typeof onClick === 'function') {
      onClick();
    }
  }, [closeMenu, onClick]);

  const onKeyDown = useCallback(
    (event: KeyboardEvent<HTMLButtonElement>) => {
      const targetKey = normalizeKey(event);

      if (targetKey === 'Enter') {
        // Prevents the double trigger of `Enter` firing onKeyDown
        // and subsequently triggering the `onClick` handler.
        event.preventDefault();
        clickHandler();
      } else {
        keyboardNavigationHandler(event);
      }
    },
    [clickHandler, keyboardNavigationHandler],
  );

  const menuItemTextSize = 'standard';

  return (
    <Box
      component="button"
      role="menuitem"
      tabIndex={-1}
      ref={menuItemRef}
      onKeyDown={onKeyDown}
      onMouseEnter={mouseNavigationHandler}
      onClick={clickHandler}
      display="block"
      width="full"
      paddingX="small"
      background={isHighlighted ? 'selection' : undefined}
      cursor="pointer"
      className={classnames(
        useTouchableSpace(menuItemTextSize),
        styles.menuItem,
      )}
    >
      <Text size={menuItemTextSize} baseline={false}>
        {children}
      </Text>
    </Box>
  );
};
