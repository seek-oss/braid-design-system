import React, { Component, Children, ReactNode } from 'react';
import { ActionsProvider } from './ActionsContext';
import Box from '../Box/Box';

export interface ActionsProps {
  children: ReactNode;
}

export default class Actions extends Component<ActionsProps> {
  static displayName = 'Actions';

  render() {
    const { children } = this.props;

    return (
      <ActionsProvider value={true}>
        <Box display="flex" flexDirection={['column', 'row']}>
          {Children.map(children, (child, index) =>
            index === 0 ? (
              <div>{child}</div>
            ) : (
              <Box
                paddingLeft={['none', 'xsmall']}
                paddingTop={['xsmall', 'none']}
              >
                {child}
              </Box>
            ),
          )}
        </Box>
      </ActionsProvider>
    );
  }
}
