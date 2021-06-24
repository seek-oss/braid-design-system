import * as __vanilla_filescope__ from '@vanilla-extract/css/fileScope';

__vanilla_filescope__.setFileScope("src/themes/wireframe/wireframeTheme.css.ts", "braid-design-system");

import { createTheme } from '@vanilla-extract/css';
import { vars } from '../vars.css';
import makeVanillaTheme from '../makeVanillaTheme';
import tokens from './tokens';
export default createTheme(vars, makeVanillaTheme(tokens), "default");

__vanilla_filescope__.endFileScope();