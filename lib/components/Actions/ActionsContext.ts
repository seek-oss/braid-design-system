import { createContext } from 'react';
import { ButtonStyleProps } from '../Button/Button';

interface ActionsContextValue extends Pick<ButtonStyleProps, 'size'> {}

export default createContext<ActionsContextValue | null>(null);
