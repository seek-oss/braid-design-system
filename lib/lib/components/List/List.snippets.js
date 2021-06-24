import _jsx from "@babel/runtime/helpers/jsx";
import React from 'react';
import { List, Text, IconTick } from '../../playroom/components';
import source from '../../utils/source.macro';
export var snippets = [{
  name: 'XSmall Space',
  code: source( /*#__PURE__*/_jsx(List, {
    space: "xsmall"
  }, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, "Text"), /*#__PURE__*/_jsx(Text, {}, void 0, "Text"), /*#__PURE__*/_jsx(Text, {}, void 0, "Text")))
}, {
  name: 'Small Space',
  code: source( /*#__PURE__*/_jsx(List, {
    space: "small"
  }, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, "Text"), /*#__PURE__*/_jsx(Text, {}, void 0, "Text"), /*#__PURE__*/_jsx(Text, {}, void 0, "Text")))
}, {
  name: 'Medium Space',
  code: source( /*#__PURE__*/_jsx(List, {
    space: "medium"
  }, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, "Text"), /*#__PURE__*/_jsx(Text, {}, void 0, "Text"), /*#__PURE__*/_jsx(Text, {}, void 0, "Text")))
}, {
  name: 'Secondary',
  code: source( /*#__PURE__*/_jsx(List, {
    space: "medium",
    tone: "secondary"
  }, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, "Text"), /*#__PURE__*/_jsx(Text, {}, void 0, "Text"), /*#__PURE__*/_jsx(Text, {}, void 0, "Text")))
}, {
  name: 'Numbered',
  code: source( /*#__PURE__*/_jsx(List, {
    space: "medium",
    type: "number"
  }, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, "Text"), /*#__PURE__*/_jsx(Text, {}, void 0, "Text"), /*#__PURE__*/_jsx(Text, {}, void 0, "Text")))
}, {
  name: 'Alpha',
  code: source( /*#__PURE__*/_jsx(List, {
    space: "medium",
    type: "alpha"
  }, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, "Text"), /*#__PURE__*/_jsx(Text, {}, void 0, "Text"), /*#__PURE__*/_jsx(Text, {}, void 0, "Text")))
}, {
  name: 'Roman',
  code: source( /*#__PURE__*/_jsx(List, {
    space: "medium",
    type: "roman"
  }, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, "Text"), /*#__PURE__*/_jsx(Text, {}, void 0, "Text"), /*#__PURE__*/_jsx(Text, {}, void 0, "Text")))
}, {
  name: 'Icon',
  code: source( /*#__PURE__*/_jsx(List, {
    space: "medium",
    type: "icon",
    icon: /*#__PURE__*/_jsx(IconTick, {
      tone: "positive"
    })
  }, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, "Text"), /*#__PURE__*/_jsx(Text, {}, void 0, "Text"), /*#__PURE__*/_jsx(Text, {}, void 0, "Text")))
}];