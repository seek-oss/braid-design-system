import React, { type FormEvent, type ReactElement } from 'react';
import assert from 'assert';
import flattenChildren from '../../utils/flattenChildren';
import {
  type FieldGroupBaseProps,
  type FieldLabelVariant,
  FieldGroup,
} from '../private/FieldGroup/FieldGroup';
import { type RadioItemProps, RadioItem } from '../RadioGroup/RadioItem';
import { type StackProps, Stack } from '../Stack/Stack';
import { RadioGroupContext, RadioItemContext } from './RadioGroupContext';
import type { InlineFieldProps } from '../private/InlineField/InlineField';

export type RadioGroupBaseProps<Value = NonNullable<string | number>> =
  FieldGroupBaseProps & {
    children: Array<ReactElement<RadioItemProps>>;
    value: Value;
    onChange: (event: FormEvent<HTMLInputElement>) => void;
    name?: string;
    size?: InlineFieldProps['size'];
    tone?: Extract<
      FieldGroupBaseProps['tone'],
      'critical' | 'positive' | 'neutral'
    >;
  };
export type RadioGroupLabelProps = FieldLabelVariant;
export type RadioGroupProps<Value = NonNullable<string | number>> =
  RadioGroupBaseProps<Value> & RadioGroupLabelProps;

const stackSpaceForSize = {
  small: 'xsmall',
  standard: 'small',
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
      componentName="RadioGroup"
      disabled={disabled}
      tone={tone}
      role="radiogroup"
      messageSpace="small"
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
          <Stack space={stackSpaceForSize[size || 'standard']}>
            {items.map((item, i) => (
              <RadioItemContext.Provider key={i} value={i}>
                {item}
              </RadioItemContext.Provider>
            ))}
          </Stack>
        </RadioGroupContext.Provider>
      )}
    </FieldGroup>
  );
};

RadioGroup.displayName = 'RadioGroup';

export { RadioGroup };
