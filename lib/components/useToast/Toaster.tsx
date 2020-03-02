import React, { useCallback } from 'react';
import { useStyles } from 'sku/treat';

import { Box } from '..';
import * as styleRefs from './Toast.treat';
import ToastComponent from './Toast';
import { useFlipList } from './useFlipList';
import { Toast } from './ToastTypes';

interface ToasterProps {
  toasts: Toast[];
  removeToast: (id: string) => void;
}
export const Toaster = ({ toasts, removeToast }: ToasterProps) => {
  const styles = useStyles(styleRefs);

  const { itemRef, remove } = useFlipList();

  const onClear = useCallback(
    (id: string) => {
      remove(id, () => {
        removeToast(id);
      });
    },
    [remove, removeToast],
  );

  return (
    <Box
      position="fixed"
      width="full"
      pointerEvents="none"
      paddingX="gutter"
      bottom={0}
      className={styles.toaster}
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
