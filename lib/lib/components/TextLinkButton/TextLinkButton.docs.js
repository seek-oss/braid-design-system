import _jsx from "@babel/runtime/helpers/jsx";

var _Text;

import React from 'react';
import { Text, TextLink, TextLinkButton } from '..';
import source from '../../utils/source.macro';
import { Strong } from '../Strong/Strong';
var docs = {
  category: 'Content',
  Example: function Example() {
    return source(_Text || (_Text = /*#__PURE__*/_jsx(Text, {}, void 0, /*#__PURE__*/_jsx(TextLinkButton, {}, void 0, "Visually a link, with button semantics"))));
  },
  alternatives: [{
    name: 'TextLink',
    description: 'For a semantic link.'
  }, {
    name: 'Button',
    description: 'For a semantic button.'
  }, {
    name: 'ButtonLink',
    description: 'For a semantic link that looks like a button.'
  }],
  accessibility: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/_jsx(Text, {}, void 0, "Even thought is looks like a", ' ', /*#__PURE__*/_jsx(TextLink, {
    href: "/component/TextLink"
  }, void 0, "TextLink"), ", this is actually a semantic button following the", ' ', /*#__PURE__*/_jsx(TextLink, {
    href: "https://www.w3.org/TR/wai-aria-practices/#button"
  }, void 0, "WAI-ARIA Button Pattern.")), /*#__PURE__*/_jsx(Text, {}, void 0, "Rather than rendering a native ", /*#__PURE__*/_jsx(Strong, {}, void 0, "button"), " element, we render a ", /*#__PURE__*/_jsx(Strong, {}, void 0, "span"), " element with an ARIA role of", ' ', /*#__PURE__*/_jsx(Strong, {}, void 0, "button"), " so that text can wrap across multiple lines.")),
  additional: [{
    label: 'Note',
    description: /*#__PURE__*/_jsx(Text, {}, void 0, "This component must be nested within a", ' ', /*#__PURE__*/_jsx(TextLink, {
      href: "/components/Text"
    }, void 0, "Text"), " or", ' ', /*#__PURE__*/_jsx(TextLink, {
      href: "/components/Heading"
    }, void 0, "Heading"), " component.")
  }]
};
export default docs;