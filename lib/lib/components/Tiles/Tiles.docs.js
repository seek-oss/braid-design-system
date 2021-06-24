import _jsx from "@babel/runtime/helpers/jsx";

var _Tiles, _Placeholder, _Placeholder2, _Placeholder3, _Placeholder4, _Placeholder5, _Placeholder6, _Placeholder7, _Placeholder8, _Placeholder9, _Placeholder10, _Tiles2, _Tiles3;

import React from 'react';
import { Tiles, Text } from '../';
import { Placeholder } from '../private/Placeholder/Placeholder';
import source from '../../utils/source.macro';
import { Strong } from '../Strong/Strong';
var docs = {
  category: 'Layout',
  Example: function Example() {
    return source(_Tiles || (_Tiles = /*#__PURE__*/_jsx(Tiles, {
      columns: 3,
      space: "small"
    }, void 0, /*#__PURE__*/_jsx(Placeholder, {
      height: 80
    }), /*#__PURE__*/_jsx(Placeholder, {
      height: 80
    }), /*#__PURE__*/_jsx(Placeholder, {
      height: 80
    }), /*#__PURE__*/_jsx(Placeholder, {
      height: 80
    }), /*#__PURE__*/_jsx(Placeholder, {
      height: 80
    }), /*#__PURE__*/_jsx(Placeholder, {
      height: 80
    }), /*#__PURE__*/_jsx(Placeholder, {
      height: 80
    }), /*#__PURE__*/_jsx(Placeholder, {
      height: 80
    }), /*#__PURE__*/_jsx(Placeholder, {
      height: 80
    }))));
  },
  alternatives: [{
    name: 'Columns',
    description: 'For fine-grained control of widths, spacing and alignment.'
  }, {
    name: 'Inline',
    description: 'For fine-grained control of spacing and alignment.'
  }, {
    name: 'Box',
    description: 'For custom layouts.'
  }],
  additional: [{
    label: 'Number of columns',
    description: /*#__PURE__*/_jsx(Text, {}, void 0, "The number of tiles in each row. Accepts a number from 1 to 5, also supporting responsive values, e.g.", ' ', /*#__PURE__*/_jsx(Strong, {}, void 0, 'columns={{ mobile: 2, tablet: 3, desktop: 4 }}')),
    Example: function Example() {
      return source( /*#__PURE__*/_jsx(Tiles, {
        space: "small",
        columns: {
          mobile: 2,
          tablet: 3,
          desktop: 4
        }
      }, void 0, _Placeholder || (_Placeholder = /*#__PURE__*/_jsx(Placeholder, {
        height: 40
      })), _Placeholder2 || (_Placeholder2 = /*#__PURE__*/_jsx(Placeholder, {
        height: 40
      })), _Placeholder3 || (_Placeholder3 = /*#__PURE__*/_jsx(Placeholder, {
        height: 40
      })), _Placeholder4 || (_Placeholder4 = /*#__PURE__*/_jsx(Placeholder, {
        height: 40
      })), _Placeholder5 || (_Placeholder5 = /*#__PURE__*/_jsx(Placeholder, {
        height: 40
      })), _Placeholder6 || (_Placeholder6 = /*#__PURE__*/_jsx(Placeholder, {
        height: 40
      })), _Placeholder7 || (_Placeholder7 = /*#__PURE__*/_jsx(Placeholder, {
        height: 40
      })), _Placeholder8 || (_Placeholder8 = /*#__PURE__*/_jsx(Placeholder, {
        height: 40
      })), _Placeholder9 || (_Placeholder9 = /*#__PURE__*/_jsx(Placeholder, {
        height: 40
      })), _Placeholder10 || (_Placeholder10 = /*#__PURE__*/_jsx(Placeholder, {
        height: 40
      }))));
    }
  }, {
    label: 'Space between tiles',
    description: /*#__PURE__*/_jsx(Text, {}, void 0, "Control the amount of space between each tile using the", ' ', /*#__PURE__*/_jsx(Strong, {}, void 0, "space"), " prop, also supporting responsive values, e.g.", ' ', /*#__PURE__*/_jsx(Strong, {}, void 0, "space={{ mobile: 'small', tablet: 'medium', desktop: 'large' }}")),
    Example: function Example() {
      return source(_Tiles2 || (_Tiles2 = /*#__PURE__*/_jsx(Tiles, {
        space: "large",
        columns: 3
      }, void 0, /*#__PURE__*/_jsx(Placeholder, {
        height: 40
      }), /*#__PURE__*/_jsx(Placeholder, {
        height: 40
      }), /*#__PURE__*/_jsx(Placeholder, {
        height: 40
      }), /*#__PURE__*/_jsx(Placeholder, {
        height: 40
      }), /*#__PURE__*/_jsx(Placeholder, {
        height: 40
      }), /*#__PURE__*/_jsx(Placeholder, {
        height: 40
      }), /*#__PURE__*/_jsx(Placeholder, {
        height: 40
      }), /*#__PURE__*/_jsx(Placeholder, {
        height: 40
      }), /*#__PURE__*/_jsx(Placeholder, {
        height: 40
      }))));
    }
  }, {
    label: 'Dividers',
    description: /*#__PURE__*/_jsx(Text, {}, void 0, "When in a single column, dividers can be placed between each tile using the ", /*#__PURE__*/_jsx(Strong, {}, void 0, "dividers"), " prop. Supports both", ' ', /*#__PURE__*/_jsx(Strong, {}, void 0, "regular"), " and ", /*#__PURE__*/_jsx(Strong, {}, void 0, "strong"), " variants."),
    Example: function Example() {
      return source(_Tiles3 || (_Tiles3 = /*#__PURE__*/_jsx(Tiles, {
        space: "medium",
        columns: 1,
        dividers: true
      }, void 0, /*#__PURE__*/_jsx(Placeholder, {
        height: 80
      }), /*#__PURE__*/_jsx(Placeholder, {
        height: 80
      }), /*#__PURE__*/_jsx(Placeholder, {
        height: 80
      }))));
    }
  }]
};
export default docs;