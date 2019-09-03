import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Columns } from './Columns';
import { Column } from '../Column/Column';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { HideCode } from '../private/HideCode';

const Content = ({ children = 'Column' }) => (
  <Box background="selection" padding="small">
    <Text baseline={false}>{children}</Text>
  </Box>
);

const docs: ComponentDocs = {
  migrationGuide: true,
  examples: [
    {
      label: 'Default',
      Example: () => (
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
      label: 'Collapse on mobile',
      Example: () => (
        <Columns collapse>
          <Column>
            <HideCode>
              <Content>First</Content>
            </HideCode>
          </Column>
          <Column>
            <HideCode>
              <Content>Second</Content>
            </HideCode>
          </Column>
        </Columns>
      ),
    },
    {
      label: 'Custom gutter size, e.g. `small`',
      Example: () => (
        <Columns gutter="small">
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
      label: 'No gutter',
      Example: () => (
        <Columns gutter="none">
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
      label: 'Reverse',
      Example: () => (
        <Columns reverse>
          <Column>
            <HideCode>
              <Content>First</Content>
            </HideCode>
          </Column>
          <Column>
            <HideCode>
              <Content>Second</Content>
            </HideCode>
          </Column>
        </Columns>
      ),
    },
  ],
};

export default docs;
