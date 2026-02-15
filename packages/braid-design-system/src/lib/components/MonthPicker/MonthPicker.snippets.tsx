import source from '@braid-design-system/source.macro';

import { IconHelp, MonthPicker } from '../../playroom/components';
import { TextLink } from '../TextLink/TextLink';
import type { Snippets } from '../private/Snippets';

export const snippets: Snippets = [
  {
    description: 'Standard',
    code: source(<MonthPicker label="Month" />),
  },
  {
    description: 'With additional labels',
    code: source(
      <MonthPicker
        label="Label"
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
    description: 'With a description',
    code: source(
      <MonthPicker
        label="Label"
        description="More detailed description of field."
      />,
    ),
  },
  {
    description: 'With a critical message',
    code: source(
      <MonthPicker label="Month" tone="critical" message="Critical message" />,
    ),
  },
  {
    description: 'With a positive message',
    code: source(
      <MonthPicker label="Month" tone="positive" message="Positive message" />,
    ),
  },
  {
    description: 'With a neutral message',
    code: source(
      <MonthPicker label="Month" tone="neutral" message="Neutral message" />,
    ),
  },
  {
    description: 'With custom months and years',
    code: source(
      <MonthPicker
        label="Started"
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
];
