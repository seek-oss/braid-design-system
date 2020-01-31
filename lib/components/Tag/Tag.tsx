import React from 'react';
import { useStyles } from 'sku/react-treat';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { ClearButton } from '../iconButtons/ClearButton/ClearButton';
import * as styleRefs from './Tag.treat';

type AllOrNone<T> = T | { [K in keyof T]?: never };

export type TagProps = {
  children: string;
} & AllOrNone<{ onClear: () => void; clearLabel: string }>;

export const Tag = ({ onClear, clearLabel = 'Clear', children }: TagProps) => {
  if (process.env.NODE_ENV !== 'production' && typeof children !== 'string') {
    throw new Error('Tag may only contain a `string`');
  }

  const styles = useStyles(styleRefs);

  return (
    <Box display="flex" minWidth={0}>
      <Box
        display="flex"
        minWidth={0}
        alignItems="center"
        background="neutralLight"
        paddingY={styles.constants.paddingY}
        paddingLeft="small"
        paddingRight={onClear ? 'xxsmall' : 'small'}
        className={styles.borderRadius}
      >
        <Box minWidth={0} title={children}>
          <Text size={styles.constants.textSize} baseline={false} truncate>
            {children}
          </Text>
        </Box>
        {onClear ? (
          <Box display="flex" paddingLeft="xxsmall">
            <ClearButton label={clearLabel} onClick={onClear} />
          </Box>
        ) : null}
      </Box>
    </Box>
  );
};
