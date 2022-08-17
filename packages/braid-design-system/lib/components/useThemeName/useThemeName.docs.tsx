import React from 'react';
import { ComponentDocs } from '../../../../../site/src/types';
import { useThemeName, Text, Strong } from '../../../';
import source from '../../utils/source.macro';

const docs: ComponentDocs = {
  category: 'Logic',
  Example: () =>
    source(
      <Text>
        The active theme is <Strong>{useThemeName()}</Strong>.
      </Text>,
    ),
  alternatives: [
    { name: 'ThemeNameConsumer', description: 'The component version.' },
  ],
  additional: [
    {
      label: 'Development considerations',
      playroom: false,
      showCodeByDefault: true,
      description: (
        <Text>
          Retrieves the display name of the current theme from context.
        </Text>
      ),
      code: `
        const themeName = useThemeName();

        return (
          <Text>
            The active theme is <Strong>{themeName}</Strong>.
          </Text>
        );
      `,
    },
  ],
};

export default docs;
