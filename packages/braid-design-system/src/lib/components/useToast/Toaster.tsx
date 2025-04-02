import isMobile from 'is-mobile';
import React, { useCallback, useState } from 'react';

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

  const onClose = useCallback(
    (dedupeKey: string, id: string) => {
      remove(id, () => {
        removeToast(dedupeKey);
      });
    },
    [remove, removeToast],
  );

  return (
    <Box
      display="flex"
      justifyContent="center"
      position="fixed"
      bottom={0}
      width="full"
    >
      <Box
        width="full"
        maxWidth={toastWidth}
        pointerEvents={toasts.length === 0 ? 'none' : undefined}
        marginX="gutter"
        paddingBottom="xsmall"
        zIndex="notification"
        onMouseEnter={() => !isMobile() && setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
        onClick={() => isMobile() && setExpanded(!expanded)}
        onFocus={() => setExpanded(true)}
        onBlur={() => setExpanded(false)}
      >
        {toasts.map(({ id, ...rest }) => (
          <ToastComponent
            key={id}
            ref={itemRef(id)}
            id={id}
            onClose={onClose}
            expanded={expanded}
            {...rest}
          />
        ))}
      </Box>
    </Box>
  );
};
