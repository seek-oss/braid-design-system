import _extends from "@babel/runtime/helpers/extends";
import _jsx from "@babel/runtime/helpers/jsx";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useState, useEffect, useRef, createContext, useContext, useReducer } from 'react';
import FocusLock from 'react-focus-lock';
import { ariaHideOthers } from './ariaHideOthers';
import assert from 'assert';
import { Box } from '../../Box/Box';
import { BraidPortal } from '../../BraidPortal/BraidPortal';
import { externalGutter } from './ModalExternalGutter';
import { ModalContent } from './ModalContent';
import * as styles from './Modal.css';
const ModalContext = /* #__PURE__*/createContext(false);
export var AllowCloseContext = /* #__PURE__*/createContext(true);

const ModalPortal = function ModalPortal(_ref) {
  const children = _ref.children;

  const _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      modalElement = _useState2[0],
      setElement = _useState2[1];

  const alreadyInModalContext = useContext(ModalContext);
  assert(!alreadyInModalContext, 'Nested modals are not supported.');
  useEffect(function () {
    const modalContainerId = 'braid-modal-container';
    let element = document.getElementById(modalContainerId);

    if (!element) {
      element = document.createElement('div');
      element.setAttribute('id', modalContainerId);
      element.setAttribute('class', '');
      document.body.appendChild(element);
    }

    setElement(element);
  }, []);

  if (!modalElement) {
    return null;
  }

  return /* #__PURE__*/_jsx(BraidPortal, {
    container: modalElement
  }, void 0, /* #__PURE__*/_jsx(ModalContext.Provider, {
    value: true
  }, void 0, children));
};

ModalPortal.displayName = "ModalPortal";
// Actions
const OPEN_MODAL = 1;
const CLOSE_MODAL = 2;
const ANIMATION_COMPLETE = 3; // States

const INITIAL = 1;
const OPEN = 2;
const OPENING = 3;
const CLOSED = 4;
const CLOSING = 5;

const reducer = function reducer(prevState, action) {
  switch (action) {
    case OPEN_MODAL:
      {
        switch (prevState) {
          case INITIAL:
          case CLOSING:
          case CLOSED:
            {
              return OPENING;
            }
        }
      }

    case CLOSE_MODAL:
      {
        switch (prevState) {
          case OPEN:
          case OPENING:
            {
              return CLOSING;
            }
        }
      }

    case ANIMATION_COMPLETE:
      {
        switch (prevState) {
          case CLOSING:
            {
              return CLOSED;
            }

          case OPENING:
            {
              return OPEN;
            }
        }
      }
  }

  return prevState;
};

const ANIMATION_DURATION = 300;
export var Modal = function Modal(_ref2) {
  const id = _ref2.id,
      open = _ref2.open,
      children = _ref2.children,
      description = _ref2.description,
      onClose = _ref2.onClose,
      width = _ref2.width,
      closeLabel = _ref2.closeLabel,
      illustration = _ref2.illustration,
      title = _ref2.title,
      headingLevel = _ref2.headingLevel,
      position = _ref2.position,
      data = _ref2.data;

  const _useState3 = useState(true),
      _useState4 = _slicedToArray(_useState3, 2),
      trapActive = _useState4[0],
      setTrapActive = _useState4[1];

  const _useReducer = useReducer(reducer, INITIAL),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  const allowClose = useContext(AllowCloseContext);
  const shouldFocus = typeof document !== 'undefined' && typeof document.hasFocus === 'function' && document.hasFocus();
  const openRef = useRef(open);
  const modalRef = useRef(null);
  const headingRef = useRef(null);
  const closeHandlerRef = useRef(onClose);

  const initiateClose = function initiateClose() {
    if (allowClose) {
      dispatch(CLOSE_MODAL);
    }
  };

  useEffect(function () {
    openRef.current = open;
    dispatch(open ? OPEN_MODAL : CLOSE_MODAL);
  }, [open]);
  useEffect(function () {
    if (state === CLOSING) {
      const timer = setTimeout(function () {
        dispatch(ANIMATION_COMPLETE);
      }, ANIMATION_DURATION);
      return function () {
        return clearTimeout(timer);
      };
    }

    if (state === CLOSED && openRef.current) {
      closeHandlerRef.current(false);
    }
  }, [state]);
  const shouldAriaHideOthers = state === OPEN || state === CLOSING;
  useEffect(function () {
    if (shouldAriaHideOthers && modalRef.current) {
      return ariaHideOthers(modalRef.current, {
        delay: ANIMATION_DURATION
      });
    }
  }, [shouldAriaHideOthers]);
  useEffect(function () {
    if (typeof onClose === 'function') {
      closeHandlerRef.current = onClose;
    }
  }, [onClose]);
  useEffect(function () {
    const event = trapActive ? 'blur' : 'focus';

    const handleEvent = function handleEvent() {
      return setTrapActive(!trapActive);
    };

    window.addEventListener(event, handleEvent);
    return function () {
      window.removeEventListener(event, handleEvent);
    };
  }, [trapActive]);
  return /* #__PURE__*/_jsx(ModalPortal, {}, void 0, state === OPENING || state === OPEN || state === CLOSING ? /* #__PURE__*/_jsx(FocusLock, {
    disabled: !trapActive,
    autoFocus: false,
    onActivation: function onActivation() {
      if (headingRef.current && shouldFocus) {
        headingRef.current.focus();
      }

      dispatch(ANIMATION_COMPLETE);
    },
    returnFocus: true
  }, void 0, /* #__PURE__*/_jsx(Box, {
    onClick: state === OPEN ? initiateClose : undefined,
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: "modalBackdrop",
    transition: position === 'center' ? 'fast' : undefined,
    opacity: state !== OPEN ? 0 : undefined,
    pointerEvents: state === CLOSING ? 'none' : undefined,
    className: [styles.backdrop, position in styles.transition && styles.transition[position]]
  }), /* #__PURE__*/React.createElement(Box, _extends({
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: "modal",
    pointerEvents: "none",
    transition: "fast",
    opacity: state !== OPEN ? 0 : undefined
  }, position === 'right' ? {
    paddingLeft: ['none', 'xlarge']
  } : {
    padding: externalGutter
  }, {
    className: [styles.modalContainer, position in styles.transition && styles.transition[position], state === OPENING && styles.entrance[position], state === CLOSING && position in styles.exit && styles.exit[position]]
  }), /* #__PURE__*/_jsx(ModalContent, {
    id,
    description,
    onClose: initiateClose,
    width,
    closeLabel,
    illustration,
    title,
    headingLevel,
    headingRef,
    modalRef,
    position,
    scrollLock: !(state === CLOSING),
    data
  }, void 0, children))) : null);
};
Modal.displayName = "Modal";