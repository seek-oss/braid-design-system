import _jsx from "@babel/runtime/helpers/jsx";
import React from 'react';
import { AccordionItem, Accordion, Placeholder } from '../../playroom/components';
import source from '../../utils/source.macro';
export var snippets = [{
  name: 'Large',
  code: source( /*#__PURE__*/_jsx(Accordion, {}, void 0, /*#__PURE__*/_jsx(AccordionItem, {
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
  }))))
}, {
  name: 'Large, without dividers',
  code: source( /*#__PURE__*/_jsx(Accordion, {
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
  }))))
}, {
  name: 'Standard',
  code: source( /*#__PURE__*/_jsx(Accordion, {
    size: "standard"
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
  }))))
}, {
  name: 'Standard, without dividers',
  code: source( /*#__PURE__*/_jsx(Accordion, {
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
  }))))
}, {
  name: 'Large standalone item',
  code: source( /*#__PURE__*/_jsx(AccordionItem, {
    label: "Label"
  }, void 0, /*#__PURE__*/_jsx(Placeholder, {
    height: 100
  })))
}, {
  name: 'Standard standalone item',
  code: source( /*#__PURE__*/_jsx(AccordionItem, {
    label: "Label",
    size: "standard"
  }, void 0, /*#__PURE__*/_jsx(Placeholder, {
    height: 100
  })))
}];