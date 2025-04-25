import source from '@braid-design-system/source.macro';
import type { GalleryComponent } from 'site/types';

import { Dropdown, IconLocation, IconHelp, TextLink } from '../';

export const galleryItems: GalleryComponent = {
  examples: [
    {
      label: 'Standard',
      Example: ({ getState, setState }) =>
        source(
          <Dropdown
            label="Label"
            onChange={setState('dropdown')}
            value={getState('dropdown')}
            placeholder="Please select"
          >
            <option>Option 1</option>
            <option>Option 2</option>
          </Dropdown>,
        ),
    },
    {
      label: 'With option groups',
      Example: ({ getState, setState }) =>
        source(
          <Dropdown
            label="Label"
            onChange={setState('dropdown')}
            value={getState('dropdown')}
            placeholder="Please select"
          >
            <optgroup label="Group 1">
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </optgroup>
            <optgroup label="Group 2">
              <option>Option A</option>
              <option>Option B</option>
              <option>Option C</option>
            </optgroup>
          </Dropdown>,
        ),
    },
    {
      label: 'With additional labels',
      Example: ({ getState, setState }) =>
        source(
          <Dropdown
            label="Label"
            onChange={setState('dropdown')}
            value={getState('dropdown')}
            placeholder="Please select"
            secondaryLabel="optional"
            tertiaryLabel={
              <TextLink href="#" icon={<IconHelp />}>
                Help
              </TextLink>
            }
          >
            <option>Option 1</option>
            <option>Option 2</option>
          </Dropdown>,
        ),
    },
    {
      label: 'With a description',
      Example: ({ getState, setState }) =>
        source(
          <Dropdown
            label="Label"
            onChange={setState('dropdown')}
            value={getState('dropdown')}
            placeholder="Please select"
            description="Extra information about the field"
          >
            <option>Option 1</option>
            <option>Option 2</option>
          </Dropdown>,
        ),
    },
    {
      label: 'With an icon',
      Example: ({ getState, setState }) =>
        source(
          <Dropdown
            label="Label"
            onChange={setState('dropdown')}
            value={getState('dropdown')}
            placeholder="Please select"
            icon={<IconLocation />}
          >
            <option>Option 1</option>
            <option>Option 2</option>
          </Dropdown>,
        ),
    },
    {
      label: 'With a critical message',
      Example: ({ getState, setState }) =>
        source(
          <Dropdown
            label="Label"
            onChange={setState('dropdown')}
            value={getState('dropdown')}
            placeholder="Please select"
            tone="critical"
            message="Critical message"
          >
            <option>Option 1</option>
            <option>Option 2</option>
          </Dropdown>,
        ),
    },
    {
      label: 'With a positive message',
      Example: ({ getState, setState }) =>
        source(
          <Dropdown
            label="Label"
            onChange={setState('dropdown')}
            value={getState('dropdown')}
            placeholder="Please select"
            tone="positive"
            message="Positive message"
          >
            <option>Option 1</option>
            <option>Option 2</option>
          </Dropdown>,
        ),
    },
    {
      label: 'With a caution message',
      Example: ({ getState, setState }) =>
        source(
          <Dropdown
            label="Label"
            onChange={setState('dropdown')}
            value={getState('dropdown')}
            placeholder="Please select"
            tone="caution"
            message="Caution message"
          >
            <option>Option 1</option>
            <option>Option 2</option>
          </Dropdown>,
        ),
    },
    {
      label: 'Disabled field',
      Example: ({ getState, setState }) =>
        source(
          <Dropdown
            label="Label"
            onChange={setState('dropdown')}
            value={getState('dropdown')}
            disabled={true}
          >
            <option>Option 1</option>
            <option>Option 2</option>
          </Dropdown>,
        ),
    },
  ],
};
