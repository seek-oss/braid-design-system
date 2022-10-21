import React from 'react';
import { Snippets } from '../private/Snippets';
import { IconHelp, TextLink, Textarea } from '../../playroom/components';
import source from '../../utils/source.macro';

export const snippets: Snippets = [
  {
    name: 'Standard',
    code: source(<Textarea label="Label" />),
  },
  {
    name: 'With additional labels',
    code: source(
      <Textarea
        label="Label"
        secondaryLabel="optional"
        tertiaryLabel={
          <TextLink href="#">
            <IconHelp /> Help
          </TextLink>
        }
      />,
    ),
  },
  {
    name: 'With a description',
    code: source(
      <Textarea
        label="Label"
        description="More detailed description of field."
      />,
    ),
  },
  {
    name: 'With a critical message',
    code: source(
      <Textarea label="Label" tone="critical" message="Critical message" />,
    ),
  },
  {
    name: 'With a positive message',
    code: source(
      <Textarea label="Label" tone="positive" message="Positive message" />,
    ),
  },
  {
    name: 'With a neutral message',
    code: source(
      <Textarea label="Label" tone="neutral" message="Neutral message" />,
    ),
  },
  {
    name: 'With fixed height of 5 lines',
    code: source(<Textarea label="Label" grow={false} lines={5} />),
  },
  {
    name: 'With dynamic height, limited to 7 lines',
    code: source(<Textarea label="Label" grow={true} lineLimit={7} />),
  },
  {
    name: 'With character limit',
    code: source(
      <Textarea
        label="Label"
        description="Character limit of 100"
        characterLimit={100}
      />,
    ),
  },
  {
    name: 'With a highlighted range',
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
