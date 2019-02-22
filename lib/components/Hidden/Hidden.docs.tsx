import React from 'react';
import Hidden from './Hidden';
import Text from '../Text/Text';

export default {
  component: Hidden,
  examples: [
    {
      label: 'Hidden on mobile',
      render: () => (
        <Hidden component="span" on="mobile">
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
    }
  ]
};
