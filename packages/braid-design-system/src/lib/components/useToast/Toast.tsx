import React, { cloneElement, useCallback, useEffect } from 'react';
import assert from 'assert';
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
import type { InternalToast, ToastAction } from './ToastTypes';
import { Keyline } from '../private/Keyline/Keyline';
import { lineHeightContainer } from '../../css/lineHeightContainer.css';
import buildDataAttributes from '../private/buildDataAttributes';
import * as styles from './Toast.css';

const toneToIcon = {
  critical: IconCritical,
  positive: IconPositive,
};

export const toastDuration = 10000;

const borderRadius = 'large';

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
      vanillaTheme,
      dedupeKey,
      message,
      description,
      tone,
      icon,
      onClose,
      closeLabel = 'Close',
      action,
      shouldRemove,
      data,
      ...restProps
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

    const Icon = tone !== 'neutral' ? toneToIcon[tone] : undefined;

    assert(
      !icon || (icon.props.size === undefined && icon.props.tone === undefined),
      "Icons cannot set the 'size' or 'tone' prop when passed to a Toast component",
    );

    assert(
      !icon || (icon && tone === 'neutral'),
      `Icons cannot be customised on a Toast component using '${tone}' tone`,
    );

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
      <Box
        display="flex"
        justifyContent="center"
        role="alert"
        ref={ref}
        onMouseEnter={stopTimeout}
        onMouseLeave={startTimeout}
        className={vanillaTheme}
        {...buildDataAttributes({ data, validateRestProps: restProps })}
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
                  {Icon ? (
                    <Box paddingRight="small">
                      <Icon tone={tone} />
                    </Box>
                  ) : null}
                  {tone === 'neutral' && icon ? (
                    <Box paddingRight="small">
                      {cloneElement(icon, { tone: 'secondary' })}
                    </Box>
                  ) : null}
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
              {tone !== 'neutral' ? (
                <Keyline tone={tone} borderRadius={borderRadius} />
              ) : null}
            </Box>
          </ContentBlock>
        </Box>
      </Box>
    );
  },
);

export default Toast;
