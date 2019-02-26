import React, { Component, ReactNode } from 'react';
import { ColumnsContext } from '../Columns/Columns';
import Box from '../Box/Box';
import styles from './Column.css.js';

export interface ColumnProps {
  children: ReactNode;
}

export default class Column extends Component<ColumnProps> {
  static displayName = 'Column';

  render() {
    const { children } = this.props;

    return (
      <ColumnsContext.Consumer>
        {({ index }) => (
          <Box
            marginLeft={['none', index === 0 ? 'none' : 'large']}
            className={styles.column}
          >
            {children}
          </Box>
        )}
      </ColumnsContext.Consumer>
    );
  }
}
