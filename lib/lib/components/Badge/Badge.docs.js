import _jsx from "@babel/runtime/helpers/jsx";

var _Card, _Inline, _Inline2;

import React, { Fragment } from 'react';
import source from '../../utils/source.macro';
import { Badge, Card, Inline, Heading, Text, TextLink, Strong } from '../';
var docs = {
  category: 'Content',
  migrationGuide: true,
  Example: function Example() {
    return source(_Card || (_Card = /*#__PURE__*/_jsx(Card, {}, void 0, /*#__PURE__*/_jsx(Inline, {
      space: "medium",
      align: "center"
    }, void 0, /*#__PURE__*/_jsx(Inline, {
      space: "medium",
      collapseBelow: "desktop",
      align: "center"
    }, void 0, /*#__PURE__*/_jsx(Badge, {
      tone: "positive"
    }, void 0, "Positive"), /*#__PURE__*/_jsx(Badge, {
      tone: "promote"
    }, void 0, "Promote"), /*#__PURE__*/_jsx(Badge, {
      tone: "info"
    }, void 0, "Info"), /*#__PURE__*/_jsx(Badge, {
      tone: "neutral"
    }, void 0, "Neutral"), /*#__PURE__*/_jsx(Badge, {
      tone: "caution"
    }, void 0, "Caution"), /*#__PURE__*/_jsx(Badge, {
      tone: "critical"
    }, void 0, "Critical")), /*#__PURE__*/_jsx(Inline, {
      space: "medium",
      collapseBelow: "desktop",
      align: "center"
    }, void 0, /*#__PURE__*/_jsx(Badge, {
      weight: "strong",
      tone: "positive"
    }, void 0, "Positive"), /*#__PURE__*/_jsx(Badge, {
      weight: "strong",
      tone: "promote"
    }, void 0, "Promote"), /*#__PURE__*/_jsx(Badge, {
      weight: "strong",
      tone: "info"
    }, void 0, "Info"), /*#__PURE__*/_jsx(Badge, {
      weight: "strong",
      tone: "neutral"
    }, void 0, "Neutral"), /*#__PURE__*/_jsx(Badge, {
      weight: "strong",
      tone: "caution"
    }, void 0, "Caution"), /*#__PURE__*/_jsx(Badge, {
      weight: "strong",
      tone: "critical"
    }, void 0, "Critical"))))));
  },
  alternatives: [{
    name: 'Tag',
    description: 'For user-provided content.'
  }],
  additional: [{
    label: 'Visual Weight',
    description: /*#__PURE__*/_jsx(Text, {}, void 0, "For greater contrast, you can set the ", /*#__PURE__*/_jsx(Strong, {}, void 0, "weight"), " prop to", ' ', /*#__PURE__*/_jsx(Strong, {}, void 0, "strong"), "."),
    background: 'card',
    Example: function Example() {
      return source(_Inline || (_Inline = /*#__PURE__*/_jsx(Inline, {
        space: "medium",
        align: "center"
      }, void 0, /*#__PURE__*/_jsx(Badge, {
        weight: "strong",
        tone: "positive"
      }, void 0, "Positive"), /*#__PURE__*/_jsx(Badge, {
        weight: "strong",
        tone: "promote"
      }, void 0, "Promote"), /*#__PURE__*/_jsx(Badge, {
        weight: "strong",
        tone: "info"
      }, void 0, "Info"), /*#__PURE__*/_jsx(Badge, {
        weight: "strong",
        tone: "neutral"
      }, void 0, "Neutral"), /*#__PURE__*/_jsx(Badge, {
        weight: "strong",
        tone: "caution"
      }, void 0, "Caution"), /*#__PURE__*/_jsx(Badge, {
        weight: "strong",
        tone: "critical"
      }, void 0, "Critical"))));
    }
  }, {
    label: 'Vertical bleed',
    description: /*#__PURE__*/_jsx(Fragment, {}, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, "With the ", /*#__PURE__*/_jsx(Strong, {}, void 0, "bleedY"), " prop, you can allow the background colour to bleed out into the surrounding layout."), /*#__PURE__*/_jsx(Text, {}, void 0, "For example, we can align a badge to a", ' ', /*#__PURE__*/_jsx(TextLink, {
      href: "/components/Heading"
    }, void 0, "Heading"), " element using an ", /*#__PURE__*/_jsx(TextLink, {
      href: "/components/Inline"
    }, void 0, "Inline"), ", even though the badge is actually taller than the heading. If we didn\u2019t use the ", /*#__PURE__*/_jsx(Strong, {}, void 0, "bleedY"), " prop in this case, the badge would introduce unwanted space above and below the heading.")),
    background: 'card',
    Example: function Example() {
      return source(_Inline2 || (_Inline2 = /*#__PURE__*/_jsx(Inline, {
        space: "xsmall",
        alignY: "center"
      }, void 0, /*#__PURE__*/_jsx(Heading, {
        level: "4"
      }, void 0, "Heading"), /*#__PURE__*/_jsx(Badge, {
        tone: "positive",
        bleedY: true
      }, void 0, "New"))));
    }
  }]
};
export default docs;