import React from 'react';
import { ComponentExample } from '../../../site/src/types';
import { Tiles, Card, Text } from '../';
import { Placeholder } from '../private/Placeholder/Placeholder';

const exampleRows = 3;

export const galleryItems: ComponentExample[] = [
  {
    label: '3 columns',
    Example: () => (
      <Tiles space="small" columns={3}>
        {[...new Array(3 * exampleRows)].map((_, i) => (
          <Placeholder key={i} height={40} />
        ))}
      </Tiles>
    ),
  },
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
      <Tiles space={['none', 'small']} columns={[1, 2]} dividers>
        {[...new Array(2 * exampleRows)].map((_, i) => (
          <Card key={i}>
            <Text>Tile</Text>
          </Card>
        ))}
      </Tiles>
    ),
  },
  {
    label: 'Strong dividers (when in a single column)',
    Example: () => (
      <Tiles space={['none', 'small']} columns={[1, 2]} dividers="strong">
        {[...new Array(2 * exampleRows)].map((_, i) => (
          <Card key={i}>
            <Text>Tile</Text>
          </Card>
        ))}
      </Tiles>
    ),
  },
];
