import { createContext } from 'react';
import { UseTextProps } from '../../hooks/typography';

export const TextContext = createContext<UseTextProps | false>(false);
