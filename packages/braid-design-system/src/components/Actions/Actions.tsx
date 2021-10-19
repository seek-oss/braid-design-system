import React, { useMemo } from 'react';
import ActionsContext from './ActionsContext';
import type { InlineProps } from '../Inline/Inline';
import { Inline } from '../Inline/Inline';
import type { PrivateButtonRendererProps } from '../ButtonRenderer/ButtonRenderer';

export interface ActionsProps {
  size?: PrivateButtonRendererProps['size'];
  children: InlineProps['children'];
  data?: InlineProps['data'];
}

export const Actions = ({ size, data, children }: ActionsProps) => {
  const contextValue = useMemo(() => ({ size }), [size]);

  return (
    <ActionsContext.Provider value={contextValue}>
      <Inline collapseBelow="tablet" space="xsmall" data={data}>
        {children}
      </Inline>
    </ActionsContext.Provider>
  );
};
