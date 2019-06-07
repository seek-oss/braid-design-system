import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Strong } from './Strong';
import { Text } from '../Text/Text';

const docs: ComponentDocs = {
  examples: [
    {
      render: () => (
        <Text>
          The last word of this sentence is <Strong>strong.</Strong>
        </Text>
      ),
    },
  ],
};

export default docs;
