import type { Optional } from 'utility-types';

import { type StateProp, useFallbackState } from '../../playroom/playroomState';

import {
  type TextareaBaseProps,
  type TextareaLabelProps,
  Textarea as BraidTextarea,
} from './Textarea';

type PlayroomTextareaProps = StateProp &
  Optional<TextareaBaseProps, 'id' | 'value' | 'onChange'> &
  TextareaLabelProps;

export const Textarea = ({
  stateName,
  value,
  onChange,
  ...restProps
}: PlayroomTextareaProps) => {
  const [state, handleChange] = useFallbackState(
    stateName,
    value,
    onChange,
    '',
  );

  return (
    <BraidTextarea
      value={state}
      onChange={handleChange}
      autoComplete="off"
      {...restProps}
    />
  );
};
