import { createContext } from 'react';
import { UseTextProps } from '../../hooks/typography';

type DefaultTextTone = NonNullable<Exclude<UseTextProps['tone'], 'neutral'>>;

export const DefaultTextToneContext = createContext<DefaultTextTone | null>(
  null,
);
