import source from '@braid-design-system/source.macro';
import type { ComponentDocs } from 'site/types';

import { Tiles, Text } from '../';
import { Placeholder } from '../../playroom/components';
import { Strong } from '../Strong/Strong';
import { dataAttributeDocs } from '../private/dataAttribute.docs';

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
  description: (
    <Text>
      The <Strong>Tiles</Strong> component is used to lay out a collection of
      elements left to right, top to bottom — wrapping across a specified number
      of columns.
    </Text>
  ),
  alternatives: [
    {
      name: 'Columns',
      description: 'For fine-grained control of widths, spacing and alignment.',
    },
    {
      name: 'Inline',
      description: 'For laying out flowing content that is allowed to wrap.',
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
          The number of tiles in each row. Accepts a number from 1 to 5, also
          supporting responsive values, e.g.{' '}
          <Strong>
            {'columns={{ mobile: 2, tablet: 3, desktop: 4, wide: 5 }}'}
          </Strong>
        </Text>
      ),
      Example: () =>
        source(
          <Tiles
            space="small"
            columns={{ mobile: 2, tablet: 3, desktop: 4, wide: 5 }}
          >
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
          <Strong>space</Strong> prop, also supporting responsive values, e.g.{' '}
          <Strong>
            {
              "space={{ mobile: 'small', tablet: 'medium', desktop: 'large', wide: 'xlarge' }}"
            }
          </Strong>
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
    dataAttributeDocs({
      code: `
        <Tiles
          data={{ testid: 'tiles-1' }}
          // => data-testid="tiles-1"
        >
          ...
        </Tiles>
      `,
      supportsNativeSyntax: false,
    }),
  ],
};

export default docs;
