import _jsx from "@babel/runtime/helpers/jsx";

let _Stack, _Stack2;

import React from 'react';
import source from '../../../utils/source.macro';
import { IconVisibility, Button, Heading, Inline, Stack, Strong, Text } from '../../';
const docs = {
  category: 'Icon',
  migrationGuide: true,
  Example: function Example() {
    return source( /* #__PURE__*/_jsx(Inline, {
      space: {
        mobile: 'large',
        tablet: 'xlarge'
      },
      align: "center"
    }, void 0, _Stack || (_Stack = /* #__PURE__*/_jsx(Stack, {
      space: "medium",
      align: "center"
    }, void 0, /* #__PURE__*/_jsx(Heading, {
      component: "div",
      level: "1"
    }, void 0, /* #__PURE__*/_jsx(IconVisibility, {})), /* #__PURE__*/_jsx(Text, {
      tone: "secondary",
      size: "small",
      align: "center"
    }, void 0, "VISIBLE"))), _Stack2 || (_Stack2 = /* #__PURE__*/_jsx(Stack, {
      space: "medium",
      align: "center"
    }, void 0, /* #__PURE__*/_jsx(Heading, {
      component: "div",
      level: "1"
    }, void 0, /* #__PURE__*/_jsx(IconVisibility, {
      hidden: true
    })), /* #__PURE__*/_jsx(Text, {
      tone: "secondary",
      size: "small",
      align: "center"
    }, void 0, "HIDDEN")))));
  },
  alternatives: [],
  additional: [{
    label: 'Toggling visibility',
    description: /* #__PURE__*/_jsx(Text, {}, void 0, "The visibility can be changed using the ", /* #__PURE__*/_jsx(Strong, {}, void 0, "hidden"), " prop."),
    Example: function Example(_ref) {
      const getState = _ref.getState,
          toggleState = _ref.toggleState;
      return source( /* #__PURE__*/_jsx(Stack, {
        space: "large",
        dividers: true
      }, void 0, /* #__PURE__*/_jsx(IconVisibility, {
        hidden: getState('hidden')
      }), /* #__PURE__*/_jsx(Inline, {
        space: "small"
      }, void 0, /* #__PURE__*/_jsx(Button, {
        onClick: function onClick() {
          return toggleState('hidden');
        }
      }, void 0, getState('hidden') ? 'visible' : 'hidden'))));
    }
  }]
};
export default docs;