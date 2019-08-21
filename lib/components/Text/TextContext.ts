import { createContext } from 'react';
import { UseTextProps } from '../../hooks/typography';

const textContext = createContext<UseTextProps | false>(false);

export default textContext;
