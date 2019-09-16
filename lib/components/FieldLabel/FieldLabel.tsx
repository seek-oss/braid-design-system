import React, { ReactNode } from 'react';
import { Box } from '../Box/Box';
import { Secondary } from '../Secondary/Secondary';
import { Strong } from '../Strong/Strong';
import { Text } from '../Text/Text';

export interface FieldLabelProps {
  id?: string;
  htmlFor: string | false;
  label?: ReactNode;
  secondaryLabel?: ReactNode;
  tertiaryLabel?: ReactNode;
  description?: ReactNode;
}

export const FieldLabel = ({
  id,
  htmlFor,
  label,
  secondaryLabel,
  tertiaryLabel,
  description,
}: FieldLabelProps) => {
  if (!label) {
    return null;
  }

  const labelEl = (
    <Text>
      <Strong>{label}</Strong>
      {secondaryLabel ? <Secondary>&nbsp;({secondaryLabel})</Secondary> : null}
    </Text>
  );

  return (
    <Box paddingBottom="xsmall">
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
          <Text tone="secondary">{description}</Text>
        </Box>
      ) : null}
    </Box>
  );
};
