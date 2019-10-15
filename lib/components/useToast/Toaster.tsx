import React from 'react';
import { TreatProvider, useStyles } from 'sku/treat';

import * as styleRefs from './Toast.treat';
import { Box, Stack } from '..';
import { Toast as ToastComponent } from './Toast';
import { ContentBlock } from '../../playroom/components';

export interface Toast {
  treatTheme: string;
  tone: 'neutral' | 'critical';
  message: string;
  description?: string;
  action?: boolean;
}

interface ToasterProps {
  activeToasts: Toast[];
  removeToast: (toastIndex: number) => void;
}
export const Toaster = ({ activeToasts, removeToast }: ToasterProps) => {
  const styles = useStyles(styleRefs);

  return (
    <Box
      position="fixed"
      paddingBottom="medium"
      paddingX="small"
      pointerEvents="none"
      width="full"
      className={styles.toaster}
    >
      <ContentBlock>
        <Stack space="medium">
          {activeToasts.map(({ treatTheme, ...restProps }, index) => (
            <TreatProvider theme={treatTheme} key={index}>
              <ToastComponent
                onClear={() => removeToast(index)}
                {...restProps}
              />
            </TreatProvider>
          ))}
        </Stack>
      </ContentBlock>
    </Box>
  );
};
