import React from 'react';
import Hidden from './Hidden';
import Text from '../Text/Text';

export default {
  component: Hidden,
  examples: [
    {
      label: 'Hidden on mobile',
      render: () => (
        <Hidden component="span" hideFor="mobile">
          <Text baseline={false}>Hidden on mobile</Text>
        </Hidden>
      )
    },
    {
      label: 'Hidden on desktop',
      render: () => (
        <Hidden hideFor="desktop">
          <Text baseline={false}>Hidden on desktop</Text>
        </Hidden>
      )
    }
  ]
};
