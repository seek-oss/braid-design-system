import _jsx from "@babel/runtime/helpers/jsx";
import React from 'react';
import { Stack, Radio, Text, TextLink } from '../';
import source from '../../utils/source.macro';
var docs = {
  category: 'Content',
  migrationGuide: false,
  deprecationWarning: /*#__PURE__*/_jsx(Text, {
    weight: "medium"
  }, void 0, "This component has been deprecated. Use", ' ', /*#__PURE__*/_jsx(TextLink, {
    href: "/components/RadioGroup"
  }, void 0, "RadioGroup"), " instead."),
  Example: function Example(_ref) {
    var id = _ref.id,
        getState = _ref.getState,
        setState = _ref.setState;
    return source( /*#__PURE__*/_jsx(Stack, {
      space: "small"
    }, void 0, /*#__PURE__*/_jsx(Radio, {
      id: "".concat(id, "_1"),
      checked: getState('value') === 1,
      onChange: function onChange() {
        return setState('value', 1);
      },
      label: "One"
    }), /*#__PURE__*/_jsx(Radio, {
      id: "".concat(id, "_2"),
      checked: getState('value') === 2,
      onChange: function onChange() {
        return setState('value', 2);
      },
      label: "Two"
    }), /*#__PURE__*/_jsx(Radio, {
      id: "".concat(id, "_3"),
      checked: getState('value') === 3,
      onChange: function onChange() {
        return setState('value', 3);
      },
      label: "Three"
    })));
  },
  alternatives: []
};
export default docs;