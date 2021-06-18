import React from 'react';
import { Alert, Text, TextLink } from '../lib/components';

export const VanillaMigrationBanner = () => (
  <Alert tone="info">
    <Text weight="medium">
      If you’re migrating from{' '}
      <TextLink href="https://seek-oss.github.io/treat">treat</TextLink>, check
      out our{' '}
      <TextLink href="https://github.com/seek-oss/braid-design-system/blob/master/docs/treat%20to%20vanilla-extract%20migration.md">
        treat to vanilla-extract migration guide.
      </TextLink>
    </Text>
  </Alert>
);
