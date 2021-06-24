import _extends from "@babel/runtime/helpers/extends";
import _jsx from "@babel/runtime/helpers/jsx";
import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonRenderer, Stack, Inline, Text, TextLink } from '../';
import source from '../../utils/source.macro';
var docs = {
  category: 'Content',
  deprecationWarning: /*#__PURE__*/_jsx(Text, {
    weight: "medium"
  }, void 0, "This component has been deprecated. Use", ' ', /*#__PURE__*/_jsx(TextLink, {
    href: "/components/Button"
  }, void 0, "Button"), " or", ' ', /*#__PURE__*/_jsx(TextLink, {
    href: "/components/ButtonLink"
  }, void 0, "ButtonLink"), " instead."),
  Example: function Example() {
    return source( /*#__PURE__*/_jsx(Inline, {
      space: "small",
      collapseBelow: "desktop"
    }, void 0, /*#__PURE__*/_jsx(ButtonRenderer, {}, void 0, function (ButtonChildren, buttonProps) {
      return /*#__PURE__*/React.createElement(Link, _extends({
        to: "#"
      }, buttonProps), /*#__PURE__*/_jsx(ButtonChildren, {}, void 0, "Custom button element"));
    })));
  },
  description: /*#__PURE__*/_jsx(Stack, {
    space: "large"
  }, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, "This component is mainly provided for backwards compatibility. If you\u2019re wanting to render a link that looks like a", ' ', /*#__PURE__*/_jsx(TextLink, {
    href: "/components/Button"
  }, void 0, "Button"), ", you should use a", ' ', /*#__PURE__*/_jsx(TextLink, {
    href: "/components/ButtonLink"
  }, void 0, "ButtonLink"), " instead."), /*#__PURE__*/_jsx(Text, {}, void 0, "If you think you have a legitimate use case for it, please let us know.")),
  alternatives: []
};
export default docs;