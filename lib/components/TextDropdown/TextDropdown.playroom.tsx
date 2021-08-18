import React, { useState, useEffect } from 'react';
import { Optional } from 'utility-types';
import { useFallbackId } from '../../playroom/utils';
import {
  TextDropdown as BraidTextDropdown,
  TextDropdownProps,
  parseSimpleToComplexOption,
} from './TextDropdown';

type PlayroomTextDropdownProps<Value> = Optional<
  TextDropdownProps<Value>,
  'id' | 'value' | 'label' | 'onChange' | 'options'
>;

const fallbackOptions = ['TextDropdown'];

function resolveValue<Value>(
  value: PlayroomTextDropdownProps<Value>['value'],
  options: PlayroomTextDropdownProps<Value>['options'],
) {
  if (typeof value === 'undefined') {
    if (Array.isArray(options) && options.length > 0) {
      return parseSimpleToComplexOption(options[0]).value;
    }
    return fallbackOptions[0];
  }
  return value;
}

function resolveOptions<Value>(
  options: PlayroomTextDropdownProps<Value>['options'],
) {
  return Array.isArray(options) && options.length > 0
    ? options
    : fallbackOptions;
}

export function TextDropdown<Value>({
  id,
  value,
  label,
  onChange,
  options = fallbackOptions,
  ...restProps
}: PlayroomTextDropdownProps<Value | string>) {
  const fallbackId = useFallbackId();
  const [internalValue, setInternalValue] = useState(
    resolveValue(value, options),
  );
  const [internalOptions, setInternalOptions] = useState(
    resolveOptions(options),
  );

  useEffect(() => {
    if (options !== internalOptions) {
      setInternalOptions(resolveOptions(options));
      setInternalValue(resolveValue(value, options));
    }
  }, [internalOptions, value, options]);

  return (
    <BraidTextDropdown
      id={id ?? fallbackId}
      label={label ?? 'No label provided'}
      value={internalValue}
      options={internalOptions}
      onChange={onChange ? onChange : setInternalValue}
      {...restProps}
    />
  );
}
