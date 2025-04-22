import type { Optional } from 'utility-types';

import { type StateProp, useFallbackState } from '../../playroom/playroomState';

import { type ToggleProps, Toggle as BraidToggle } from './Toggle';

type PlayroomToggleProps = StateProp &
  Optional<ToggleProps, 'id' | 'on' | 'onChange'>;

export const Toggle = ({
  stateName,
  on,
  onChange,
  ...restProps
}: PlayroomToggleProps) => {
  const [state, handleChange] = useFallbackState(
    stateName,
    on,
    onChange,
    false,
  );

  return <BraidToggle on={state} onChange={handleChange} {...restProps} />;
};
