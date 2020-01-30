import React from 'react';
import { useStyles } from 'sku/treat';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { ClearButton } from '../iconButtons/ClearButton/ClearButton';
import * as styleRefs from './Tag.treat';

type AllOrNone<T> = T | { [K in keyof T]?: never };

export type TagProps = {
  children: string;
} & AllOrNone<{ onClear: () => void; clearLabel: string }>;

export const Tag = ({ onClear, clearLabel = 'Clear', children }: TagProps) => {
  const styles = useStyles(styleRefs);

  return (
    <Box display="inlineBlock">
      <Box
        display="flex"
        alignItems="center"
        background="neutralLight"
        paddingY={styles.constants.paddingY}
        paddingLeft="small"
        paddingRight={onClear ? 'xxsmall' : 'small'}
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
