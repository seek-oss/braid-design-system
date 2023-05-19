import React, { useMemo } from 'react';
import ActionsContext from './ActionsContext';
import { type InlineProps, Inline } from '../Inline/Inline';
import type { ButtonProps } from '../Button/Button';

export interface ActionsProps {
  size?: ButtonProps['size'];
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
