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
    {
      label: 'Small Bullets',
      Example: () => (
        <BulletList size="small">
          <Bullet>This is a small bullet.</Bullet>
          <Bullet>This is a small bullet.</Bullet>
          <Bullet>This is a small bullet.</Bullet>
        </BulletList>
      ),
    },
    {
      label: 'Large Bullets',
      Example: () => (
        <BulletList size="large">
          <Bullet>This is a large bullet.</Bullet>
          <Bullet>This is a large bullet.</Bullet>
          <Bullet>This is a large bullet.</Bullet>
        </BulletList>
      ),
    },
    {
      label: 'Decreased space between Bullets',
      Example: () => (
        <BulletList space="xsmall">
          <Bullet>Decreased space below bullet.</Bullet>
          <Bullet>Decreased space below bullet.</Bullet>
          <Bullet>Decreased space below bullet.</Bullet>
        </BulletList>
      ),
    },
    {
      label: 'Increased space between Bullets',
      Example: () => (
        <BulletList space="xlarge">
          <Bullet>Increased space below bullet.</Bullet>
          <Bullet>Increased space below bullet.</Bullet>
          <Bullet>Increased space below bullet.</Bullet>
        </BulletList>
      ),
    },
  ],
};

export default docs;
