import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import source from '../../utils/source.macro';
import { useColor, Alert, Text, TextLink } from '../../../';

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
