import { createTheme } from '@vanilla-extract/css';
import { themeVars } from '../themeVars.css';
import makeVanillaTheme from '../makeVanillaTheme';

import tokens from './tokens';

export default createTheme(themeVars, makeVanillaTheme(tokens));
