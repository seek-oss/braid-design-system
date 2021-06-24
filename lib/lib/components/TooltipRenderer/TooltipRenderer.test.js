import _extends from "@babel/runtime/helpers/extends";
import _jsx from "@babel/runtime/helpers/jsx";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";

var _Text, _Text2, _Text3, _Text4;

import _regeneratorRuntime from "@babel/runtime/regenerator";
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BraidTestProvider, TooltipRenderer, Box, Text } from '..';

var tick = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new Promise(function (resolve) {
              return setTimeout(resolve, 0);
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function tick() {
    return _ref.apply(this, arguments);
  };
}();

describe('TooltipRenderer', function () {
  it('should associate the trigger with the label', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
    var _render, getByRole, getByLabelText, trigger, tooltip;

    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _render = render( /*#__PURE__*/_jsx(BraidTestProvider, {
              themeName: "wireframe"
            }, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, /*#__PURE__*/_jsx(TooltipRenderer, {
              id: "TEST_ID",
              tooltip: _Text || (_Text = /*#__PURE__*/_jsx(Text, {}, void 0, "Tooltip text."))
            }, void 0, function (_ref3) {
              var triggerProps = _ref3.triggerProps;
              return /*#__PURE__*/React.createElement(Box, _extends({
                component: "span",
                "aria-label": "Trigger"
              }, triggerProps), "Trigger");
            })))), getByRole = _render.getByRole, getByLabelText = _render.getByLabelText;
            trigger = getByLabelText('Trigger');
            tooltip = getByRole('tooltip', {
              hidden: true
            });
            expect(trigger.getAttribute('aria-describedby')).toBe('TEST_ID');
            expect(tooltip.id).toBe('TEST_ID');

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
  it('should handle hover', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee5() {
    var _render2, getByRole, getByLabelText, tooltip, trigger;

    return _regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _render2 = render( /*#__PURE__*/_jsx(BraidTestProvider, {
              themeName: "wireframe"
            }, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, /*#__PURE__*/_jsx(TooltipRenderer, {
              id: "TEST_ID",
              tooltip: _Text2 || (_Text2 = /*#__PURE__*/_jsx(Text, {}, void 0, "Tooltip text."))
            }, void 0, function (_ref5) {
              var triggerProps = _ref5.triggerProps;
              return /*#__PURE__*/React.createElement(Box, _extends({
                component: "span",
                "aria-label": "Trigger"
              }, triggerProps), "Trigger");
            })))), getByRole = _render2.getByRole, getByLabelText = _render2.getByLabelText;
            tooltip = getByRole('tooltip', {
              hidden: true
            });
            expect(tooltip.hidden).toBe(true);
            trigger = getByLabelText('Trigger');
            _context5.next = 6;
            return act( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3() {
              return _regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      userEvent.hover(trigger);
                      _context3.next = 3;
                      return tick();

                    case 3:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3);
            })));

          case 6:
            expect(tooltip.hidden).toBe(false);
            _context5.next = 9;
            return act( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4() {
              return _regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      userEvent.unhover(trigger);
                      _context4.next = 3;
                      return tick();

                    case 3:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4);
            })));

          case 9:
            expect(tooltip.hidden).toBe(true);

          case 10:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  })));
  it('should hide on scroll', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee8() {
    var _render3, getByRole, getByLabelText, container, tooltip, trigger;

    return _regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _render3 = render( /*#__PURE__*/_jsx(BraidTestProvider, {
              themeName: "wireframe"
            }, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, /*#__PURE__*/_jsx(TooltipRenderer, {
              id: "TEST_ID",
              tooltip: _Text3 || (_Text3 = /*#__PURE__*/_jsx(Text, {}, void 0, "Tooltip text."))
            }, void 0, function (_ref9) {
              var triggerProps = _ref9.triggerProps;
              return /*#__PURE__*/React.createElement(Box, _extends({
                component: "span",
                "aria-label": "Trigger"
              }, triggerProps), "Trigger");
            })))), getByRole = _render3.getByRole, getByLabelText = _render3.getByLabelText, container = _render3.container;
            tooltip = getByRole('tooltip', {
              hidden: true
            });
            expect(tooltip.hidden).toBe(true);
            trigger = getByLabelText('Trigger');
            _context8.next = 6;
            return act( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee6() {
              return _regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      userEvent.hover(trigger);
                      _context6.next = 3;
                      return tick();

                    case 3:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6);
            })));

          case 6:
            expect(tooltip.hidden).toBe(false);
            _context8.next = 9;
            return act( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee7() {
              return _regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      fireEvent.scroll(container);
                      _context7.next = 3;
                      return tick();

                    case 3:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7);
            })));

          case 9:
            expect(tooltip.hidden).toBe(true);

          case 10:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  })));
  it('should handle keyboard focus', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee11() {
    var _render4, getByRole, getByLabelText, tooltip, trigger;

    return _regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _render4 = render( /*#__PURE__*/_jsx(BraidTestProvider, {
              themeName: "wireframe"
            }, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, /*#__PURE__*/_jsx(TooltipRenderer, {
              id: "TEST_ID",
              tooltip: _Text4 || (_Text4 = /*#__PURE__*/_jsx(Text, {}, void 0, "Tooltip text."))
            }, void 0, function (_ref13) {
              var triggerProps = _ref13.triggerProps;
              return /*#__PURE__*/React.createElement(Box, _extends({
                component: "span",
                "aria-label": "Trigger"
              }, triggerProps), "Trigger");
            })))), getByRole = _render4.getByRole, getByLabelText = _render4.getByLabelText;
            tooltip = getByRole('tooltip', {
              hidden: true
            });
            expect(tooltip.hidden).toBe(true);
            trigger = getByLabelText('Trigger');
            expect(document.body).toHaveFocus();
            _context11.next = 7;
            return act( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee9() {
              return _regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      userEvent.tab();
                      _context9.next = 3;
                      return tick();

                    case 3:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9);
            })));

          case 7:
            expect(trigger).toHaveFocus();
            expect(tooltip.hidden).toBe(false);
            _context11.next = 11;
            return act( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee10() {
              return _regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      userEvent.tab({
                        shift: true
                      });
                      _context10.next = 3;
                      return tick();

                    case 3:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10);
            })));

          case 11:
            expect(document.body).toHaveFocus();
            expect(tooltip.hidden).toBe(true);

          case 13:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  })));
});