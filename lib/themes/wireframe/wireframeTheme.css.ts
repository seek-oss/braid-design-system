import { createTheme } from '@mattsjones/css-core';
import { themeVars } from '../themeVars.css';
import makeNextTheme from '../makeNextTheme';

import tokens from './tokens';

export default createTheme(themeVars, makeNextTheme(tokens));
