import _jsx from "@babel/runtime/helpers/jsx";

var _Stack, _Heading, _Heading2, _Heading3, _Heading4, _Heading5, _Heading6;

import React from 'react';
import source from '../../utils/source.macro';
import { Box, Heading, Stack, Text, Strong } from '../';
import { TextLink } from '../TextLink/TextLink';
var docs = {
  category: 'Content',
  migrationGuide: true,
  Example: function Example() {
    return source(_Stack || (_Stack = /*#__PURE__*/_jsx(Stack, {
      space: "large"
    }, void 0, /*#__PURE__*/_jsx(Stack, {
      space: "medium"
    }, void 0, /*#__PURE__*/_jsx(Heading, {
      level: "1"
    }, void 0, "Heading Level 1 Regular"), /*#__PURE__*/_jsx(Heading, {
      level: "1",
      weight: "weak"
    }, void 0, "Heading Level 1 Weak")), /*#__PURE__*/_jsx(Stack, {
      space: "medium"
    }, void 0, /*#__PURE__*/_jsx(Heading, {
      level: "2"
    }, void 0, "Heading Level 2 Regular"), /*#__PURE__*/_jsx(Heading, {
      level: "2",
      weight: "weak"
    }, void 0, "Heading Level 2 Weak")), /*#__PURE__*/_jsx(Stack, {
      space: "small"
    }, void 0, /*#__PURE__*/_jsx(Heading, {
      level: "3"
    }, void 0, "Heading Level 3 Regular"), /*#__PURE__*/_jsx(Heading, {
      level: "3",
      weight: "weak"
    }, void 0, "Heading Level 3 Weak")), /*#__PURE__*/_jsx(Stack, {
      space: "small"
    }, void 0, /*#__PURE__*/_jsx(Heading, {
      level: "4"
    }, void 0, "Heading Level 4 Regular"), /*#__PURE__*/_jsx(Heading, {
      level: "4",
      weight: "weak"
    }, void 0, "Heading Level 4 Weak")))));
  },
  alternatives: [{
    name: 'Accordion',
    description: 'For expanding/collapsing sections with headings.'
  }, {
    name: 'Text',
    description: 'For body copy.'
  }],
  additional: [{
    label: 'Custom semantics',
    description: /*#__PURE__*/_jsx(Text, {}, void 0, "By default, the semantic heading level matches the visual heading level, e.g.", ' ', /*#__PURE__*/_jsx(Strong, {}, void 0, /*#__PURE__*/_jsx(Box, {
      component: "pre",
      display: "inline"
    }, void 0, '<Heading level="2">')), ' ', "will render an ", /*#__PURE__*/_jsx(Strong, {}, void 0, "h2"), " element. If you need the semantics to be different from the visuals, you can provide the desired HTML tag via the ", /*#__PURE__*/_jsx(Strong, {}, void 0, "component"), " prop."),
    Example: function Example() {
      return source(_Heading || (_Heading = /*#__PURE__*/_jsx(Heading, {
        level: "2",
        component: "h3"
      }, void 0, "This looks like an H2, but it\u2019s actually an H3.")));
    }
  }, {
    label: 'Alignment',
    description: /*#__PURE__*/_jsx(Text, {}, void 0, "Headings can be aligned via the ", /*#__PURE__*/_jsx(Strong, {}, void 0, "align"), " prop. If you need alignment to differ across various screen sizes, you can provide responsive values describing the alignment of each breakpoint, e.g.", ' ', /*#__PURE__*/_jsx(Strong, {}, void 0, "align={{ mobile: 'center', tablet: 'left' }}")),
    Example: function Example() {
      return source( /*#__PURE__*/_jsx(Stack, {
        space: "large",
        dividers: true
      }, void 0, _Heading2 || (_Heading2 = /*#__PURE__*/_jsx(Heading, {
        level: "2",
        align: "left"
      }, void 0, "Left")), _Heading3 || (_Heading3 = /*#__PURE__*/_jsx(Heading, {
        level: "2",
        align: "center"
      }, void 0, "Center")), _Heading4 || (_Heading4 = /*#__PURE__*/_jsx(Heading, {
        level: "2",
        align: "right"
      }, void 0, "Right")), /*#__PURE__*/_jsx(Heading, {
        level: "2",
        align: {
          mobile: 'center',
          tablet: 'left'
        }
      }, void 0, "Center on mobile")));
    }
  }, {
    label: 'Truncation',
    description: /*#__PURE__*/_jsx(Text, {}, void 0, "If you\u2019re displaying user-generated content that may not fit within your layout, you can truncate text with the ", /*#__PURE__*/_jsx(Strong, {}, void 0, "truncate"), ' ', "prop."),
    Example: function Example() {
      return source( /*#__PURE__*/_jsx(Box, {
        style: {
          width: 215
        }
      }, void 0, _Heading5 || (_Heading5 = /*#__PURE__*/_jsx(Heading, {
        level: "2",
        truncate: true
      }, void 0, "Really long text that won\u2019t fit in the layout"))));
    }
  }, {
    label: 'Contrast',
    description: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/_jsx(Text, {}, void 0, "To ensure headings have sufficient contrast, when on a dark background the foreground colour is inverted."), /*#__PURE__*/_jsx(Text, {}, void 0, "When using custom backgrounds or images, this behaviour can be applied using the", ' ', /*#__PURE__*/_jsx(TextLink, {
      href: "/components/BackgroundProvider"
    }, void 0, "BackgroundProvider"), ' ', "and specifying whether the background is dark or light.")),
    background: 'brand',
    Example: function Example() {
      return source(_Heading6 || (_Heading6 = /*#__PURE__*/_jsx(Heading, {
        level: "2"
      }, void 0, "This Heading is inverted to improve contrast.")));
    }
  }]
};
export default docs;