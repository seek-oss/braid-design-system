import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _jsx from "@babel/runtime/helpers/jsx";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";

var _input, _section;

import _regeneratorRuntime from "@babel/runtime/regenerator";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import '@testing-library/jest-dom/extend-expect';
import React, { useState } from 'react';
import { render, fireEvent, waitForElementToBeRemoved, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '../../Button/Button';
import { BraidTestProvider } from '../../BraidTestProvider/BraidTestProvider';
export var modalTestSuite = function modalTestSuite(name, ModalImplementation) {
  var ESCAPE = 27;
  var CLOSE_LABEL = 'Close button';
  var TITLE = 'Test Title';

  var TestCase = function TestCase(_ref) {
    var close = _ref.close;

    var _useState = useState(false),
        _useState2 = _slicedToArray(_useState, 2),
        open = _useState2[0],
        setOpen = _useState2[1];

    return /*#__PURE__*/_jsx("div", {}, void 0, /*#__PURE__*/_jsx(Button, {
      data: {
        testid: 'buttonBefore'
      },
      onClick: function onClick() {
        return setOpen(true);
      }
    }, void 0, "Before"), _input || (_input = /*#__PURE__*/_jsx("input", {
      type: "text"
    })), /*#__PURE__*/_jsx(ModalImplementation, {
      id: "testModal",
      title: TITLE,
      closeLabel: CLOSE_LABEL,
      open: open,
      onClose: function onClose(newOpenState) {
        setOpen(newOpenState);
        close(newOpenState);
      }
    }, void 0, /*#__PURE__*/_jsx(Button, {
      data: {
        testid: 'buttonInside'
      }
    }, void 0, "Inside")), /*#__PURE__*/_jsx(Button, {
      data: {
        testid: 'buttonAfter'
      }
    }, void 0, "After"), _section || (_section = /*#__PURE__*/_jsx("section", {}, void 0, /*#__PURE__*/_jsx("article", {}, void 0, /*#__PURE__*/_jsx("input", {
      type: "text"
    })))));
  };

  function renderTestCase() {
    var closeHandler = jest.fn();
    return _objectSpread(_objectSpread({}, render( /*#__PURE__*/_jsx(BraidTestProvider, {}, void 0, /*#__PURE__*/_jsx(TestCase, {
      close: closeHandler
    })))), {}, {
      closeHandler: closeHandler
    });
  }

  var EXIT_TIMEOUT = 1500;
  describe("Modal: ".concat(name), function () {
    it('should not focus content when closed', function () {
      var _renderTestCase = renderTestCase(),
          getByTestId = _renderTestCase.getByTestId;

      expect(document.body).toHaveFocus();
      userEvent.tab();
      expect(getByTestId('buttonBefore')).toHaveFocus();
      userEvent.tab();
      userEvent.tab();
      expect(getByTestId('buttonAfter')).toHaveFocus();
      userEvent.tab();
      userEvent.tab();
      expect(document.body).toHaveFocus();
    });
    it('should not be visible until open', function () {
      var _renderTestCase2 = renderTestCase(),
          getByTestId = _renderTestCase2.getByTestId,
          queryByRole = _renderTestCase2.queryByRole;

      expect(queryByRole('dialog')).not.toBeInTheDocument();
      userEvent.click(getByTestId('buttonBefore'));
      expect(queryByRole('dialog')).toBeVisible();
    });
    it('should have the correct aria properties when open', function () {
      var _renderTestCase3 = renderTestCase(),
          getByTestId = _renderTestCase3.getByTestId,
          queryByRole = _renderTestCase3.queryByRole,
          getByLabelText = _renderTestCase3.getByLabelText;

      expect(queryByRole('dialog')).not.toBeInTheDocument();
      userEvent.click(getByTestId('buttonBefore'));
      var dialog = queryByRole('dialog');
      expect(dialog === null || dialog === void 0 ? void 0 : dialog.getAttribute('aria-modal')).toBe('true');
      expect(getByLabelText(TITLE)).toBe(dialog);
    });
    it('should focus the title element', function () {
      var _renderTestCase4 = renderTestCase(),
          getByTestId = _renderTestCase4.getByTestId,
          getByText = _renderTestCase4.getByText;

      userEvent.click(getByTestId('buttonBefore'));
      expect(getByText(TITLE)).toHaveFocus();
    });
    it('should trap focus in the dialog', function () {
      var _renderTestCase5 = renderTestCase(),
          getByTestId = _renderTestCase5.getByTestId,
          getByRole = _renderTestCase5.getByRole,
          getByText = _renderTestCase5.getByText,
          getByLabelText = _renderTestCase5.getByLabelText;

      var dialogOpenButton = getByTestId('buttonBefore');
      userEvent.tab();
      expect(dialogOpenButton).toHaveFocus();
      userEvent.click(dialogOpenButton);
      var buttonInside = getByTestId('buttonInside');
      var closeButton = getByLabelText(CLOSE_LABEL);
      var dialogTitle = getByText(TITLE);
      expect(dialogTitle).toHaveFocus();
      userEvent.tab({
        focusTrap: getByRole('dialog')
      });
      expect(buttonInside).toHaveFocus();
      userEvent.tab({
        focusTrap: getByRole('dialog')
      });
      expect(closeButton).toHaveFocus();
      userEvent.tab({
        focusTrap: getByRole('dialog')
      });
      expect(buttonInside).toHaveFocus();
      userEvent.tab({
        shift: true,
        focusTrap: getByRole('dialog')
      });
      expect(closeButton).toHaveFocus();
      userEvent.tab({
        shift: true,
        focusTrap: getByRole('dialog')
      });
      expect(buttonInside).toHaveFocus();
    });
    it('should close when hitting escape', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      var _renderTestCase6, getByTestId, queryByRole, getByRole, dialogOpenButton;

      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _renderTestCase6 = renderTestCase(), getByTestId = _renderTestCase6.getByTestId, queryByRole = _renderTestCase6.queryByRole, getByRole = _renderTestCase6.getByRole;
              dialogOpenButton = getByTestId('buttonBefore');
              userEvent.click(dialogOpenButton);
              fireEvent.keyDown(getByRole('dialog'), {
                keyCode: ESCAPE
              });
              _context.next = 6;
              return waitForElementToBeRemoved(function () {
                return queryByRole('dialog');
              }, {
                timeout: EXIT_TIMEOUT
              });

            case 6:
              expect(queryByRole('dialog')).not.toBeInTheDocument();

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));
    it('should hide document content outside of dialog from screen readers when open', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
      var _renderTestCase7, getByTestId, queryAllByRole, queryByRole, dialogOpenButton;

      return _regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _renderTestCase7 = renderTestCase(), getByTestId = _renderTestCase7.getByTestId, queryAllByRole = _renderTestCase7.queryAllByRole, queryByRole = _renderTestCase7.queryByRole;
              expect(queryAllByRole('textbox').length).toBe(2);
              dialogOpenButton = getByTestId('buttonBefore');
              userEvent.click(dialogOpenButton);
              _context2.next = 6;
              return waitFor(function () {
                return queryByRole('dialog');
              });

            case 6:
              _context2.next = 8;
              return waitFor(function () {
                return expect(queryAllByRole('textbox').length).toBe(0);
              });

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));
    it('should call dismiss handler once on close', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3() {
      var _renderTestCase8, getByTestId, getByLabelText, closeHandler, queryByRole, dialogOpenButton, closeButton;

      return _regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _renderTestCase8 = renderTestCase(), getByTestId = _renderTestCase8.getByTestId, getByLabelText = _renderTestCase8.getByLabelText, closeHandler = _renderTestCase8.closeHandler, queryByRole = _renderTestCase8.queryByRole;
              expect(closeHandler).not.toHaveBeenCalled();
              dialogOpenButton = getByTestId('buttonBefore');
              userEvent.click(dialogOpenButton);
              closeButton = getByLabelText(CLOSE_LABEL);
              userEvent.click(closeButton);
              _context3.next = 8;
              return waitForElementToBeRemoved(function () {
                return queryByRole('dialog');
              }, {
                timeout: EXIT_TIMEOUT
              });

            case 8:
              expect(closeHandler).toHaveBeenCalledTimes(1);
              expect(closeHandler).toHaveBeenCalledWith(false);

            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    })));
  });
};