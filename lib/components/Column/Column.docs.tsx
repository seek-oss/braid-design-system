import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Columns } from '../Columns/Columns';
import { Column } from './Column';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { HideCode } from '../private/HideCode';

const Content = ({ children = 'Column' }) => (
  <Box background="selection" padding="small">
    <Text baseline={false}>{children}</Text>
  </Box>
);

const docs: ComponentDocs = {
  examples: [
    {
      label: 'Standard Columns',
      render: () => (
        <Columns>
          <Column>
            <HideCode>
              <Content />
            </HideCode>
          </Column>
          <Column>
            <HideCode>
              <Content />
            </HideCode>
          </Column>
          <Column>
            <HideCode>
              <Content />
            </HideCode>
          </Column>
        </Columns>
      ),
    },
    {
      label: 'Specific Sizes',
      render: () => (
        <Columns>
          <Column size="1/5">
            <HideCode>
              <Content>&#8533;</Content>
            </HideCode>
          </Column>
          <Column>
            <HideCode>
              <Content>Fluid</Content>
            </HideCode>
          </Column>
          <Column size="1/3">
            <HideCode>
              <Content>&#8531;</Content>
            </HideCode>
          </Column>
        </Columns>
      ),
    },
    {
      label: 'Fit to content',
      render: () => (
        <Columns>
          <Column size="fit">
            <HideCode>
              <Content>Fit content</Content>
            </HideCode>
          </Column>
          <Column>
            <HideCode>
              <Content>Fluid</Content>
            </HideCode>
          </Column>
        </Columns>
      ),
    },
  ],
};

export default docs;
