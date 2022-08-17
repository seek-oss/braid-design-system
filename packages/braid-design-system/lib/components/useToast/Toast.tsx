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
import { IconPositive, IconCritical, IconClear } from '../icons';
import { ButtonIcon } from '../ButtonIcon/ButtonIcon';
import { useTimeout } from './useTimeout';
import { InternalToast, ToastAction } from './ToastTypes';
import { Keyline } from '../private/Keyline/Keyline';
import { lineHeightContainer } from '../../css/lineHeightContainer.css';
import * as styles from './Toast.css';

const toneToIcon = {
  critical: IconCritical,
  positive: IconPositive,
};

export const toastDuration = 10000;

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
  onClose: (dedupeKey: string, id: string) => void;
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
      onClose,
      closeLabel = 'Close',
      action,
      shouldRemove,
    },
    ref,
  ) => {
    const remove = useCallback(
      () => onClose(dedupeKey, id),
      [onClose, dedupeKey, id],
    );
    const { stopTimeout, startTimeout } = useTimeout({
      duration: toastDuration,
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
                background="surface"
                position="relative"
                boxShadow="borderNeutralLight"
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
                      alignItems="center"
                      className={lineHeightContainer.standard}
                      aria-hidden
                    >
                      <ButtonIcon
                        id={`${dedupeKey}-clear`}
                        icon={<IconClear />}
                        tone="secondary"
                        variant="transparent"
                        onClick={remove}
                        label={closeLabel}
                        data={
                          process.env.NODE_ENV !== 'production'
                            ? { testid: 'clearToast' }
                            : {}
                        }
                      />
                    </Box>
                  </Column>
                </Columns>
                <Keyline tone={tone} borderRadius={borderRadius} />
              </Box>
            </ContentBlock>
          </Box>
        </Box>
      </TreatProvider>
    );
  },
);

export default Toast;
