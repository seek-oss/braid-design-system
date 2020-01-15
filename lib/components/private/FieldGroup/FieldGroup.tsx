import React, { AllHTMLAttributes } from 'react';
import { Box } from '../../Box/Box';
import { FieldLabel, FieldLabelProps } from '../../FieldLabel/FieldLabel';
import {
  FieldMessage,
  FieldMessageProps,
} from '../../FieldMessage/FieldMessage';
import { Stack } from '../../Stack/Stack';
import { ReactNodeNoStrings } from '../ReactNodeNoStrings';

type FormElementProps = AllHTMLAttributes<HTMLFormElement>;
export interface FieldGroupProps {
  id: NonNullable<FormElementProps['id']>;
  disabled?: FormElementProps['disabled'];
  label?: FieldLabelProps['label'];
  secondaryLabel?: FieldLabelProps['secondaryLabel'];
  tertiaryLabel?: FieldLabelProps['tertiaryLabel'];
  description?: FieldLabelProps['description'];
  message?: FieldMessageProps['message'];
  reserveMessageSpace?: FieldMessageProps['reserveMessageSpace'];
  tone?: FieldMessageProps['tone'];
  required?: boolean;
}

interface FieldGroupRenderProps {
  disabled?: FieldGroupProps['disabled'];
  'aria-describedby'?: string;
}

interface InternalFieldGroupProps extends FieldGroupProps {
  children(props: FieldGroupRenderProps): ReactNodeNoStrings;
}

export const FieldGroup = ({
  id,
  disabled,
  children,
  label,
  secondaryLabel,
  tertiaryLabel,
  description,
  message,
  reserveMessageSpace = true,
  tone,
  required,
}: InternalFieldGroupProps) => {
  const messageId = `${id}-message`;

  return (
    <Box
      component="fieldset"
      disabled={disabled}
      id={id}
      aria-required={required}
    >
      <Stack space="xsmall">
        {label ? (
          <Box component="legend">
            <FieldLabel
              htmlFor={false}
              label={label}
              secondaryLabel={secondaryLabel}
              tertiaryLabel={tertiaryLabel}
              description={description}
            />
          </Box>
        ) : null}

        {children({
          disabled,
          ...(message && { 'aria-describedby': messageId }),
        })}

        {message || reserveMessageSpace ? (
          <FieldMessage
            id={messageId}
            tone={tone}
            disabled={disabled}
            message={message}
            reserveMessageSpace={reserveMessageSpace}
          />
        ) : null}
      </Stack>
    </Box>
  );
};
