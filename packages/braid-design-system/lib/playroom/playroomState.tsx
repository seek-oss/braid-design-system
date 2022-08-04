import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  ReactNode,
} from 'react';
import curry from 'lodash/curry';

export interface StateProp {
  stateName?: string;
}

type Store = Map<string, any>;

const unwrapValue = (value: any) => {
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
  defaultState: Map<string, any>,
  store: Store,
  setStore: (newStore: Store) => void,
) => {
  const setDefaultState = (key: string, value: any) => {
    defaultState.set(key, value);
  };

  const getState = (key: string) => store.get(key) ?? defaultState.get(key);

  const setState = curry((key: string, value: any) =>
    setStore(new Map(store.set(key, unwrapValue(value)))),
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
    setDefaultState,
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
  defaultState: defaultStateProp,
  children,
}: {
  defaultState?: Map<string, any>;
  children: ReactNode;
}) => {
  const [fallbackDefaultState] = useState(() => new Map());
  const defaultState = defaultStateProp ?? fallbackDefaultState;
  const state = useState(new Map<string, any>());
  const storeConsumer = useMemo(
    () => makeStoreConsumer(defaultState, ...state),
    [state, defaultState],
  );

  return (
    <PlayroomStateContext.Provider value={storeConsumer}>
      {children}
    </PlayroomStateContext.Provider>
  );
};

export const usePlayroomStore = () => {
  const storeConsumer = useContext(PlayroomStateContext);

  if (storeConsumer === null) {
    throw new Error('Must be within a PlayroomStateProvider');
  }

  return storeConsumer;
};

type Callback = (...args: any[]) => void;

const noop = () => {};

export function useFallbackState<Value, Handler extends Callback>(
  stateKey: string | undefined,
  value: Value,
  onChange: Handler | undefined,
  defaultValue?: Value,
): [NonNullable<Value>, (...args: Parameters<Handler>) => void] {
  const playroomState = usePlayroomStore();
  const [internalStateValue, setInternalStateValue] = useState(defaultValue);

  const wrapChangeHandler =
    (
      handler: Handler | typeof noop,
    ): ((...args: Parameters<Handler>) => void) =>
    (...args) => {
      if (value === undefined) {
        (stateKey ? playroomState.setState(stateKey) : setInternalStateValue)(
          unwrapValue(args[0]),
        );
      }

      (handler || noop)(...args);
    };

  const handleChange = wrapChangeHandler(onChange || noop);

  const resolvedValue =
    value ??
    (stateKey
      ? playroomState.getState(stateKey) ?? defaultValue
      : internalStateValue);

  return [resolvedValue, handleChange];
}
