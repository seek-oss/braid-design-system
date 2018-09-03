import React from 'react';
import Text from '../Text/Text';

const Bullet = props => (
  <Text
    component="li"
    paddingBottom="small"
    style={{ marginLeft: '1.3em' }}
    {...props}
  />
);

Bullet.displayName = 'Bullet';

export default Bullet;
