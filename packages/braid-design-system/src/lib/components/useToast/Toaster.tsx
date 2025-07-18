import isMobile from 'is-mobile';
import { useCallback, useEffect, useRef, useState } from 'react';

import { Box } from '../Box/Box';

import ToastComponent from './Toast';
import type { InternalToast } from './ToastTypes';
import { toastWidth } from './consts';
import { useFlipList } from './useFlipList';

import * as styles from './Toaster.css';

interface ToasterProps {
  toasts: InternalToast[];
  removeToast: (key: string) => void;
}

export const Toaster = ({ toasts, removeToast }: ToasterProps) => {
  const [expanded, setExpanded] = useState(false);
  const { itemRef, remove } = useFlipList(expanded);
  const isMobileDevice = useRef(isMobile()).current;

  const expandHandler = () => setExpanded(true);
  const collapseHandler = () => setExpanded(false);

  const onClose = useCallback(
    (dedupeKey: string, toastKey: string) => {
      remove(toastKey, () => {
        removeToast(dedupeKey);
      });
    },
    [remove, removeToast],
  );

  useEffect(() => {
    if (toasts.length <= 1) {
      setExpanded(false);
    }
  }, [toasts.length]);

  return (
    <>
      {isMobileDevice && expanded && toasts.length > 1 && (
        <Box
          position="fixed"
          inset={0}
          zIndex="notification"
          onClick={() => setExpanded(false)}
        />
      )}

      <Box
        position="fixed"
        zIndex="notification"
        width="full"
        marginX="gutter"
        maxWidth={toastWidth}
        display="flex"
        flexDirection="column"
        className={styles.toaster}
        onMouseEnter={!isMobileDevice ? expandHandler : undefined}
        onMouseLeave={!isMobileDevice ? collapseHandler : undefined}
        onFocus={expandHandler}
        onBlur={collapseHandler}
        onClick={() => setExpanded(!expanded)}
        pointerEvents={toasts.length === 0 ? 'none' : undefined}
      >
        {toasts.map(({ toastKey, ...rest }) => (
          <ToastComponent
            key={toastKey}
            ref={itemRef(toastKey)}
            toastKey={toastKey}
            onClose={onClose}
            expanded={expanded}
            {...rest}
          />
        ))}
      </Box>
    </>
  );
};
