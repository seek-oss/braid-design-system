import React, { FormEvent, ReactElement } from 'react';
import assert from 'assert';
import flattenChildren from 'react-keyed-flatten-children';
import { FieldGroup, FieldGroupProps } from '../private/FieldGroup/FieldGroup';
import { RadioItem, RadioItemProps } from '../RadioGroup/RadioItem';
import { Stack } from '../Stack/Stack';
import { RadioGroupContext, RadioItemContext } from './RadioGroupContext';

export interface RadioGroupProps<Value = NonNullable<string | number>>
  extends FieldGroupProps {
  children: ReactElement<RadioItemProps>[];
  value: Value;
  onChange: (event: FormEvent<HTMLFormElement>) => void;
  name?: string;
}

const RadioGroup = ({
  children,
  id,
  value,
  name,
  onChange,
  disabled,
  tone,
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
            ...fieldGroupProps,
          }}
        >
          <Stack space="small">
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
