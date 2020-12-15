import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import source from '../../utils/source.macro';
import { useColor, Text } from '../../../';

const docs: ComponentDocs = {
  category: 'Logic',
  Example: () =>
    source(
      <div
        style={{
          height: 50,
          width: 50,
          background: useColor().background.brandAccent,
        }}
      />,
    ),
  alternatives: [{ name: 'Box', description: 'For custom layouts.' }],
  additional: [
    {
      label: 'Development considerations',
      playroom: false,
      showCodeByDefault: true,
      description: (
        <Text>
          Retrieves the semantic colour palette of the current theme from
          context.
        </Text>
      ),
      code: `
        const { background } = useColor();

        return (
          <div
            style={{
              width: 50,
              height: 50,
              backgroundColor: background.brandAccent,
            }}
          />
        );
      `,
    },
  ],
};

export default docs;
