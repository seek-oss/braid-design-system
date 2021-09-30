import React, { useState } from 'react';
import { ComponentScreenshot } from '../../../site/src/types';
import { CheckboxStandalone } from '../';

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320],
  examples: [
    {
      label: 'Standard',
      Example: ({ id }) => {
        const [state, setState] = useState(false);
        return (
          <CheckboxStandalone
            id={id}
            checked={state}
            onChange={() => setState(!state)}
            aria-label="Label"
          />
        );
      },
    },
    {
      label: 'Small',
      Example: ({ id }) => {
        const [state, setState] = useState(false);
        return (
          <CheckboxStandalone
            id={id}
            checked={state}
            onChange={() => setState(!state)}
            aria-label="Label"
            size="small"
          />
        );
      },
    },
    {
      label: 'Checked',
      Example: ({ id, handler }) => (
        <CheckboxStandalone
          id={id}
          checked={true}
          onChange={handler}
          aria-label="Label"
        />
      ),
    },
    {
      label: 'Mixed state',
      Example: ({ id, handler }) => (
        <CheckboxStandalone
          id={id}
          checked="mixed"
          onChange={handler}
          aria-label="Label"
        />
      ),
    },
    {
      label: 'Disabled',
      Example: ({ id, handler }) => (
        <CheckboxStandalone
          id={id}
          disabled={true}
          checked={false}
          onChange={handler}
          aria-label="Label"
        />
      ),
    },
    {
      label: 'Critical',
      Example: ({ id, handler }) => (
        <CheckboxStandalone
          id={id}
          checked={false}
          onChange={handler}
          aria-label="Label"
          tone="critical"
        />
      ),
    },
  ],
};
