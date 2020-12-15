import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Tiles, Text } from '../';
import { Placeholder } from '../private/Placeholder/Placeholder';
import source from '../../utils/source.macro';
import { Strong } from '../Strong/Strong';

const docs: ComponentDocs = {
  category: 'Layout',
  Example: () =>
    source(
      <Tiles columns={3} space="small">
        <Placeholder height={80} />
        <Placeholder height={80} />
        <Placeholder height={80} />
        <Placeholder height={80} />
        <Placeholder height={80} />
        <Placeholder height={80} />
        <Placeholder height={80} />
        <Placeholder height={80} />
        <Placeholder height={80} />
      </Tiles>,
    ),
  alternatives: [
    {
      name: 'Columns',
      description: 'For fine-grained control of widths, spacing and alignment.',
    },
    {
      name: 'Inline',
      description: 'For fine-grained control of spacing and alignment.',
    },
    {
      name: 'Box',
      description: 'For custom layouts.',
    },
  ],
  additional: [
    {
      label: 'Number of columns',
      description: (
        <Text>
          The number of tiles in each row. Accepts a number from 1 to 5, and is
          also responsive. For example: <Strong>[ 2, 4 ]</Strong> will be 2
          columns on mobile, and 4 above mobile.
        </Text>
      ),
      Example: () =>
        source(
          <Tiles space="small" columns={[2, 4]}>
            <Placeholder height={40} />
            <Placeholder height={40} />
            <Placeholder height={40} />
            <Placeholder height={40} />
            <Placeholder height={40} />
            <Placeholder height={40} />
            <Placeholder height={40} />
            <Placeholder height={40} />
            <Placeholder height={40} />
            <Placeholder height={40} />
          </Tiles>,
        ),
    },
    {
      label: 'Space between tiles',
      description: (
        <Text>
          Control the amount of space between each tile using the{' '}
          <Strong>space</Strong> prop. This can also be a responsive list of
          spacing values.
        </Text>
      ),
      Example: () =>
        source(
          <Tiles space="large" columns={3}>
            <Placeholder height={40} />
            <Placeholder height={40} />
            <Placeholder height={40} />
            <Placeholder height={40} />
            <Placeholder height={40} />
            <Placeholder height={40} />
            <Placeholder height={40} />
            <Placeholder height={40} />
            <Placeholder height={40} />
          </Tiles>,
        ),
    },
    {
      label: 'Dividers',
      description: (
        <Text>
          When in a single column, dividers can be placed between each tile
          using the <Strong>dividers</Strong> prop. Supports both{' '}
          <Strong>regular</Strong> and <Strong>strong</Strong> variants.
        </Text>
      ),
      Example: () =>
        source(
          <Tiles space="medium" columns={1} dividers>
            <Placeholder height={80} />
            <Placeholder height={80} />
            <Placeholder height={80} />
          </Tiles>,
        ),
    },
  ],
};

export default docs;
