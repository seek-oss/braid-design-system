import React, { useCallback, useState } from 'react';

import { Box } from '../Box/Box';
import { ContentBlock } from '../ContentBlock/ContentBlock';

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
      className={styles.toaster}
      position="fixed"
      zIndex="notification"
      width="full"
    >
      <ContentBlock width={toastWidth}>
        <Box
          pointerEvents={toasts.length === 0 ? 'none' : undefined}
          marginX="gutter"
          marginBottom="xsmall"
          onMouseEnter={() => setExpanded(true)}
          onMouseLeave={() => setExpanded(false)}
          onFocus={() => setExpanded(true)}
          onBlur={() => setExpanded(false)}
          onClick={() => setExpanded(!expanded)}
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
      </ContentBlock>
    </Box>
  );
};
