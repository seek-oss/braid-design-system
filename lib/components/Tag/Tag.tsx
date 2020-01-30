import React, { ReactNode } from 'react';
import { useStyles } from 'sku/treat';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { ClearButton } from '../iconButtons/ClearButton/ClearButton';
import * as styleRefs from './Tag.treat';

export interface TagProps {
  onClear?: () => void;
  clearLabel?: string;
  children: ReactNode;
}

export const Tag = ({ onClear, clearLabel = 'Clear', children }: TagProps) => {
  const styles = useStyles(styleRefs);

  return (
    <Box display="inlineBlock">
      <Box
        display="flex"
        alignItems="center"
        background="neutralLight"
        paddingX="small"
        paddingY={styles.constants.paddingY}
        paddingRight={onClear ? 'xxsmall' : undefined}
        className={styles.borderRadius}
      >
        <Text size={styles.constants.textSize} baseline={false}>
          {children}
        </Text>
        {onClear ? (
          <Box paddingLeft="xxsmall">
            <ClearButton label={clearLabel} onClick={onClear} />
          </Box>
        ) : null}
      </Box>
    </Box>
  );
};
