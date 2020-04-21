import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { FieldMessage, Text } from '../';
import { FieldMessage as PlayroomFieldMessage } from '../../playroom/components';

const docs: ComponentDocs = {
  category: 'Content',
  migrationGuide: true,
  screenshotWidths: [320],
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
  snippets: [
    {
      name: 'Standard',
      code: <PlayroomFieldMessage message="This is a message" />,
    },
    {
      name: 'Positive',
      code: (
        <PlayroomFieldMessage
          tone="positive"
          message="This is a positive message"
        />
      ),
    },
    {
      name: 'Critical',
      code: (
        <PlayroomFieldMessage
          tone="critical"
          message="This is a critical message"
        />
      ),
    },
    {
      name: 'Secondary message',
      code: (
        <PlayroomFieldMessage
          message="This is a message"
          secondaryMessage={
            <Text size="small" tone="secondary">
              Secondary
            </Text>
          }
        />
      ),
    },
  ],
};

export default docs;
