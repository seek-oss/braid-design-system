import React, { useEffect } from 'react';
import classnames from 'classnames';

import * as styleRefs from './Toast.treat';
import { Box, Text, TextLinkRenderer } from '..';
import { useStyles, TreatProvider } from 'sku/treat';
import { ClearButton } from '../iconButtons/ClearButton/ClearButton';
import { LeftHighlight } from '../private/LeftHighlight/LeftHighlight';
import { IconCritical } from '../icons';
import { Stack } from '../Stack/Stack';

import { useTouchableSpace } from '../../hooks/typography';

interface ToastProps {
  treatTheme: string;
  onClear: () => void;
  tone: 'neutral' | 'critical';
  message: string;
  description?: string;
  action?: boolean;
  timed?: boolean;
}
const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  (
    {
      treatTheme,
      message,
      description,
      tone,
      onClear,
      action = false,
      timed = false,
    },
    ref,
  ) => {
    useEffect(() => {
      if (timed) {
        const timeoutId = window.setTimeout(() => {
          onClear();
        }, 5000);

        return () => {
          window.clearTimeout(timeoutId);
        };
      }
    }, [timed]);

    const styles = useStyles(styleRefs);
    const touchable = useTouchableSpace('standard');

    const icon =
      tone === 'critical' ? (
        <Box className={touchable} paddingRight="small">
          <IconCritical tone="critical" />
        </Box>
      ) : null;

    return (
      <TreatProvider theme={treatTheme}>
        <Box paddingBottom="small" ref={ref}>
          <LeftHighlight
            display="inlineBlock"
            boxShadow="large"
            borderRadius="standard"
            tone={tone}
          >
            <Box
              display="flex"
              paddingLeft="medium"
              paddingY="small"
              background="card"
              boxShadow="borderStandard"
              className={styles.toast}
            >
              {icon}
              <Stack space="xxsmall">
                <Text baseline={false}>{message}</Text>
                {description ? (
                  <Text baseline={false} tone="secondary">
                    {description}
                  </Text>
                ) : null}
                {action ? (
                  <TextLinkRenderer>
                    {textLinkProps => (
                      <Box
                        component="button"
                        className={touchable}
                        {...textLinkProps}
                      >
                        <Text>Got it</Text>
                      </Box>
                    )}
                  </TextLinkRenderer>
                ) : null}
              </Stack>
              <Box className={styles.noShrink}>
                <ClearButton onClick={onClear} />
              </Box>
            </Box>
          </LeftHighlight>
        </Box>
      </TreatProvider>
    );
  },
);

export default Toast;
