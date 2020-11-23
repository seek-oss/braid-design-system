import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Loader } from '../';

const docs: ComponentDocs = {
  category: 'Content',
  examples: [
    {
      label: 'Default',
      Example: () => <Loader />,
    },
    {
      label: 'Delay visibility (used to prevent loading flicker)',
      Example: () => <Loader delayVisibility />,
    },
    {
      label: 'xsmall',
      Example: () => <Loader size="xsmall" />,
    },
    {
      label: 'small',
      Example: () => <Loader size="small" />,
    },
    {
      label: 'standard',
      Example: () => <Loader size="standard" />,
    },
    {
      label: 'large',
      Example: () => <Loader size="large" />,
    },
  ],
};

export default docs;
