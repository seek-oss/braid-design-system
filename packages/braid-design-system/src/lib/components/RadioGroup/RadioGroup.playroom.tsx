import type { FC } from 'react';
import type { Optional } from 'utility-types';

import { type StateProp, useFallbackState } from '../../playroom/playroomState';
import { validTabIndexes } from '../private/validateTabIndex';

import {
  type RadioGroupBaseProps,
  type RadioGroupLabelProps,
  RadioGroup as BraidRadioGroup,
} from './RadioGroup';

type PlayroomRadioProps = StateProp &
  Optional<RadioGroupBaseProps, 'id' | 'value' | 'onChange'> &
  RadioGroupLabelProps;

export const RadioGroup: FC<PlayroomRadioProps> = ({
  stateName,
  value,
  onChange,
  children,
  tabIndex,
  ...restProps
}) => {
  const [state, handleChange] = useFallbackState(stateName, value, onChange);

  return (
    <BraidRadioGroup
      {...restProps}
      value={state}
      onChange={handleChange}
      tabIndex={validTabIndexes.includes(tabIndex!) ? tabIndex : undefined}
    >
      {children}
    </BraidRadioGroup>
  );
};
