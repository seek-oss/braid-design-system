import React, { ReactNode, Fragment } from 'react';
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
          display={['block', 'flex']}
          marginLeft={["medium", index ? "none" : "medium"]}
          marginRight={["medium", "medium"]}
          style={{ flex: 1 }}
          >
          {child}
        </Box>
      ))}
    </Box>
  );
};

export default Columns;
