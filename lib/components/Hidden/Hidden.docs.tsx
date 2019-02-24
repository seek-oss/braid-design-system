import React from 'react';
import Hidden from './Hidden';
import Text from '../Text/Text';

export default {
  component: Hidden,
  examples: [
    {
      label: 'Hidden on Mobile',
      render: () => (
        <Hidden mobile>
          <Text>Desktop only</Text>
        </Hidden>
      )
    },
    {
      label: 'Hidden on Desktop',
      render: () => (
        <Hidden desktop>
          <Text>Mobile Only</Text>
        </Hidden>
      )
    },
    {
      label: 'Hidden on Print',
      render: () => (
        <Hidden print>
          <Text>Screen only</Text>
        </Hidden>
      )
    },
    {
      label: 'Hidden on Screen',
      render: () => (
        <Hidden screen>
          <Text>Print only</Text>
        </Hidden>
      )
    },
    {
      label: 'Hidden on Mobile (Inline)',
      render: () => (
        <Text>
          Desktop only:{' '}
          <Hidden inline mobile>
            Text
          </Hidden>
        </Text>
      )
    },
    {
      label: 'Hidden on Desktop (Inline)',
      render: () => (
        <Text>
          Mobile only:{' '}
          <Hidden inline desktop>
            Text
          </Hidden>
        </Text>
      )
    },
    {
      label: 'Hidden on Print (Inline)',
      render: () => (
        <Text>
          Screen only:{' '}
          <Hidden inline print>
            Text
          </Hidden>
        </Text>
      )
    },
    {
      label: 'Hidden on Screen (Inline)',
      render: () => (
        <Text>
          Print only:{' '}
          <Hidden inline screen>
            Text
          </Hidden>
        </Text>
      )
    }
  ]
};
