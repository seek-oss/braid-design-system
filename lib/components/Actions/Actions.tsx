import React, { useMemo } from 'react';
import ActionsContext from './ActionsContext';
import { Inline, InlineProps } from '../Inline/Inline';
import { PrivateButtonRendererProps } from '../ButtonRenderer/ButtonRenderer';

export interface ActionsProps {
  size?: PrivateButtonRendererProps['size'];
  children: InlineProps['children'];
}

export const Actions = ({ size, children }: ActionsProps) => {
  const contextValue = useMemo(() => ({ size }), [size]);

  return (
    <ActionsContext.Provider value={contextValue}>
      <Inline collapseBelow="tablet" space="xsmall">
        {children}
      </Inline>
    </ActionsContext.Provider>
  );
};
