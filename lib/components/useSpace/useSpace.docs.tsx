import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import source from '../../utils/source.macro';
import { useSpace, Stack, Text, Strong } from '../../../';

const docs: ComponentDocs = {
  category: 'Logic',
  Example: () =>
    source(
      <Stack space="medium">
        <Text>
          Current grid size is: <Strong>{useSpace().grid}</Strong>px.
        </Text>
        <Text>
          Xxlarge space spans <Strong>{useSpace().space.xxlarge}</Strong> rows.
        </Text>
      </Stack>,
    ),
  alternatives: [{ name: 'Box', description: 'For custom layouts.' }],
  additional: [
    {
      label: 'Development considerations',
      playroom: false,
      showCodeByDefault: true,
      description: (
        <Text>
          Retrieves the space and grid definitions of the current theme from
          context.
        </Text>
      ),
      code: `
        const { space, grid } = useSpace();

        return (
          <Placeholder
            width={grid * space.xxlarge}
            height={grid * space.xxlarge}
          />
        );
      `,
    },
  ],
};

export default docs;
