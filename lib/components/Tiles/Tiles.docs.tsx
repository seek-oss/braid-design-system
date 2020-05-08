import React, { Fragment } from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Tiles, Box, Card, Text } from '../';
import { Placeholder } from '../private/Placeholder/Placeholder';

const exampleRows = 3;

const docs: ComponentDocs = {
  category: 'Layout',
  screenshotWidths: [320, 768],
  examples: [
    ...([1, 2, 3, 4, 5, 6] as const).map((columns) => ({
      label: `${columns} column${columns === 1 ? '' : 's'}`,
      docsSite: columns === 3,
      Example: () => (
        <Tiles space="small" columns={columns}>
          {[...new Array(columns * exampleRows)].map((_, i) => (
            <Placeholder key={i} height={40} />
          ))}
        </Tiles>
      ),
    })),
    {
      label: 'Responsive columns (e.g. 1 on mobile, 4 from tablet upwards',
      Example: () => (
        <Tiles space="xsmall" columns={[1, 4]}>
          {[...new Array(4 * exampleRows)].map((_, i) => (
            <Placeholder key={i} height={40} />
          ))}
        </Tiles>
      ),
    },
    {
      label: 'Dividers (when in a single column)',
      Example: () => (
        <Box background="neutralLight" padding="small">
          <Tiles space={['none', 'small']} columns={[1, 2]} dividers>
            {[...new Array(2 * exampleRows)].map((_, i) => (
              <Card key={i}>
                <Text>Tile</Text>
              </Card>
            ))}
          </Tiles>
        </Box>
      ),
    },
    {
      label: 'Strong dividers (when in a single column)',
      Example: () => (
        <Box background="neutralLight" padding="small">
          <Tiles space={['none', 'small']} columns={[1, 2]} dividers="strong">
            {[...new Array(2 * exampleRows)].map((_, i) => (
              <Card key={i}>
                <Text>Tile</Text>
              </Card>
            ))}
          </Tiles>
        </Box>
      ),
    },
    {
      label:
        'Test - Should flatten fragments (6 tiles should be evenly spaced)',
      docsSite: false,
      Example: () => (
        <Tiles space="small" columns={3}>
          <Fragment>
            <Placeholder height={40} />
          </Fragment>
          <Fragment>
            <Placeholder height={40} />
            <Placeholder height={40} />
          </Fragment>
          <Fragment>
            <Fragment>
              <Placeholder height={40} />
            </Fragment>
            <Placeholder height={40} />
          </Fragment>
          <Placeholder height={40} />
        </Tiles>
      ),
    },
  ],
  snippets: [
    {
      name: '2 columns, small space',
      code: (
        <Tiles space="small" columns={2}>
          <Placeholder height={48} />
          <Placeholder height={48} />
          <Placeholder height={48} />
          <Placeholder height={48} />
          <Placeholder height={48} />
        </Tiles>
      ),
    },
    {
      name: '3 columns, medium space',
      code: (
        <Tiles space="medium" columns={3}>
          <Placeholder height={48} />
          <Placeholder height={48} />
          <Placeholder height={48} />
          <Placeholder height={48} />
          <Placeholder height={48} />
        </Tiles>
      ),
    },
    {
      name: '2 columns on mobile, 4 above tablet',
      code: (
        <Tiles space="small" columns={[2, 4]}>
          <Placeholder height={48} />
          <Placeholder height={48} />
          <Placeholder height={48} />
          <Placeholder height={48} />
          <Placeholder height={48} />
          <Placeholder height={48} />
        </Tiles>
      ),
    },
    {
      name: 'Dividers in single column',
      code: (
        <Tiles space="small" columns={[1, 2]} dividers>
          <Placeholder height={48} />
          <Placeholder height={48} />
          <Placeholder height={48} />
          <Placeholder height={48} />
          <Placeholder height={48} />
          <Placeholder height={48} />
        </Tiles>
      ),
    },
  ],
};

export default docs;
