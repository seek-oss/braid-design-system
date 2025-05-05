import { useCallback } from 'react';

import { Box } from '../Box/Box';

import ToastComponent from './Toast';
import type { InternalToast } from './ToastTypes';
import { useFlipList } from './useFlipList';

interface ToasterProps {
  toasts: InternalToast[];
  removeToast: (key: string) => void;
}
export const Toaster = ({ toasts, removeToast }: ToasterProps) => {
  const { itemRef, remove } = useFlipList();

  const onClose = useCallback(
    (dedupeKey: string, toastKey: string) => {
      remove(toastKey, () => {
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
      {toasts.map(({ toastKey, ...rest }) => (
        <Box key={toastKey} paddingBottom="small">
          <ToastComponent
            ref={itemRef(toastKey)}
            toastKey={toastKey}
            onClose={onClose}
            {...rest}
          />
        </Box>
      ))}
    </Box>
  );
};
