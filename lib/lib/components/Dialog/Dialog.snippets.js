import _jsx from "@babel/runtime/helpers/jsx";
import React from 'react';
import source from '../../utils/source.macro';
import { Dialog, Box, Stack, Inline, Button, IconMail, Placeholder } from '../../playroom/components';
export var snippets = [{
  name: 'Standard',
  code: source( /*#__PURE__*/_jsx(Dialog, {
    title: "Dialog Heading",
    open: true
  }, void 0, /*#__PURE__*/_jsx(Placeholder, {
    width: 250,
    height: 100
  })))
}, {
  name: 'With illustration',
  code: source( /*#__PURE__*/_jsx(Dialog, {
    title: "Illustrated Dialog",
    open: true,
    illustration: /*#__PURE__*/_jsx(Box, {
      style: {
        height: 100,
        width: 100
      }
    }, void 0, /*#__PURE__*/_jsx(IconMail, {
      size: "fill"
    }))
  }, void 0, /*#__PURE__*/_jsx(Stack, {
    space: "xlarge",
    align: "center"
  }, void 0, /*#__PURE__*/_jsx(Placeholder, {
    width: "100%",
    height: 100
  }), /*#__PURE__*/_jsx(Inline, {
    space: "small"
  }, void 0, /*#__PURE__*/_jsx(Button, {}, void 0, "Got it"), /*#__PURE__*/_jsx(Button, {
    variant: "transparent"
  }, void 0, "Cancel")))))
}, {
  name: 'Xsmall',
  code: source( /*#__PURE__*/_jsx(Dialog, {
    title: "Dialog Heading",
    width: "xsmall",
    open: true
  }, void 0, /*#__PURE__*/_jsx(Placeholder, {
    width: "100%",
    height: 100
  })))
}, {
  name: 'Small',
  code: source( /*#__PURE__*/_jsx(Dialog, {
    title: "Dialog Heading",
    width: "small",
    open: true
  }, void 0, /*#__PURE__*/_jsx(Placeholder, {
    width: "100%",
    height: 100
  })))
}, {
  name: 'Medium',
  code: source( /*#__PURE__*/_jsx(Dialog, {
    title: "Dialog Heading",
    width: "medium",
    open: true
  }, void 0, /*#__PURE__*/_jsx(Placeholder, {
    width: "100%",
    height: 100
  })))
}, {
  name: 'Large',
  code: source( /*#__PURE__*/_jsx(Dialog, {
    title: "Dialog Heading",
    width: "large",
    open: true
  }, void 0, /*#__PURE__*/_jsx(Placeholder, {
    width: "100%",
    height: 100
  })))
}];