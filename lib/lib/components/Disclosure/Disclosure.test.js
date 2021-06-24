import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _jsx from "@babel/runtime/helpers/jsx";

var _BraidTestProvider, _BraidTestProvider2;

import '@testing-library/jest-dom/extend-expect';
import React, { useState } from 'react';
import { render } from '@testing-library/react';
import { BraidTestProvider, Disclosure } from '..';
import { htmlToText } from '../../utils/htmlToText';
describe('Disclosure', function () {
  it('should provide internal state by default', function () {
    var _render = render(_BraidTestProvider || (_BraidTestProvider = /*#__PURE__*/_jsx(BraidTestProvider, {}, void 0, /*#__PURE__*/_jsx(Disclosure, {
      id: "content",
      expandLabel: "Expand",
      collapseLabel: "Collapse"
    }, void 0, "Content")))),
        getByRole = _render.getByRole,
        getByText = _render.getByText;

    var button = getByRole('button');
    var content = getByText('Content'); // Label should be inside button

    expect(htmlToText(button.innerHTML)).toEqual('Expand'); // 'aria-controls' should point at disclosure content

    expect(content.getAttribute('id')).toEqual(button.getAttribute('aria-controls'));
    expect(button.getAttribute('aria-expanded')).toEqual('false');
    button.click();
    expect(button.getAttribute('aria-expanded')).toEqual('true');
    expect(htmlToText(button.innerHTML)).toEqual('Collapse');
    button.click();
    expect(button.getAttribute('aria-expanded')).toEqual('false');
    expect(htmlToText(button.innerHTML)).toEqual('Expand');
  });
  it('should default the value of "collapseLabel" to "expandLabel" when not provided', function () {
    var _render2 = render(_BraidTestProvider2 || (_BraidTestProvider2 = /*#__PURE__*/_jsx(BraidTestProvider, {}, void 0, /*#__PURE__*/_jsx(Disclosure, {
      id: "content",
      expandLabel: "Details"
    }, void 0, "Content")))),
        getByRole = _render2.getByRole;

    var button = getByRole('button');
    expect(htmlToText(button.innerHTML)).toEqual('Details');
    button.click();
    expect(htmlToText(button.innerHTML)).toEqual('Details');
  });
  it('should support listening to toggle events while uncontrolled', function () {
    var toggleHander = jest.fn();

    var _render3 = render( /*#__PURE__*/_jsx(BraidTestProvider, {}, void 0, /*#__PURE__*/_jsx(Disclosure, {
      id: "content",
      expandLabel: "Expand",
      collapseLabel: "Collapse",
      onToggle: toggleHander
    }, void 0, "Content"))),
        getByRole = _render3.getByRole;

    var button = getByRole('button');
    button.click();
    expect(toggleHander).toHaveBeenCalledWith(true);
    button.click();
    expect(toggleHander).toHaveBeenCalledWith(false);
    expect(toggleHander).toHaveBeenCalledTimes(2);
  });
  it('should support controlled state', function () {
    var TestCase = function TestCase() {
      var _useState = useState(true),
          _useState2 = _slicedToArray(_useState, 2),
          expanded = _useState2[0],
          setExpanded = _useState2[1];

      return /*#__PURE__*/_jsx(BraidTestProvider, {}, void 0, /*#__PURE__*/_jsx(Disclosure, {
        id: "content",
        expandLabel: "Expand",
        collapseLabel: "Collapse",
        expanded: expanded,
        onToggle: setExpanded
      }, void 0, "Content"));
    };

    var _render4 = render( /*#__PURE__*/_jsx(TestCase, {})),
        getByRole = _render4.getByRole,
        getByText = _render4.getByText;

    var button = getByRole('button');
    var content = getByText('Content'); // Label should be inside button

    expect(htmlToText(button.innerHTML)).toEqual('Collapse'); // 'aria-controls' should point at disclosure content

    expect(content.getAttribute('id')).toEqual(button.getAttribute('aria-controls'));
    expect(button.getAttribute('aria-expanded')).toEqual('true');
    button.click();
    expect(button.getAttribute('aria-expanded')).toEqual('false');
    expect(htmlToText(button.innerHTML)).toEqual('Expand');
    button.click();
    expect(button.getAttribute('aria-expanded')).toEqual('true');
    expect(htmlToText(button.innerHTML)).toEqual('Collapse');
  });
});