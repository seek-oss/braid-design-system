import React from 'react';
import type { Optional } from 'utility-types';
import type { StateProp } from '../../playroom/playroomState';
import { useFallbackState } from '../../playroom/playroomState';
import { useFallbackId } from '../../playroom/utils';
import type {
  AutosuggestBaseProps,
  AutosuggestLabelProps,
} from './Autosuggest';
import { Autosuggest as BraidAutosuggest } from './Autosuggest';

type PlayroomAutosuggestProps<Value> = StateProp &
  Optional<AutosuggestBaseProps<Value>, 'id' | 'value' | 'onChange'> &
  AutosuggestLabelProps;

export function Autosuggest<Value>({
  id,
  stateName,
  value,
  onChange,
  onClear,
  ...restProps
}: PlayroomAutosuggestProps<Value>) {
  const fallbackId = useFallbackId();
  const blankValue = { text: '' };
  const [state, handleChange] = useFallbackState(
    stateName,
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
