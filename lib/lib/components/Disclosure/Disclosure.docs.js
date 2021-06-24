import _jsx from "@babel/runtime/helpers/jsx";

var _Text, _Text2, _Text3;

import React from 'react';
import { Disclosure, Text, TextLink, Strong } from '..';
import source from '../../utils/source.macro';
var docs = {
  category: 'Content',
  migrationGuide: true,
  Example: function Example(_ref) {
    var id = _ref.id;
    return source( /*#__PURE__*/_jsx(Disclosure, {
      id: id,
      expandLabel: "Show content",
      collapseLabel: "Hide content"
    }, void 0, _Text || (_Text = /*#__PURE__*/_jsx(Text, {}, void 0, "Content"))));
  },
  accessibility: /*#__PURE__*/_jsx(Text, {}, void 0, "Follows the", ' ', /*#__PURE__*/_jsx(TextLink, {
    href: "https://www.w3.org/TR/wai-aria-practices/#disclosure"
  }, void 0, "WAI-ARIA Disclosure Pattern.")),
  alternatives: [{
    name: 'Accordion',
    description: 'For a more prominent visual treatment.'
  }, {
    name: 'Tabs',
    description: 'For a horizontal selection of multiple content panels.'
  }, {
    name: 'Dialog',
    description: 'For exposing a smaller amount of content in a modal.'
  }, {
    name: 'Drawer',
    description: 'For exposing a larger amount of content in a modal.'
  }],
  additional: [{
    label: 'Managing state',
    description: /*#__PURE__*/_jsx(Text, {}, void 0, "Disclosures manage their own state internally by default. If you\u2019d like to take control of the state yourself, you can pass", ' ', /*#__PURE__*/_jsx(Strong, {}, void 0, "expanded"), " and ", /*#__PURE__*/_jsx(Strong, {}, void 0, "onToggle"), " props."),
    Example: function Example(_ref2) {
      var id = _ref2.id,
          setDefaultState = _ref2.setDefaultState,
          getState = _ref2.getState,
          setState = _ref2.setState;
      return source( /*#__PURE__*/React.createElement(React.Fragment, null, setDefaultState('expanded', true), /*#__PURE__*/_jsx(Disclosure, {
        id: id,
        expandLabel: "Show content",
        collapseLabel: "Hide content",
        expanded: getState('expanded'),
        onToggle: setState('expanded')
      }, void 0, _Text2 || (_Text2 = /*#__PURE__*/_jsx(Text, {}, void 0, "Content")))));
    }
  }, {
    label: 'Custom space',
    description: /*#__PURE__*/_jsx(Text, {}, void 0, "The space between the disclosure label and content can be customised via the ", /*#__PURE__*/_jsx(Strong, {}, void 0, "space"), " prop."),
    Example: function Example(_ref3) {
      var id = _ref3.id,
          setDefaultState = _ref3.setDefaultState,
          getState = _ref3.getState,
          setState = _ref3.setState;
      return source( /*#__PURE__*/React.createElement(React.Fragment, null, setDefaultState('expanded', true), /*#__PURE__*/_jsx(Disclosure, {
        id: id,
        expandLabel: "Show content",
        collapseLabel: "Hide content",
        expanded: getState('expanded'),
        onToggle: setState('expanded'),
        space: "small"
      }, void 0, _Text3 || (_Text3 = /*#__PURE__*/_jsx(Text, {}, void 0, "Content")))));
    }
  }]
};
export default docs;