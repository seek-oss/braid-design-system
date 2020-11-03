import React from 'react';
import { Optional } from 'utility-types';
import { useFallbackState } from '../../playroom/playroomState';
import { useFallbackId } from '../../playroom/utils';
import {
  Autosuggest as BraidAutosuggest,
  AutosuggestProps,
} from './Autosuggest';

type PlayroomAutosuggestProps<Value> = Optional<
  AutosuggestProps<Value>,
  'id' | 'value' | 'onChange'
> & { name?: string };

export function Autosuggest<Value>({
  id,
  name,
  value,
  onChange,
  onClear,
  ...restProps
}: PlayroomAutosuggestProps<Value>) {
  const fallbackId = useFallbackId();
  const blankValue = { text: '' };
  const [state, handleChange] = useFallbackState(
    name,
    value,
    onChange,
    blankValue,
  );

  return (
    <BraidAutosuggest
      id={id ?? fallbackId}
      name={name}
      value={state}
      onChange={handleChange}
      onClear={() => {
        handleChange(blankValue);
        onClear?.();
      }}
      {...restProps}
    />
  );
}
