import React, { AllHTMLAttributes, ReactNode } from 'react';
import { Box } from '../../Box/Box';
import { FieldLabel, FieldLabelProps } from '../../FieldLabel/FieldLabel';
import {
  FieldMessage,
  FieldMessageProps,
} from '../../FieldMessage/FieldMessage';

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
}

interface FieldGroupRenderProps {
  disabled?: FieldGroupProps['disabled'];
  'aria-describedby'?: string;
}

interface InternalFieldGroupProps extends FieldGroupProps {
  children(props: FieldGroupRenderProps): ReactNode;
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
  reserveMessageSpace,
  tone,
}: InternalFieldGroupProps) => {
  const messageId = `${id}-message`;

  return (
    <Box component="fieldset" disabled={disabled} id={id}>
      <Box component="legend">
        <FieldLabel
          id={false}
          label={label}
          secondaryLabel={secondaryLabel}
          tertiaryLabel={tertiaryLabel}
          description={description}
        />
      </Box>

      {children({
        disabled,
        ...(message && { 'aria-describedby': messageId }),
      })}

      <FieldMessage
        id={messageId}
        tone={tone}
        disabled={disabled}
        message={message}
        reserveMessageSpace={reserveMessageSpace}
      />
    </Box>
  );
};
