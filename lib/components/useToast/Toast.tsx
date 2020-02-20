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
  '10s': 10000,
  '20s': 20000,
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
      <Inline spaceX={sideSpace} spaceY="xxsmall">
        <Text baseline={false}>{message}</Text>
        <Box display="flex" aria-hidden>
          {actions.map((action, index) => (
            <Box
              paddingRight={index === actions.length - 1 ? 'small' : sideSpace}
              key={action.label}
            >
              <Action removeToast={remove} {...action} />
            </Box>
          ))}
        </Box>
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
              paddingY="small"
              paddingLeft="medium"
              className={styles.toast}
            >
              <Columns space="none">
                {tone === 'critical' ? (
                  <Column width="content">
                    <Box paddingRight="small">
                      <IconCritical tone="critical" />
                    </Box>
                  </Column>
                ) : null}
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
