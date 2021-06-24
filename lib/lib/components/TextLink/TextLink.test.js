import _extends from "@babel/runtime/helpers/extends";
import _jsx from "@babel/runtime/helpers/jsx";

var _BraidTestProvider, _Text, _Text2, _BraidTestProvider2;

import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import { htmlToText } from '../../utils/htmlToText';
import { BraidTestProvider, makeLinkComponent, Text, TextLink } from '..';
describe('TextLink', function () {
  it('should render a native link by default', function () {
    var _render = render(_BraidTestProvider || (_BraidTestProvider = /*#__PURE__*/_jsx(BraidTestProvider, {}, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, /*#__PURE__*/_jsx(TextLink, {
      href: "/foo/bar",
      "data-attribute": "true"
    }, void 0, "Link content"))))),
        getByRole = _render.getByRole;

    var link = getByRole('link');
    expect(link.nodeName).toEqual('A');
    expect(link.getAttribute('href')).toEqual('/foo/bar');
    expect(htmlToText(link.innerHTML)).toEqual('Link content');
    expect(link.getAttribute('data-attribute')).toEqual('true');
  });
  it('should render a custom link component if provided', function () {
    var CustomLink = makeLinkComponent(function (props, ref) {
      return /*#__PURE__*/React.createElement("a", _extends({
        ref: ref
      }, props, {
        "data-custom-link-component": "true"
      }));
    });

    var _render2 = render( /*#__PURE__*/_jsx(BraidTestProvider, {
      linkComponent: CustomLink
    }, void 0, _Text || (_Text = /*#__PURE__*/_jsx(Text, {}, void 0, /*#__PURE__*/_jsx(TextLink, {
      href: "/foo/bar",
      "data-attribute": "true"
    }, void 0, "Link content"))))),
        getByRole = _render2.getByRole;

    var link = getByRole('link');
    expect(link.nodeName).toEqual('A');
    expect(link.getAttribute('href')).toEqual('/foo/bar');
    expect(htmlToText(link.innerHTML)).toEqual('Link content');
    expect(link.getAttribute('data-attribute')).toEqual('true');
    expect(link.getAttribute('data-custom-link-component')).toEqual('true');
  });
  it('should render a legacy link component if provided', function () {
    var CustomLink = function CustomLink(props) {
      return /*#__PURE__*/React.createElement("a", _extends({}, props, {
        "data-custom-link-component": "true"
      }));
    };

    var _render3 = render( /*#__PURE__*/_jsx(BraidTestProvider, {
      linkComponent: CustomLink
    }, void 0, _Text2 || (_Text2 = /*#__PURE__*/_jsx(Text, {}, void 0, /*#__PURE__*/_jsx(TextLink, {
      href: "/foo/bar",
      "data-attribute": "true"
    }, void 0, "Link content"))))),
        getByRole = _render3.getByRole;

    var link = getByRole('link');
    expect(link.nodeName).toEqual('A');
    expect(link.getAttribute('href')).toEqual('/foo/bar');
    expect(htmlToText(link.innerHTML)).toEqual('Link content');
    expect(link.getAttribute('data-attribute')).toEqual('true');
    expect(link.getAttribute('data-custom-link-component')).toEqual('true');
  });
  it("should inherit custom link components from the root provider if the nearest provider doesn't have one", function () {
    var CustomLink = makeLinkComponent(function (props, ref) {
      return /*#__PURE__*/React.createElement("a", _extends({
        ref: ref
      }, props, {
        "data-custom-link-component": "true"
      }));
    });

    var _render4 = render( /*#__PURE__*/_jsx(BraidTestProvider, {
      linkComponent: CustomLink
    }, void 0, _BraidTestProvider2 || (_BraidTestProvider2 = /*#__PURE__*/_jsx(BraidTestProvider, {}, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, /*#__PURE__*/_jsx(TextLink, {
      href: "/foo/bar",
      "data-attribute": "true"
    }, void 0, "Link content")))))),
        getByRole = _render4.getByRole;

    var link = getByRole('link');
    expect(link.nodeName).toEqual('A');
    expect(link.getAttribute('href')).toEqual('/foo/bar');
    expect(htmlToText(link.innerHTML)).toEqual('Link content');
    expect(link.getAttribute('data-attribute')).toEqual('true');
    expect(link.getAttribute('data-custom-link-component')).toEqual('true');
  });
  it('should not support custom styles', function () {
    var _render5 = render( /*#__PURE__*/_jsx(BraidTestProvider, {}, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, /*#__PURE__*/_jsx(TextLink, {
      href: "/foo/bar",
      "data-attribute": "true" // @ts-ignore
      ,
      // @ts-ignore
      className: "CUSTOM_CLASS_NAME",
      style: {
        color: 'CUSTOM_COLOR'
      }
    }, void 0, "Link content")))),
        getByRole = _render5.getByRole;

    var link = getByRole('link');
    expect(link.classList.contains('CUSTOM_CLASS_NAME')).toEqual(false);
    expect(link.style.color).not.toEqual('CUSTOM_COLOR');
  });
});