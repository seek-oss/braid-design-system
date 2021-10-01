import React, { AllHTMLAttributes } from 'react';
import { Box } from '../../Box/Box';
import { FieldLabel, FieldLabelProps } from '../../FieldLabel/FieldLabel';
import {
  FieldMessage,
  FieldMessageProps,
} from '../../FieldMessage/FieldMessage';
import { Stack, StackProps } from '../../Stack/Stack';
import buildDataAttributes, { DataAttributeMap } from '../buildDataAttributes';
import { mergeIds } from '../mergeIds';
import { ReactNodeNoStrings } from '../ReactNodeNoStrings';

type FormElementProps = AllHTMLAttributes<HTMLFormElement>;

export type FieldLabelVariant =
  | {
      'aria-labelledby': string;
      secondaryLabel?: never;
      tertiaryLabel?: never;
      description?: never;
    }
  | {
      'aria-label': string;
      secondaryLabel?: never;
      tertiaryLabel?: never;
      description?: never;
    }
  | {
      label: FieldLabelProps['label'];
      secondaryLabel?: FieldLabelProps['secondaryLabel'];
      tertiaryLabel?: FieldLabelProps['tertiaryLabel'];
      description?: FieldLabelProps['description'];
    };

export type FieldGroupBaseProps = {
  id: NonNullable<FormElementProps['id']>;
  disabled?: FormElementProps['disabled'];
  message?: FieldMessageProps['message'];
  reserveMessageSpace?: FieldMessageProps['reserveMessageSpace'];
  tone?: FieldMessageProps['tone'];
  required?: boolean;
  data?: DataAttributeMap;
};

interface FieldGroupRenderProps {
  disabled?: FieldGroupBaseProps['disabled'];
  'aria-describedby'?: string;
}

type InternalFieldGroupProps = FieldGroupBaseProps &
  FieldLabelVariant & {
    role?: FormElementProps['role'];
    space?: StackProps['space'];
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
  space = 'xsmall',
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
      {...(data ? buildDataAttributes(data) : undefined)}
    >
      <Stack space={space}>
        {'label' in restProps && restProps.label ? (
          <Box component="legend" id={labelId}>
            <FieldLabel
              htmlFor={false}
              label={restProps.label}
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
