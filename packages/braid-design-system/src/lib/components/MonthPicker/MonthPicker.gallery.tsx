import source from '@braid-design-system/source.macro';
import type { GalleryComponent } from 'site/types';

import { IconHelp, MonthPicker, TextLink } from '../';

export const galleryItems: GalleryComponent = {
  examples: [
    {
      label: 'Standard',
      Example: ({ id, getState, setState }) =>
        source(
          <MonthPicker
            label="Label"
            id={id}
            onChange={setState('monthpicker')}
            value={getState('monthpicker')}
          />,
        ),
    },
    {
      label: 'With additional labels',
      Example: ({ id, getState, setState }) =>
        source(
          <MonthPicker
            label="Label"
            id={id}
            onChange={setState('monthpicker')}
            value={getState('monthpicker')}
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
      Example: ({ id, getState, setState }) =>
        source(
          <MonthPicker
            label="Label"
            id={id}
            onChange={setState('monthpicker')}
            value={getState('monthpicker')}
            description="Longer description of this field"
          />,
        ),
    },
    {
      label: 'With a critical message',
      Example: ({ id, getState, setState }) =>
        source(
          <MonthPicker
            label="Label"
            id={id}
            onChange={setState('monthpicker')}
            value={getState('monthpicker')}
            tone="critical"
            message="Critical message"
          />,
        ),
    },
    {
      label: 'With a positive message',
      Example: ({ id, getState, setState }) =>
        source(
          <MonthPicker
            label="Label"
            id={id}
            onChange={setState('monthpicker')}
            value={getState('monthpicker')}
            tone="positive"
            message="Positive message"
          />,
        ),
    },
    {
      label: 'With a caution message',
      Example: ({ id, getState, setState }) =>
        source(
          <MonthPicker
            label="Label"
            id={id}
            onChange={setState('monthpicker')}
            value={getState('monthpicker')}
            tone="caution"
            message="Caution message"
          />,
        ),
    },
    {
      label: 'With a neutral message',
      Example: ({ id, getState, setState }) =>
        source(
          <MonthPicker
            label="Label"
            id={id}
            onChange={setState('monthpicker')}
            value={getState('monthpicker')}
            tone="neutral"
            message="Neutral message"
          />,
        ),
    },
    {
      label: 'Disabled field',
      Example: ({ id, getState, setState }) =>
        source(
          <MonthPicker
            label="Label"
            id={id}
            onChange={setState('monthpicker')}
            value={getState('monthpicker')}
            disabled={true}
          />,
        ),
    },
    {
      label: 'Custom months and years',
      Example: ({ id, getState, setState }) =>
        source(
          <MonthPicker
            id={id}
            label="Started"
            onChange={setState('monthpicker')}
            value={getState('monthpicker')}
            monthLabel="MM"
            yearLabel="YYYY"
            monthNames={[
              '01',
              '02',
              '03',
              '04',
              '05',
              '06',
              '07',
              '08',
              '09',
              '10',
              '11',
              '12',
            ]}
          />,
        ),
    },
  ],
};
