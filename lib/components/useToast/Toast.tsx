import React, { useCallback } from 'react';

import * as styleRefs from './Toast.treat';
import { useStyles, TreatProvider } from 'sku/treat';

import {
  Stack,
  Inline,
  Columns,
  Column,
  Box,
  Text,
  TextLinkRenderer,
} from '../../components';
import { IconPositive, IconCritical } from '../icons';
import { ClearButton } from '../iconButtons/ClearButton/ClearButton';
import { LeftHighlight } from '../private/LeftHighlight/LeftHighlight';
import { useTimeout } from './useTimeout';
import { Toast as ToastType, ToastAction } from './ToastTypes';

const durations = {
  '10s': 10000,
  '20s': 20000,
} as const;

const toneToIcon = {
  critical: IconCritical,
  positive: IconPositive,
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
          <Box
            component="button"
            paddingRight="xsmall"
            onClick={handleClick}
            {...textLinkProps}
            aria-hidden
          >
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
      action,
      clearAfter = '10s',
    },
    ref,
  ) => {
    const remove = useCallback(() => onClear(id), [onClear, id]);
    const { stopTimeout, startTimeout } = useTimeout({
      duration: durations[clearAfter],
      onTimeout: remove,
    });

    const styles = useStyles(styleRefs);

    const Icon = toneToIcon[tone];

    const content = description ? (
      <Stack space="xxsmall">
        <Text weight="strong" baseline={false}>
          {message}
        </Text>
        {description ? (
          <Text baseline={false} tone="secondary">
            {description}
          </Text>
        ) : null}
        {action ? (
          <Action key={action.label} removeToast={remove} {...action} />
        ) : null}
      </Stack>
    ) : (
      <Inline space="xxsmall">
        <Box paddingRight="medium">
          <Text weight="strong" baseline={false}>
            {message}
          </Text>
        </Box>
        {action ? (
          <Action key={action.label} removeToast={remove} {...action} />
        ) : null}
      </Inline>
    );

    return (
      <TreatProvider theme={treatTheme}>
        <Box
          role="alert"
          aria-live={tone === 'critical' ? 'assertive' : 'polite'}
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
              paddingY="medium"
              paddingLeft="medium"
              className={styles.toast}
            >
              <Columns space="none">
                <Column width="content">
                  <Box paddingRight="small">
                    <Icon tone={tone} />
                  </Box>
                </Column>
                <Column>{content}</Column>
                <Column width="content">
                  <Box
                    width="touchable"
                    display="flex"
                    justifyContent="center"
                    aria-hidden
                  >
                    <ClearButton onClick={remove} label="Close" />
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
