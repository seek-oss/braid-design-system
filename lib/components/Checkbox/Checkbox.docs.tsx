import React, { ReactNode } from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Checkbox } from './Checkbox';
import { Text } from '../Text/Text';
import { Column } from '../Column/Column';
import { Columns } from '../Columns/Columns';
import { Box } from '../Box/Box';

const docs: ComponentDocs = {
  migrationGuide: true,
  examples: [
    {
      label: 'Standard Checkbox',
      Example: ({ id, handler }) => (
        <Checkbox id={id} checked={false} onChange={handler} label="Label" />
      ),
    },
    {
      label: 'Checkbox without Message Placeholder',
      Example: ({ id, handler }) => (
        <Checkbox
          id={id}
          checked={false}
          onChange={handler}
          label="Label"
          reserveMessageSpace={false}
        />
      ),
    },
    {
      label: 'Checked Checkbox',
      Example: ({ id, handler }) => (
        <Checkbox
          id={id}
          checked={true}
          onChange={handler}
          label="Label"
          reserveMessageSpace={false}
        />
      ),
    },
    {
      label: 'Disabled Checkbox',
      Example: ({ id, handler }) => (
        <Checkbox
          id={id}
          disabled={true}
          checked={false}
          onChange={handler}
          label="Label"
          reserveMessageSpace={false}
        />
      ),
    },
    {
      label: 'Critical Checkbox',
      Example: ({ id, handler }) => (
        <Checkbox
          id={id}
          checked={false}
          onChange={handler}
          label="Label"
          message="This is a critical message"
          tone="critical"
        />
      ),
    },
    {
      label: 'Nested Checkbox',
      Example: ({ id, handler }) => (
        <Checkbox
          id={id}
          checked={true}
          onChange={handler}
          label="Label"
          reserveMessageSpace={false}
        >
          <Text>This text is visible when the checkbox is checked.</Text>
        </Checkbox>
      ),
    },
    {
      label: 'Standalone custom checkbox usage',
      Container: ({ children }: { children: ReactNode }) => (
        <Box style={{ maxWidth: 300 }}>{children}</Box>
      ),
      Example: ({ id, handler }) => {
        const labelElementId = `customLabel_${id}`;
        return (
          <Box
            background="neutralLight"
            borderRadius="standard"
            boxShadow="borderStandard"
            padding="small"
          >
            <Columns space="small">
              <Column>
                <Box display="flex" alignItems="center" height="full">
                  <Text component="label" id={labelElementId}>
                    Custom standalone label
                  </Text>
                </Box>
              </Column>
              <Column width="content">
                <Checkbox
                  id={id}
                  aria-labelledby={labelElementId}
                  checked={true}
                  onChange={handler}
                  reserveMessageSpace={false}
                />
              </Column>
            </Columns>
          </Box>
        );
      },
    },
  ],
};

export default docs;
