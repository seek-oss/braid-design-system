import React from 'react';
import Bullet from './Bullet';
import BulletList from '../BulletList/BulletList';
import { ComponentDocs } from '../../../docs/src/types';

const docs: ComponentDocs = {
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

export default docs;
