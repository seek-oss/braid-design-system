import _jsx from "@babel/runtime/helpers/jsx";

var _Inline, _Placeholder, _Placeholder2, _Placeholder3, _Placeholder4, _Placeholder5, _Placeholder6, _Placeholder7, _Stack, _Stack2, _Inline2;

import React from 'react';
import { Placeholder } from '../private/Placeholder/Placeholder';
import { Inline, Stack, Strong, Text, TextLink } from '../';
import source from '../../utils/source.macro';
var docs = {
  category: 'Layout',
  Example: function Example() {
    return source(_Inline || (_Inline = /*#__PURE__*/_jsx(Inline, {
      space: "small"
    }, void 0, /*#__PURE__*/_jsx(Placeholder, {
      width: 20,
      height: 48
    }), /*#__PURE__*/_jsx(Placeholder, {
      width: 80,
      height: 48
    }), /*#__PURE__*/_jsx(Placeholder, {
      width: 40,
      height: 48
    }), /*#__PURE__*/_jsx(Placeholder, {
      width: 150,
      height: 48
    }), /*#__PURE__*/_jsx(Placeholder, {
      width: 120,
      height: 48
    }), /*#__PURE__*/_jsx(Placeholder, {
      width: 60,
      height: 48
    }), /*#__PURE__*/_jsx(Placeholder, {
      width: 40,
      height: 48
    }), /*#__PURE__*/_jsx(Placeholder, {
      width: 180,
      height: 48
    }), /*#__PURE__*/_jsx(Placeholder, {
      width: 100,
      height: 48
    }), /*#__PURE__*/_jsx(Placeholder, {
      width: 60,
      height: 48
    }), /*#__PURE__*/_jsx(Placeholder, {
      width: 120,
      height: 48
    }), /*#__PURE__*/_jsx(Placeholder, {
      width: 40,
      height: 48
    }))));
  },
  alternatives: [{
    name: 'Columns',
    description: 'For fine-grained control of widths, spacing and alignment.'
  }, {
    name: 'Tiles',
    description: 'For laying out content over many columns and rows.'
  }, {
    name: 'Box',
    description: 'For custom layouts.'
  }],
  additional: [{
    label: 'Spacing',
    description: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/_jsx(Text, {}, void 0, "The ", /*#__PURE__*/_jsx(TextLink, {
      href: "/foundations/layout#spacing"
    }, void 0, "spacing"), ' ', "between children can be adjusted using the ", /*#__PURE__*/_jsx(Strong, {}, void 0, "space"), ' ', "prop."), /*#__PURE__*/_jsx(Text, {}, void 0, "Responsive values are supported, e.g.", ' ', /*#__PURE__*/_jsx(Strong, {}, void 0, "space={{ mobile: 'small', tablet: 'medium', desktop: 'large' }}"))),
    Example: function Example() {
      return source( /*#__PURE__*/_jsx(Inline, {
        space: {
          mobile: 'small',
          tablet: 'medium',
          desktop: 'large'
        }
      }, void 0, _Placeholder || (_Placeholder = /*#__PURE__*/_jsx(Placeholder, {
        width: 48,
        height: 48
      })), _Placeholder2 || (_Placeholder2 = /*#__PURE__*/_jsx(Placeholder, {
        width: 48,
        height: 48
      })), _Placeholder3 || (_Placeholder3 = /*#__PURE__*/_jsx(Placeholder, {
        width: 48,
        height: 48
      })), _Placeholder4 || (_Placeholder4 = /*#__PURE__*/_jsx(Placeholder, {
        width: 48,
        height: 48
      })), _Placeholder5 || (_Placeholder5 = /*#__PURE__*/_jsx(Placeholder, {
        width: 48,
        height: 48
      })), _Placeholder6 || (_Placeholder6 = /*#__PURE__*/_jsx(Placeholder, {
        width: 48,
        height: 48
      })), _Placeholder7 || (_Placeholder7 = /*#__PURE__*/_jsx(Placeholder, {
        width: 48,
        height: 48
      }))));
    }
  }, {
    label: 'Vertical alignment',
    description: /*#__PURE__*/_jsx(Text, {}, void 0, "Items of varying height can be vertically aligned using the", ' ', /*#__PURE__*/_jsx(Strong, {}, void 0, "alignY"), " prop. Responsive values are supported."),
    Example: function Example() {
      return source(_Stack || (_Stack = /*#__PURE__*/_jsx(Stack, {
        space: "medium",
        dividers: true,
        align: "center"
      }, void 0, /*#__PURE__*/_jsx(Inline, {
        space: "small",
        alignY: "top"
      }, void 0, /*#__PURE__*/_jsx(Placeholder, {
        width: 60,
        height: 20
      }), /*#__PURE__*/_jsx(Placeholder, {
        width: 80,
        height: 60,
        label: "top"
      }), /*#__PURE__*/_jsx(Placeholder, {
        width: 60,
        height: 20
      })), /*#__PURE__*/_jsx(Inline, {
        space: "small",
        alignY: "center"
      }, void 0, /*#__PURE__*/_jsx(Placeholder, {
        width: 60,
        height: 20
      }), /*#__PURE__*/_jsx(Placeholder, {
        width: 80,
        height: 60,
        label: "center"
      }), /*#__PURE__*/_jsx(Placeholder, {
        width: 60,
        height: 20
      })), /*#__PURE__*/_jsx(Inline, {
        space: "small",
        alignY: "bottom"
      }, void 0, /*#__PURE__*/_jsx(Placeholder, {
        width: 60,
        height: 20
      }), /*#__PURE__*/_jsx(Placeholder, {
        width: 80,
        height: 60,
        label: "bottom"
      }), /*#__PURE__*/_jsx(Placeholder, {
        width: 60,
        height: 20
      })))));
    }
  }, {
    label: 'Horizontal alignment',
    description: /*#__PURE__*/_jsx(Text, {}, void 0, "Items can be aligned horiontally using the ", /*#__PURE__*/_jsx(Strong, {}, void 0, "align"), ' ', "prop. Responsive values are supported."),
    Example: function Example() {
      return source(_Stack2 || (_Stack2 = /*#__PURE__*/_jsx(Stack, {
        space: "medium",
        dividers: true
      }, void 0, /*#__PURE__*/_jsx(Inline, {
        space: "small",
        align: "left"
      }, void 0, /*#__PURE__*/_jsx(Placeholder, {
        width: 60,
        height: 50,
        label: "left"
      }), /*#__PURE__*/_jsx(Placeholder, {
        width: 80,
        height: 50
      }), /*#__PURE__*/_jsx(Placeholder, {
        width: 60,
        height: 50
      })), /*#__PURE__*/_jsx(Inline, {
        space: "small",
        align: "center"
      }, void 0, /*#__PURE__*/_jsx(Placeholder, {
        width: 60,
        height: 50
      }), /*#__PURE__*/_jsx(Placeholder, {
        width: 80,
        height: 50,
        label: "center"
      }), /*#__PURE__*/_jsx(Placeholder, {
        width: 60,
        height: 50
      })), /*#__PURE__*/_jsx(Inline, {
        space: "small",
        align: "right"
      }, void 0, /*#__PURE__*/_jsx(Placeholder, {
        width: 60,
        height: 50
      }), /*#__PURE__*/_jsx(Placeholder, {
        width: 80,
        height: 50
      }), /*#__PURE__*/_jsx(Placeholder, {
        width: 60,
        height: 50,
        label: "right"
      })))));
    }
  }, {
    label: 'Collapsing across breakpoints',
    description: /*#__PURE__*/_jsx(Text, {}, void 0, "Items can be collapsed into a single vertical stack responsively using the ", /*#__PURE__*/_jsx(Strong, {}, void 0, "collapseBelow"), " prop. The following will collapse the list of items into a vertical stack below ", /*#__PURE__*/_jsx(Strong, {}, void 0, "tablet"), "."),
    Example: function Example() {
      return source(_Inline2 || (_Inline2 = /*#__PURE__*/_jsx(Inline, {
        space: "small",
        collapseBelow: "tablet"
      }, void 0, /*#__PURE__*/_jsx(Placeholder, {
        width: 48,
        height: 48
      }), /*#__PURE__*/_jsx(Placeholder, {
        width: 48,
        height: 48
      }), /*#__PURE__*/_jsx(Placeholder, {
        width: 48,
        height: 48
      }), /*#__PURE__*/_jsx(Placeholder, {
        width: 48,
        height: 48
      }), /*#__PURE__*/_jsx(Placeholder, {
        width: 48,
        height: 48
      }), /*#__PURE__*/_jsx(Placeholder, {
        width: 48,
        height: 48
      }))));
    }
  }]
};
export default docs;