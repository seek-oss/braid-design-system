import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Dropdown } from './Dropdown';

const docs: ComponentDocs = {
  migrationGuide: true,
  examples: [
    {
      label: 'Dropdown with placeholder',
      render: ({ id, handler }) => (
        <div style={{ maxWidth: '300px' }}>
          <Dropdown
            label="Job Title"
            id={id}
            onChange={handler}
            value=""
            placeholder="Please select a role title"
          >
            <option value="1">Developer</option>
            <option value="2">Designer</option>
          </Dropdown>
        </div>
      ),
    },
    {
      label: 'Dropdown with options group',
      render: ({ id, handler }) => (
        <div style={{ maxWidth: '300px' }}>
          <Dropdown
            label="Location"
            id={id}
            value=""
            onChange={handler}
            placeholder="Please select a location"
          >
            <optgroup label="Major Cities">
              <option value="3004">Melbourne</option>
              <option value="3002">Sydney</option>
            </optgroup>
            <option value="3020">Wonthaggi</option>
          </Dropdown>
        </div>
      ),
    },
    {
      label: 'Dropdown without placeholder',
      render: ({ id, handler }) => (
        <div style={{ maxWidth: '300px' }}>
          <Dropdown label="Job Title" id={id} onChange={handler} value="">
            <option value="1">Developer</option>
            <option value="2">Designer</option>
          </Dropdown>
        </div>
      ),
    },
    {
      label: 'Dropdown in invalid state',
      render: ({ id, handler }) => (
        <div style={{ maxWidth: '300px' }}>
          <Dropdown
            label="Job Title"
            id={id}
            onChange={handler}
            value=""
            tone="critical"
            message="Required field"
          >
            <option value="1">Developer</option>
            <option value="2">Designer</option>
          </Dropdown>
        </div>
      ),
    },
  ],
};

export default docs;
