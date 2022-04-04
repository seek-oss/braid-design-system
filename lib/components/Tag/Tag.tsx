import React from 'react';
import assert from 'assert';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { ClearButton } from '../iconButtons/ClearButton/ClearButton';
import buildDataAttributes, {
  DataAttributeMap,
} from '../private/buildDataAttributes';
import { AllOrNone } from '../private/AllOrNone';

export type TagProps = {
  children: string;
  data?: DataAttributeMap;
  id?: string;
} & AllOrNone<{ onClear: () => void; clearLabel: string }>;

export const Tag = ({
  onClear,
  clearLabel = 'Clear',
  data,
  id,
  children,
}: TagProps) => {
  assert(
    typeof children === 'undefined' || typeof children === 'string',
    'Tag may only contain a string',
  );

  return (
    <Box
      id={id}
      display="flex"
      {...(data ? buildDataAttributes(data) : undefined)}
    >
      <Box
        display="flex"
        minWidth={0}
        alignItems="center"
        background="neutralLight"
        paddingY="xxsmall"
        paddingLeft="small"
        paddingRight={onClear ? 'xxsmall' : 'small'}
        borderRadius="full"
      >
        <Box minWidth={0} title={children}>
          <Text baseline={false} truncate>
            {children}
          </Text>
        </Box>
        {onClear ? (
          <Box flexShrink={0} display="flex" paddingLeft="xxsmall">
            <ClearButton
              id={id ? `${id}-clear` : undefined}
              label={clearLabel}
              onClick={onClear}
            />
          </Box>
        ) : null}
      </Box>
    </Box>
  );
};
