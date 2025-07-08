import isMobile from 'is-mobile';
import { useCallback, useEffect, useRef, useState } from 'react';

import { Box } from '../Box/Box';

import ToastComponent from './Toast';
import type { InternalToast } from './ToastTypes';
import { toastWidth } from './consts';
import { useFlipList } from './useFlipList';

interface ToasterProps {
  toasts: InternalToast[];
  removeToast: (key: string) => void;
}

export const Toaster = ({ toasts, removeToast }: ToasterProps) => {
  const [expanded, setExpanded] = useState(false);
  const { itemRef, remove } = useFlipList(expanded);
  const isMobileDevice = useRef(isMobile()).current;

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
        display="flex"
        justifyContent="center"
        position="fixed"
        bottom={0}
        width="full"
        zIndex="notification"
      >
        <Box
          width="full"
          maxWidth={toastWidth}
          pointerEvents={toasts.length === 0 ? 'none' : undefined}
          marginX="gutter"
          paddingBottom="xsmall"
          onMouseEnter={() => !isMobileDevice && setExpanded(true)}
          onMouseLeave={() => !isMobileDevice && setExpanded(false)}
          onClick={() => setExpanded(!expanded)}
          onFocus={() => setExpanded(true)}
          onBlur={() => setExpanded(false)}
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
      </Box>
    </>
  );
};
