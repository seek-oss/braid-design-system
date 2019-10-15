import React from 'react';
import classnames from 'classnames';

import * as styleRefs from './Toast.treat';
import { Box, Text, TextLinkRenderer } from '..';
import { useStyles } from 'sku/treat';
import { ClearButton } from '../iconButtons/ClearButton/ClearButton';
import { LeftHighlight } from '../private/LeftHighlight/LeftHighlight';
import { IconCritical } from '../icons';
import { Stack } from '../Stack/Stack';

import { useTouchableSpace } from '../../hooks/typography';

interface ToastProps {
  tone: 'neutral' | 'critical';
  message: string;
  description?: string;
  action?: boolean;
  onClear: () => void;
}
export const Toast = ({
  message,
  description,
  tone,
  onClear,
  action = false,
}: ToastProps) => {
  const styles = useStyles(styleRefs);
  const touchable = useTouchableSpace('standard');

  const icon =
    tone === 'critical' ? (
      <Box className={touchable} paddingRight="small">
        <IconCritical tone="critical" />
      </Box>
    ) : null;

  return (
    <LeftHighlight
      display="inlineBlock"
      boxShadow="large"
      borderRadius="baller"
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
  );
};
