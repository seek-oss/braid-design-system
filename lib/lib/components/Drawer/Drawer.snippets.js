import _jsx from "@babel/runtime/helpers/jsx";
import React from 'react';
import source from '../../utils/source.macro';
import { Drawer, Placeholder } from '../../playroom/components';
export var snippets = [{
  name: 'Default',
  code: source( /*#__PURE__*/_jsx(Drawer, {
    title: "Drawer Heading",
    open: true
  }, void 0, /*#__PURE__*/_jsx(Placeholder, {
    width: "100%",
    height: 100
  })))
}, {
  name: 'Small',
  code: source( /*#__PURE__*/_jsx(Drawer, {
    title: "Drawer Heading",
    width: "small",
    open: true
  }, void 0, /*#__PURE__*/_jsx(Placeholder, {
    width: "100%",
    height: 100
  })))
}, {
  name: 'Medium',
  code: source( /*#__PURE__*/_jsx(Drawer, {
    title: "Drawer Heading",
    width: "medium",
    open: true
  }, void 0, /*#__PURE__*/_jsx(Placeholder, {
    width: "100%",
    height: 100
  })))
}, {
  name: 'Large',
  code: source( /*#__PURE__*/_jsx(Drawer, {
    title: "Drawer Heading",
    width: "large",
    open: true
  }, void 0, /*#__PURE__*/_jsx(Placeholder, {
    width: "100%",
    height: 100
  })))
}];