import * as React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import {
  Card,
  Box,
  Text,
  Stack,
  Heading,
  Columns,
  Column,
  OverflowMenu,
  MenuItem,
} from '../';

const docs: ComponentDocs = {
  category: 'Layout',
  migrationGuide: true,
  screenshotWidths: [320],
  examples: [
    {
      label: 'Default',
      Container: ({ children }) => (
        <Box padding="gutter" background="neutralLight">
          {children}
        </Box>
      ),
      Example: () => (
        <Card>
          <Text>This text is inside a card.</Text>
        </Card>
      ),
    },
  ],
  snippets: [
    {
      name: 'With Heading',
      code: (
        <Card>
          <Stack space="gutter">
            <Heading level="3">Heading</Heading>
            <Text>Text</Text>
          </Stack>
        </Card>
      ),
    },
    {
      name: 'With Overflow Menu',
      code: (
        <Card>
          <Stack space="gutter">
            <Columns space="gutter">
              <Column>
                <Heading level="3">Heading</Heading>
              </Column>
              <Column width="content">
                <OverflowMenu label="Options">
                  <MenuItem>Menu Item</MenuItem>
                </OverflowMenu>
              </Column>
            </Columns>
            <Text>Text</Text>
          </Stack>
        </Card>
      ),
    },
  ],
};

export default docs;
