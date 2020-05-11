import { createContext, useContext } from 'react';
import { UseBoxStylesProps } from '../Box/useBoxStyles';
import { DividerProps } from '../Divider/Divider';
import { ResponsiveProp } from '../../utils/responsiveProp';
import { Align } from '../../utils/align';

interface StackContextValue {
  component: 'div' | 'li';
  space: UseBoxStylesProps['paddingBottom'];
  dividers: boolean | DividerProps['weight'];
  dividerHiddenOnMobile: boolean;
  dividerHiddenOnTablet: boolean;
  dividerHiddenOnDesktop: boolean;
  align: ResponsiveProp<Align>;
  index: number;
}
const StackContext = createContext<StackContextValue | null>(null);

export const StackContextProvider = StackContext.Provider;
export const useStackContext = () => useContext(StackContext);
