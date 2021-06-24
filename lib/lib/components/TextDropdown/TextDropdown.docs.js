import _jsx from "@babel/runtime/helpers/jsx";
import React from 'react';
import { Stack, Strong, Text, TextLink, TextDropdown, Notice } from '..';
import source from '../../utils/source.macro';
var docs = {
  category: 'Content',
  Example: function Example(_ref) {
    var id = _ref.id,
        setState = _ref.setState,
        getState = _ref.getState,
        setDefaultState = _ref.setDefaultState;
    return source( /*#__PURE__*/React.createElement(React.Fragment, null, setDefaultState('textdropdown', 'Option 1'), /*#__PURE__*/_jsx(Text, {}, void 0, /*#__PURE__*/_jsx(TextDropdown, {
      label: "Options",
      id: id,
      value: getState('textdropdown'),
      onChange: setState('textdropdown'),
      options: ['Option 1', 'Option 2', 'Option 3']
    }))));
  },
  alternatives: [{
    name: 'Dropdown',
    description: 'For selection lists within forms.'
  }, {
    name: 'Autosuggest',
    description: 'For larger lists.'
  }],
  additional: [{
    label: 'Design considerations',
    description: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/_jsx(Notice, {
      tone: "info"
    }, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, "This component is not designed for usage within forms.")), /*#__PURE__*/_jsx(Text, {}, void 0, "Text styles are inherited from the parent typographic component, meaning that it ", /*#__PURE__*/_jsx(Strong, {}, void 0, "must"), " be within either a", ' ', /*#__PURE__*/_jsx(TextLink, {
      href: "/components/Text"
    }, void 0, "Text"), " or", ' ', /*#__PURE__*/_jsx(TextLink, {
      href: "/components/Heading"
    }, void 0, "Heading"), ". This also allows you to change the weight, size and tone of the dropdown.")),
    Example: function Example(_ref2) {
      var id = _ref2.id,
          setState = _ref2.setState,
          getState = _ref2.getState,
          setDefaultState = _ref2.setDefaultState;
      return source( /*#__PURE__*/React.createElement(React.Fragment, null, setDefaultState('sortby', 'Relevance'), /*#__PURE__*/_jsx(Text, {}, void 0, "Sort by", ' ', /*#__PURE__*/_jsx(Strong, {}, void 0, /*#__PURE__*/_jsx(TextDropdown, {
        label: "Sort by",
        id: id,
        value: getState('sortby'),
        onChange: setState('sortby'),
        options: ['Relevance', 'Date', 'Keyword']
      })))));
    }
  }, {
    label: 'Development considerations',
    description: /*#__PURE__*/_jsx(Text, {}, void 0, "The ", /*#__PURE__*/_jsx(Strong, {}, void 0, "options"), " prop also supports complex values where the display text differs from the field value. In this case, each option is an object containing both ", /*#__PURE__*/_jsx(Strong, {}, void 0, "text"), " and", ' ', /*#__PURE__*/_jsx(Strong, {}, void 0, "value"), " properties."),
    Example: function Example(_ref3) {
      var id = _ref3.id,
          setState = _ref3.setState,
          getState = _ref3.getState,
          setDefaultState = _ref3.setDefaultState;
      return source( /*#__PURE__*/React.createElement(React.Fragment, null, setDefaultState('textdropdown', 200), /*#__PURE__*/_jsx(Stack, {
        space: "large"
      }, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, /*#__PURE__*/_jsx(TextDropdown, {
        label: "Options",
        id: id,
        value: getState('textdropdown'),
        onChange: setState('textdropdown'),
        options: [{
          text: 'Option 1',
          value: 100
        }, {
          text: 'Option 2',
          value: 200
        }, {
          text: 'Option 3',
          value: 300
        }]
      })), /*#__PURE__*/_jsx(Text, {
        size: "small",
        tone: "secondary"
      }, void 0, "// Selected value: ".concat(getState('textdropdown'))))));
    }
  }]
};
export default docs;