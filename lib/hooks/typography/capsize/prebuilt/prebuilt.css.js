import * as __vanilla_filescope__ from '@vanilla-extract/css/fileScope';

__vanilla_filescope__.setFileScope("lib/hooks/typography/capsize/prebuilt/prebuilt.css.ts", "braid-design-system");

import { createThemeContract, style } from '@vanilla-extract/css';
import { createCss } from '../core';
export var vars = createThemeContract({
  fontSize: null,
  lineHeight: null,
  capHeightTrim: null,
  baselineTrim: null
});
export var className = style(createCss({
  fontSize: vars.fontSize,
  lineHeight: vars.lineHeight,
  capHeightTrim: vars.capHeightTrim,
  baselineTrim: vars.baselineTrim
}), "className");

__vanilla_filescope__.endFileScope();