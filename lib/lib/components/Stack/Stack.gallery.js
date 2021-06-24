import _jsx from "@babel/runtime/helpers/jsx";

var _Stack, _Stack2, _Stack3, _Stack4, _Stack5, _Stack6, _Stack7;

import React from 'react';
import { Stack, Hidden } from '../';
import { Placeholder } from '../private/Placeholder/Placeholder';
import source from '../../utils/source.macro';
export var galleryItems = [{
  label: 'Spacing',
  Example: function Example() {
    return source(_Stack || (_Stack = /*#__PURE__*/_jsx(Stack, {
      space: "small"
    }, void 0, /*#__PURE__*/_jsx(Placeholder, {
      height: 48
    }), /*#__PURE__*/_jsx(Placeholder, {
      height: 48
    }), /*#__PURE__*/_jsx(Placeholder, {
      height: 48
    }))));
  }
}, {
  label: 'Horizontal align left',
  Example: function Example() {
    return source(_Stack2 || (_Stack2 = /*#__PURE__*/_jsx(Stack, {
      space: "small",
      align: "left"
    }, void 0, /*#__PURE__*/_jsx(Placeholder, {
      width: 80,
      height: 40,
      label: "left"
    }), /*#__PURE__*/_jsx(Placeholder, {
      width: 80,
      height: 40
    }), /*#__PURE__*/_jsx(Placeholder, {
      width: 80,
      height: 40
    }))));
  }
}, {
  label: 'Horizontal align center',
  Example: function Example() {
    return source(_Stack3 || (_Stack3 = /*#__PURE__*/_jsx(Stack, {
      space: "small",
      align: "center"
    }, void 0, /*#__PURE__*/_jsx(Placeholder, {
      width: 80,
      height: 40
    }), /*#__PURE__*/_jsx(Placeholder, {
      width: 80,
      height: 40,
      label: "center"
    }), /*#__PURE__*/_jsx(Placeholder, {
      width: 80,
      height: 40
    }))));
  }
}, {
  label: 'Horizontal align right',
  Example: function Example() {
    return source(_Stack4 || (_Stack4 = /*#__PURE__*/_jsx(Stack, {
      space: "small",
      align: "right"
    }, void 0, /*#__PURE__*/_jsx(Placeholder, {
      width: 80,
      height: 40
    }), /*#__PURE__*/_jsx(Placeholder, {
      width: 80,
      height: 40
    }), /*#__PURE__*/_jsx(Placeholder, {
      width: 80,
      height: 40,
      label: "right"
    }))));
  }
}, {
  label: 'Dividers',
  Example: function Example() {
    return source(_Stack5 || (_Stack5 = /*#__PURE__*/_jsx(Stack, {
      space: "gutter",
      dividers: true
    }, void 0, /*#__PURE__*/_jsx(Placeholder, {
      height: 40
    }), /*#__PURE__*/_jsx(Placeholder, {
      height: 40
    }), /*#__PURE__*/_jsx(Placeholder, {
      height: 40
    }))));
  }
}, {
  label: 'Strong dividers',
  Example: function Example() {
    return source(_Stack6 || (_Stack6 = /*#__PURE__*/_jsx(Stack, {
      space: "gutter",
      dividers: "strong"
    }, void 0, /*#__PURE__*/_jsx(Placeholder, {
      height: 40
    }), /*#__PURE__*/_jsx(Placeholder, {
      height: 40
    }), /*#__PURE__*/_jsx(Placeholder, {
      height: 40
    }))));
  }
}, {
  label: 'Responsively hiding stack items',
  Example: function Example() {
    return source(_Stack7 || (_Stack7 = /*#__PURE__*/_jsx(Stack, {
      space: "gutter"
    }, void 0, /*#__PURE__*/_jsx(Placeholder, {
      height: 40,
      label: "1"
    }), /*#__PURE__*/_jsx(Hidden, {
      below: "tablet"
    }, void 0, /*#__PURE__*/_jsx(Placeholder, {
      height: 40,
      label: "2"
    })), /*#__PURE__*/_jsx(Hidden, {
      above: "mobile"
    }, void 0, /*#__PURE__*/_jsx(Placeholder, {
      height: 40,
      label: "3"
    })), /*#__PURE__*/_jsx(Placeholder, {
      height: 40,
      label: "4"
    }))));
  }
}];