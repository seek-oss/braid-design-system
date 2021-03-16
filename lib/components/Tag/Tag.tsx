import React from 'react';
import assert from 'assert';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { ClearButton } from '../iconButtons/ClearButton/ClearButton';
import * as styles from './Tag.css';

type AllOrNone<T> = T | { [K in keyof T]?: never };

export type TagProps = {
  children: string;
} & AllOrNone<{ onClear: () => void; clearLabel: string }>;

export const Tag = ({ onClear, clearLabel = 'Clear', children }: TagProps) => {
  assert(
    typeof children === 'undefined' || typeof children === 'string',
    'Tag may only contain a string',
  );

  return (
    <Box display="flex">
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
          <Box flexShrink={0} display="flex" paddingLeft="xxsmall">
            <ClearButton label={clearLabel} onClick={onClear} />
          </Box>
        ) : null}
      </Box>
    </Box>
  );
};
