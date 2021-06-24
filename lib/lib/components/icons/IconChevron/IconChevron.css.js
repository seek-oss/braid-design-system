import * as __vanilla_filescope__ from '@vanilla-extract/css/fileScope';

__vanilla_filescope__.setFileScope("src/components/icons/IconChevron/IconChevron.css.ts", "braid-design-system");

import { style } from '@vanilla-extract/css';
export var root = style({
  transition: 'transform 0.3s ease',
  transformOrigin: '50% 50%'
}, "root");
export var left = style({
  transform: 'rotate(90deg)'
}, "left");
export var up = style({
  transform: 'rotate(180deg)'
}, "up");
export var right = style({
  transform: 'rotate(270deg)'
}, "right");

__vanilla_filescope__.endFileScope();