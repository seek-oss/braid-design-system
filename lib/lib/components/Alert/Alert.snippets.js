import _jsx from "@babel/runtime/helpers/jsx";
import React from 'react';
import { Alert, Text } from '../../playroom/components';
import source from '../../utils/source.macro';
export var snippets = [{
  name: 'Critical',
  code: source( /*#__PURE__*/_jsx(Alert, {
    tone: "critical"
  }, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, "Critical Alert")))
}, {
  name: 'Caution',
  code: source( /*#__PURE__*/_jsx(Alert, {
    tone: "caution"
  }, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, "Caution Alert")))
}, {
  name: 'Positive',
  code: source( /*#__PURE__*/_jsx(Alert, {
    tone: "positive"
  }, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, "Positive Alert")))
}, {
  name: 'Info',
  code: source( /*#__PURE__*/_jsx(Alert, {
    tone: "info"
  }, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, "Info Alert")))
}, {
  name: 'Promote',
  code: source( /*#__PURE__*/_jsx(Alert, {
    tone: "promote"
  }, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, "Promote Alert")))
}, {
  name: 'Dismissible alert',
  code: source( /*#__PURE__*/_jsx(Alert, {
    onClose: function onClose() {},
    closeLabel: "Close"
  }, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, "Dismissible Alert")))
}];