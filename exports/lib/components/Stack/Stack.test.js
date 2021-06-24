import _jsx from '@babel/runtime/helpers/jsx';

let _BraidTestProvider, _BraidTestProvider2, _BraidTestProvider3;

import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import { BraidTestProvider, Stack, Text } from '..';
describe('Stack', function () {
  it('should not render a list by default', function () {
    const _render = render(
        _BraidTestProvider ||
          (_BraidTestProvider = /* #__PURE__*/ _jsx(
            BraidTestProvider,
            {},
            void 0,
            /* #__PURE__*/ _jsx(
              Stack,
              {
                space: 'small',
              },
              void 0,
              /* #__PURE__*/ _jsx(Text, {}, void 0, '1'),
              /* #__PURE__*/ _jsx(Text, {}, void 0, '2'),
              /* #__PURE__*/ _jsx(Text, {}, void 0, '3'),
            ),
          )),
      ),
      queryAllByRole = _render.queryAllByRole;

    expect(queryAllByRole('list').length).toBe(0);
    expect(queryAllByRole('listItem').length).toBe(0);
  });
  it('should render a valid unordered list when "component" is "ul"', function () {
    const _render2 = render(
        _BraidTestProvider2 ||
          (_BraidTestProvider2 = /* #__PURE__*/ _jsx(
            BraidTestProvider,
            {},
            void 0,
            /* #__PURE__*/ _jsx(
              Stack,
              {
                component: 'ul',
                space: 'small',
              },
              void 0,
              /* #__PURE__*/ _jsx(Text, {}, void 0, '1'),
              /* #__PURE__*/ _jsx(Text, {}, void 0, '2'),
              /* #__PURE__*/ _jsx(Text, {}, void 0, '3'),
            ),
          )),
      ),
      getByRole = _render2.getByRole;

    const list = getByRole('list');
    expect(list.nodeName).toBe('UL');
    expect(
      Array.from(list.childNodes).map(function (childNode) {
        return childNode.nodeName;
      }),
    ).toEqual(['LI', 'LI', 'LI']);
  });
  it('should render a valid ordered list when "component" is "ol"', function () {
    const _render3 = render(
        _BraidTestProvider3 ||
          (_BraidTestProvider3 = /* #__PURE__*/ _jsx(
            BraidTestProvider,
            {},
            void 0,
            /* #__PURE__*/ _jsx(
              Stack,
              {
                component: 'ol',
                space: 'small',
              },
              void 0,
              /* #__PURE__*/ _jsx(Text, {}, void 0, '1'),
              /* #__PURE__*/ _jsx(Text, {}, void 0, '2'),
              /* #__PURE__*/ _jsx(Text, {}, void 0, '3'),
            ),
          )),
      ),
      getByRole = _render3.getByRole;

    const list = getByRole('list');
    expect(list.nodeName).toBe('OL');
    expect(
      Array.from(list.childNodes).map(function (childNode) {
        return childNode.nodeName;
      }),
    ).toEqual(['LI', 'LI', 'LI']);
  });
});
