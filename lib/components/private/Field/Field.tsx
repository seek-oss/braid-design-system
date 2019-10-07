import React, {
  forwardRef,
  Fragment,
  ReactNode,
  AllHTMLAttributes,
  Ref,
} from 'react';
import { useStyles } from 'sku/react-treat';
import classnames from 'classnames';
import { Box, BoxProps } from '../../Box/Box';
import { BackgroundProvider } from '../../Box/BackgroundContext';
import { FieldLabel, FieldLabelProps } from '../../FieldLabel/FieldLabel';
import {
  FieldMessage,
  FieldMessageProps,
} from '../../FieldMessage/FieldMessage';
import { FieldOverlay } from '../FieldOverlay/FieldOverlay';
import { Stack } from '../../Stack/Stack';
import buildDataAttributes, { DataAttributeMap } from '../buildDataAttributes';
import { useText, useTouchableSpace } from '../../../hooks/typography';
import * as styleRefs from './Field.treat';

type FormElementProps = AllHTMLAttributes<HTMLFormElement>;
export interface FieldProps {
  id: NonNullable<FormElementProps['id']>;
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
}

type PassthroughProps = 'id' | 'name' | 'disabled' | 'autoComplete';
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
  ): ReactNode;
}

export const Field = forwardRef<FieldRef, InternalFieldProps>(
  (
    {
      id,
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
    },
    ref,
  ) => {
    const styles = useStyles(styleRefs);
    const messageId = `${id}-message`;
    const background = disabled ? 'inputDisabled' : 'input';

    const overlays = (
      <Fragment>
        <FieldOverlay variant="focus" className={styles.focusOverlay} />
        <FieldOverlay variant="hover" className={styles.hoverOverlay} />
      </Fragment>
    );

    return (
      <Stack space="small">
        <FieldLabel
          id={labelId}
          htmlFor={id}
          label={label}
          secondaryLabel={secondaryLabel}
          tertiaryLabel={tertiaryLabel}
          description={description}
        />
        <Stack space="xsmall">
          <Box position="relative">
            <BackgroundProvider value={background}>
              {children(
                overlays,
                {
                  id,
                  name,
                  background,
                  boxShadow:
                    tone === 'critical' && !disabled
                      ? 'borderCritical'
                      : 'borderStandard',
                  width: 'full',
                  paddingX: 'small',
                  borderRadius: 'standard',
                  ...((message || ariaDescribedBy) && {
                    'aria-describedby': ariaDescribedBy || messageId,
                  }),
                  disabled,
                  autoComplete,
                  ...buildDataAttributes(data),
                  className: classnames(
                    styles.field,
                    useText({
                      backgroundContext: background,
                      size: 'standard',
                      baseline: false,
                    }),
                    useTouchableSpace('standard'),
                  ),
                },
                ref,
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
      </Stack>
    );
  },
);
