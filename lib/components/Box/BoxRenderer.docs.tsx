import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { BoxRenderer } from './BoxRenderer';
import { Text } from '../Text/Text';

const docs: ComponentDocs = {
  examples: [
    {
      label: 'Standard BoxRenderer',
      Example: () => (
        <BoxRenderer component="ul" background="brand" padding="medium">
          {className => (
            <ul className={className}>
              <li>
                <Text baseline={false}>Hello world</Text>
              </li>
            </ul>
          )}
        </BoxRenderer>
      ),
    },
  ],
};

export default docs;
