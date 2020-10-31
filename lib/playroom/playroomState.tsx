import React, { useContext, ReactNode } from 'react';
import { createContext, useState } from 'react';
import curry from 'lodash/curry';

type Store = Map<string, any>;

export const extractValue = (value: any) => {
  let actualValue = value;

  if (typeof value === 'object' && value !== null && 'currentTarget' in value) {
    const { currentTarget } = value;

    actualValue =
      currentTarget.type === 'checkbox'
        ? currentTarget.checked
        : currentTarget.value;
  }
  return actualValue;
};

const makeStoreConsumer = (
  store: Store,
  setStore: (newStore: Store) => void,
) => {
  const getState = (key: string, defaultValue?: any) =>
    store.get(key) ?? defaultValue;

  const setState = curry((key: string, value: any) =>
    setStore(new Map(store.set(key, extractValue(value)))),
  );

  const toggleState = (key: string) => setState(key, !getState(key));

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
    toggleState,
    resetState,
  };
};

const PlayroomStateContext = createContext<ReturnType<
  typeof makeStoreConsumer
> | null>(null);

export const PlayroomStateProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [store, setStore] = useState(new Map<string, any>());
  const storeConsumer = makeStoreConsumer(store, setStore);

  return (
    <PlayroomStateContext.Provider value={storeConsumer}>
      {children}
    </PlayroomStateContext.Provider>
  );
};

export const usePlayroomState = () => {
  const storeConsumer = useContext(PlayroomStateContext);

  if (storeConsumer === null) {
    throw new Error('Must be within a PlayroomStateProvider');
  }

  return storeConsumer;
};
