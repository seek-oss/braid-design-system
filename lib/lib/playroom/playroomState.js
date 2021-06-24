import _jsx from "@babel/runtime/helpers/jsx";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _typeof from "@babel/runtime/helpers/typeof";
import React, { createContext, useContext, useState, useMemo } from 'react';
import curry from 'lodash/curry';

var unwrapValue = function unwrapValue(value) {
  var actualValue = value;

  if (_typeof(value) === 'object' && value !== null && 'currentTarget' in value) {
    var currentTarget = value.currentTarget;
    actualValue = currentTarget.type === 'checkbox' ? currentTarget.checked : currentTarget.value;
  }

  return actualValue;
};

var makeStoreConsumer = function makeStoreConsumer(defaultState, store, setStore) {
  var setDefaultState = function setDefaultState(key, value) {
    defaultState.set(key, value);
  };

  var getState = function getState(key) {
    var _store$get;

    return (_store$get = store.get(key)) !== null && _store$get !== void 0 ? _store$get : defaultState.get(key);
  };

  var setState = curry(function (key, value) {
    return setStore(new Map(store.set(key, unwrapValue(value))));
  });

  var toggleState = function toggleState(key) {
    return setState(key, !getState(key));
  };

  var resetState = function resetState() {
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
    setDefaultState: setDefaultState,
    getState: getState,
    setState: setState,
    toggleState: toggleState,
    resetState: resetState
  };
};

var PlayroomStateContext = /*#__PURE__*/createContext(null);
export var PlayroomStateProvider = function PlayroomStateProvider(_ref) {
  var defaultStateProp = _ref.defaultState,
      children = _ref.children;

  var _useState = useState(function () {
    return new Map();
  }),
      _useState2 = _slicedToArray(_useState, 1),
      fallbackDefaultState = _useState2[0];

  var defaultState = defaultStateProp !== null && defaultStateProp !== void 0 ? defaultStateProp : fallbackDefaultState;
  var state = useState(new Map());
  var storeConsumer = useMemo(function () {
    return makeStoreConsumer.apply(void 0, [defaultState].concat(_toConsumableArray(state)));
  }, [state, defaultState]);
  return /*#__PURE__*/_jsx(PlayroomStateContext.Provider, {
    value: storeConsumer
  }, void 0, children);
};
PlayroomStateProvider.displayName = "PlayroomStateProvider";
export var usePlayroomStore = function usePlayroomStore() {
  var storeConsumer = useContext(PlayroomStateContext);

  if (storeConsumer === null) {
    throw new Error('Must be within a PlayroomStateProvider');
  }

  return storeConsumer;
};

var noop = function noop() {};

export function useFallbackState(stateKey, value, onChange, defaultValue) {
  var _playroomState$getSta;

  var playroomState = usePlayroomStore();

  var _useState3 = useState(defaultValue),
      _useState4 = _slicedToArray(_useState3, 2),
      internalStateValue = _useState4[0],
      setInternalStateValue = _useState4[1];

  var wrapChangeHandler = function wrapChangeHandler(handler) {
    return function () {
      if (value === undefined) {
        (stateKey ? playroomState.setState(stateKey) : setInternalStateValue)(unwrapValue(arguments.length <= 0 ? undefined : arguments[0]));
      }

      (handler || noop).apply(void 0, arguments);
    };
  };

  var handleChange = wrapChangeHandler(onChange || noop);
  var resolvedValue = value !== null && value !== void 0 ? value : stateKey ? (_playroomState$getSta = playroomState.getState(stateKey)) !== null && _playroomState$getSta !== void 0 ? _playroomState$getSta : defaultValue : internalStateValue;
  return [resolvedValue, handleChange];
}