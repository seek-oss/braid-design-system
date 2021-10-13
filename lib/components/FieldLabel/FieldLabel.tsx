import React, { ReactNode } from 'react';
import { Box } from '../Box/Box';
import { Secondary } from '../Secondary/Secondary';
import { Strong } from '../Strong/Strong';
import { Text } from '../Text/Text';
import { Stack } from '../Stack/Stack';
import { DataAttributeMap } from '../private/buildDataAttributes';

export interface FieldLabelProps {
  id?: string;
  htmlFor: string | false;
  label?: ReactNode;
  disabled?: boolean;
  secondaryLabel?: ReactNode;
  tertiaryLabel?: ReactNode;
  description?: ReactNode;
  descriptionId?: string;
  data?: DataAttributeMap;
}

export const FieldLabel = ({
  id,
  htmlFor,
  label,
  disabled,
  secondaryLabel,
  tertiaryLabel,
  description,
  descriptionId,
  data,
}: FieldLabelProps) => {
  if (!label) {
    return null;
  }

  const labelEl = (
    <Text tone={disabled ? 'secondary' : undefined}>
      <Strong>{label}</Strong>
      {secondaryLabel ? <Secondary>&nbsp;({secondaryLabel})</Secondary> : null}
    </Text>
  );

  return (
    <Stack space="xsmall" data={data}>
      <Box component="span" display="flex" justifyContent="spaceBetween">
        {htmlFor === false ? (
          labelEl
        ) : (
          <label id={id} htmlFor={htmlFor}>
            {labelEl}
          </label>
        )}
        {tertiaryLabel ? <Text>&nbsp;{tertiaryLabel}</Text> : null}
      </Box>
      {description ? (
        <Box paddingY="xxsmall">
          <Text tone="secondary" id={descriptionId}>
            {description}
          </Text>
        </Box>
      ) : null}
    </Stack>
  );
};
