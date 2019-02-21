import React, { Children, Component, ReactNode } from 'react';
import Box from '../Box/Box';
import styles from './Columns.css.js';

export interface ColumnsProps {
  children: ReactNode;
}

export default class Columns extends Component<ColumnsProps> {
  static displayName = 'Columns';

  render() {
    const { children } = this.props;

    return (
      <Box display={['block', 'flex']}>
        {Children.map(children, (child, index) => (
          <Box
            key={index}
            marginLeft={['none', index ? 'medium' : 'none']}
            className={styles.column}
          >
            {child}
          </Box>
        ))}
      </Box>
    );
  }
}
