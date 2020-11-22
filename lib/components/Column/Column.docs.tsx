import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Columns, Column, Stack } from '../';
import { Placeholder } from '../private/Placeholder/Placeholder';
import { width as columnWidths } from '../Column/Column.treat';

const widths = [
  'content',
  ...(Object.keys(columnWidths) as Array<keyof typeof columnWidths>),
] as const;

const docs: ComponentDocs = {
  category: 'Layout',
  examples: [
    {
      label: 'Standard Columns',
      Example: () => (
        <Columns space="small">
          <Column>
            <Placeholder height={60} />
          </Column>
          <Column>
            <Placeholder height={60} />
          </Column>
          <Column>
            <Placeholder height={60} />
          </Column>
        </Columns>
      ),
    },
    {
      label: 'Available widths',
      Example: () => (
        <Stack space="medium">
          {widths.map((width) => (
            <Columns space="small" key={width}>
              <Column width={width}>
                <Placeholder height={60} label={width} />
              </Column>
              <Column>
                <Placeholder height={60} label="Fluid" />
              </Column>
            </Columns>
          ))}
        </Stack>
      ),
    },
  ],
};

export default docs;
