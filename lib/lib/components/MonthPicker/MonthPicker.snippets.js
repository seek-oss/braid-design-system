import _jsx from "@babel/runtime/helpers/jsx";
import React from 'react';
import { IconHelp, MonthPicker } from '../../playroom/components';
import source from '../../utils/source.macro';
import { TextLink } from '../TextLink/TextLink';
export var snippets = [{
  name: 'Standard',
  code: source( /*#__PURE__*/_jsx(MonthPicker, {
    label: "Month"
  }))
}, {
  name: 'With additional labels',
  code: source( /*#__PURE__*/_jsx(MonthPicker, {
    label: "Label",
    secondaryLabel: "optional",
    tertiaryLabel: /*#__PURE__*/_jsx(TextLink, {
      href: "#"
    }, void 0, /*#__PURE__*/_jsx(IconHelp, {}), " Help")
  }))
}, {
  name: 'With a description',
  code: source( /*#__PURE__*/_jsx(MonthPicker, {
    label: "Label",
    description: "More detailed description of field."
  }))
}, {
  name: 'With a critical message',
  code: source( /*#__PURE__*/_jsx(MonthPicker, {
    label: "Month",
    tone: "critical",
    message: "Critical message"
  }))
}, {
  name: 'With a positive message',
  code: source( /*#__PURE__*/_jsx(MonthPicker, {
    label: "Month",
    tone: "positive",
    message: "Positive message"
  }))
}, {
  name: 'With a neutral message',
  code: source( /*#__PURE__*/_jsx(MonthPicker, {
    label: "Month",
    tone: "neutral",
    message: "Neutral message"
  }))
}, {
  name: 'With custom months and years',
  code: source( /*#__PURE__*/_jsx(MonthPicker, {
    label: "Started",
    monthLabel: "MM",
    yearLabel: "YYYY",
    monthNames: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
  }))
}];