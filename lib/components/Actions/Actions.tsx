import React from 'react';
import ActionsContext from './ActionsContext';
import { Inline, InlineProps } from '../Inline/Inline';

export interface ActionsProps {
  children: InlineProps['children'];
}

export const Actions = ({ children }: ActionsProps) => (
  <ActionsContext.Provider value={true}>
    <Inline collapseBelow="tablet" space="xsmall">
      {children}
    </Inline>
  </ActionsContext.Provider>
);
