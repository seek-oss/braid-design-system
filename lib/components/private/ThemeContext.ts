import { createContext } from 'react';
import { Theme } from './../../themes/theme';

const context = createContext<Theme | null>(null);
context.displayName = 'Theme';

export default context;
