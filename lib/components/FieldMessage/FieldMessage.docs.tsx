import React from 'react';
import FieldMessage from './FieldMessage';
import { ComponentDocs } from '../../../docs/src/types';

const docs: ComponentDocs = {
  examples: [
    {
      label: 'Critical Field Message',
      render: ({ id }) => (
        <FieldMessage
          id={id}
          tone="critical"
          message="This is a critical message."
        />
      ),
    },
    {
      label: 'Positive Field Message',
      render: ({ id }) => (
        <FieldMessage
          id={id}
          tone="positive"
          message="This is a positive message."
        />
      ),
    },
    {
      label: "No message, i.e. don't reserve white space",
      code: `<FieldMessage message={false} />`,
    },
  ],
};

export default docs;
