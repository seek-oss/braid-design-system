import React, { ReactNode } from 'react';
import Box from '../Box/Box';

export interface ColumnsProps {
  children: ReactNode;
}

const Columns: React.StatelessComponent<ColumnsProps> = ({ children }) => {
  return (
    <Box display={['block', 'flex']}>
      {React.Children.map(children, (child, index) => (
        <Box
          key={index}
          marginLeft={['none', index ? 'medium' : 'none']}
          style={{ flexGrow: 1 }}
        >
          {child}
        </Box>
      ))}
    </Box>
  );
};

export default Columns;
