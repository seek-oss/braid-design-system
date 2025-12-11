import type { FC } from 'react';
import type { Optional } from 'utility-types';

import { type StateProp, useFallbackState } from '../../playroom/playroomState';
import { validTabIndexes } from '../private/validateTabIndex';

import {
  type TextFieldBaseProps,
  type TextFieldLabelProps,
  TextField as BraidTextField,
} from './TextField';

type PlayroomTextFieldProps = StateProp &
  Optional<Omit<TextFieldBaseProps, 'onClear'>, 'id' | 'value' | 'onChange'> &
  TextFieldLabelProps & {
    onChange?: (fakeEvent: { currentTarget: { value: string } }) => void;
    onClear?: boolean | TextFieldBaseProps['onClear'];
  };

export const TextField: FC<PlayroomTextFieldProps> = ({
  stateName,
  value,
  onChange,
  onClear = true,
  tabIndex,
  ...restProps
}) => {
  const [state, handleChange] = useFallbackState(
    stateName,
    value,
    onChange,
    '',
  );

  const handleOnClear = onClear
    ? () => {
        handleChange({ currentTarget: { value: '' } });
        if (typeof onClear === 'function') {
          onClear();
        }
      }
    : undefined;

  return (
    <BraidTextField
      value={state}
      onChange={handleChange}
      onClear={handleOnClear}
      autoComplete="off"
      tabIndex={validTabIndexes.includes(tabIndex!) ? tabIndex : undefined}
      {...restProps}
    />
  );
};
