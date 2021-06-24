import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _jsx from "@babel/runtime/helpers/jsx";

let _div;

import _regeneratorRuntime from "@babel/runtime/regenerator";
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, act, waitFor, getByTestId } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BraidTestProvider, ToastProvider, useToast } from '..';

function App(_ref) {
  const children = _ref.children;
  return /* #__PURE__*/_jsx(BraidTestProvider, {}, void 0, /* #__PURE__*/_jsx(ToastProvider, {}, void 0, children));
}

App.displayName = "App";

function renderTestApp() {
  let showToastRef;

  const TestCase = function TestCase() {
    showToastRef = useToast();
    return _div || (_div = /* #__PURE__*/_jsx("div", {}));
  };

  const _render = render( /* #__PURE__*/_jsx(App, {}, void 0, /* #__PURE__*/_jsx(TestCase, {}))),
      queryAllByRole = _render.queryAllByRole,
      getByText = _render.getByText;

  return {
    showToast: function showToast() {
      for (var _len = arguments.length, props = new Array(_len), _key = 0; _key < _len; _key++) {
        props[_key] = arguments[_key];
      }

      return act(function () {
        showToastRef.apply(void 0, props);
      });
    },
    queryAllToasts: function queryAllToasts() {
      return queryAllByRole('alert');
    },
    getAction: function getAction(actionLabel) {
      return getByText(actionLabel);
    },
    clearToast: function clearToast(container) {
      act(function () {
        userEvent.click(getByTestId(container, 'clearToast'));
      });
    },
    getToastByMessage: function getToastByMessage(message) {
      return getByText(message);
    }
  };
}

describe('useToast', function () {
  it('should handle adding toast', /* #__PURE__*/_asyncToGenerator( /* #__PURE__*/_regeneratorRuntime.mark(function _callee() {
    let _renderTestApp, showToast, queryAllToasts, clearToast, allToasts;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _renderTestApp = renderTestApp(), showToast = _renderTestApp.showToast, queryAllToasts = _renderTestApp.queryAllToasts, clearToast = _renderTestApp.clearToast;
            expect(queryAllToasts()).toHaveLength(0);
            showToast({
              tone: 'critical',
              message: 'Some toast'
            });
            allToasts = queryAllToasts();
            expect(allToasts).toHaveLength(1);
            clearToast(allToasts[0]);
            _context.next = 8;
            return waitFor(function () {
              expect(queryAllToasts()).toHaveLength(0);
            });

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  it('should handle multiple toasts', /* #__PURE__*/_asyncToGenerator( /* #__PURE__*/_regeneratorRuntime.mark(function _callee2() {
    let _renderTestApp2, showToast, queryAllToasts, clearToast, getToastByMessage, allToasts;

    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _renderTestApp2 = renderTestApp(), showToast = _renderTestApp2.showToast, queryAllToasts = _renderTestApp2.queryAllToasts, clearToast = _renderTestApp2.clearToast, getToastByMessage = _renderTestApp2.getToastByMessage;
            expect(queryAllToasts()).toHaveLength(0);
            showToast({
              tone: 'critical',
              message: 'Toast 1'
            });
            showToast({
              tone: 'critical',
              message: 'Toast 2'
            });
            showToast({
              tone: 'critical',
              message: 'Toast 3'
            });
            allToasts = queryAllToasts();
            expect(allToasts).toHaveLength(3);
            clearToast(allToasts[1]);
            _context2.next = 10;
            return waitFor(function () {
              expect(queryAllToasts()).toHaveLength(2);
              expect(getToastByMessage('Toast 1')).toBeInTheDocument();
              expect(getToastByMessage('Toast 3')).toBeInTheDocument();
            });

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
  it('should handle actions', /* #__PURE__*/_asyncToGenerator( /* #__PURE__*/_regeneratorRuntime.mark(function _callee3() {
    let _renderTestApp3, showToast, getAction, queryAllToasts, actionClickHandler, actionLabel, action;

    return _regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _renderTestApp3 = renderTestApp(), showToast = _renderTestApp3.showToast, getAction = _renderTestApp3.getAction, queryAllToasts = _renderTestApp3.queryAllToasts;
            actionClickHandler = jest.fn();
            actionLabel = 'My action';
            showToast({
              tone: 'critical',
              message: 'Some toast',
              action: {
                label: actionLabel,
                onClick: actionClickHandler
              }
            });
            action = getAction(actionLabel);
            userEvent.click(action);
            expect(actionClickHandler).toHaveBeenCalledTimes(1);
            _context3.next = 9;
            return waitFor(function () {
              // Toast should be removed after action press
              expect(queryAllToasts()).toHaveLength(0);
            });

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })));
  it('should handle multiple toasts with actions', /* #__PURE__*/_asyncToGenerator( /* #__PURE__*/_regeneratorRuntime.mark(function _callee4() {
    let _renderTestApp4, showToast, getAction, queryAllToasts, getToastByMessage, actionClickHandler1, actionLabel1, actionClickHandler2, actionLabel2, action;

    return _regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _renderTestApp4 = renderTestApp(), showToast = _renderTestApp4.showToast, getAction = _renderTestApp4.getAction, queryAllToasts = _renderTestApp4.queryAllToasts, getToastByMessage = _renderTestApp4.getToastByMessage;
            actionClickHandler1 = jest.fn();
            actionLabel1 = 'Action 1';
            actionClickHandler2 = jest.fn();
            actionLabel2 = 'Action 2';
            showToast({
              tone: 'critical',
              message: 'Some toast',
              action: {
                label: actionLabel1,
                onClick: actionClickHandler1
              }
            });
            showToast({
              tone: 'positive',
              message: 'Some other toast',
              action: {
                label: actionLabel2,
                onClick: actionClickHandler2
              }
            });
            action = getAction(actionLabel2);
            userEvent.click(action);
            expect(actionClickHandler1).toHaveBeenCalledTimes(0);
            expect(actionClickHandler2).toHaveBeenCalledTimes(1);
            _context4.next = 13;
            return waitFor(function () {
              // Toast should be removed after action press
              expect(queryAllToasts()).toHaveLength(1);
              expect(getToastByMessage('Some toast')).toBeInTheDocument();
            });

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  })));
  it('should deduplicate toasts with the same key', /* #__PURE__*/_asyncToGenerator( /* #__PURE__*/_regeneratorRuntime.mark(function _callee5() {
    let _renderTestApp5, showToast, queryAllToasts, getToastByMessage, key1, key2;

    return _regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _renderTestApp5 = renderTestApp(), showToast = _renderTestApp5.showToast, queryAllToasts = _renderTestApp5.queryAllToasts, getToastByMessage = _renderTestApp5.getToastByMessage;
            key1 = 'deduped-1';
            key2 = 'deduped-2';
            expect(queryAllToasts()).toHaveLength(0);
            showToast({
              tone: 'critical',
              message: 'Toast 1',
              key: key1
            });
            showToast({
              tone: 'critical',
              message: 'Toast 2'
            });
            showToast({
              tone: 'critical',
              message: 'Toast 3',
              key: key1
            });
            showToast({
              tone: 'critical',
              message: 'Toast 4',
              key: key2
            });
            showToast({
              tone: 'critical',
              message: 'Toast 5'
            });
            showToast({
              tone: 'critical',
              message: 'Toast 6',
              key: key2
            });
            showToast({
              tone: 'critical',
              message: 'Toast 7',
              key: key1
            });
            _context5.next = 13;
            return waitFor(function () {
              const allToasts = queryAllToasts();
              expect(allToasts).toHaveLength(4);
              expect(getToastByMessage('Toast 2')).toBeInTheDocument();
              expect(getToastByMessage('Toast 5')).toBeInTheDocument();
              expect(getToastByMessage('Toast 6')).toBeInTheDocument();
              expect(getToastByMessage('Toast 7')).toBeInTheDocument();
            });

          case 13:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  })));
});