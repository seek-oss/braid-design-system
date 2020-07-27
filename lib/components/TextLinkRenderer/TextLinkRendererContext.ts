import { createContext } from 'react';

export default createContext<null | 'regular' | 'weak'>(null);
