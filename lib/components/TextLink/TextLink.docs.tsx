import React from 'react';
import TextLink from './TextLink';
import Text from '../Text/Text';
import { ComponentDocs } from '../../../docs/src/types';

const docs: ComponentDocs = {
  examples: [
    {
      label: 'Standard Text Link',
      render: () => (
        <Text>
          <TextLink href="">Link</TextLink>
        </Text>
      ),
    },
  ],
};

export default docs;
