import _jsx from "@babel/runtime/helpers/jsx";

var _TextLink, _TextLink2;

import React from 'react';
import { FieldLabel, TextLink } from '../';

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
    label: 'Standard Field Label',
    Container: Container,
    Example: function Example(_ref2) {
      var id = _ref2.id;
      return /*#__PURE__*/_jsx(FieldLabel, {
        htmlFor: id,
        label: "This is a field label"
      });
    }
  }, {
    label: 'Field Label with secondary',
    Container: Container,
    Example: function Example(_ref3) {
      var id = _ref3.id;
      return /*#__PURE__*/_jsx(FieldLabel, {
        htmlFor: id,
        label: "Username",
        secondaryLabel: "Max 30 characters"
      });
    }
  }, {
    label: 'Field Label with tertiary label',
    Container: Container,
    Example: function Example(_ref4) {
      var id = _ref4.id;
      return /*#__PURE__*/_jsx(FieldLabel, {
        htmlFor: id,
        label: "Password",
        tertiaryLabel: _TextLink || (_TextLink = /*#__PURE__*/_jsx(TextLink, {
          href: "#"
        }, void 0, "Forgot password?"))
      });
    }
  }, {
    label: 'Field Label with all types',
    Container: Container,
    Example: function Example(_ref5) {
      var id = _ref5.id;
      return /*#__PURE__*/_jsx(FieldLabel, {
        htmlFor: id,
        label: "Title",
        secondaryLabel: "Optional",
        tertiaryLabel: _TextLink2 || (_TextLink2 = /*#__PURE__*/_jsx(TextLink, {
          href: "#"
        }, void 0, "Help?"))
      });
    }
  }]
};