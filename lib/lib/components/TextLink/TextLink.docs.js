import _jsx from "@babel/runtime/helpers/jsx";

var _Text, _Text2, _Text3, _Stack;

import React from 'react';
import { Box, Inline, Stack, Strong, Text, TextLink } from '../';
import source from '../../utils/source.macro';
var docs = {
  category: 'Content',
  migrationGuide: true,
  Example: function Example() {
    return source(_Text || (_Text = /*#__PURE__*/_jsx(Text, {}, void 0, /*#__PURE__*/_jsx(TextLink, {
      href: "#",
      hitArea: "large"
    }, void 0, "TextLink"))));
  },
  alternatives: [{
    name: 'TextLinkButton',
    description: 'For a semantic button that looks like a link.'
  }, {
    name: 'ButtonLink',
    description: 'For a semantic link that looks like a button.'
  }],
  additional: [{
    label: 'Note',
    description: /*#__PURE__*/_jsx(Text, {}, void 0, "This component must be nested within a", ' ', /*#__PURE__*/_jsx(TextLink, {
      href: "/components/Text"
    }, void 0, "Text"), " or", ' ', /*#__PURE__*/_jsx(TextLink, {
      href: "/components/Heading"
    }, void 0, "Heading"), " component.")
  }, {
    label: 'Visited links',
    description: /*#__PURE__*/_jsx(Text, {}, void 0, "To communicate a link as being already visited, set the", ' ', /*#__PURE__*/_jsx(Strong, {}, void 0, "showVisited"), " prop."),
    Example: function Example() {
      return source(_Text2 || (_Text2 = /*#__PURE__*/_jsx(Text, {}, void 0, "This sentence contains a", ' ', /*#__PURE__*/_jsx(TextLink, {
        href: "",
        showVisited: true
      }, void 0, "visited TextLink."))));
    }
  }, {
    label: 'Design considerations',
    description: /*#__PURE__*/_jsx(Text, {}, void 0, "By default, a TextLink uses colour and underline on hover to create affordance. Optionally you can decrease their visual weight by setting", ' ', /*#__PURE__*/_jsx(Strong, {}, void 0, "weight"), " to ", /*#__PURE__*/_jsx(Strong, {}, void 0, "weak"), "."),
    Example: function Example() {
      return source(_Text3 || (_Text3 = /*#__PURE__*/_jsx(Text, {}, void 0, "This sentence contains a", ' ', /*#__PURE__*/_jsx(TextLink, {
        href: "#",
        weight: "weak"
      }, void 0, "weak TextLink"), ".")));
    }
  }, {
    label: 'Custom link rendering',
    description: /*#__PURE__*/_jsx(Text, {}, void 0, "This component renders a native ", /*#__PURE__*/_jsx(Strong, {}, void 0, "a"), " element by default, but this can be customised via the ", /*#__PURE__*/_jsx(Strong, {}, void 0, "linkComponent"), " prop on ", /*#__PURE__*/_jsx(TextLink, {
      href: "/components/BraidProvider"
    }, void 0, "BraidProvider"), ".")
  }, {
    label: 'Contextual design',
    description: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/_jsx(Text, {}, void 0, "To avoid clashing colours, when on a background other than", ' ', /*#__PURE__*/_jsx(Strong, {}, void 0, "card"), ", TextLink will default its", ' ', /*#__PURE__*/_jsx(Strong, {}, void 0, "weight"), " to ", /*#__PURE__*/_jsx(Strong, {}, void 0, "weak"), ". In addition, when placed on a dark background, it may be inverted based on the", ' ', /*#__PURE__*/_jsx(TextLink, {
      href: "/components/Text#contrast"
    }, void 0, "contrast rules of Text.")), /*#__PURE__*/_jsx(Text, {}, void 0, "This behaviour can be overridden by specifying a", ' ', /*#__PURE__*/_jsx(Strong, {}, void 0, "weight"), " of ", /*#__PURE__*/_jsx(Strong, {}, void 0, "regular"), ".")),
    background: 'card',
    Example: function Example() {
      return source(_Stack || (_Stack = /*#__PURE__*/_jsx(Stack, {
        space: "large"
      }, void 0, /*#__PURE__*/_jsx(Inline, {
        space: "small",
        align: "center",
        alignY: "center"
      }, void 0, /*#__PURE__*/_jsx(Box, {
        background: "promoteLight",
        padding: "small",
        borderRadius: "standard"
      }, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, /*#__PURE__*/_jsx(TextLink, {
        href: "#"
      }, void 0, "promoteLight"))), /*#__PURE__*/_jsx(Box, {
        background: "infoLight",
        padding: "small",
        borderRadius: "standard"
      }, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, /*#__PURE__*/_jsx(TextLink, {
        href: "#"
      }, void 0, "infoLight"))), /*#__PURE__*/_jsx(Box, {
        background: "positiveLight",
        padding: "small",
        borderRadius: "standard"
      }, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, /*#__PURE__*/_jsx(TextLink, {
        href: "#"
      }, void 0, "positiveLight"))), /*#__PURE__*/_jsx(Box, {
        background: "cautionLight",
        padding: "small",
        borderRadius: "standard"
      }, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, /*#__PURE__*/_jsx(TextLink, {
        href: "#"
      }, void 0, "cautionLight"))), /*#__PURE__*/_jsx(Box, {
        background: "criticalLight",
        padding: "small",
        borderRadius: "standard"
      }, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, /*#__PURE__*/_jsx(TextLink, {
        href: "#"
      }, void 0, "criticalLight")))), /*#__PURE__*/_jsx(Inline, {
        space: "small",
        align: "center",
        alignY: "center"
      }, void 0, /*#__PURE__*/_jsx(Box, {
        background: "promote",
        padding: "small",
        borderRadius: "standard"
      }, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, /*#__PURE__*/_jsx(TextLink, {
        href: "#"
      }, void 0, "promote"))), /*#__PURE__*/_jsx(Box, {
        background: "info",
        padding: "small",
        borderRadius: "standard"
      }, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, /*#__PURE__*/_jsx(TextLink, {
        href: "#"
      }, void 0, "info"))), /*#__PURE__*/_jsx(Box, {
        background: "positive",
        padding: "small",
        borderRadius: "standard"
      }, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, /*#__PURE__*/_jsx(TextLink, {
        href: "#"
      }, void 0, "positive"))), /*#__PURE__*/_jsx(Box, {
        background: "caution",
        padding: "small",
        borderRadius: "standard"
      }, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, /*#__PURE__*/_jsx(TextLink, {
        href: "#"
      }, void 0, "caution"))), /*#__PURE__*/_jsx(Box, {
        background: "critical",
        padding: "small",
        borderRadius: "standard"
      }, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, /*#__PURE__*/_jsx(TextLink, {
        href: "#"
      }, void 0, "critical")))))));
    }
  }]
};
export default docs;