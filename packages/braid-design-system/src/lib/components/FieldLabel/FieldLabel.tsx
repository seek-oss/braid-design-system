import type { FC, ReactNode } from 'react';

import { Box } from '../Box/Box';
import { Secondary } from '../Secondary/Secondary';
import { Stack } from '../Stack/Stack';
import { Strong } from '../Strong/Strong';
import { Text } from '../Text/Text';
import type { DataAttributeMap } from '../private/buildDataAttributes';

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

export const FieldLabel: FC<FieldLabelProps> = ({
  id,
  htmlFor,
  label,
  disabled,
  secondaryLabel,
  tertiaryLabel,
  description,
  descriptionId,
  data,
}) => {
  if (!label && !description) {
    return null;
  }

  const labelEl = (
    <Text tone={disabled ? 'secondary' : undefined}>
      <Strong>{label}</Strong>
      {secondaryLabel ? <Secondary>&nbsp;({secondaryLabel})</Secondary> : null}
    </Text>
  );

  return (
    <Stack space="small" align="left" data={data}>
      {label ? (
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
      ) : null}
      {description ? (
        <Text tone="secondary" id={descriptionId}>
          {description}
        </Text>
      ) : null}
    </Stack>
  );
};
