import * as __vanilla_filescope__ from '@vanilla-extract/css/fileScope';

__vanilla_filescope__.setFileScope("lib/themes/vars.css.ts", "braid-design-system");

import { createThemeContract } from '@vanilla-extract/css';
import makeVanillaTheme from './makeVanillaTheme';
import tokens from './docs/tokens';
export var vars = createThemeContract(makeVanillaTheme(tokens));

__vanilla_filescope__.endFileScope();