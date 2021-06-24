import _jsx from "@babel/runtime/helpers/jsx";

var _TextLink;

import React from 'react';
import { Textarea, TextLink, IconHelp } from '../';
import source from '../../utils/source.macro';
export var galleryItems = [{
  label: 'Standard',
  Example: function Example(_ref) {
    var id = _ref.id,
        getState = _ref.getState,
        setState = _ref.setState;
    return source( /*#__PURE__*/_jsx(Textarea, {
      id: id,
      label: "Label",
      value: getState('textarea'),
      onChange: setState('textarea')
    }));
  }
}, {
  label: 'With additional labels',
  Example: function Example(_ref2) {
    var id = _ref2.id,
        getState = _ref2.getState,
        setState = _ref2.setState;
    return source( /*#__PURE__*/_jsx(Textarea, {
      id: id,
      label: "Label",
      onChange: setState('textarea'),
      value: getState('textarea'),
      secondaryLabel: "optional",
      tertiaryLabel: _TextLink || (_TextLink = /*#__PURE__*/_jsx(TextLink, {
        href: "#"
      }, void 0, /*#__PURE__*/_jsx(IconHelp, {}), " Help"))
    }));
  }
}, {
  label: 'With a description',
  Example: function Example(_ref3) {
    var id = _ref3.id,
        getState = _ref3.getState,
        setState = _ref3.setState;
    return source( /*#__PURE__*/_jsx(Textarea, {
      id: id,
      label: "Label",
      onChange: setState('textarea'),
      value: getState('textarea'),
      description: "Longer description of this field"
    }));
  }
}, {
  label: 'With a critical message',
  Example: function Example(_ref4) {
    var id = _ref4.id,
        getState = _ref4.getState,
        setState = _ref4.setState;
    return source( /*#__PURE__*/_jsx(Textarea, {
      id: id,
      label: "Label",
      onChange: setState('textarea'),
      value: getState('textarea'),
      tone: "critical",
      message: "Critical message"
    }));
  }
}, {
  label: 'With a positive message',
  Example: function Example(_ref5) {
    var id = _ref5.id,
        getState = _ref5.getState,
        setState = _ref5.setState;
    return source( /*#__PURE__*/_jsx(Textarea, {
      id: id,
      label: "Label",
      onChange: setState('textarea'),
      value: getState('textarea'),
      tone: "positive",
      message: "Positive message"
    }));
  }
}, {
  label: 'With a neutral message',
  Example: function Example(_ref6) {
    var id = _ref6.id,
        getState = _ref6.getState,
        setState = _ref6.setState;
    return source( /*#__PURE__*/_jsx(Textarea, {
      id: id,
      label: "Label",
      onChange: setState('textarea'),
      value: getState('textarea'),
      tone: "neutral",
      message: "Neutral message"
    }));
  }
}, {
  label: 'Disabled field',
  background: 'card',
  Example: function Example(_ref7) {
    var id = _ref7.id,
        getState = _ref7.getState,
        setState = _ref7.setState;
    return source( /*#__PURE__*/_jsx(Textarea, {
      id: id,
      label: "Label",
      onChange: setState('textarea'),
      value: getState('textarea'),
      disabled: true
    }));
  }
}, {
  label: 'Limiting the number of characters',
  Example: function Example(_ref8) {
    var id = _ref8.id,
        getState = _ref8.getState,
        setState = _ref8.setState,
        setDefaultState = _ref8.setDefaultState;
    return source( /*#__PURE__*/React.createElement(React.Fragment, null, setDefaultState('textarea', 'A long piece of text exceeding the specified character limit of 50'), /*#__PURE__*/_jsx(Textarea, {
      label: "Label",
      id: id,
      onChange: setState('textarea'),
      value: getState('textarea'),
      description: "Chactacter limit of 50",
      characterLimit: 50
    })));
  }
}, {
  label: 'Highlighting ranges',
  Example: function Example(_ref9) {
    var id = _ref9.id,
        getState = _ref9.getState,
        setState = _ref9.setState,
        setDefaultState = _ref9.setDefaultState;
    return source( /*#__PURE__*/React.createElement(React.Fragment, null, setDefaultState('textarea', 'A long piece of text with a highlighted range'), /*#__PURE__*/_jsx(Textarea, {
      label: "Label",
      id: id,
      onChange: setState('textarea'),
      value: getState('textarea'),
      tone: "critical",
      message: "Critical message",
      description: "Characters 7-20 are highlighted",
      highlightRanges: [{
        start: 7,
        end: 20
      }]
    })));
  }
}];