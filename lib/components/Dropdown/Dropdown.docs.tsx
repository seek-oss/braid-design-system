import React, { ReactNode } from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Dropdown, IconLocation } from '../';
import { Dropdown as PlayroomDropdown } from '../../playroom/components';

const Container = ({ children }: { children: ReactNode }) => (
  <div style={{ maxWidth: '300px' }}>{children}</div>
);

const docs: ComponentDocs = {
  category: 'Content',
  migrationGuide: true,
  screenshotWidths: [320],
  examples: [
    {
      label: 'Dropdown with placeholder',
      Container,
      Example: ({ id, handler }) => (
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
      Example: ({ id, handler }) => (
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
      label: 'Dropdown with icon',
      Container,
      Example: ({ id, handler }) => (
        <Dropdown
          label="Location"
          id={id}
          icon={<IconLocation />}
          placeholder="Please select a location"
          value=""
          onChange={handler}
        >
          <option value="3004">Melbourne</option>
          <option value="3002">Sydney</option>
        </Dropdown>
      ),
    },
    {
      label: 'Dropdown without placeholder',
      Container,
      Example: ({ id, handler }) => (
        <Dropdown label="Job Title" id={id} onChange={handler} value="">
          <option value="1">Developer</option>
          <option value="2">Designer</option>
        </Dropdown>
      ),
    },
    {
      label: 'Dropdown in invalid state',
      Container,
      Example: ({ id, handler }) => (
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
      background: 'brand',
      Container,
      Example: ({ id, handler }) => (
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
  ],
  snippets: [
    {
      name: 'Standard',
      code: (
        <PlayroomDropdown label="Label">
          <option>Option</option>
          <option>Option</option>
          <option>Option</option>
        </PlayroomDropdown>
      ),
    },
    {
      name: 'Grouped',
      code: (
        <PlayroomDropdown
          label="Location"
          placeholder="Please select a location"
        >
          <optgroup label="Major Cities">
            <option value="3004">Melbourne</option>
            <option value="3002">Sydney</option>
          </optgroup>
          <option value="3020">Wonthaggi</option>
        </PlayroomDropdown>
      ),
    },
    {
      name: 'With error',
      code: (
        <PlayroomDropdown
          tone="critical"
          message="Required field"
          label="Label"
        >
          <option>Option</option>
          <option>Option</option>
          <option>Option</option>
        </PlayroomDropdown>
      ),
    },
  ],
};

export default docs;
