import React from 'react';
import Strong from './Strong';
import Text from '../Text/Text';

export default {
  component: Strong,
  examples: [
    {
      label: '',
      render: () => (
        <Text>
          The last word of this sentence is <Strong>strong.</Strong>
        </Text>
      )
    }
  ]
};
