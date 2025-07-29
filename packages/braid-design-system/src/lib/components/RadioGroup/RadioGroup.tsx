import assert from 'assert';

import { useId, type FormEvent, type ReactElement } from 'react';

import flattenChildren from '../../utils/flattenChildren';
import { type RadioItemProps, RadioItem } from '../RadioGroup/RadioItem';
import { type StackProps, Stack } from '../Stack/Stack';
import {
  type FieldGroupBaseProps,
  type FieldLabelVariant,
  FieldGroup,
} from '../private/FieldGroup/FieldGroup';
import type { InlineFieldProps } from '../private/InlineField/InlineField';

import { RadioGroupContext, RadioItemContext } from './RadioGroupContext';

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

  const fallbackName = useId();

  return (
    <FieldGroup
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
            value,
            name: name || fallbackName,
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
