import _jsx from "@babel/runtime/helpers/jsx";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { useContext, createContext, useReducer, useCallback, useState, useEffect, Fragment } from 'react';
import { useTheme } from 'sku/react-treat';
import { useBraidTheme } from '../BraidProvider/BraidThemeContext';
import { BraidPortal } from '../BraidPortal/BraidPortal';
import { Toaster } from './Toaster';
var toastCounter = 0;
var ToastControllerContext = /*#__PURE__*/createContext(null);
var QUEUE_TOAST = 0;
var REMOVE_TOAST = 1;

function reducer(state, action) {
  switch (action.type) {
    case QUEUE_TOAST:
      {
        var _toast = action.toast;
        var hasExistingToast = state.toasts.some(function (t) {
          return t.dedupeKey === _toast.dedupeKey;
        });

        if (hasExistingToast) {
          return {
            toasts: state.toasts.map(function (t) {
              if (t.dedupeKey === _toast.dedupeKey) {
                return _objectSpread(_objectSpread({}, t), {}, {
                  shouldRemove: true
                });
              }

              return t;
            }),
            queuedToasts: _objectSpread(_objectSpread({}, state.queuedToasts), {}, _defineProperty({}, _toast.dedupeKey, _toast))
          };
        }

        return _objectSpread(_objectSpread({}, state), {}, {
          toasts: [].concat(_toConsumableArray(state.toasts), [action.toast])
        });
      }

    case REMOVE_TOAST:
      {
        var toasts = state.toasts.filter(function (_ref) {
          var dedupeKey = _ref.dedupeKey;
          return dedupeKey !== action.dedupeKey;
        });
        var queuedToast = state.queuedToasts[action.dedupeKey];

        if (queuedToast) {
          return {
            queuedToasts: _objectSpread(_objectSpread({}, state.queuedToasts), {}, _defineProperty({}, action.dedupeKey, undefined)),
            toasts: [].concat(_toConsumableArray(toasts), [queuedToast])
          };
        }

        return _objectSpread(_objectSpread({}, state), {}, {
          toasts: toasts
        });
      }
  }
}

var InternalToastProvider = function InternalToastProvider(_ref2) {
  var children = _ref2.children;

  var _useReducer = useReducer(reducer, {
    toasts: [],
    queuedToasts: {}
  }),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      toasts = _useReducer2[0].toasts,
      dispatch = _useReducer2[1];

  var addToast = useCallback(function (toast) {
    return dispatch({
      type: QUEUE_TOAST,
      toast: toast
    });
  }, []);
  var removeToast = useCallback(function (dedupeKey) {
    return dispatch({
      type: REMOVE_TOAST,
      dedupeKey: dedupeKey
    });
  }, []);
  return /*#__PURE__*/_jsx(ToastControllerContext.Provider, {
    value: addToast
  }, void 0, children, /*#__PURE__*/_jsx(ToastPortal, {}, void 0, /*#__PURE__*/_jsx(Toaster, {
    toasts: toasts,
    removeToast: removeToast
  })));
};

InternalToastProvider.displayName = "InternalToastProvider";
export var ToastProvider = function ToastProvider(_ref3) {
  var children = _ref3.children;
  var currentContext = useContext(ToastControllerContext);

  if (currentContext !== null) {
    // Bail early as "ToastProvider" is already setup
    return /*#__PURE__*/_jsx(Fragment, {}, void 0, children);
  }

  return /*#__PURE__*/_jsx(InternalToastProvider, {}, void 0, children);
};
ToastProvider.displayName = "ToastProvider";

var ToastPortal = function ToastPortal(_ref4) {
  var children = _ref4.children;

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      toastElement = _useState2[0],
      setElement = _useState2[1];

  useEffect(function () {
    var toastContainerId = 'braid-toast-container';
    var element = document.getElementById(toastContainerId);

    if (!element) {
      element = document.createElement('div');
      element.setAttribute('id', toastContainerId);
      element.setAttribute('class', '');
      document.body.appendChild(element);
    }

    setElement(element);
  }, []);

  if (!toastElement) {
    return null;
  }

  return /*#__PURE__*/_jsx(BraidPortal, {
    container: toastElement
  }, void 0, children);
};

ToastPortal.displayName = "ToastPortal";
export var useToast = function useToast() {
  var treatTheme = useTheme();

  var _useBraidTheme = useBraidTheme(),
      vanillaTheme = _useBraidTheme.vanillaTheme;

  var addToast = useContext(ToastControllerContext);

  if (addToast === null) {
    throw new Error('No "ToastProvider" configured');
  }

  return useCallback(function (toast) {
    var _toast$key;

    var id = "".concat(toastCounter++);
    var dedupeKey = (_toast$key = toast.key) !== null && _toast$key !== void 0 ? _toast$key : id;
    addToast(_objectSpread(_objectSpread({}, toast), {}, {
      treatTheme: treatTheme,
      vanillaTheme: vanillaTheme,
      id: id,
      dedupeKey: dedupeKey,
      shouldRemove: false
    }));
  }, [treatTheme, vanillaTheme, addToast]);
};