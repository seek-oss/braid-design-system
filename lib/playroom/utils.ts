import { useRef, useState } from 'react';
import uuid from 'uuid/v4';
import { usePlayroomStore, extractValue } from './playroomState';

export const useFallbackId = () => useRef(`fallbackId-${uuid()}`).current;

export const usePrototypingState = (
  id: string | undefined,
  defaultValue: any,
): [value: any, setValue: (value: any) => void] => {
  const playroomState = usePlayroomStore();
  const [internalStateValue, setInternalStateValue] = useState(defaultValue);

  return id
    ? [playroomState.getState(id), playroomState.setState(id)]
    : [
        internalStateValue,
        (value: any) => {
          setInternalStateValue(extractValue(value));
        },
      ];
};

export const noop = () => {};
