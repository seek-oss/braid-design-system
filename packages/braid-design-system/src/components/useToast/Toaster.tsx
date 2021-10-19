import React, { useCallback } from 'react';

import { Box } from '../Box/Box';
import ToastComponent from './Toast';
import { useFlipList } from './useFlipList';
import type { InternalToast } from './ToastTypes';

interface ToasterProps {
  toasts: InternalToast[];
  removeToast: (key: string) => void;
}
export const Toaster = ({ toasts, removeToast }: ToasterProps) => {
  const { itemRef, remove } = useFlipList();

  const onClear = useCallback(
    (dedupeKey: string, id: string) => {
      remove(id, () => {
        removeToast(dedupeKey);
      });
    },
    [remove, removeToast],
  );

  return (
    <Box
      position="fixed"
      zIndex="notification"
      width="full"
      pointerEvents="none"
      paddingX="gutter"
      bottom={0}
    >
      {toasts.map(({ id, ...rest }) => (
        <Box key={id} paddingBottom="small">
          <ToastComponent
            ref={itemRef(id)}
            id={id}
            onClear={onClear}
            {...rest}
          />
        </Box>
      ))}
    </Box>
  );
};
