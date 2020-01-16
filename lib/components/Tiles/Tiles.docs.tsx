import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Tiles } from './Tiles';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';

const exampleRows = 3;

const docs: ComponentDocs = {
  category: 'Layout',
  screenshotWidths: [320, 768],
  examples: [
    ...([1, 2, 3, 4, 5] as const).map(columns => ({
      label: `${columns} column${columns === 1 ? '' : 's'}`,
      docsSite: columns === 3,
      Example: () => (
        <Tiles space="small" columns={columns}>
          {[...new Array(columns * exampleRows)].map((_, i) => (
            <Box key={i} background="infoLight" padding="small">
              <Text>Tile</Text>
            </Box>
          ))}
        </Tiles>
      ),
    })),
    {
      label: 'Responsive columns (e.g. 1 on mobile, 4 from tablet upwards',
      Example: () => (
        <Tiles space="xsmall" columns={[1, 4]}>
          {[...new Array(4 * exampleRows)].map((_, i) => (
            <Box key={i} background="infoLight" padding="small">
              <Text>Tile</Text>
            </Box>
          ))}
        </Tiles>
      ),
    },
    {
      label: 'Dividers (when in a single column)',
      Example: () => (
        <Tiles space={['none', 'small']} columns={[1, 2]} dividers>
          {[...new Array(2 * exampleRows)].map((_, i) => (
            <Box key={i} background="neutralLight" padding="xsmall">
              <Text>Tile</Text>
            </Box>
          ))}
        </Tiles>
      ),
    },
  ],
};

export default docs;
