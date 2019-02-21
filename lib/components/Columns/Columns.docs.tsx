import React from 'react';
import Columns from './Columns';

export default {
  component: Columns,
  examples: [
    {
      label: 'Columns',
      render: () => (
        <Columns>
          <div style={{ backgroundColor: 'pink' }}>AA</div>
          <div style={{ backgroundColor: 'tan' }}>BB</div>
          <div style={{ backgroundColor: 'tomato' }}>CC</div>
        </Columns>
      )
    }
  ]
};
