import React, { ReactNode, AllHTMLAttributes, forwardRef, Ref } from 'react';
import { useStyles } from 'sku/react-treat';
import classnames from 'classnames';
import { Box, BoxProps } from '../../Box/Box';
import { FieldLabel, FieldLabelProps } from '../../FieldLabel/FieldLabel';
import {
  FieldMessage,
  FieldMessageProps,
} from '../../FieldMessage/FieldMessage';
import { FieldOverlay } from '../FieldOverlay/FieldOverlay';
import buildDataAttributes, { DataAttributeMap } from '../buildDataAttributes';
import { useText, useTouchableSpace } from '../../../hooks/typography';
import * as styleRefs from './Field.treat';

type FormElementProps = AllHTMLAttributes<HTMLFormElement>;
export interface FieldProps {
  id: NonNullable<FormElementProps['id']>;
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
  paddingLeft: BoxProps['paddingLeft'];
  paddingRight: BoxProps['paddingRight'];
  'aria-describedby'?: string;
  className: string;
}

type FieldRef = HTMLElement;

interface InternalFieldProps extends FieldProps {
  children(props: FieldRenderProps, ref: Ref<FieldRef>): ReactNode;
}

export const Field = forwardRef<FieldRef, InternalFieldProps>(
  (
    {
      id,
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
      reserveMessageSpace,
      tone,
      'aria-describedby': ariaDescribedBy,
      data,
    },
    ref,
  ) => {
    const styles = useStyles(styleRefs);
    const messageId = `${id}-message`;

    return (
      <Box>
        <FieldLabel
          htmlFor={id}
          label={label}
          secondaryLabel={secondaryLabel}
          tertiaryLabel={tertiaryLabel}
          description={description}
        />
        <Box position="relative">
          {children(
            {
              id,
              name,
              background: disabled ? 'inputDisabled' : 'input',
              boxShadow:
                tone === 'critical' && !disabled
                  ? 'borderCritical'
                  : 'borderStandard',
              width: 'full',
              paddingLeft: 'small',
              paddingRight: 'small',
              borderRadius: 'standard',
              ...((message || ariaDescribedBy) && {
                'aria-describedby': ariaDescribedBy || messageId,
              }),
              disabled,
              autoComplete,
              ...buildDataAttributes(data),
              className: classnames(
                styles.field,
                useText({ size: 'standard', baseline: false }),
                useTouchableSpace('standard'),
              ),
            },
            ref,
          )}
          <FieldOverlay variant="focus" className={styles.focusOverlay} />
          <FieldOverlay variant="hover" className={styles.hoverOverlay} />
        </Box>
        <FieldMessage
          id={messageId}
          tone={tone}
          disabled={disabled}
          message={message}
          secondaryMessage={secondaryMessage}
          reserveMessageSpace={reserveMessageSpace}
        />
      </Box>
    );
  },
);
