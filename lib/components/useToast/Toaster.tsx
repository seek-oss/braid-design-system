import React from 'react';
import { useStyles } from 'sku/treat';

import * as styleRefs from './Toast.treat';
import ToastComponent from './Toast';
import { Box } from '../Box/Box';
import { useFlipList } from './useFlipList';

export interface Toast {
  id: string;
  treatTheme: string;
  tone: 'neutral' | 'critical';
  message: string;
  description?: string;
  action?: boolean;
  timed?: boolean;
}

interface ToasterProps {
  toasts: Toast[];
  removeToast: (id: string) => void;
}
export const Toaster = ({ toasts, removeToast }: ToasterProps) => {
  const styles = useStyles(styleRefs);

  const { itemRef, remove } = useFlipList();

  return (
    <Box
      position="fixed"
      style={{
        zIndex: 300,
        left: 0,
        bottom: 0,
      }}
    >
      {toasts.map(({ id, ...rest }) => (
        <ToastComponent
          key={id}
          ref={itemRef(id)}
          positionStyles={{}}
          onClear={() => {
            console.log('Removing', id);

            remove(id, () => {
              console.log('Remove animtion finished for', id);

              removeToast(id);
            });
          }}
          timed={false}
          {...rest}
        />
      ))}
    </Box>
  );
};
