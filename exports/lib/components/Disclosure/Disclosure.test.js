import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import _jsx from '@babel/runtime/helpers/jsx';

let _BraidTestProvider, _BraidTestProvider2;

import '@testing-library/jest-dom/extend-expect';
import React, { useState } from 'react';
import { render } from '@testing-library/react';
import { BraidTestProvider, Disclosure } from '..';
import { htmlToText } from '../../utils/htmlToText';
describe('Disclosure', function () {
  it('should provide internal state by default', function () {
    const _render = render(
        _BraidTestProvider ||
          (_BraidTestProvider = /* #__PURE__*/ _jsx(
            BraidTestProvider,
            {},
            void 0,
            /* #__PURE__*/ _jsx(
              Disclosure,
              {
                id: 'content',
                expandLabel: 'Expand',
                collapseLabel: 'Collapse',
              },
              void 0,
              'Content',
            ),
          )),
      ),
      getByRole = _render.getByRole,
      getByText = _render.getByText;

    const button = getByRole('button');
    const content = getByText('Content'); // Label should be inside button

    expect(htmlToText(button.innerHTML)).toEqual('Expand'); // 'aria-controls' should point at disclosure content

    expect(content.getAttribute('id')).toEqual(
      button.getAttribute('aria-controls'),
    );
    expect(button.getAttribute('aria-expanded')).toEqual('false');
    button.click();
    expect(button.getAttribute('aria-expanded')).toEqual('true');
    expect(htmlToText(button.innerHTML)).toEqual('Collapse');
    button.click();
    expect(button.getAttribute('aria-expanded')).toEqual('false');
    expect(htmlToText(button.innerHTML)).toEqual('Expand');
  });
  it('should default the value of "collapseLabel" to "expandLabel" when not provided', function () {
    const _render2 = render(
        _BraidTestProvider2 ||
          (_BraidTestProvider2 = /* #__PURE__*/ _jsx(
            BraidTestProvider,
            {},
            void 0,
            /* #__PURE__*/ _jsx(
              Disclosure,
              {
                id: 'content',
                expandLabel: 'Details',
              },
              void 0,
              'Content',
            ),
          )),
      ),
      getByRole = _render2.getByRole;

    const button = getByRole('button');
    expect(htmlToText(button.innerHTML)).toEqual('Details');
    button.click();
    expect(htmlToText(button.innerHTML)).toEqual('Details');
  });
  it('should support listening to toggle events while uncontrolled', function () {
    const toggleHander = jest.fn();

    const _render3 = render(
        /* #__PURE__*/ _jsx(
          BraidTestProvider,
          {},
          void 0,
          /* #__PURE__*/ _jsx(
            Disclosure,
            {
              id: 'content',
              expandLabel: 'Expand',
              collapseLabel: 'Collapse',
              onToggle: toggleHander,
            },
            void 0,
            'Content',
          ),
        ),
      ),
      getByRole = _render3.getByRole;

    const button = getByRole('button');
    button.click();
    expect(toggleHander).toHaveBeenCalledWith(true);
    button.click();
    expect(toggleHander).toHaveBeenCalledWith(false);
    expect(toggleHander).toHaveBeenCalledTimes(2);
  });
  it('should support controlled state', function () {
    const TestCase = function TestCase() {
      const _useState = useState(true),
        _useState2 = _slicedToArray(_useState, 2),
        expanded = _useState2[0],
        setExpanded = _useState2[1];

      return /* #__PURE__*/ _jsx(
        BraidTestProvider,
        {},
        void 0,
        /* #__PURE__*/ _jsx(
          Disclosure,
          {
            id: 'content',
            expandLabel: 'Expand',
            collapseLabel: 'Collapse',
            expanded,
            onToggle: setExpanded,
          },
          void 0,
          'Content',
        ),
      );
    };

    const _render4 = render(/* #__PURE__*/ _jsx(TestCase, {})),
      getByRole = _render4.getByRole,
      getByText = _render4.getByText;

    const button = getByRole('button');
    const content = getByText('Content'); // Label should be inside button

    expect(htmlToText(button.innerHTML)).toEqual('Collapse'); // 'aria-controls' should point at disclosure content

    expect(content.getAttribute('id')).toEqual(
      button.getAttribute('aria-controls'),
    );
    expect(button.getAttribute('aria-expanded')).toEqual('true');
    button.click();
    expect(button.getAttribute('aria-expanded')).toEqual('false');
    expect(htmlToText(button.innerHTML)).toEqual('Expand');
    button.click();
    expect(button.getAttribute('aria-expanded')).toEqual('true');
    expect(htmlToText(button.innerHTML)).toEqual('Collapse');
  });
});
