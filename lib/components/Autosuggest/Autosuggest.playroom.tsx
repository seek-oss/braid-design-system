import React, { useState } from 'react';
import { Optional } from 'utility-types';
import { useFallbackId } from '../../playroom/utils';
import {
  Autosuggest as BraidAutosuggest,
  AutosuggestProps,
} from './Autosuggest';

type PlayroomAutosuggestProps<Value> = Optional<
  AutosuggestProps<Value>,
  'id' | 'value' | 'onChange'
>;

export function Autosuggest<Value>({
  id,
  value,
  onChange,
  onClear,
  ...restProps
}: PlayroomAutosuggestProps<Value>) {
  const fallbackId = useFallbackId();
  const [fallbackValue, setFallbackValue] = useState({ text: '' });

  return (
    <BraidAutosuggest
      id={id ?? fallbackId}
      value={value ?? fallbackValue}
      onChange={onChange ?? setFallbackValue}
      onClear={
        onClear ??
        (() => {
          const blankValue = { text: '' };

          if (onChange) {
            onChange(blankValue);
          } else {
            setFallbackValue(blankValue);
          }
        })
      }
      {...restProps}
    />
  );
}
