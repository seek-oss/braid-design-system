import { createContext } from 'react';

import type { ButtonProps } from '../Button/Button';

type ActionsContextValue = Pick<ButtonProps, 'size'>;

export default createContext<ActionsContextValue | null>(null);
