import React, { FormEvent, ReactElement } from 'react';
import assert from 'assert';
import flattenChildren from 'react-keyed-flatten-children';
import { FieldGroup, FieldGroupProps } from '../private/FieldGroup/FieldGroup';
import { RadioItem, RadioItemProps } from '../RadioGroup/RadioItem';
import { Stack, StackProps } from '../Stack/Stack';
import { RadioGroupContext, RadioItemContext } from './RadioGroupContext';
import { Box } from '../Box/Box';
import { InlineFieldProps } from '../private/InlineField/InlineField';

export interface RadioGroupProps<Value = NonNullable<string | number>>
  extends FieldGroupProps {
  children: ReactElement<RadioItemProps>[];
  value: Value;
  onChange: (event: FormEvent<HTMLInputElement>) => void;
  name?: string;
  size?: InlineFieldProps['size'];
}

const stackSpaceForSize = {
  small: 'small',
  standard: 'medium',
} as Record<NonNullable<RadioGroupProps['size']>, StackProps['space']>;

const RadioGroup = ({
  children,
  id,
  value,
  name,
  onChange,
  disabled,
  tone,
  size,
  ...props
}: RadioGroupProps) => {
  const items = flattenChildren(children);

  assert(
    items.every(
      (item) =>
        typeof item === 'object' && 'type' in item && item.type === RadioItem,
    ),
    'All child nodes within a RadioGroup must be a RadioItem: https://seek-oss.github.io/braid-design-system/components/RadioGroup',
  );

  return (
    <FieldGroup
      id={id}
      {...props}
      disabled={disabled}
      tone={tone}
      space="small"
      role="radiogroup"
    >
      {(fieldGroupProps) => (
        <RadioGroupContext.Provider
          value={{
            id,
            value,
            name: name || id,
            onChange,
            disabled,
            tone,
            size,
            ...fieldGroupProps,
          }}
        >
          <Box
            paddingTop={props.description ? 'xxsmall' : 'xsmall'}
            paddingBottom={props.message ? 'xsmall' : undefined}
          >
            <Stack space={stackSpaceForSize[size || 'standard']}>
              {items.map((item, i) => (
                <RadioItemContext.Provider key={i} value={i}>
                  {item}
                </RadioItemContext.Provider>
              ))}
            </Stack>
          </Box>
        </RadioGroupContext.Provider>
      )}
    </FieldGroup>
  );
};

RadioGroup.displayName = 'RadioGroup';

export { RadioGroup };
