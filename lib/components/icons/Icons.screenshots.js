import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _jsx from "@babel/runtime/helpers/jsx";

let _Icons, _Icons2, _Icons3, _Icons4, _Text, _Stack;

import React from 'react';
import { Text, Heading, Inline, Button, Stack } from '../';
import { heading as headingSizes, text as textSizes, tone as tones } from '../../hooks/typography/typography.css';
import * as icons from './index';
const iconNames = Object.keys(icons).map(function (icon) {
  return icon;
});

const Icons = function Icons(_ref) {
  const tone = _ref.tone;
  return /* #__PURE__*/_jsx(Inline, {
    space: "small"
  }, void 0, iconNames.map(function (icon) {
    const IconComponent = icons[icon];
    return /* #__PURE__*/_jsx(IconComponent, {
      tone
    }, icon);
  }));
};

Icons.displayName = "Icons";
export var screenshots = {
  screenshotWidths: [320],
  examples: [{
    label: 'Default',
    Example: function Example() {
      return _Icons || (_Icons = /* #__PURE__*/_jsx(Icons, {}));
    }
  }, {
    label: 'Auto size (via TextContext)',
    Example: function Example() {
      const sizes = Object.keys(textSizes);
      return /* #__PURE__*/_jsx(Stack, {
        space: "large"
      }, void 0, sizes.map(function (size) {
        return /* #__PURE__*/_jsx(Stack, {
          space: "medium"
        }, size, /* #__PURE__*/_jsx(Text, {
          size
        }, void 0, size), /* #__PURE__*/_jsx(Text, {
          size
        }, void 0, _Icons2 || (_Icons2 = /* #__PURE__*/_jsx(Icons, {}))));
      }));
    }
  }, {
    label: 'Auto Size (via HeadingContext)',
    Example: function Example() {
      const headings = Object.keys(headingSizes);
      return /* #__PURE__*/_jsx(Stack, {
        space: "large"
      }, void 0, headings.sort().reverse().map(function (heading) {
        return /* #__PURE__*/_jsx(Stack, {
          space: "medium"
        }, heading, /* #__PURE__*/_jsx(Heading, {
          level: heading
        }, void 0, "Level ", heading), /* #__PURE__*/_jsx(Heading, {
          level: heading
        }, void 0, _Icons3 || (_Icons3 = /* #__PURE__*/_jsx(Icons, {}))));
      }));
    }
  }, {
    label: 'Auto Tone (via TextContext)',
    Example: function Example() {
      const iconTones = ['neutral'].concat(_toConsumableArray(Object.keys(tones))).sort();
      return /* #__PURE__*/_jsx(Stack, {
        space: "large"
      }, void 0, iconTones.map(function (tone) {
        return /* #__PURE__*/_jsx(Stack, {
          space: "medium"
        }, tone, /* #__PURE__*/_jsx(Text, {
          tone
        }, void 0, tone), /* #__PURE__*/_jsx(Text, {
          tone
        }, void 0, _Icons4 || (_Icons4 = /* #__PURE__*/_jsx(Icons, {}))));
      }));
    }
  }, {
    label: 'Override auto tone explicitly',
    Example: function Example() {
      return _Text || (_Text = /* #__PURE__*/_jsx(Text, {
        tone: "critical"
      }, void 0, "Critical text overridden to positive icons:", /* #__PURE__*/_jsx(Icons, {
        tone: "positive"
      })));
    }
  }, {
    label: 'Auto Tone with Background Contrast (via TextContext)',
    background: 'brand',
    Example: function Example() {
      return _Stack || (_Stack = /* #__PURE__*/_jsx(Stack, {
        space: "medium"
      }, void 0, /* #__PURE__*/_jsx(Text, {}, void 0, "Default:"), /* #__PURE__*/_jsx(Text, {}, void 0, /* #__PURE__*/_jsx(Icons, {})), /* #__PURE__*/_jsx(Text, {}, void 0, "Explicitly positive:"), /* #__PURE__*/_jsx(Text, {}, void 0, /* #__PURE__*/_jsx(Icons, {
        tone: "positive"
      }))));
    }
  }, {
    label: 'Alignment to text',
    Example: function Example() {
      return /* #__PURE__*/_jsx(Stack, {
        space: "small"
      }, void 0, iconNames.map(function (icon) {
        const IconComponent = icons[icon];
        return /* #__PURE__*/_jsx(Inline, {
          space: "medium"
        }, icon, /* #__PURE__*/_jsx(Text, {}, void 0, /* #__PURE__*/_jsx(IconComponent, {}), " Uppercase"), /* #__PURE__*/_jsx(Text, {}, void 0, "Lowercase ", /* #__PURE__*/_jsx(IconComponent, {
          alignY: "lowercase"
        })));
      }));
    }
  }, {
    label: 'Alignment to buttons',
    Example: function Example() {
      return /* #__PURE__*/_jsx(Stack, {
        space: "small"
      }, void 0, iconNames.map(function (icon) {
        const IconComponent = icons[icon];
        return /* #__PURE__*/_jsx(Inline, {
          space: "small"
        }, icon, /* #__PURE__*/_jsx(Button, {}, void 0, /* #__PURE__*/_jsx(IconComponent, {}), " Upper"), /* #__PURE__*/_jsx(Button, {}, void 0, "Lower ", /* #__PURE__*/_jsx(IconComponent, {
          alignY: "lowercase"
        })));
      }));
    }
  }]
};