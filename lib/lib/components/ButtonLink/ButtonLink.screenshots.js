import _jsx from "@babel/runtime/helpers/jsx";

var _Inline, _Inline2, _Inline3;

import React from 'react';
import { ButtonLink } from '../';
import { Inline } from '../Inline/Inline';

var Container = function Container(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_jsx("div", {
    style: {
      maxWidth: '300px'
    }
  }, void 0, children);
};

Container.displayName = "Container";
export var screenshots = {
  screenshotWidths: [320],
  examples: [{
    label: 'Default',
    Container: Container,
    Example: function Example() {
      return _Inline || (_Inline = /*#__PURE__*/_jsx(Inline, {
        space: "small",
        collapseBelow: "desktop"
      }, void 0, /*#__PURE__*/_jsx(ButtonLink, {
        href: "#"
      }, void 0, "Solid"), /*#__PURE__*/_jsx(ButtonLink, {
        href: "#",
        variant: "ghost"
      }, void 0, "Ghost"), /*#__PURE__*/_jsx(ButtonLink, {
        href: "#",
        variant: "soft"
      }, void 0, "Soft"), /*#__PURE__*/_jsx(ButtonLink, {
        href: "#",
        variant: "transparent"
      }, void 0, "Transparent")));
    }
  }, {
    label: 'Critical',
    Container: Container,
    Example: function Example() {
      return _Inline2 || (_Inline2 = /*#__PURE__*/_jsx(Inline, {
        space: "small",
        collapseBelow: "desktop"
      }, void 0, /*#__PURE__*/_jsx(ButtonLink, {
        href: "#",
        tone: "critical"
      }, void 0, "Solid"), /*#__PURE__*/_jsx(ButtonLink, {
        href: "#",
        tone: "critical",
        variant: "ghost"
      }, void 0, "Ghost"), /*#__PURE__*/_jsx(ButtonLink, {
        href: "#",
        tone: "critical",
        variant: "soft"
      }, void 0, "Soft"), /*#__PURE__*/_jsx(ButtonLink, {
        href: "#",
        tone: "critical",
        variant: "transparent"
      }, void 0, "Transparent")));
    }
  }, {
    label: 'BrandAccent',
    Container: Container,
    Example: function Example() {
      return _Inline3 || (_Inline3 = /*#__PURE__*/_jsx(Inline, {
        space: "small",
        collapseBelow: "desktop"
      }, void 0, /*#__PURE__*/_jsx(ButtonLink, {
        href: "#",
        tone: "brandAccent"
      }, void 0, "Solid"), /*#__PURE__*/_jsx(ButtonLink, {
        href: "#",
        tone: "brandAccent",
        variant: "ghost"
      }, void 0, "Ghost"), /*#__PURE__*/_jsx(ButtonLink, {
        href: "#",
        tone: "brandAccent",
        variant: "soft"
      }, void 0, "Soft"), /*#__PURE__*/_jsx(ButtonLink, {
        href: "#",
        tone: "brandAccent",
        variant: "transparent"
      }, void 0, "Transparent")));
    }
  }]
};