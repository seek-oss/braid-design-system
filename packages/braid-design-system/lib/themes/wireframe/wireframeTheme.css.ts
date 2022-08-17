import { createTheme } from '@vanilla-extract/css';
import { vars } from '../vars.css';
import makeVanillaTheme from '../makeVanillaTheme';

import tokens from './tokens';

export default createTheme(vars, makeVanillaTheme(tokens));
