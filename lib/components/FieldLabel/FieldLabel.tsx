import React, { ReactNode } from 'react';
import { useStyles } from 'sku/react-treat';
import { Box } from '../Box/Box';
import { Secondary } from '../Secondary/Secondary';
import { Strong } from '../Strong/Strong';
import { Text } from '../Text/Text';
import * as styleRefs from './FieldLabel.treat';

export interface FieldLabelProps {
  htmlFor: string | false;
  label?: ReactNode;
  secondaryLabel?: ReactNode;
  tertiaryLabel?: ReactNode;
  description?: ReactNode;
}

export const FieldLabel = ({
  htmlFor,
  label,
  secondaryLabel,
  tertiaryLabel,
  description,
}: FieldLabelProps) => {
  const styles = useStyles(styleRefs);

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
      <Box component="span" display="flex" className={styles.spaceBetween}>
        {htmlFor === false ? (
          labelEl
        ) : (
          <label htmlFor={htmlFor}>{labelEl}</label>
        )}
        {tertiaryLabel ? <Text>&nbsp;{tertiaryLabel}</Text> : null}
      </Box>
      {description ? (
        <Box paddingTop="xxsmall" paddingBottom="xxsmall">
          <Text tone="secondary">{description}</Text>
        </Box>
      ) : null}
    </Box>
  );
};
