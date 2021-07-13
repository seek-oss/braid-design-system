import React from 'react';
import { Text, Strong, Alert } from '..';
import { ComponentDocs } from '../../../site/src/types';

const docs: ComponentDocs = {
  category: 'Logic',
  description: (
    <>
      <Alert tone="caution">
        <Text>
          This component cannot be server-rendered. It should only be rendered
          based on state that is updated client-side by user actions.
        </Text>
      </Alert>
      <Text>
        Declaratively render a React portal while maintaining the current Braid
        theme.
      </Text>
    </>
  ),
  alternatives: [],
  additional: [
    {
      code: `
        <BraidPortal>
          ...
        </BraidPortal>
      `,
    },
    {
      label: 'Choosing a container',
      description: (
        <Text>
          Portals are rendered to the <Strong>body</Strong> element by default,
          but this can be configured via the <Strong>container</Strong> prop.
        </Text>
      ),
      code: `
        <BraidPortal container={someRef.current}>
          ...
        </BraidPortal>
      `,
    },
  ],
};

export default docs;
