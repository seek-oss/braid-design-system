import _jsx from "@babel/runtime/helpers/jsx";
import React from 'react';
import { Notice, Text } from '../../playroom/components';
import source from '../../utils/source.macro';
export var snippets = [{
  name: 'Critical',
  code: source( /*#__PURE__*/_jsx(Notice, {
    tone: "critical"
  }, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, "Critical Notice")))
}, {
  name: 'Positive',
  code: source( /*#__PURE__*/_jsx(Notice, {
    tone: "positive"
  }, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, "Positive Notice")))
}, {
  name: 'Info',
  code: source( /*#__PURE__*/_jsx(Notice, {
    tone: "info"
  }, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, "Info Notice")))
}, {
  name: 'Promote',
  code: source( /*#__PURE__*/_jsx(Notice, {
    tone: "promote"
  }, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, "Promote Notice")))
}];