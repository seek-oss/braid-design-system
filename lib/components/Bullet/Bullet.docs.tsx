import React from 'react';
import { ComponentDocs } from '../../../docs/src/types';
import { Bullet } from './Bullet';
import { BulletList } from '../BulletList/BulletList';

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
      ),
    },
  ],
};

export default docs;
