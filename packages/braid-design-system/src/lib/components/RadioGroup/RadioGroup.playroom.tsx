import type { Optional } from 'utility-types';

import { type StateProp, useFallbackState } from '../../playroom/playroomState';
import { useFallbackId } from '../../playroom/utils';
import { validTabIndexes } from '../private/validateTabIndex';

import {
  type RadioGroupBaseProps,
  type RadioGroupLabelProps,
  RadioGroup as BraidRadioGroup,
} from './RadioGroup';

type PlayroomRadioProps = StateProp &
  Optional<RadioGroupBaseProps, 'id' | 'value' | 'onChange'> &
  RadioGroupLabelProps;

export const RadioGroup = ({
  id,
  stateName,
  value,
  onChange,
  children,
  tabIndex,
  ...restProps
}: PlayroomRadioProps) => {
  const fallbackId = useFallbackId();
  const [state, handleChange] = useFallbackState(stateName, value, onChange);

  return (
    <BraidRadioGroup
      {...restProps}
      id={id ?? fallbackId}
      value={state}
      onChange={handleChange}
      tabIndex={validTabIndexes.includes(tabIndex!) ? tabIndex : undefined}
    >
      {children}
    </BraidRadioGroup>
  );
};
