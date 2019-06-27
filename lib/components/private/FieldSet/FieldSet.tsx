import React, { AllHTMLAttributes, ReactNode } from 'react';
import { Box } from '../../Box/Box';
import { FieldLabel, FieldLabelProps } from '../../FieldLabel/FieldLabel';
import {
  FieldMessage,
  FieldMessageProps,
} from '../../FieldMessage/FieldMessage';

type FormElementProps = AllHTMLAttributes<HTMLFormElement>;
export interface FieldSetProps {
  id: NonNullable<FormElementProps['id']>;
  disabled?: FormElementProps['disabled'];
  label?: FieldLabelProps['label'];
  secondaryLabel?: FieldLabelProps['secondaryLabel'];
  tertiaryLabel?: FieldLabelProps['tertiaryLabel'];
  description?: FieldLabelProps['description'];
  message?: FieldMessageProps['message'];
  reserveMessageSpace?: FieldMessageProps['reserveMessageSpace'];
  tone?: FieldMessageProps['tone'];
  children: ReactNode;
}

type PassthroughProps = 'disabled';
interface FieldRenderProps extends Pick<FieldSetProps, PassthroughProps> {
  'aria-describedby'?: string;
}

interface InternalFieldProps extends FieldSetProps {
  children(props: FieldRenderProps): ReactNode;
}

export const FieldSet = ({
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
}: InternalFieldProps) => {
  const messageId = `${id}-message`;

  return (
    <Box component="fieldset" disabled={disabled}>
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
