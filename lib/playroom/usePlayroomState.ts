import { useState } from 'react';
import curry from 'lodash/curry';

export const usePlayroomState = () => {
  const [store, setStore] = useState(new Map());

  const getState = (key: string, defaultValue: any) =>
    store.get(key) ?? defaultValue;

  const setState = curry((key: string, value: any) => {
    let actualValue = value;

    if (
      typeof value === 'object' &&
      value !== null &&
      'currentTarget' in value
    ) {
      const { currentTarget } = value;

      actualValue =
        currentTarget.type === 'checkbox'
          ? currentTarget.checked
          : currentTarget.value;
    }

    setStore(new Map(store.set(key, actualValue)));
  });

  const resetState = (...keys: string[]) => {
    if (keys.length) {
      keys.forEach((key) => {
        store.delete(key);
      });
      setStore(new Map(store));
    } else {
      setStore(new Map());
    }
  };

  return {
    getState,
    setState,
    resetState,
  };
};
