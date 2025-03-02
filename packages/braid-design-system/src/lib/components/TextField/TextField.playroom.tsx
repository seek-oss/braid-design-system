import type { Optional } from 'utility-types';

import { type StateProp, useFallbackState } from '../../playroom/playroomState';
import { useFallbackId } from '../../playroom/utils';
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
    onClear?: true | TextFieldBaseProps['onClear'];
  };

export const TextField = ({
  id,
  stateName,
  value,
  onChange,
  onClear,
  tabIndex,
  ...restProps
}: PlayroomTextFieldProps) => {
  const fallbackId = useFallbackId();
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
      id={id ?? fallbackId}
      value={state}
      onChange={handleChange}
      onClear={handleOnClear}
      autoComplete="off"
      tabIndex={validTabIndexes.includes(tabIndex!) ? tabIndex : undefined}
      {...restProps}
    />
  );
};
