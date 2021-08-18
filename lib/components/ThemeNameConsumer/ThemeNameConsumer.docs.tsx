import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import source from '../../utils/source.macro';
import { ThemeNameConsumer, Text, TextLink, Strong } from '../../../';

const docs: ComponentDocs = {
  category: 'Logic',
  Example: () =>
    source(
      <ThemeNameConsumer>
        {(themeName) => (
          <Text>
            The active theme is <Strong>{themeName}</Strong>.
          </Text>
        )}
      </ThemeNameConsumer>,
    ),
  alternatives: [{ name: 'useThemeName', description: 'The hook version.' }],
  additional: [
    {
      label: 'Development considerations',
      description: (
        <Text>
          Retrieves the display name of the current theme from context. This
          pre-dated hooks, so chances are most consumers would prefer the{' '}
          <TextLink href="/components/useThemeName">useThemeName</TextLink>{' '}
          hook.
        </Text>
      ),
    },
  ],
};

export default docs;
