import React, { useEffect, useState, useRef, useCallback } from 'react';

import * as styleRefs from './Toast.treat';
import { useStyles, TreatProvider } from 'sku/treat';

import {
  Stack,
  Inline,
  Columns,
  Column,
  IconCritical,
  Box,
  Text,
  TextLinkRenderer,
} from '../../components';
import { ClearButton } from '../iconButtons/ClearButton/ClearButton';
import { LeftHighlight } from '../private/LeftHighlight/LeftHighlight';
import { Toast as ToastType, ToastAction } from './ToastTypes';

const durations = {
  '5s': 5000,
  '10s': 10000,
} as const;

interface UseTimeoutProps {
  onTimeout: () => void;
  duration: number;
  enabled: boolean;
}
const useTimeout = ({ onTimeout, duration, enabled }: UseTimeoutProps) => {
  const [activated, setActivated] = useState(enabled);
  const timeoutRef = useRef<number | undefined>();

  const stopTimeout = useCallback(() => {
    window.clearTimeout(timeoutRef.current);
    setActivated(false);
  }, []);

  useEffect(() => {
    if (activated) {
      timeoutRef.current = window.setTimeout(() => {
        onTimeout();
      }, duration);

      return () => {
        stopTimeout();
      };
    }
  }, [onTimeout, activated, duration, stopTimeout]);

  const startTimeout = useCallback(() => {
    if (enabled) {
      setActivated(true);
    }
  }, [enabled]);

  return {
    stopTimeout,
    startTimeout,
  };
};

interface ActionProps extends ToastAction {
  removeToast: () => void;
}
const Action = ({ label, onClick, removeToast }: ActionProps) => {
  const handleClick = useCallback(() => {
    removeToast();
    onClick();
  }, [removeToast, onClick]);

  return (
    <Text baseline={false}>
      <TextLinkRenderer hitArea="large">
        {textLinkProps => (
          <Box component="button" onClick={handleClick} {...textLinkProps}>
            {label}
          </Box>
        )}
      </TextLinkRenderer>
    </Text>
  );
};

interface ToastProps extends ToastType {
  onClear: (id: string) => void;
}
const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  (
    {
      treatTheme,
      id,
      message,
      description,
      tone,
      onClear,
      actions = [],
      clearAfter = '5s',
    },
    ref,
  ) => {
    const remove = useCallback(() => onClear(id), [onClear, id]);
    const { stopTimeout, startTimeout } = useTimeout({
      duration: clearAfter === 'never' ? 0 : durations[clearAfter],
      enabled: clearAfter !== 'never',
      onTimeout: remove,
    });

    const styles = useStyles(styleRefs);

    const content = description ? (
      <Stack space="xxsmall">
        <Text baseline={false}>{message}</Text>
        {description ? (
          <Text baseline={false} tone="secondary">
            {description}
          </Text>
        ) : null}
        <Inline space="small">
          {actions.map(action => (
            <Action key={action.label} removeToast={remove} {...action} />
          ))}
        </Inline>
      </Stack>
    ) : (
      <Inline space="small">
        <Text baseline={false}>{message}</Text>
        {actions.map(action => (
          <Action key={action.label} removeToast={remove} {...action} />
        ))}
      </Inline>
    );

    return (
      <TreatProvider theme={treatTheme}>
        <Box
          paddingBottom="small"
          ref={ref}
          onMouseEnter={stopTimeout}
          onMouseLeave={startTimeout}
        >
          <LeftHighlight
            display="inlineBlock"
            boxShadow="large"
            borderRadius="standard"
            tone={tone}
          >
            <Box
              background="card"
              boxShadow="borderStandard"
              borderRadius="standard"
              paddingY="small"
              paddingX="medium"
              paddingLeft="medium"
              paddingRight="small"
              className={styles.toast}
            >
              <Columns space="small">
                {tone === 'critical' ? (
                  <Column width="content">
                    <IconCritical tone="critical" />
                  </Column>
                ) : null}
                <Column>{content}</Column>
                <Column width="content">
                  <ClearButton onClick={remove} label="Clear message" />
                </Column>
              </Columns>
            </Box>
          </LeftHighlight>
        </Box>
      </TreatProvider>
    );
  },
);

export default Toast;
