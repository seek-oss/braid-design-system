import * as __vanilla_filescope__ from '@vanilla-extract/css/fileScope';

__vanilla_filescope__.setFileScope("lib/components/MenuRenderer/MenuRenderer.css.ts", "braid-design-system");

import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { vars } from '../../themes/vars.css';
export var root = style({
  padding: '0.05px',
  lineHeight: 0
}, "root");
export var backdrop = style({
  width: '100vw',
  height: '100vh'
}, "backdrop");
export var menuIsClosed = style({
  transform: "translateY(".concat(calc(vars.grid).negate().multiply(2), ")"),
  visibility: 'hidden'
}, "menuIsClosed");

__vanilla_filescope__.endFileScope();