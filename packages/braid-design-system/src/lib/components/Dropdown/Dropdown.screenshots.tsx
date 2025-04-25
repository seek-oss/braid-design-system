import type { ReactNode } from 'react';
import type { ComponentScreenshot } from 'site/types';

import { Dropdown, IconLocation, Stack } from '../';
import { BackgroundContrastTest } from '../../utils/BackgroundContrastTest';

const Container = ({ children }: { children: ReactNode }) => (
  <div style={{ maxWidth: '300px' }}>{children}</div>
);

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320],
  examples: [
    {
      label: 'Dropdown with placeholder',
      Container,
      Example: ({ handler }) => (
        <Dropdown
          label="Job Title"
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
      Example: ({ handler }) => (
        <Dropdown
          label="Location"
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
      Example: ({ handler }) => (
        <Dropdown
          label="Location"
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
      Example: ({ handler }) => (
        <Dropdown label="Job Title" onChange={handler} value="">
          <option value="1">Developer</option>
          <option value="2">Designer</option>
        </Dropdown>
      ),
    },
    {
      label: 'Dropdown in critical tone',
      Container,
      Example: ({ handler }) => (
        <Dropdown
          label="Job Title"
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
      label: 'Dropdown in caution tone',
      Container,
      Example: ({ handler }) => (
        <Dropdown
          label="Job Title"
          onChange={handler}
          value=""
          tone="caution"
          message="Caution message"
        >
          <option value="1">Developer</option>
          <option value="2">Designer</option>
        </Dropdown>
      ),
    },
    {
      label: 'Dropdown in disabled state',
      Container,
      Example: ({ handler }) => (
        <Stack space="gutter">
          <Dropdown
            label="With no value or placeholder"
            onChange={handler}
            value=""
            disabled={true}
          >
            <option value="1">Developer</option>
            <option value="2">Designer</option>
          </Dropdown>
          <Dropdown
            label="With value and no placeholder"
            onChange={handler}
            value="1"
            disabled={true}
          >
            <option value="1">Developer</option>
            <option value="2">Designer</option>
          </Dropdown>
          <Dropdown
            label="With no value and a placeholder"
            onChange={handler}
            value=""
            disabled={true}
            placeholder="Placeholder text"
          >
            <option value="1">Developer</option>
            <option value="2">Designer</option>
          </Dropdown>
          <Dropdown
            label="With critical tone"
            onChange={handler}
            value=""
            disabled={true}
            tone="critical"
          >
            <option value="1">Developer</option>
            <option value="2">Designer</option>
          </Dropdown>
          <Dropdown
            label="With critical tone and message"
            onChange={handler}
            value=""
            disabled={true}
            tone="critical"
            message="Message"
          >
            <option value="1">Developer</option>
            <option value="2">Designer</option>
          </Dropdown>
        </Stack>
      ),
    },
    {
      label: 'Dropdown with no visual label',
      Container,
      Example: ({ handler }) => (
        <Dropdown
          aria-label="Job Title"
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
      label: 'Contrast',
      Container,
      Example: ({ handler }) => (
        <BackgroundContrastTest>
          <Dropdown
            label="Job Title"
            onChange={handler}
            value=""
            placeholder="Please select a role title"
          >
            <option value="1">Developer</option>
            <option value="2">Designer</option>
          </Dropdown>
        </BackgroundContrastTest>
      ),
    },
  ],
};
