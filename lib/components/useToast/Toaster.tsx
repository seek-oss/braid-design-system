import React from 'react';
import { useStyles } from 'sku/treat';

import * as styleRefs from './Toast.treat';
import ToastComponent from './Toast';
import { ContentBlock, Box, Stack } from '..';
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
      width="full"
      paddingX="small"
      className={styles.toaster}
    >
      <ContentBlock>
        <Stack space="small">
          {toasts.map(({ id, ...rest }) => (
            <ToastComponent
              key={id}
              ref={itemRef(id)}
              positionStyles={{}}
              onClear={() => {
                remove(id, () => {
                  removeToast(id);
                });
              }}
              timed={false}
              {...rest}
            />
          ))}
        </Stack>
      </ContentBlock>
    </Box>
  );
};
