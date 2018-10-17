import React from 'react';
import Bullet from './Bullet';
import BulletList from '../BulletList/BulletList';

export default {
  component: Bullet,
  examples: [
    {
      label: 'Standard Bullets',
      render: () => (
        <BulletList>
          <Bullet>This is a bullet.</Bullet>
          <Bullet>This is a bullet.</Bullet>
          <Bullet>This is a bullet.</Bullet>
        </BulletList>
      )
    }
  ]
};
