import React, { useState, useEffect } from 'react';
import { Optional } from 'utility-types';
import { useFallbackId } from '../../playroom/utils';
import { Combobox as BraidCombobox, ComboboxProps } from './Combobox';

type PlayroomComboboxProps = Optional<
  ComboboxProps,
  'id' | 'value' | 'onChange'
>;

const fallbackValue = 'Select...';
const fallbackOptions = [fallbackValue];

const shouldUseOptions = (
  options: ComboboxProps['options'],
  value: ComboboxProps['value'],
) =>
  Array.isArray(options) &&
  options.length > 0 &&
  options
    .map((o) =>
      typeof o === 'string' || typeof o === 'number'
        ? { value: o, text: o }
        : o,
    )
    .some((o) => value === o.value);

export const Combobox = ({
  id,
  value,
  onChange,
  options,
  ...restProps
}: PlayroomComboboxProps) => {
  const fallbackId = useFallbackId();
  const [currentOptions, setCurrentOptions] = useState(
    shouldUseOptions(options, value) ? options : fallbackOptions,
  );

  const [currentValue, setCurrentValue] = useState(
    value === undefined ? fallbackValue : value,
  );

  useEffect(() => {
    setCurrentOptions(
      shouldUseOptions(options, currentValue) ? options : fallbackOptions,
    );
  }, [options]);

  useEffect(() => {
    setCurrentValue(value !== undefined ? value : fallbackValue);
  }, [value]);

  return (
    <BraidCombobox
      id={id ?? fallbackId}
      value={currentValue}
      options={currentOptions}
      onChange={onChange ? onChange : setCurrentValue}
      {...restProps}
    />
  );
};
