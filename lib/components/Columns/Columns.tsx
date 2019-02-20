import React, { ReactNode, Fragment } from 'react';
import Box from '../Box/Box';

export interface ColumnsProps {
  children: ReactNode;
}

const Columns: React.StatelessComponent<ColumnsProps> = ({ children }) => {
  return (
    <Box display={['block', 'flex']}>
      {React.Children.map(children, (child, index) => (
        <Fragment key={index}>
          <Box style={{ flex: 1 }}>hello</Box>
          {/* <Hidden mobile>
                    <Space size="small" />
                </Hidden> */}
        </Fragment>
      ))}
    </Box>
  );
};

export default Columns;
