import type { ComponentScreenshot } from 'site/types';

import { FieldMessage, Stack } from '../';

export const screenshots: ComponentScreenshot = {
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
      label: 'Caution Field Message',
      Example: ({ id }) => (
        <FieldMessage
          id={id}
          tone="caution"
          message="This is a caution message."
        />
      ),
    },
    {
      label: 'Neutral Field Message',
      Example: ({ id }) => (
        <FieldMessage id={id} message="This is a neutral message." />
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
      label: 'Test: should be left aligned in a centered Stack',
      Container: ({ children }) => (
        <div style={{ maxWidth: '300px' }}>{children}</div>
      ),
      Example: ({ id }) => (
        <Stack space="large" align="center">
          <FieldMessage
            id={id}
            tone="critical"
            message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sodales hendrerit nulla."
          />
        </Stack>
      ),
    },
  ],
};
