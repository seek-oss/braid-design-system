import _jsx from "@babel/runtime/helpers/jsx";

var _Card;

import React from 'react';
import source from '../../utils/source.macro';
import { ButtonLink, Strong, Text, Card, Inline } from '../';
import { TextLink } from '../TextLink/TextLink';
var docs = {
  category: 'Content',
  migrationGuide: true,
  Example: function Example() {
    return source(_Card || (_Card = /*#__PURE__*/_jsx(Card, {}, void 0, /*#__PURE__*/_jsx(Inline, {
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
    }, void 0, "Transparent")))));
  },
  accessibility: /*#__PURE__*/_jsx(Text, {}, void 0, "Even though it looks like a", ' ', /*#__PURE__*/_jsx(TextLink, {
    href: "/components/Button"
  }, void 0, "Button"), ", this is actually a semantic link."),
  alternatives: [{
    name: 'Button',
    description: 'For a semantic button.'
  }, {
    name: 'TextLinkButton',
    description: 'For a semantic button that looks like a TextLink.'
  }],
  additional: [{
    label: 'Custom link rendering',
    description: /*#__PURE__*/_jsx(Text, {}, void 0, "This component renders a native ", /*#__PURE__*/_jsx(Strong, {}, void 0, "a"), " element by default, but this can be customised via the ", /*#__PURE__*/_jsx(Strong, {}, void 0, "linkComponent"), " prop on ", /*#__PURE__*/_jsx(TextLink, {
      href: "/components/BraidProvider"
    }, void 0, "BraidProvider"), ".")
  }]
};
export default docs;