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
      label: 'No space',
      Example: () => (
        <Columns space="none">
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
      label: 'Custom space, e.g. small',
      Example: () => (
        <Columns space="small">
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
      label: 'Responsive space, e.g. ["small", "large"]',
      Example: () => (
        <Columns space={['small', 'large']}>
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
      label: 'Responsive space with `none` on mobile, e.g. ["none", "gutter"]',
      docsSite: false,
      Example: () => (
        <Columns space={['none', 'gutter']}>
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
      label: 'Responsive space with `none` on desktop, e.g. ["small", "none"]',
      docsSite: false,
      Example: () => (
        <Columns space={['small', 'none']}>
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
        <Columns space="small" collapse>
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
      label: 'Collapse on mobile with custom space, e.g. "small"',
      Example: () => (
        <Columns space="small" collapse>
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
      label:
        'Collapse on mobile with responsive space, e.g. ["small", "large"]',
      Example: () => (
        <Columns space={['small', 'large']} collapse>
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
      label:
        'Collapse on mobile with responsive space and `none` on mobile, e.g. ["none", "gutter"]',
      docsSite: false,
      Example: () => (
        <Columns space={['none', 'gutter']} collapse>
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
      label:
        'Collapse on mobile with responsive space and `none` on desktop, e.g. ["small", "none"]',
      docsSite: false,
      Example: () => (
        <Columns space={['small', 'none']} collapse>
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
      label: 'Reverse',
      Example: () => (
        <Columns space="small" reverse>
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
