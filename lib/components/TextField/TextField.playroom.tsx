import React, { useState } from 'react';
import { Optional } from 'utility-types';
import { usePlayroomState, extractValue } from '../../playroom/playroomState';
import { useFallbackId } from '../../playroom/utils';
import { TextField as BraidTextField, TextFieldProps } from './TextField';

type Callback = (...args: any[]) => void;

const noop = () => {};

export function useComponentState<Value extends any, Handler extends Callback>(
  id: string | undefined,
  value: Value,
  onChange: Handler | undefined,
  defaultValue: NonNullable<Value>,
): [
  {
    value: NonNullable<Value>;
    onChange: (...args: Parameters<Handler>) => void;
  },
  (value: Value) => void,
] {
  const playroomState = usePlayroomState();
  const [internalStateValue, setInternalStateValue] = useState(defaultValue);

  const wrapChangeHandler = (
    handler: Handler | typeof noop,
  ): ((...args: Parameters<Handler>) => void) => (
    ...args: Parameters<Handler>
  ) => {
    if (value === undefined) {
      (id ? playroomState.setState(id) : setInternalStateValue)(args[0]);
    }

    (handler || noop)(...args);
  };

  const handleChange = wrapChangeHandler(onChange || noop);

  return id
    ? [
        {
          value: value ?? playroomState.getState(id) ?? defaultValue,
          onChange: handleChange,
        },
        playroomState.setState(id),
      ]
    : [
        { value: value ?? internalStateValue, onChange: handleChange },
        (newValue: Value) => {
          setInternalStateValue(extractValue(newValue));
        },
      ];
}

type PlayroomTextFieldProps = Optional<
  TextFieldProps,
  'id' | 'value' | 'onChange'
> & {
  name?: string;
  onChange?: (fakeEvent: { currentTarget: { value: string } }) => void;
};

export const TextField = ({
  id,
  value,
  onChange,
  onClear,
  ...restProps
}: PlayroomTextFieldProps) => {
  const fallbackId = useFallbackId();
  const [stateProps, setState] = useComponentState(id, value, onChange, '');

  return (
    <BraidTextField
      id={id ?? fallbackId}
      {...stateProps}
      onClear={() => {
        if (value === undefined) {
          setState('');
        }

        (onChange || noop)({ currentTarget: { value: '' } });
        (onClear || noop)();
      }}
      autoComplete="off"
      {...restProps}
    />
  );
};
