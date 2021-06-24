import _extends from '@babel/runtime/helpers/extends';
import _jsx from '@babel/runtime/helpers/jsx';

let _BraidTestProvider, _Link, _Link2, _BraidTestProvider2;

import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import { htmlToText } from '../../utils/htmlToText';
import { BraidTestProvider, makeLinkComponent, Link } from '..';
describe('Link', function () {
  it('should render a native link by default', function () {
    const _render = render(
        _BraidTestProvider ||
          (_BraidTestProvider = /* #__PURE__*/ _jsx(
            BraidTestProvider,
            {},
            void 0,
            /* #__PURE__*/ _jsx(
              Link,
              {
                href: '/foo/bar',
                'data-attribute': 'true',
              },
              void 0,
              'Link content',
            ),
          )),
      ),
      getByRole = _render.getByRole;

    const link = getByRole('link');
    expect(link.nodeName).toEqual('A');
    expect(link.getAttribute('href')).toEqual('/foo/bar');
    expect(htmlToText(link.innerHTML)).toEqual('Link content');
    expect(link.getAttribute('data-attribute')).toEqual('true');
  });
  it('should render a custom link component if provided', function () {
    const CustomLink = makeLinkComponent(function (props, ref) {
      return /* #__PURE__*/ React.createElement(
        'a',
        _extends(
          {
            ref,
          },
          props,
          {
            'data-custom-link-component': 'true',
          },
        ),
      );
    });

    const _render2 = render(
        /* #__PURE__*/ _jsx(
          BraidTestProvider,
          {
            linkComponent: CustomLink,
          },
          void 0,
          _Link ||
            (_Link = /* #__PURE__*/ _jsx(
              Link,
              {
                href: '/foo/bar',
                'data-attribute': 'true',
              },
              void 0,
              'Link content',
            )),
        ),
      ),
      getByRole = _render2.getByRole;

    const link = getByRole('link');
    expect(link.nodeName).toEqual('A');
    expect(link.getAttribute('href')).toEqual('/foo/bar');
    expect(htmlToText(link.innerHTML)).toEqual('Link content');
    expect(link.getAttribute('data-attribute')).toEqual('true');
    expect(link.getAttribute('data-custom-link-component')).toEqual('true');
  });
  it('should render a legacy link component if provided', function () {
    const CustomLink = function CustomLink(props) {
      return /* #__PURE__*/ React.createElement(
        'a',
        _extends({}, props, {
          'data-custom-link-component': 'true',
        }),
      );
    };

    const _render3 = render(
        /* #__PURE__*/ _jsx(
          BraidTestProvider,
          {
            linkComponent: CustomLink,
          },
          void 0,
          _Link2 ||
            (_Link2 = /* #__PURE__*/ _jsx(
              Link,
              {
                href: '/foo/bar',
                'data-attribute': 'true',
              },
              void 0,
              'Link content',
            )),
        ),
      ),
      getByRole = _render3.getByRole;

    const link = getByRole('link');
    expect(link.nodeName).toEqual('A');
    expect(link.getAttribute('href')).toEqual('/foo/bar');
    expect(htmlToText(link.innerHTML)).toEqual('Link content');
    expect(link.getAttribute('data-attribute')).toEqual('true');
    expect(link.getAttribute('data-custom-link-component')).toEqual('true');
  });
  it("should inherit custom link components from the root provider if the nearest provider doesn't have one", function () {
    const CustomLink = makeLinkComponent(function (props, ref) {
      return /* #__PURE__*/ React.createElement(
        'a',
        _extends(
          {
            ref,
          },
          props,
          {
            'data-custom-link-component': 'true',
          },
        ),
      );
    });

    const _render4 = render(
        /* #__PURE__*/ _jsx(
          BraidTestProvider,
          {
            linkComponent: CustomLink,
          },
          void 0,
          _BraidTestProvider2 ||
            (_BraidTestProvider2 = /* #__PURE__*/ _jsx(
              BraidTestProvider,
              {},
              void 0,
              /* #__PURE__*/ _jsx(
                Link,
                {
                  href: '/foo/bar',
                  'data-attribute': 'true',
                },
                void 0,
                'Link content',
              ),
            )),
        ),
      ),
      getByRole = _render4.getByRole;

    const link = getByRole('link');
    expect(link.nodeName).toEqual('A');
    expect(link.getAttribute('href')).toEqual('/foo/bar');
    expect(htmlToText(link.innerHTML)).toEqual('Link content');
    expect(link.getAttribute('data-attribute')).toEqual('true');
    expect(link.getAttribute('data-custom-link-component')).toEqual('true');
  });
});
