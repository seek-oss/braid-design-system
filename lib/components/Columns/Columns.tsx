import React, { Component, Children, ReactElement, createContext } from 'react';
import Box from '../Box/Box';
import { ColumnProps } from '../Column/Column';

export const ColumnsContext = createContext({ index: -1 });

export interface ColumnsProps {
  children: Array<ReactElement<ColumnProps>> | ReactElement<ColumnProps>;
}

export default class Columns extends Component<ColumnsProps> {
  static displayName = 'Columns';

  render() {
    const { children } = this.props;

    return (
      <Box display={['block', 'flex']}>
        {Children.map(children, (child, index) => (
          <ColumnsContext.Provider value={{ index }}>
            {child}
          </ColumnsContext.Provider>
        ))}
      </Box>
    );
  }
}
