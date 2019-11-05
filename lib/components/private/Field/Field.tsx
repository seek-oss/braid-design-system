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
import { BackgroundProvider, useBackground } from '../../Box/BackgroundContext';
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
}

type PassthroughProps =
  | 'id'
  | 'name'
  | 'disabled'
  | 'autoComplete'
  | 'autoFocus';
interface FieldRenderProps extends Pick<FieldProps, PassthroughProps> {
  background: BoxProps['background'];
  boxShadow: BoxProps['boxShadow'];
  borderRadius: BoxProps['borderRadius'];
  width: BoxProps['width'];
  paddingX: BoxProps['paddingX'];
  'aria-describedby'?: string;
  className: string;
}

type FieldRef = HTMLElement;

interface InternalFieldProps extends FieldProps {
  children(
    overlays: ReactNode,
    props: FieldRenderProps,
    ref: Ref<FieldRef>,
    cancelButton: ReactNode,
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
    const fieldBoxShadow: BoxProps['boxShadow'] =
      useBackground() === 'brand' ? 'borderStandardInverted' : 'borderStandard';

    const clearHandler = useCallback(() => {
      if (typeof onClear !== 'function') {
        return;
      }

      onClear();

      if (ref && typeof ref === 'object' && ref.current) {
        ref.current.focus();
      }
    }, [onClear, ref]);

    const clearButtonVisible =
      onClear && typeof value === 'string' && value.length > 0;

    const overlays = (
      <Fragment>
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
                boxShadow:
                  tone === 'critical' && !disabled
                    ? 'borderCritical'
                    : fieldBoxShadow,
                width: 'full',
                paddingX: 'small',
                borderRadius: 'standard',
                ...((message || ariaDescribedBy) && {
                  'aria-describedby': ariaDescribedBy || messageId,
                }),
                disabled,
                autoComplete,
                autoFocus,
                ...buildDataAttributes(data),
                className: classnames(
                  styles.field,
                  useText({
                    backgroundContext: fieldBackground,
                    size: 'standard',
                    baseline: false,
                  }),
                  useTouchableSpace('standard'),
                  onClear ? styles.clearButtonSpace : null,
                ),
              },
              ref,
              clearButton,
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
