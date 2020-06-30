import React, { useCallback, useEffect } from 'react';

import * as styleRefs from './Toast.treat';
import { useStyles, TreatProvider } from 'sku/react-treat';

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
import { useTimeout } from './useTimeout';
import { InternalToast, ToastAction } from './ToastTypes';

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
        {(textLinkProps) => (
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

interface ToastProps extends InternalToast {
  onClear: (dedupeKey: string, id: string) => void;
}
const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  (
    {
      id,
      treatTheme,
      dedupeKey,
      message,
      description,
      tone,
      onClear,
      action,
      shouldRemove,
    },
    ref,
  ) => {
    const remove = useCallback(() => onClear(dedupeKey, id), [
      onClear,
      dedupeKey,
      id,
    ]);
    const { stopTimeout, startTimeout } = useTimeout({
      duration: 10000,
      onTimeout: remove,
    });

    useEffect(() => {
      if (shouldRemove) {
        stopTimeout();
        remove();
      }
    }, [shouldRemove, remove, stopTimeout]);

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
          display="flex"
          justifyContent="center"
          role="alert"
          ref={ref}
          onMouseEnter={stopTimeout}
          onMouseLeave={startTimeout}
        >
          <Box boxShadow="large">
            <Box
              background="card"
              position="relative"
              boxShadow="borderStandard"
              borderRadius="standard"
              paddingY="medium"
              paddingLeft="medium"
              overflow="hidden"
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
                    <ClearButton
                      onClick={remove}
                      label="Clear"
                      data={
                        process.env.NODE_ENV !== 'production'
                          ? { testid: 'clearToast' }
                          : {}
                      }
                    />
                  </Box>
                </Column>
              </Columns>
              <Box
                background={tone}
                paddingLeft="xxsmall"
                position="absolute"
                left={0}
                top={0}
                bottom={0}
              />
            </Box>
          </Box>
        </Box>
      </TreatProvider>
    );
  },
);

export default Toast;
