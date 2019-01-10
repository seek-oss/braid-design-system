import { createContext } from 'react';
import { Theme } from './../../themes/theme';

export default createContext<Theme | null>(null);
