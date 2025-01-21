import type { Optional } from 'utility-types';

import { type StateProp, useFallbackState } from '../../playroom/playroomState';
import { useFallbackId } from '../../playroom/utils';

import { type ToggleProps, Toggle as BraidToggle } from './Toggle';

type PlayroomToggleProps = StateProp &
  Optional<ToggleProps, 'id' | 'on' | 'onChange'>;

export const Toggle = ({
  id,
  stateName,
  on,
  onChange,
  ...restProps
}: PlayroomToggleProps) => {
  const fallbackId = useFallbackId();
  const [state, handleChange] = useFallbackState(
    stateName,
    on,
    onChange,
    false,
  );

  return (
    <BraidToggle
      id={id ?? fallbackId}
      on={state}
      onChange={handleChange}
      {...restProps}
    />
  );
};
