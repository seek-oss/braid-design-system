import { createContext } from 'react';
import type { TextStyleProps } from '../../css/typography';

export const TextContext = createContext<TextStyleProps | false>(false);
