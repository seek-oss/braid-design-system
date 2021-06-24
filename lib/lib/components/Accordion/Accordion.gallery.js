import _jsx from "@babel/runtime/helpers/jsx";

var _Accordion, _Accordion2;

import React from 'react';
import source from '../../utils/source.macro';
import { Accordion, AccordionItem, Placeholder } from '../../playroom/components';
export var galleryItems = [{
  label: 'Large size with dividers',
  Example: function Example() {
    return source(_Accordion || (_Accordion = /*#__PURE__*/_jsx(Accordion, {}, void 0, /*#__PURE__*/_jsx(AccordionItem, {
      label: "Item 1"
    }, void 0, /*#__PURE__*/_jsx(Placeholder, {
      height: 100
    })), /*#__PURE__*/_jsx(AccordionItem, {
      label: "Item 2"
    }, void 0, /*#__PURE__*/_jsx(Placeholder, {
      height: 100
    })), /*#__PURE__*/_jsx(AccordionItem, {
      label: "Item 3"
    }, void 0, /*#__PURE__*/_jsx(Placeholder, {
      height: 100
    })))));
  }
}, {
  label: 'Standard size without dividers',
  Example: function Example() {
    return source(_Accordion2 || (_Accordion2 = /*#__PURE__*/_jsx(Accordion, {
      size: "standard",
      dividers: false
    }, void 0, /*#__PURE__*/_jsx(AccordionItem, {
      label: "Item 1"
    }, void 0, /*#__PURE__*/_jsx(Placeholder, {
      height: 100
    })), /*#__PURE__*/_jsx(AccordionItem, {
      label: "Item 2"
    }, void 0, /*#__PURE__*/_jsx(Placeholder, {
      height: 100
    })), /*#__PURE__*/_jsx(AccordionItem, {
      label: "Item 3"
    }, void 0, /*#__PURE__*/_jsx(Placeholder, {
      height: 100
    })))));
  }
}];