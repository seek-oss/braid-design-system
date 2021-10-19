import { createContext } from 'react';
import type { UseTextProps } from '../../hooks/typography';

export const TextContext = createContext<UseTextProps | false>(false);
