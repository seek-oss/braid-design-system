import React, { ReactNode } from 'react';
import { useClassNames } from 'sku/treat';
import { Box } from '../Box/Box';
import { Secondary } from '../Secondary/Secondary';
import { Strong } from '../Strong/Strong';
import { Text } from '../Text/Text';
import * as styles from './FieldLabel.treat';

export interface FieldLabelProps {
  id: string;
  label?: ReactNode;
  secondaryLabel?: ReactNode;
  tertiaryLabel?: ReactNode;
  description?: ReactNode;
}

export const FieldLabel = ({
  id,
  label,
  secondaryLabel,
  tertiaryLabel,
  description,
}: FieldLabelProps) => {
  if (!label) {
    return null;
  }

  return (
    <Box paddingBottom="xsmall">
      <Box
        component="span"
        display="flex"
        className={useClassNames(styles.spaceBetween)}
      >
        <label htmlFor={id}>
          <Text component="span">
            <Strong>{label}</Strong>
            {secondaryLabel ? (
              <Secondary>&nbsp;({secondaryLabel})</Secondary>
            ) : null}
          </Text>
        </label>
        {tertiaryLabel ? (
          <Text component="span">&nbsp;{tertiaryLabel}</Text>
        ) : null}
      </Box>
      {description ? (
        <Box paddingTop="xxsmall" paddingBottom="xxsmall">
          <Text color="secondary">{description}</Text>
        </Box>
      ) : null}
    </Box>
  );
};
