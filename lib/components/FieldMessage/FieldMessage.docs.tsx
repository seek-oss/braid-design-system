import React from 'react';
import FieldMessage from './FieldMessage';
import { ComponentDocs } from '../../../docs/src/types';

const docs: ComponentDocs = {
  examples: [
    {
      label: 'Critical Field Message',
      render: () => (
        <FieldMessage tone="critical" message="This is a critical message." />
      )
    },
    {
      label: 'Positive Field Message',
      render: () => (
        <FieldMessage tone="positive" message="This is a positive message." />
      )
    },
    {
      label: "No message, i.e. don't reserve white space",
      code: `<FieldMessage message={false} />`
    }
  ]
};

export default docs;
