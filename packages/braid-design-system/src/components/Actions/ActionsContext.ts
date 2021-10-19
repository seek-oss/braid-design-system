import { createContext } from 'react';
import type { PrivateButtonRendererProps } from '../ButtonRenderer/ButtonRenderer';

interface ActionsContextValue
  extends Pick<PrivateButtonRendererProps, 'size'> {}

export default createContext<ActionsContextValue | null>(null);
