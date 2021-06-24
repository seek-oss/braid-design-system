import * as __vanilla_filescope__ from '@vanilla-extract/css/fileScope';

__vanilla_filescope__.setFileScope("src/atoms/lineHeightContainer.css.ts", "braid-design-system");

import { styleVariants } from '@vanilla-extract/css';
import { responsiveStyle } from './responsiveStyle';
import { vars } from '../themes/vars.css';
export var lineHeightContainer = styleVariants(vars.textSize, function (_ref) {
  var mobile = _ref.mobile,
      tablet = _ref.tablet;
  return responsiveStyle({
    mobile: {
      height: mobile.lineHeight
    },
    tablet: {
      height: tablet.lineHeight
    }
  });
}, "lineHeightContainer");

__vanilla_filescope__.endFileScope();