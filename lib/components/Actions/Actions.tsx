import React, { Children, ReactNode } from 'react';
import ActionsContext from './ActionsContext';
import { Box } from '../Box/Box';

export interface ActionsProps {
  children: ReactNode;
}

export const Actions = ({ children }: ActionsProps) => (
  <ActionsContext.Provider value={true}>
    <Box display="flex" flexDirection={['column', 'row']}>
      {Children.map(children, (child, index) =>
        index === 0 ? (
          <div>{child}</div>
        ) : (
          <Box paddingLeft={['none', 'xsmall']} paddingTop={['xsmall', 'none']}>
            {child}
          </Box>
        ),
      )}
    </Box>
  </ActionsContext.Provider>
);
