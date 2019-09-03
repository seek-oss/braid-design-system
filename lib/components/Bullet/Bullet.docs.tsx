import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Bullet } from './Bullet';
import { BulletList } from '../BulletList/BulletList';

const docs: ComponentDocs = {
  migrationGuide: true,
  examples: [
    {
      label: 'Standard Bullets',
      Example: () => (
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
