import React, {
  forwardRef,
  useRef,
  useCallback,
  Fragment,
  ReactNode,
  AllHTMLAttributes,
  Ref,
} from 'react';
import { useStyles } from 'sku/react-treat';
import classnames from 'classnames';
import { Box, BoxProps } from '../../Box/Box';
import {
  BackgroundProvider,
  useBackgroundLightness,
} from '../../Box/BackgroundContext';
import { FieldLabel, FieldLabelProps } from '../../FieldLabel/FieldLabel';
import {
  FieldMessage,
  FieldMessageProps,
} from '../../FieldMessage/FieldMessage';
import { FieldOverlay } from '../FieldOverlay/FieldOverlay';
import { Stack } from '../../Stack/Stack';
import { ClearButton } from '../../iconButtons/ClearButton/ClearButton';
import buildDataAttributes, { DataAttributeMap } from '../buildDataAttributes';
import { useText, useTouchableSpace } from '../../../hooks/typography';
import { Text } from '../../Text/Text';
import * as styleRefs from './Field.treat';

type FormElementProps = AllHTMLAttributes<HTMLFormElement>;
export interface FieldProps {
  id: NonNullable<FormElementProps['id']>;
  value?: FormElementProps['value'];
  labelId?: string;
  name?: FormElementProps['name'];
  disabled?: FormElementProps['disabled'];
  autoComplete?: FormElementProps['autoComplete'];
  label?: FieldLabelProps['label'];
  secondaryLabel?: FieldLabelProps['secondaryLabel'];
  tertiaryLabel?: FieldLabelProps['tertiaryLabel'];
  description?: FieldLabelProps['description'];
  message?: FieldMessageProps['message'];
  secondaryMessage?: FieldMessageProps['secondaryMessage'];
  reserveMessageSpace?: FieldMessageProps['reserveMessageSpace'];
  tone?: FieldMessageProps['tone'];
  'aria-describedby'?: FormElementProps['aria-describedby'];
  data?: DataAttributeMap;
  onClear?: () => void;
  autoFocus?: boolean;
  icon?: ReactNode;
  required?: boolean;
}

type PassthroughProps =
  | 'id'
  | 'name'
  | 'disabled'
  | 'autoComplete'
  | 'autoFocus';
interface FieldRenderProps extends Pick<FieldProps, PassthroughProps> {
  background: BoxProps['background'];
  borderRadius: BoxProps['borderRadius'];
  width: BoxProps['width'];
  paddingX: BoxProps['paddingX'];
  'aria-describedby'?: string;
  'aria-required'?: boolean;
  className: string;
}

type FieldRef = HTMLElement;

interface InternalFieldProps extends FieldProps {
  children(
    overlays: ReactNode,
    props: FieldRenderProps,
    ref: Ref<FieldRef>,
    cancelButton: ReactNode,
    icon: ReactNode,
  ): ReactNode;
}

export const Field = forwardRef<FieldRef, InternalFieldProps>(
  (
    {
      id,
      value,
      labelId,
      name,
      disabled,
      autoComplete,
      label,
      secondaryLabel,
      tertiaryLabel,
      description,
      children,
      message,
      secondaryMessage,
      reserveMessageSpace = true,
      tone,
      'aria-describedby': ariaDescribedBy,
      data,
      onClear,
      autoFocus,
      icon,
      required,
    },
    forwardedRef,
  ) => {
    const styles = useStyles(styleRefs);

    // We need a ref regardless so we can imperatively
    // focus the field when clicking the clear button
    const defaultRef = useRef(null);
    const ref = forwardedRef || defaultRef;

    const messageId = `${id}-message`;
    const fieldBackground = disabled ? 'inputDisabled' : 'input';
    const showFieldBorder = useBackgroundLightness() === 'light';

    const clearHandler = useCallback(() => {
      if (typeof onClear !== 'function') {
        return;
      }

      onClear();

      if (ref && typeof ref === 'object' && ref.current) {
        ref.current.focus();
      }
    }, [onClear, ref]);

    const hasValue =
      typeof value === 'string' ? value.length > 0 : value != null;
    const clearButtonVisible = onClear && hasValue;

    const overlays = (
      <Fragment>
        <FieldOverlay variant="default" visible={showFieldBorder} />
        <FieldOverlay
          variant="critical"
          visible={tone === 'critical' && !disabled}
        />
        <FieldOverlay variant="focus" className={styles.focusOverlay} />
        <FieldOverlay variant="hover" className={styles.hoverOverlay} />
      </Fragment>
    );

    const clearButton = onClear ? (
      <Box
        position="absolute"
        transition="fast"
        pointerEvents={clearButtonVisible ? undefined : 'none'}
        className={classnames(
          styles.clearButton,
          styles.clearButtonVisibility[
            clearButtonVisible ? 'visible' : 'hidden'
          ],
        )}
      >
        <ClearButton
          label="Clear"
          onMouseDown={clearHandler}
          keyboardAccessible={false}
        />
      </Box>
    ) : null;

    return (
      <Stack space="xsmall">
        {label ? (
          <FieldLabel
            id={labelId}
            htmlFor={id}
            label={label}
            secondaryLabel={secondaryLabel}
            tertiaryLabel={tertiaryLabel}
            description={description}
          />
        ) : null}

        <Box position="relative">
          <BackgroundProvider value={fieldBackground}>
            {children(
              overlays,
              {
                id,
                name,
                background: fieldBackground,
                width: 'full',
                paddingX: 'small',
                borderRadius: 'standard',
                ...((message || ariaDescribedBy) && {
                  'aria-describedby': ariaDescribedBy || messageId,
                }),
                'aria-required': required,
                disabled,
                autoComplete,
                autoFocus,
                ...buildDataAttributes(data),
                className: classnames(
                  styles.field,
                  styles.placeholderColor,
                  useText({
                    backgroundContext: fieldBackground,
                    tone: hasValue ? 'neutral' : 'secondary',
                    size: 'standard',
                    baseline: false,
                  }),
                  useTouchableSpace('standard'),
                  clearButtonVisible ? styles.clearButtonSpace : null,
                  icon ? styles.iconSpace : null,
                ),
              },
              ref,
              clearButton,
              icon ? (
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  position="absolute"
                  height="touchable"
                  width="touchable"
                  pointerEvents="none"
                  className={styles.icon}
                >
                  <Text baseline={false}>{icon}</Text>
                </Box>
              ) : null,
            )}
          </BackgroundProvider>
        </Box>

        {message || reserveMessageSpace ? (
          <FieldMessage
            id={messageId}
            tone={tone}
            disabled={disabled}
            message={message}
            secondaryMessage={secondaryMessage}
            reserveMessageSpace={reserveMessageSpace}
          />
        ) : null}
      </Stack>
    );
  },
);
