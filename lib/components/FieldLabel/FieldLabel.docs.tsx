import React from 'react';
import FieldLabel from './FieldLabel';
import { ComponentDocs } from '../../../docs/src/types';

const docs: ComponentDocs = {
  examples: [
    {
      label: 'Standard Field Label',
      render: () => <FieldLabel>This is a field label</FieldLabel>,
    },
  ],
};

export default docs;
