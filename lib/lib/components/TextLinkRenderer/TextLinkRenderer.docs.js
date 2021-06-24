import _extends from "@babel/runtime/helpers/extends";
import _jsx from "@babel/runtime/helpers/jsx";
import React from 'react';
import { TextLinkRenderer, Stack, Text, TextLink, Box } from '../';
import source from '../../utils/source.macro';
var docs = {
  category: 'Content',
  deprecationWarning: /*#__PURE__*/_jsx(Text, {
    weight: "medium"
  }, void 0, "This component has been deprecated. Use", ' ', /*#__PURE__*/_jsx(TextLink, {
    href: "/components/TextLink"
  }, void 0, "TextLink"), " or", ' ', /*#__PURE__*/_jsx(TextLink, {
    href: "/components/TextLinkButton"
  }, void 0, "TextLinkButton"), ' ', "instead."),
  Example: function Example() {
    return source( /*#__PURE__*/_jsx(Text, {}, void 0, /*#__PURE__*/_jsx(TextLinkRenderer, {
      reset: false
    }, void 0, function (textLinkProps) {
      return /*#__PURE__*/React.createElement(Box, _extends({
        component: "button"
      }, textLinkProps), "Visually a link");
    }), ", rendered as a button."));
  },
  description: /*#__PURE__*/_jsx(Stack, {
    space: "large"
  }, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, "This component is mainly provided for backwards compatibility. If you\u2019re wanting to render a button that looks like a", ' ', /*#__PURE__*/_jsx(TextLink, {
    href: "/components/TextLink"
  }, void 0, "TextLink"), ", you should use a", ' ', /*#__PURE__*/_jsx(TextLink, {
    href: "/components/TextLinkButton"
  }, void 0, "TextLinkButton"), ' ', "instead."), /*#__PURE__*/_jsx(Text, {}, void 0, "If you think you have a legitimate use case for it, please let us know.")),
  alternatives: []
};
export default docs;