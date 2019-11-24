import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { FieldMessage } from './FieldMessage';

const docs: ComponentDocs = {
  category: 'Interaction',
  migrationGuide: true,
  examples: [
    {
      label: 'Critical Field Message',
      Example: ({ id }) => (
        <FieldMessage
          id={id}
          tone="critical"
          message="This is a critical message."
        />
      ),
    },
    {
      label: 'Positive Field Message',
      Example: ({ id }) => (
        <FieldMessage
          id={id}
          tone="positive"
          message="This is a positive message."
        />
      ),
    },
    {
      label: 'Critical with long (wrapping) message',
      Container: ({ children }) => (
        <div style={{ maxWidth: '300px' }}>{children}</div>
      ),
      Example: ({ id }) => (
        <FieldMessage
          id={id}
          tone="critical"
          message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sodales hendrerit nulla."
        />
      ),
    },
    {
      label: "No message, i.e. don't reserve white space",
      code: `<FieldMessage reserveMessageSpace={false} />`,
    },
  ],
};

export default docs;
