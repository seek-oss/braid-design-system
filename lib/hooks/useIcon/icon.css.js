import * as __vanilla_filescope__ from '@vanilla-extract/css/fileScope';

__vanilla_filescope__.setFileScope("lib/hooks/useIcon/icon.css.ts", "braid-design-system");

import { style, styleVariants } from '@vanilla-extract/css';
import { responsiveStyle } from '../../atoms/responsiveStyle';
import { vars } from '../../themes/vars.css';
export var size = style({
  width: '1em',
  height: '1em'
}, "size");
export var inline = style({
  verticalAlign: 'middle'
}, "inline");
var uppercaseNudge = -0.105;
var lowercaseNudge = uppercaseNudge + 0.04;
var verticalCorrection = 0.06;
export var alignY = {
  uppercase: styleVariants({
    none: {
      top: "".concat(uppercaseNudge, "em")
    },
    up: {
      top: "".concat(uppercaseNudge - verticalCorrection, "em")
    },
    down: {
      top: "".concat(uppercaseNudge + verticalCorrection, "em")
    }
  }, "alignY_uppercase"),
  lowercase: styleVariants({
    none: {
      top: "".concat(lowercaseNudge, "em")
    },
    up: {
      top: "".concat(lowercaseNudge - verticalCorrection, "em")
    },
    down: {
      top: "".concat(lowercaseNudge + verticalCorrection, "em")
    }
  }, "alignY_lowercase")
};
export var blockWidths = styleVariants(vars.textSize, function (_ref) {
  var mobile = _ref.mobile,
      tablet = _ref.tablet;
  return responsiveStyle({
    mobile: {
      width: mobile.lineHeight
    },
    tablet: {
      width: tablet.lineHeight
    }
  });
}, "blockWidths");

__vanilla_filescope__.endFileScope();