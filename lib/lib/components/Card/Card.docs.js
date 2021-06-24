import _jsx from "@babel/runtime/helpers/jsx";

var _Card, _Text, _Text2, _Text3, _Text4, _Text5;

import React, { Fragment } from 'react';
import { Box, Stack, Card, Text, Tiles, Strong } from '../';
import { Placeholder } from '../../playroom/components';
import source from '../../utils/source.macro';
import { validCardComponents } from './Card';
var docs = {
  category: 'Layout',
  migrationGuide: true,
  Example: function Example() {
    return source(_Card || (_Card = /*#__PURE__*/_jsx(Card, {}, void 0, /*#__PURE__*/_jsx(Placeholder, {
      label: "This content is inside a card",
      height: 60
    }))));
  },
  alternatives: [{
    name: 'Box',
    description: 'For custom layouts.'
  }],
  additional: [{
    label: 'Tones',
    description: /*#__PURE__*/_jsx(Text, {}, void 0, "Providing a ", /*#__PURE__*/_jsx(Strong, {}, void 0, "tone"), " prop will add a keyline down the left hand side of the container. The supported tones are", ' ', /*#__PURE__*/_jsx(Strong, {}, void 0, "promote"), " and ", /*#__PURE__*/_jsx(Strong, {}, void 0, "formAccent"), "."),
    Example: function Example() {
      return source( /*#__PURE__*/_jsx(Tiles, {
        space: "large",
        columns: {
          mobile: 1,
          tablet: 2
        }
      }, void 0, /*#__PURE__*/_jsx(Stack, {
        space: "small"
      }, void 0, _Text || (_Text = /*#__PURE__*/_jsx(Text, {
        size: "xsmall",
        tone: "secondary"
      }, void 0, "PROMOTE")), /*#__PURE__*/_jsx(Card, {
        tone: "promote"
      }, void 0, /*#__PURE__*/_jsx(Box, {
        style: {
          height: 100
        },
        width: "full"
      }))), /*#__PURE__*/_jsx(Stack, {
        space: "small"
      }, void 0, _Text2 || (_Text2 = /*#__PURE__*/_jsx(Text, {
        size: "xsmall",
        tone: "secondary"
      }, void 0, "FORMACCENT")), /*#__PURE__*/_jsx(Card, {
        tone: "formAccent"
      }, void 0, /*#__PURE__*/_jsx(Box, {
        style: {
          height: 100
        },
        width: "full"
      })))));
    }
  }, {
    label: 'Rounded corners',
    description: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/_jsx(Text, {}, void 0, "Card corners can be rounded by providing the", ' ', /*#__PURE__*/_jsx(Strong, {}, void 0, "rounded"), " prop."), /*#__PURE__*/_jsx(Text, {}, void 0, "Alternatively, rounding may be applied responsively using the", ' ', /*#__PURE__*/_jsx(Strong, {}, void 0, "roundAbove"), " prop, and providing either", ' ', /*#__PURE__*/_jsx(Strong, {}, void 0, "mobile"), " or ", /*#__PURE__*/_jsx(Strong, {}, void 0, "tablet"), ". This enables card edges to be softened on larger screens, but squared off if it runs full bleed on smaller devices.")),
    Example: function Example() {
      return source( /*#__PURE__*/_jsx(Tiles, {
        space: "large",
        columns: {
          mobile: 1,
          tablet: 2
        }
      }, void 0, /*#__PURE__*/_jsx(Stack, {
        space: "small"
      }, void 0, _Text3 || (_Text3 = /*#__PURE__*/_jsx(Text, {
        size: "xsmall",
        tone: "secondary"
      }, void 0, "DEFAULT")), /*#__PURE__*/_jsx(Card, {}, void 0, /*#__PURE__*/_jsx(Box, {
        style: {
          height: 100
        },
        width: "full"
      }))), /*#__PURE__*/_jsx(Stack, {
        space: "small"
      }, void 0, _Text4 || (_Text4 = /*#__PURE__*/_jsx(Text, {
        size: "xsmall",
        tone: "secondary"
      }, void 0, "ROUNDED")), /*#__PURE__*/_jsx(Card, {
        rounded: true
      }, void 0, /*#__PURE__*/_jsx(Box, {
        style: {
          height: 100
        },
        width: "full"
      }))), /*#__PURE__*/_jsx(Stack, {
        space: "small"
      }, void 0, _Text5 || (_Text5 = /*#__PURE__*/_jsx(Text, {
        size: "xsmall",
        tone: "secondary"
      }, void 0, "RESPONSIVELY ROUNDED (e.g. above mobile)")), /*#__PURE__*/_jsx(Card, {
        roundedAbove: "mobile"
      }, void 0, /*#__PURE__*/_jsx(Box, {
        style: {
          height: 100
        },
        width: "full"
      })))));
    }
  }, {
    label: 'Custom semantics',
    description: /*#__PURE__*/_jsx(Text, {}, void 0, "The HTML tag can be customised to ensure the underlying document semantics are meaningful. This can be done using the", ' ', /*#__PURE__*/_jsx(Strong, {}, void 0, "component"), " prop and supports", ' ', validCardComponents.map(function (c, i) {
      var notLastTwo = validCardComponents.length - 2;
      var joiningLastElements = i === notLastTwo ? ' and ' : '.';
      return /*#__PURE__*/_jsx(Fragment, {}, c, /*#__PURE__*/_jsx(Strong, {}, void 0, c), c === 'div' ? ' (default)' : '', i < notLastTwo ? ', ' : joiningLastElements);
    }))
  }]
};
export default docs;