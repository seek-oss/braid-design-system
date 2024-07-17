import React, { type AllHTMLAttributes } from 'react';
import { Box } from '../../Box/Box';
import { type FieldLabelProps, FieldLabel } from '../../FieldLabel/FieldLabel';
import {
  type FieldMessageProps,
  FieldMessage,
} from '../../FieldMessage/FieldMessage';
import { Stack } from '../../Stack/Stack';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../buildDataAttributes';
import { mergeIds } from '../mergeIds';
import type { ReactNodeNoStrings } from '../ReactNodeNoStrings';

type FormElementProps = AllHTMLAttributes<HTMLFormElement>;

export type FieldLabelVariant =
  | {
      'aria-labelledby': string;
      secondaryLabel?: never;
      tertiaryLabel?: never;
    }
  | {
      'aria-label': string;
      secondaryLabel?: never;
      tertiaryLabel?: never;
    }
  | {
      label: FieldLabelProps['label'];
      secondaryLabel?: FieldLabelProps['secondaryLabel'];
      tertiaryLabel?: FieldLabelProps['tertiaryLabel'];
    };

export interface FieldGroupBaseProps {
  id: NonNullable<FormElementProps['id']>;
  disabled?: FormElementProps['disabled'];
  description?: FieldLabelProps['description'];
  message?: FieldMessageProps['message'];
  reserveMessageSpace?: FieldMessageProps['reserveMessageSpace'];
  tone?: FieldMessageProps['tone'];
  required?: boolean;
  data?: DataAttributeMap;
}

interface FieldGroupRenderProps {
  disabled?: FieldGroupBaseProps['disabled'];
  'aria-describedby'?: string;
}

type InternalFieldGroupProps = FieldGroupBaseProps &
  FieldLabelVariant & {
    role?: FormElementProps['role'];
    children(props: FieldGroupRenderProps): ReactNodeNoStrings;
  };

export const FieldGroup = ({
  id,
  disabled,
  children,
  secondaryLabel,
  tertiaryLabel,
  description,
  message,
  reserveMessageSpace = false,
  tone,
  required,
  role,
  data,
  ...restProps
}: InternalFieldGroupProps) => {
  const labelId = `${id}-label`;
  const messageId = `${id}-message`;
  const descriptionId = description ? `${id}-description` : undefined;

  let ariaLabelledBy;
  let ariaLabel;
  if ('label' in restProps && restProps.label) {
    ariaLabelledBy = labelId;
  } else if ('aria-labelledby' in restProps && restProps['aria-labelledby']) {
    ariaLabelledBy = restProps['aria-labelledby'];
  } else if ('aria-label' in restProps && restProps['aria-label']) {
    ariaLabel = restProps['aria-label'];
  }

  return (
    <Box
      component="fieldset"
      disabled={disabled}
      id={id}
      role={role}
      aria-labelledby={ariaLabelledBy}
      aria-label={ariaLabel}
      aria-required={required}
      {...buildDataAttributes({ data, validateRestProps: restProps })}
    >
      <Stack space="small">
        {('label' in restProps && restProps.label) || description ? (
          <Box component="legend" id={labelId}>
            <FieldLabel
              htmlFor={false}
              label={'label' in restProps ? restProps.label : undefined}
              secondaryLabel={secondaryLabel}
              tertiaryLabel={tertiaryLabel}
              disabled={disabled}
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
