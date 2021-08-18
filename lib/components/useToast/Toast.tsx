import React, { useCallback, useEffect } from 'react';
import { TreatProvider } from 'sku/react-treat';
import { Stack } from '../Stack/Stack';
import { Inline } from '../Inline/Inline';
import { Columns } from '../Columns/Columns';
import { Column } from '../Column/Column';
import { ContentBlock } from '../ContentBlock/ContentBlock';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { TextLinkButton } from '../TextLinkButton/TextLinkButton';
import { IconPositive, IconCritical } from '../icons';
import { ClearButton } from '../iconButtons/ClearButton/ClearButton';
import { useTimeout } from './useTimeout';
import { InternalToast, ToastAction } from './ToastTypes';
import * as styles from './Toast.css';

const toneToIcon = {
  critical: IconCritical,
  positive: IconPositive,
};

const borderRadius = 'xlarge';

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
      <Box component="span" paddingRight="xsmall" aria-hidden>
        <TextLinkButton onClick={handleClick} hitArea="large">
          {label}
        </TextLinkButton>
      </Box>
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
      vanillaTheme,
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
    const remove = useCallback(
      () => onClear(dedupeKey, id),
      [onClear, dedupeKey, id],
    );
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
          className={vanillaTheme}
        >
          <Box boxShadow="large" borderRadius={borderRadius}>
            <ContentBlock width="xsmall">
              <Box
                background="card"
                position="relative"
                boxShadow="borderStandard"
                borderRadius={borderRadius}
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
            </ContentBlock>
          </Box>
        </Box>
      </TreatProvider>
    );
  },
);

export default Toast;
