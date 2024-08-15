import { createContext } from 'react';

export const validColumnsComponents = ['div', 'span'] as const;

interface ColumnsContextValue {
  component: (typeof validColumnsComponents)[number];
}

export const ColumnsContext = createContext<ColumnsContextValue>({
  component: 'div',
});
