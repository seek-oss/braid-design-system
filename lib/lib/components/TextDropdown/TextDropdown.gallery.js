import _jsx from "@babel/runtime/helpers/jsx";
import React from 'react';
import { Heading, Strong, Text, TextDropdown } from '..';
import source from '../../utils/source.macro';
export var galleryItems = [{
  label: 'Standard',
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
  }
}, {
  label: 'Emphasised within a sentence',
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
  label: 'Within a heading',
  Example: function Example(_ref3) {
    var id = _ref3.id,
        setState = _ref3.setState,
        getState = _ref3.getState,
        setDefaultState = _ref3.setDefaultState;
    return source( /*#__PURE__*/React.createElement(React.Fragment, null, setDefaultState('textdropdown', 'Option 1'), /*#__PURE__*/_jsx(Heading, {
      level: "2"
    }, void 0, "Heading with", ' ', /*#__PURE__*/_jsx(TextDropdown, {
      label: "Options",
      id: id,
      value: getState('textdropdown'),
      onChange: setState('textdropdown'),
      options: ['Option 1', 'Option 2', 'Option 3']
    }))));
  }
}];