import React, { useMemo } from 'react';

import type { ButtonProps } from '../Button/Button';
import { type InlineProps, Inline } from '../Inline/Inline';

import ActionsContext from './ActionsContext';

export interface ActionsProps {
  size?: ButtonProps['size'];
  children: InlineProps['children'];
  data?: InlineProps['data'];
}

export const actionsSpace = 'xsmall';

export const Actions = ({ size, data, children }: ActionsProps) => {
  const contextValue = useMemo(() => ({ size }), [size]);

  return (
    <ActionsContext.Provider value={contextValue}>
      <Inline collapseBelow="tablet" space={actionsSpace} data={data}>
        {children}
      </Inline>
    </ActionsContext.Provider>
  );
};
