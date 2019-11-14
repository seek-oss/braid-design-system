import React, { ReactNode } from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Radio } from './Radio';
import { Text } from '../Text/Text';
import { Box } from '../Box/Box';
import { Columns } from '../Columns/Columns';
import { Column } from '../Column/Column';

const docs: ComponentDocs = {
  migrationGuide: true,
  examples: [
    {
      label: 'Standard Radio Button',
      Example: ({ id, handler }) => (
        <Radio id={id} checked={false} onChange={handler} label="Label" />
      ),
    },
    {
      label: 'Checked Radio Button',
      Example: ({ id, handler }) => (
        <Radio id={id} checked={true} onChange={handler} label="Label" />
      ),
    },
    {
      label: 'Disabled Radio Button',
      Example: ({ id, handler }) => (
        <Radio
          id={id}
          disabled={true}
          checked={false}
          onChange={handler}
          label="Label"
        />
      ),
    },
    {
      label: 'Critical Radio Button',
      Example: ({ id, handler }) => (
        <Radio
          id={id}
          checked={false}
          onChange={handler}
          label="Label"
          tone="critical"
        />
      ),
    },
    {
      label: 'Nested Radio Button',
      Example: ({ id, handler }) => (
        <Radio id={id} checked={true} onChange={handler} label="Label">
          <Text>This text is visible when the radio button is checked.</Text>
        </Radio>
      ),
    },
    {
      label: 'Standalone custom radio usage',
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
                <Radio
                  id={id}
                  aria-labelledby={labelElementId}
                  checked={true}
                  onChange={handler}
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
