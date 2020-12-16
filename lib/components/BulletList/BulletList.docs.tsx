import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Bullet, BulletList, Text, TextLink } from '..';
import source from '../../utils/source.macro';

const docs: ComponentDocs = {
  category: 'Content',
  deprecationWarning: (
    <Text weight="medium">
      This component has been deprecated. Use{' '}
      <TextLink href="/components/List">List</TextLink> instead.
    </Text>
  ),
  migrationGuide: false,
  Example: () =>
    source(
      <BulletList>
        <Bullet>This is a bullet.</Bullet>
        <Bullet>This is a bullet.</Bullet>
        <Bullet>This is a bullet.</Bullet>
      </BulletList>,
    ),
  alternatives: [],
};

export default docs;
