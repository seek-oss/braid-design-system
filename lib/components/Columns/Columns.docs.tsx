import React from 'react';
import Columns from './Columns';

export default {
  component: Columns,
  examples: [
    {
      label: 'Columns',
      render: () => (
        <Columns>
          <div>AA</div>
          <div>BB</div>
        </Columns>
      )
    }
  ]
};
