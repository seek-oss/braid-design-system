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
      timed = true,
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
        <Box ref={ref}>
          <LeftHighlight
            display="inlineBlock"
            boxShadow="large"
            borderRadius="standard"
            tone={tone}
          >
            <Box
              display="flex"
              paddingLeft="medium"
              paddingY="xsmall"
              background="card"
              className={styles.toast}
            >
              {icon}
              <Box className={classnames(touchable, styles.messageContainer)}>
                <Stack space="xsmall">
                  <Text baseline={false}>{message}</Text>
                  {description ? (
                    <Text baseline={false} tone="secondary">
                      {description}
                    </Text>
                  ) : null}
                  {action ? (
                    <Text>
                      <TextLinkRenderer>
                        {textLinkProps => (
                          <Box component="button" {...textLinkProps}>
                            Got it
                          </Box>
                        )}
                      </TextLinkRenderer>
                    </Text>
                  ) : null}
                </Stack>
              </Box>
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
