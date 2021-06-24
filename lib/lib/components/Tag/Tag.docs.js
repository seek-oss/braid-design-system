import _jsx from "@babel/runtime/helpers/jsx";

var _Card;

import React from 'react';
import { Card, Inline, Tag, Strong, Text, TextLinkButton } from '../';
import source from '../../utils/source.macro';
var docs = {
  category: 'Content',
  migrationGuide: true,
  Example: function Example() {
    return source(_Card || (_Card = /*#__PURE__*/_jsx(Card, {}, void 0, /*#__PURE__*/_jsx(Inline, {
      space: "small"
    }, void 0, /*#__PURE__*/_jsx(Tag, {}, void 0, "One"), /*#__PURE__*/_jsx(Tag, {}, void 0, "Two"), /*#__PURE__*/_jsx(Tag, {}, void 0, "Three")))));
  },
  alternatives: [{
    name: 'Badge',
    description: 'For static labels.'
  }],
  additional: [{
    label: 'Clearable',
    description: /*#__PURE__*/_jsx(Text, {}, void 0, "Tags can be made clearable, by providing an ", /*#__PURE__*/_jsx(Strong, {}, void 0, "onClear"), ' ', "handler and a ", /*#__PURE__*/_jsx(Strong, {}, void 0, "clearLabel"), " to describe what clicking it will do."),
    background: 'card',
    Example: function Example(_ref) {
      var getState = _ref.getState,
          setState = _ref.setState,
          toggleState = _ref.toggleState;
      return source( /*#__PURE__*/_jsx(Inline, {
        space: "small",
        alignY: "center"
      }, void 0, !getState('clearOne') ? /*#__PURE__*/_jsx(Tag, {
        onClear: function onClear() {
          return toggleState('clearOne');
        },
        clearLabel: 'Clear "One"'
      }, void 0, "One") : null, !getState('clearTwo') ? /*#__PURE__*/_jsx(Tag, {
        onClear: function onClear() {
          return toggleState('clearTwo');
        },
        clearLabel: 'Clear "Two"'
      }, void 0, "Two") : null, !getState('clearThree') ? /*#__PURE__*/_jsx(Tag, {
        onClear: function onClear() {
          return toggleState('clearThree');
        },
        clearLabel: 'Clear "Three"'
      }, void 0, "Three") : null, /*#__PURE__*/_jsx(Text, {
        tone: "secondary"
      }, void 0, /*#__PURE__*/_jsx(TextLinkButton, {
        weight: "weak",
        hitArea: "large",
        onClick: function onClick() {
          setState('clearOne', false);
          setState('clearTwo', false);
          setState('clearThree', false);
        }
      }, void 0, "Reset"))));
    }
  }]
};
export default docs;