import * as __vanilla_filescope__ from '@vanilla-extract/css/fileScope';

__vanilla_filescope__.setFileScope("lib/components/Autosuggest/Autosuggest.css.ts", "braid-design-system");

import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { responsiveStyle } from '../../atoms/responsiveStyle';
import { vars } from '../../themes/vars.css';
export var backdrop = style({
  width: '100vw',
  height: '100vh',
  background: 'black'
}, "backdrop");
export var backdropVisible = style({
  opacity: 0.4
}, "backdropVisible");

var calcMenuHeight = function calcMenuHeight(numSuggestions) {
  return calc(vars.touchableSize).multiply(numSuggestions).add(vars.space.xxsmall).toString();
};

export var menu = style(responsiveStyle({
  mobile: {
    maxHeight: calcMenuHeight(6),
    overflowY: 'auto'
  },
  tablet: {
    maxHeight: calcMenuHeight(8)
  }
}), "menu");
export var groupHeading = style({
  textTransform: 'uppercase'
}, "groupHeading");

__vanilla_filescope__.endFileScope();