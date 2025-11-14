import {
  type MouseEvent,
  cloneElement,
  forwardRef,
  useCallback,
  useEffect,
} from 'react';
import assert from 'tiny-invariant';

import { Box } from '../Box/Box';
import { ButtonIcon } from '../ButtonIcon/ButtonIcon';
import { Column } from '../Column/Column';
import { Columns } from '../Columns/Columns';
import { Inline } from '../Inline/Inline';
import { Stack } from '../Stack/Stack';
import { Text } from '../Text/Text';
import { TextLinkButton } from '../TextLinkButton/TextLinkButton';
import { IconPositive, IconCritical, IconClear } from '../icons';
import { Overlay } from '../private/Overlay/Overlay';
import buildDataAttributes from '../private/buildDataAttributes';

import type { InternalToast, ToastAction } from './ToastTypes';
import { toastGap } from './consts';
import { useTimeout } from './useTimeout';

import * as styles from './Toast.css';
import { lineHeightContainer } from '../../css/lineHeightContainer.css';

const toneToIcon = {
  critical: IconCritical,
  positive: IconPositive,
};

export const toastDuration = 10 * 1000;

const borderRadius = 'large';

interface ActionProps extends ToastAction {
  removeToast: () => void;
}
const Action = ({ label, onClick, removeToast }: ActionProps) => {
  const handleClick = useCallback(
    (event: MouseEvent) => {
      event.stopPropagation();
      removeToast();
      onClick();
    },
    [removeToast, onClick],
  );

  return (
    <Text baseline={false}>
      <Box component="span" aria-hidden>
        <TextLinkButton onClick={handleClick} hitArea="large">
          {label}
        </TextLinkButton>
      </Box>
    </Text>
  );
};

const ToastIcon = ({ tone, icon }: Pick<InternalToast, 'tone' | 'icon'>) => {
  if (tone !== 'neutral') {
    const Icon = toneToIcon[tone];

    return <Icon tone={tone} />;
  }

  if (icon) {
    return cloneElement(icon, { tone });
  }

  return null;
};

interface ToastProps extends InternalToast {
  onClose: (dedupeKey: string, toastKey: string) => void;
  expanded?: boolean;
}
const Toast = forwardRef<HTMLDivElement, ToastProps>(
  (
    {
      toastKey,
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
      expanded = true,
      ...restProps
    },
    ref,
  ) => {
    const remove = useCallback(
      () => onClose(dedupeKey, toastKey),
      [onClose, dedupeKey, toastKey],
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

    useEffect(
      () => (expanded ? stopTimeout() : startTimeout()),
      [expanded, startTimeout, stopTimeout],
    );

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
        <Text weight="medium" tone={tone} baseline={false}>
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
          <Text weight="medium" tone={tone} baseline={false}>
            {message}
          </Text>
        </Box>
        {action ? (
          <Action key={action.label} removeToast={remove} {...action} />
        ) : null}
      </Inline>
    );

    return (
      <Box position="relative" width="full" display="flex" ref={ref}>
        <Box
          role="alert"
          textAlign="left"
          background={{ lightMode: 'surfaceDark', darkMode: 'surface' }}
          boxShadow={{
            lightMode: 'borderNeutral',
            darkMode: 'borderNeutralLight',
          }}
          borderRadius={borderRadius}
          paddingY="medium"
          paddingX="gutter"
          marginTop={toastGap}
          width="full"
          position="relative"
          className={styles.toast}
          tabIndex={0}
          outline="focus"
          onClick={(event) => {
            event.stopPropagation();
          }}
          {...buildDataAttributes({ data, validateRestProps: restProps })}
        >
          <Box transition="fast" className={styles.collapsedToastContent}>
            <Columns space="none">
              {tone !== 'neutral' || (tone === 'neutral' && icon) ? (
                <Column width="content">
                  <Box paddingRight="small">
                    <ToastIcon tone={tone} icon={icon} />
                  </Box>
                </Column>
              ) : null}
              <Column>{content}</Column>
              <Column width="content">
                <Box
                  width="touchable"
                  display="flex"
                  justifyContent="flexEnd"
                  alignItems="center"
                  className={lineHeightContainer.standard}
                  aria-hidden
                >
                  <ButtonIcon
                    icon={<IconClear tone="secondary" />}
                    variant="transparent"
                    onClick={(event) => {
                      event.stopPropagation();
                      remove();
                    }}
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
          </Box>
          <Overlay visible borderRadius={borderRadius} boxShadow="large" />
        </Box>
      </Box>
    );
  },
);

export default Toast;
