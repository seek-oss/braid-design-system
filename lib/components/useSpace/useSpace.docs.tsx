import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import source from '../../utils/source.macro';
import { useSpace, Stack, Alert, Text, TextLink, Strong } from '../../../';

const docs: ComponentDocs = {
  category: 'Logic',
  description: (
    <Alert tone="caution">
      <Text weight="medium">
        You should only use this Hook if you’re unable to use{' '}
        <TextLink href="/components/Box">Box</TextLink> or{' '}
        <TextLink href="/css/vars">vars.</TextLink>
      </Text>
    </Alert>
  ),
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
