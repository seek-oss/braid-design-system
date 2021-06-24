import _jsx from "@babel/runtime/helpers/jsx";

var _Tag, _Tag2;

import React from 'react';
import { Tag, Inline, Text, TextLinkButton } from '../';
import source from '../../utils/source.macro';
export var galleryItems = [{
  label: 'Standard',
  background: 'card',
  Example: function Example() {
    return source(_Tag || (_Tag = /*#__PURE__*/_jsx(Tag, {}, void 0, "Tag")));
  }
}, {
  label: 'Clearable',
  background: 'card',
  Example: function Example(_ref) {
    var getState = _ref.getState,
        setState = _ref.setState;
    return source( /*#__PURE__*/_jsx(Inline, {
      space: "small",
      alignY: "center"
    }, void 0, _Tag2 || (_Tag2 = /*#__PURE__*/_jsx(Tag, {}, void 0, "One")), !getState('clearTwo') ? /*#__PURE__*/_jsx(Tag, {
      onClear: function onClear() {
        return setState('clearTwo', true);
      },
      clearLabel: 'Clear "Two"'
    }, void 0, "Two") : null, !getState('clearThree') ? /*#__PURE__*/_jsx(Tag, {
      onClear: function onClear() {
        return setState('clearThree', true);
      },
      clearLabel: 'Clear "Three"'
    }, void 0, "Three") : null, /*#__PURE__*/_jsx(Text, {
      tone: "secondary"
    }, void 0, /*#__PURE__*/_jsx(TextLinkButton, {
      weight: "weak",
      hitArea: "large",
      onClick: function onClick() {
        setState('clearTwo', false);
        setState('clearThree', false);
      }
    }, void 0, "Reset"))));
  }
}];