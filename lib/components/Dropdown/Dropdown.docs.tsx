import React, { ReactNode } from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Dropdown } from './Dropdown';
import { Box } from '../Box/Box';

const Container = ({ children }: { children: ReactNode }) => (
  <div style={{ maxWidth: '300px' }}>{children}</div>
);

const docs: ComponentDocs = {
  migrationGuide: true,
  examples: [
    {
      label: 'Dropdown with placeholder',
      Container,
      render: ({ id, handler }) => (
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
      ),
    },
    {
      label: 'Dropdown with options group',
      Container,
      render: ({ id, handler }) => (
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
      ),
    },
    {
      label: 'Dropdown without placeholder',
      Container,
      render: ({ id, handler }) => (
        <Dropdown label="Job Title" id={id} onChange={handler} value="">
          <option value="1">Developer</option>
          <option value="2">Designer</option>
        </Dropdown>
      ),
    },
    {
      label: 'Dropdown in invalid state',
      Container,
      render: ({ id, handler }) => (
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
      ),
    },
    {
      label: 'Dropdown on Brand Background',
      Container,
      render: ({ id, handler }) => (
        <Box background="brand" paddingLeft="small" paddingRight="small">
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
        </Box>
      ),
    },
  ],
};

export default docs;
