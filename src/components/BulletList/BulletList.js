import React from 'react';
import Box from '../Box/Box';

const BulletList = props => (
  <Box
    component="ul"
    marginTop="none"
    marginBottom="none"
    paddingLeft="none"
    {...props}
  />
);

BulletList.displayName = 'BulletList';

export default BulletList;
