import React from 'react';
import Hidden from './Hidden';
import Text from '../Text/Text';

export default {
  component: Hidden,
  examples: [
    {
      label: 'Hidden on mobile',
      render: () => (
        <Hidden on="mobile">
          <Text>Hidden on mobile</Text>
        </Hidden>
      )
    },
    {
      label: 'Hidden on desktop',
      render: () => (
        <Hidden on="desktop">
          <Text>Hidden on desktop</Text>
        </Hidden>
      )
    },
    {
      label: 'Hidden on mobile (inline)',
      render: () => (
        <Text>
          This word is hidden on mobile:{' '}
          <Hidden inline on="mobile">
            Inline
          </Hidden>
        </Text>
      )
    },
    {
      label: 'Hidden on desktop (inline)',
      render: () => (
        <Text>
          This word is hidden on mobile:{' '}
          <Hidden inline on="desktop">
            Inline
          </Hidden>
        </Text>
      )
    }
  ]
};
