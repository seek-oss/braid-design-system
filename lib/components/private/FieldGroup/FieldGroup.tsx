import React, { AllHTMLAttributes } from 'react';
import { Box } from '../../Box/Box';
import { FieldLabel, FieldLabelProps } from '../../FieldLabel/FieldLabel';
import {
  FieldMessage,
  FieldMessageProps,
} from '../../FieldMessage/FieldMessage';
import { Stack, StackProps } from '../../Stack/Stack';
import { mergeIds } from '../mergeIds';
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
  role?: FormElementProps['role'];
  space?: StackProps['space'];
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
  reserveMessageSpace = false,
  tone,
  required,
  role,
  space = 'xsmall',
}: InternalFieldGroupProps) => {
  const labelId = `${id}-label`;
  const messageId = `${id}-message`;
  const descriptionId = description ? `${id}-description` : undefined;

  return (
    <Box
      component="fieldset"
      disabled={disabled}
      id={id}
      role={role}
      aria-labelledby={label ? labelId : undefined}
      aria-required={required}
    >
      <Stack space={space}>
        {label ? (
          <Box component="legend" id={labelId}>
            <FieldLabel
              htmlFor={false}
              label={label}
              secondaryLabel={secondaryLabel}
              tertiaryLabel={tertiaryLabel}
              description={description}
              descriptionId={descriptionId}
            />
          </Box>
        ) : null}

        {children({
          disabled,
          'aria-describedby': mergeIds(
            message ? messageId : undefined,
            descriptionId,
          ),
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
