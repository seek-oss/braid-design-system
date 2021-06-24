import _jsx from "@babel/runtime/helpers/jsx";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _typeof from "@babel/runtime/helpers/typeof";
import React, { createContext, useContext, useState, useMemo } from 'react';
import curry from 'lodash/curry';

const unwrapValue = function unwrapValue(value) {
  let actualValue = value;

  if (_typeof(value) === 'object' && value !== null && 'currentTarget' in value) {
    const currentTarget = value.currentTarget;
    actualValue = currentTarget.type === 'checkbox' ? currentTarget.checked : currentTarget.value;
  }

  return actualValue;
};

const makeStoreConsumer = function makeStoreConsumer(defaultState, store, setStore) {
  const setDefaultState = function setDefaultState(key, value) {
    defaultState.set(key, value);
  };

  const getState = function getState(key) {
    let _store$get;

    return (_store$get = store.get(key)) !== null && _store$get !== void 0 ? _store$get : defaultState.get(key);
  };

  const setState = curry(function (key, value) {
    return setStore(new Map(store.set(key, unwrapValue(value))));
  });

  const toggleState = function toggleState(key) {
    return setState(key, !getState(key));
  };

  const resetState = function resetState() {
    for (var _len = arguments.length, keys = new Array(_len), _key = 0; _key < _len; _key++) {
      keys[_key] = arguments[_key];
    }

    if (keys.length) {
      keys.forEach(function (key) {
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
    resetState
  };
};

const PlayroomStateContext = /* #__PURE__*/createContext(null);
export var PlayroomStateProvider = function PlayroomStateProvider(_ref) {
  const defaultStateProp = _ref.defaultState,
      children = _ref.children;

  const _useState = useState(function () {
    return new Map();
  }),
      _useState2 = _slicedToArray(_useState, 1),
      fallbackDefaultState = _useState2[0];

  const defaultState = defaultStateProp !== null && defaultStateProp !== void 0 ? defaultStateProp : fallbackDefaultState;
  const state = useState(new Map());
  const storeConsumer = useMemo(function () {
    return makeStoreConsumer.apply(void 0, [defaultState].concat(_toConsumableArray(state)));
  }, [state, defaultState]);
  return /* #__PURE__*/_jsx(PlayroomStateContext.Provider, {
    value: storeConsumer
  }, void 0, children);
};
PlayroomStateProvider.displayName = "PlayroomStateProvider";
export var usePlayroomStore = function usePlayroomStore() {
  const storeConsumer = useContext(PlayroomStateContext);

  if (storeConsumer === null) {
    throw new Error('Must be within a PlayroomStateProvider');
  }

  return storeConsumer;
};

const noop = function noop() {};

export function useFallbackState(stateKey, value, onChange, defaultValue) {
  let _playroomState$getSta;

  const playroomState = usePlayroomStore();

  const _useState3 = useState(defaultValue),
      _useState4 = _slicedToArray(_useState3, 2),
      internalStateValue = _useState4[0],
      setInternalStateValue = _useState4[1];

  const wrapChangeHandler = function wrapChangeHandler(handler) {
    return function () {
      if (value === undefined) {
        (stateKey ? playroomState.setState(stateKey) : setInternalStateValue)(unwrapValue(arguments.length <= 0 ? undefined : arguments[0]));
      }

      (handler || noop).apply(void 0, arguments);
    };
  };

  const handleChange = wrapChangeHandler(onChange || noop);
  const resolvedValue = value !== null && value !== void 0 ? value : stateKey ? (_playroomState$getSta = playroomState.getState(stateKey)) !== null && _playroomState$getSta !== void 0 ? _playroomState$getSta : defaultValue : internalStateValue;
  return [resolvedValue, handleChange];
}