import React, { useCallback } from 'react';

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
import { useTimeout } from './useTimeout';
import { Toast as ToastType, ToastAction } from './ToastTypes';

const durations = {
  '5s': 5000,
  '10s': 10000,
} as const;

const sideSpace = 'medium' as const;

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
        <Inline space={sideSpace}>
          {actions.map(action => (
            <Action key={action.label} removeToast={remove} {...action} />
          ))}
        </Inline>
      </Stack>
    ) : (
      <Box display="flex" flexWrap="wrap">
        <Box paddingRight={actions.length ? sideSpace : undefined}>
          <Text baseline={false}>{message}</Text>
        </Box>
        <Box display="flex">
          {actions.map((action, index) => (
            <Box
              paddingLeft={index > 0 ? sideSpace : undefined}
              key={action.label}
            >
              <Action removeToast={remove} {...action} />
            </Box>
          ))}
        </Box>
      </Box>
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
                  <Box paddingLeft="xsmall">
                    <ClearButton onClick={remove} label="Clear message" />
                  </Box>
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
