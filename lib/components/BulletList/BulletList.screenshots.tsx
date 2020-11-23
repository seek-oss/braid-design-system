import React from 'react';
import { ComponentScreenshot } from '../../../site/src/types';
import { Bullet, BulletList, TextLink } from '..';

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320],
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
      label: 'Xsmall Bullets',
      Example: () => (
        <BulletList size="xsmall">
          <Bullet>This is an xsmall bullet.</Bullet>
          <Bullet>This is an xsmall bullet.</Bullet>
          <Bullet>This is an xsmall bullet.</Bullet>
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
    {
      label: 'Secondary Tone',
      Example: () => (
        <BulletList tone="secondary">
          <Bullet>This is a secondary bullet.</Bullet>
          <Bullet>This is a secondary bullet.</Bullet>
          <Bullet>This is a secondary bullet.</Bullet>
        </BulletList>
      ),
    },
    {
      label: 'With TextLink',
      Example: () => (
        <BulletList>
          <Bullet>
            This is a text <TextLink href="#">link</TextLink>.
          </Bullet>
        </BulletList>
      ),
    },
  ],
};
