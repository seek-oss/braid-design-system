import { createContext } from 'react';
import type { ButtonProps } from '../Button/Button';

interface ActionsContextValue extends Pick<ButtonProps, 'size'> {}

export default createContext<ActionsContextValue | null>(null);
