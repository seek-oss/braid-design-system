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
>;

export function Autosuggest<Value>({
  id,
  value,
  onChange,
  onClear,
  ...restProps
}: PlayroomAutosuggestProps<Value>) {
  const fallbackId = useFallbackId();
  const blankValue = { text: '' };
  const [state, handleChange] = useFallbackState(
    id,
    value,
    onChange,
    blankValue,
  );

  return (
    <BraidAutosuggest
      id={id ?? fallbackId}
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
