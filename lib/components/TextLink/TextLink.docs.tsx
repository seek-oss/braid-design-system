import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { TextLink } from './TextLink';
import { Text } from '../Text/Text';

const docs: ComponentDocs = {
  examples: [
    {
      label: 'Standard Text Link',
      render: () => <TextLink href="">Text Link</TextLink>,
    },
    {
      label: 'Inline Text Link',
      render: () => (
        <Text>
          The last word of a sentence is a{' '}
          <TextLink href="" inline>
            text link.
          </TextLink>
        </Text>
      ),
    },
  ],
};

export default docs;
