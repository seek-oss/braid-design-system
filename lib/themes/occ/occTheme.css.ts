import { createTheme } from '@vanilla-extract/css';
import { themeVars } from '../themeVars.css';
import makeNextTheme from '../makeNextTheme';

import tokens from './tokens';

export default createTheme(themeVars, makeNextTheme(tokens));
