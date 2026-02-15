import source from '@braid-design-system/source.macro';

import { IconHelp, TextLink, Textarea } from '../../playroom/components';
import type { Snippets } from '../private/Snippets';

export const snippets: Snippets = [
  {
    description: 'Standard',
    code: source(<Textarea label="Label" />),
  },
  {
    description: 'With additional labels',
    code: source(
      <Textarea
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
      <Textarea
        label="Label"
        description="More detailed description of field."
      />,
    ),
  },
  {
    description: 'With a critical message',
    code: source(
      <Textarea label="Label" tone="critical" message="Critical message" />,
    ),
  },
  {
    description: 'With a positive message',
    code: source(
      <Textarea label="Label" tone="positive" message="Positive message" />,
    ),
  },
  {
    description: 'With a neutral message',
    code: source(
      <Textarea label="Label" tone="neutral" message="Neutral message" />,
    ),
  },
  {
    description: 'With fixed height of 5 lines',
    code: source(<Textarea label="Label" grow={false} lines={5} />),
  },
  {
    description: 'With dynamic height, limited to 7 lines',
    code: source(<Textarea label="Label" grow={true} lineLimit={7} />),
  },
  {
    description: 'With character limit',
    code: source(
      <Textarea
        label="Label"
        description="Character limit of 100"
        characterLimit={100}
      />,
    ),
  },
  {
    description: 'With a highlighted range',
    code: source(
      <Textarea
        label="Label"
        description="Characters 11-20 are highlighted"
        tone="critical"
        message="Critical message"
        highlightRanges={[{ start: 11, end: 20 }]}
      />,
    ),
  },
];
