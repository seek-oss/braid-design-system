import source from '@braid-design-system/source.macro';
import type { GalleryComponent } from 'site/types';

import { IconSearch, IconHelp, TextField, TextLink } from '../';

export const galleryItems: GalleryComponent = {
  examples: [
    {
      label: 'Standard',
      Example: ({ getState, setState }) =>
        source(
          <TextField
            label="Label"
            onChange={setState('textfield')}
            value={getState('textfield')}
            onClear={() => setState('textfield', '')}
          />,
        ),
    },
    {
      label: 'With additional labels',
      Example: ({ getState, setState }) =>
        source(
          <TextField
            label="Label"
            onChange={setState('textfield')}
            value={getState('textfield')}
            secondaryLabel="optional"
            tertiaryLabel={
              <TextLink href="#" icon={<IconHelp />}>
                Help
              </TextLink>
            }
          />,
        ),
    },
    {
      label: 'With a description',
      Example: ({ getState, setState }) =>
        source(
          <TextField
            label="Label"
            onChange={setState('textfield')}
            value={getState('textfield')}
            onClear={() => setState('textfield', '')}
            description="Longer description of this field"
          />,
        ),
    },
    {
      label: 'With a critical message',
      Example: ({ getState, setState }) =>
        source(
          <TextField
            label="Label"
            onChange={setState('textfield')}
            value={getState('textfield')}
            tone="critical"
            message="Critical message"
          />,
        ),
    },
    {
      label: 'With a positive message',
      Example: ({ getState, setState }) =>
        source(
          <TextField
            label="Label"
            onChange={setState('textfield')}
            value={getState('textfield')}
            tone="positive"
            message="Positive message"
          />,
        ),
    },
    {
      label: 'With a caution message',
      Example: ({ getState, setState }) =>
        source(
          <TextField
            label="Label"
            onChange={setState('textfield')}
            value={getState('textfield')}
            tone="caution"
            message="Caution message"
          />,
        ),
    },
    {
      label: 'With a neutral message',
      Example: ({ getState, setState }) =>
        source(
          <TextField
            label="Label"
            onChange={setState('textfield')}
            value={getState('textfield')}
            tone="neutral"
            message="Neutral message"
          />,
        ),
    },
    {
      label: 'With an icon',
      Example: ({ getState, setState }) =>
        source(
          <TextField
            label="Job Title"
            onChange={setState('textfield')}
            value={getState('textfield')}
            icon={<IconSearch />}
            placeholder="Enter a job title"
          />,
        ),
    },
    {
      label: 'With a prefix',
      Example: ({ getState, setState }) =>
        source(
          <TextField
            label="Phone number"
            onChange={setState('textfield')}
            value={getState('textfield')}
            prefix="+61"
          />,
        ),
    },
    {
      label: 'Disabled field',
      Example: ({ getState, setState }) =>
        source(
          <TextField
            label="Label"
            onChange={setState('textfield')}
            value={getState('textfield')}
            disabled={true}
          />,
        ),
    },
  ],
};
