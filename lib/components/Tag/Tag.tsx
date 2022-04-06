import React, { cloneElement, ReactElement } from 'react';
import assert from 'assert';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { ClearButton } from '../iconButtons/ClearButton/ClearButton';
import buildDataAttributes, {
  DataAttributeMap,
} from '../private/buildDataAttributes';
import { AllOrNone } from '../private/AllOrNone';
import { UseIconProps } from '../../hooks/useIcon';

const textSize = 'standard';

export type TagProps = {
  children: string;
  data?: DataAttributeMap;
  id?: string;
  icon?: ReactElement<UseIconProps>;
} & AllOrNone<{ onClear: () => void; clearLabel: string }>;

export const Tag = ({
  onClear,
  clearLabel = 'Clear',
  data,
  id,
  icon,
  children,
}: TagProps) => {
  assert(
    typeof children === 'undefined' || typeof children === 'string',
    'Tag may only contain a string',
  );

  assert(
    !icon || icon.props.size === undefined,
    "Icons cannot set the 'size' prop when passed to a Tag component",
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
        paddingLeft={icon ? 'xsmall' : 'small'}
        paddingRight={onClear ? 'xxsmall' : 'small'}
        borderRadius="full"
      >
        {icon ? (
          <Box paddingRight="xxsmall">
            {cloneElement(icon, { size: textSize })}
          </Box>
        ) : null}
        <Box minWidth={0} title={children}>
          <Text size={textSize} baseline={false} truncate>
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
