import React, { ReactNode } from 'react';
import { ComponentScreenshot } from '../../../../../site/src/types';
import { Dropdown, IconLocation, Stack } from '../';

const Container = ({ children }: { children: ReactNode }) => (
  <div style={{ maxWidth: '300px' }}>{children}</div>
);

export const screenshots: ComponentScreenshot = {
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
      label: 'Dropdown in disabled state',
      Container,
      Example: ({ id, handler }) => (
        <Stack space="gutter">
          <Dropdown
            label="With no value or placeholder"
            id={`${id}_1`}
            onChange={handler}
            value=""
            disabled={true}
          >
            <option value="1">Developer</option>
            <option value="2">Designer</option>
          </Dropdown>
          <Dropdown
            label="With value and no placeholder"
            id={`${id}_2`}
            onChange={handler}
            value="1"
            disabled={true}
          >
            <option value="1">Developer</option>
            <option value="2">Designer</option>
          </Dropdown>
          <Dropdown
            label="With no value and a placeholder"
            id={`${id}_3`}
            onChange={handler}
            value=""
            disabled={true}
            placeholder="Placeholder text"
          >
            <option value="1">Developer</option>
            <option value="2">Designer</option>
          </Dropdown>
          <Dropdown
            label="With value and a placeholder"
            id={`${id}_4`}
            onChange={handler}
            value="1"
            disabled={true}
            placeholder="Placeholder text"
          >
            <option value="1">Developer</option>
            <option value="2">Designer</option>
          </Dropdown>
        </Stack>
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
    {
      label: 'Dropdown with no visual label',
      Container,
      Example: ({ id, handler }) => (
        <Dropdown
          aria-label="Job Title"
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
};
