import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Bullet, BulletList, TextLink } from '../';

const docs: ComponentDocs = {
  category: 'Content',
  migrationGuide: true,
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
      docsSite: false,
      Example: () => (
        <BulletList>
          <Bullet>
            This is a text <TextLink>link</TextLink>.
          </Bullet>
          <Bullet>
            This is a secondary <TextLink>link</TextLink>.
          </Bullet>
          <Bullet>
            This is a secondary <TextLink>link</TextLink>.
          </Bullet>
        </BulletList>
      ),
    },
  ],
  snippets: [
    {
      name: 'XSmall Space',
      code: (
        <BulletList space="xsmall">
          <Bullet>Bullet</Bullet>
          <Bullet>Bullet</Bullet>
          <Bullet>Bullet</Bullet>
        </BulletList>
      ),
    },
    {
      name: 'Small Space',
      code: (
        <BulletList space="small">
          <Bullet>Bullet</Bullet>
          <Bullet>Bullet</Bullet>
          <Bullet>Bullet</Bullet>
        </BulletList>
      ),
    },
    {
      name: 'Medium Space',
      code: (
        <BulletList space="medium">
          <Bullet>Bullet</Bullet>
          <Bullet>Bullet</Bullet>
          <Bullet>Bullet</Bullet>
        </BulletList>
      ),
    },
    {
      name: 'Secondary',
      code: (
        <BulletList space="medium" tone="secondary">
          <Bullet>Bullet</Bullet>
          <Bullet>Bullet</Bullet>
          <Bullet>Bullet</Bullet>
        </BulletList>
      ),
    },
  ],
};

export default docs;
