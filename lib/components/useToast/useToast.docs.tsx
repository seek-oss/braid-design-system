import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Button } from '../Button/Button';
import { useToast } from './ToastContext';

const docs: ComponentDocs = {
  migrationGuide: true,
  examples: [
    {
      label: 'Nuetral Toast',
      Example: () => {
        const makeToast = useToast();

        return (
          <Button onClick={() => makeToast({ message: 'Honey or Vegemite?' })}>
            Show toast
          </Button>
        );
      },
    },
  ],
};

export default docs;
