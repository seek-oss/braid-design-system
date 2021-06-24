import _jsx from "@babel/runtime/helpers/jsx";
import React from 'react';
import { Tiles, Placeholder } from '../../playroom/components';
import source from '../../utils/source.macro';
export var snippets = [{
  name: '2 columns, small space',
  code: source( /*#__PURE__*/_jsx(Tiles, {
    space: "small",
    columns: 2
  }, void 0, /*#__PURE__*/_jsx(Placeholder, {
    height: 48
  }), /*#__PURE__*/_jsx(Placeholder, {
    height: 48
  }), /*#__PURE__*/_jsx(Placeholder, {
    height: 48
  }), /*#__PURE__*/_jsx(Placeholder, {
    height: 48
  }), /*#__PURE__*/_jsx(Placeholder, {
    height: 48
  })))
}, {
  name: '3 columns, medium space',
  code: source( /*#__PURE__*/_jsx(Tiles, {
    space: "medium",
    columns: 3
  }, void 0, /*#__PURE__*/_jsx(Placeholder, {
    height: 48
  }), /*#__PURE__*/_jsx(Placeholder, {
    height: 48
  }), /*#__PURE__*/_jsx(Placeholder, {
    height: 48
  }), /*#__PURE__*/_jsx(Placeholder, {
    height: 48
  }), /*#__PURE__*/_jsx(Placeholder, {
    height: 48
  })))
}, {
  name: '2 columns on mobile, 4 above tablet',
  code: source( /*#__PURE__*/_jsx(Tiles, {
    space: "small",
    columns: {
      mobile: 2,
      tablet: 4
    }
  }, void 0, /*#__PURE__*/_jsx(Placeholder, {
    height: 48
  }), /*#__PURE__*/_jsx(Placeholder, {
    height: 48
  }), /*#__PURE__*/_jsx(Placeholder, {
    height: 48
  }), /*#__PURE__*/_jsx(Placeholder, {
    height: 48
  }), /*#__PURE__*/_jsx(Placeholder, {
    height: 48
  }), /*#__PURE__*/_jsx(Placeholder, {
    height: 48
  })))
}, {
  name: 'Dividers in single column',
  code: source( /*#__PURE__*/_jsx(Tiles, {
    space: "small",
    columns: {
      mobile: 1,
      tablet: 2
    },
    dividers: true
  }, void 0, /*#__PURE__*/_jsx(Placeholder, {
    height: 48
  }), /*#__PURE__*/_jsx(Placeholder, {
    height: 48
  }), /*#__PURE__*/_jsx(Placeholder, {
    height: 48
  }), /*#__PURE__*/_jsx(Placeholder, {
    height: 48
  }), /*#__PURE__*/_jsx(Placeholder, {
    height: 48
  }), /*#__PURE__*/_jsx(Placeholder, {
    height: 48
  })))
}];