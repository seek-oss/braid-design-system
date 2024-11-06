import React, { type AllHTMLAttributes } from 'react';
import { Box } from '../../Box/Box';
import { type FieldLabelProps, FieldLabel } from '../../FieldLabel/FieldLabel';
import {
  type FieldMessageProps,
  FieldMessage,
} from '../../FieldMessage/FieldMessage';
import { type StackProps, Stack } from '../../Stack/Stack';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../buildDataAttributes';
import { mergeIds } from '../mergeIds';
import type { ReactNodeNoStrings } from '../ReactNodeNoStrings';
import dedent from 'dedent';

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
    messageSpace?: StackProps['space'];
    children(props: FieldGroupRenderProps): ReactNodeNoStrings;
    componentName: string;
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
  messageSpace = 'xsmall',
  tone,
  required,
  role,
  data,
  componentName,
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

  if (process.env.NODE_ENV !== 'production') {
    if (
      'label' in restProps &&
      typeof restProps.label === 'string' &&
      restProps.label.trim().length === 0 &&
      !('aria-label' in restProps) &&
      !('aria-labelledby' in restProps)
    ) {
      // eslint-disable-next-line no-console
      console.warn(
        dedent`
          The "label" prop is required as the accessible name for a ${componentName}.
          If you are labelling the ${componentName} with another element or using a non-visual label please provide the appropriate props, either "aria-label" or "aria-labelledby".

          See the ${componentName} documentation for more information: https://seek-oss.github.io/braid-design-system/components/${componentName}#indirect-or-hidden-field-labels
        `,
      );
    }
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

        <Stack space={messageSpace}>
          {children({
            disabled,
            'aria-describedby': mergeIds(
              message ? messageId : undefined,
              descriptionId,
            ),
          })}

          {(message && !disabled) || reserveMessageSpace ? (
            <FieldMessage
              id={messageId}
              tone={tone}
              disabled={disabled}
              message={message}
              reserveMessageSpace={reserveMessageSpace}
            />
          ) : null}
        </Stack>
      </Stack>
    </Box>
  );
};
