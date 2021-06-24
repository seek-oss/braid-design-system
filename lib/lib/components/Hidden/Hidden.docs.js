import _jsx from "@babel/runtime/helpers/jsx";

var _Stack, _Stack2, _Hidden;

import React from 'react';
import source from '../../utils/source.macro';
import { Hidden } from './Hidden';
import { Text } from '../Text/Text';
import { Stack } from '../Stack/Stack';
import { Strong } from '../Strong/Strong';
import { Placeholder } from '../../playroom/components';
var docs = {
  category: 'Layout',
  Example: function Example() {
    return source(_Stack || (_Stack = /*#__PURE__*/_jsx(Stack, {
      space: "small"
    }, void 0, /*#__PURE__*/_jsx(Hidden, {
      below: "desktop"
    }, void 0, /*#__PURE__*/_jsx(Placeholder, {
      label: "1. Hidden below desktop",
      height: 60
    })), /*#__PURE__*/_jsx(Hidden, {
      below: "tablet"
    }, void 0, /*#__PURE__*/_jsx(Placeholder, {
      label: "2. Hidden below tablet",
      height: 60
    })), /*#__PURE__*/_jsx(Hidden, {
      above: "mobile"
    }, void 0, /*#__PURE__*/_jsx(Placeholder, {
      label: "3. Hidden above mobile",
      height: 60
    })), /*#__PURE__*/_jsx(Hidden, {
      above: "tablet"
    }, void 0, /*#__PURE__*/_jsx(Placeholder, {
      label: "4. Hidden above tablet",
      height: 60
    })), /*#__PURE__*/_jsx(Hidden, {
      print: true
    }, void 0, /*#__PURE__*/_jsx(Placeholder, {
      label: "5. Hidden on print",
      height: 60
    })))));
  },
  alternatives: [{
    name: 'HiddenVisually',
    description: 'For making content available to screen readers.'
  }],
  additional: [{
    label: 'Hiding responsively',
    description: /*#__PURE__*/_jsx(Text, {}, void 0, "You can hide content responsively via the ", /*#__PURE__*/_jsx(Strong, {}, void 0, "above"), " and", ' ', /*#__PURE__*/_jsx(Strong, {}, void 0, "below"), " props which accept a breakpoint name, i.e.", ' ', /*#__PURE__*/_jsx(Strong, {}, void 0, "mobile"), ", ", /*#__PURE__*/_jsx(Strong, {}, void 0, "tablet"), " or", ' ', /*#__PURE__*/_jsx(Strong, {}, void 0, "desktop"), "."),
    Example: function Example() {
      return source(_Stack2 || (_Stack2 = /*#__PURE__*/_jsx(Stack, {
        space: "small"
      }, void 0, /*#__PURE__*/_jsx(Hidden, {
        below: "desktop"
      }, void 0, /*#__PURE__*/_jsx(Placeholder, {
        label: "1. Hidden below desktop",
        height: 60
      })), /*#__PURE__*/_jsx(Hidden, {
        below: "tablet"
      }, void 0, /*#__PURE__*/_jsx(Placeholder, {
        label: "2. Hidden below tablet",
        height: 60
      })), /*#__PURE__*/_jsx(Hidden, {
        above: "mobile"
      }, void 0, /*#__PURE__*/_jsx(Placeholder, {
        label: "3. Hidden above mobile",
        height: 60
      })), /*#__PURE__*/_jsx(Hidden, {
        above: "tablet"
      }, void 0, /*#__PURE__*/_jsx(Placeholder, {
        label: "4. Hidden above tablet",
        height: 60
      })))));
    }
  }, {
    label: 'Hiding on print',
    description: /*#__PURE__*/_jsx(Text, {}, void 0, "You can hide content on print via the ", /*#__PURE__*/_jsx(Strong, {}, void 0, "print"), " boolean prop."),
    Example: function Example() {
      return source(_Hidden || (_Hidden = /*#__PURE__*/_jsx(Hidden, {
        print: true
      }, void 0, /*#__PURE__*/_jsx(Placeholder, {
        label: "Hidden on print",
        height: 60
      }))));
    }
  }]
};
export default docs;