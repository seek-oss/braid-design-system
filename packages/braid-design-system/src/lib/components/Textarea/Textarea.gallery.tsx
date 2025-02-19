import source from '@braid-design-system/source.macro';
import type { GalleryComponent } from 'site/types';

import { Textarea, TextLink, IconHelp } from '../';

export const galleryItems: GalleryComponent = {
  examples: [
    {
      label: 'Standard',
      Example: ({ id, getState, setState }) =>
        source(
          <Textarea
            id={id}
            label="Label"
            value={getState('textarea')}
            onChange={setState('textarea')}
          />,
        ),
    },
    {
      label: 'With additional labels',
      Example: ({ id, getState, setState }) =>
        source(
          <Textarea
            id={id}
            label="Label"
            onChange={setState('textarea')}
            value={getState('textarea')}
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
          <Textarea
            id={id}
            label="Label"
            onChange={setState('textarea')}
            value={getState('textarea')}
            description="Longer description of this field"
          />,
        ),
    },
    {
      label: 'With a critical message',
      Example: ({ id, getState, setState }) =>
        source(
          <Textarea
            id={id}
            label="Label"
            onChange={setState('textarea')}
            value={getState('textarea')}
            tone="critical"
            message="Critical message"
          />,
        ),
    },
    {
      label: 'With a positive message',
      Example: ({ id, getState, setState }) =>
        source(
          <Textarea
            id={id}
            label="Label"
            onChange={setState('textarea')}
            value={getState('textarea')}
            tone="positive"
            message="Positive message"
          />,
        ),
    },
    {
      label: 'With a caution message',
      Example: ({ id, getState, setState }) =>
        source(
          <Textarea
            id={id}
            label="Label"
            onChange={setState('textarea')}
            value={getState('textarea')}
            tone="caution"
            message="Caution message"
          />,
        ),
    },
    {
      label: 'With a neutral message',
      Example: ({ id, getState, setState }) =>
        source(
          <Textarea
            id={id}
            label="Label"
            onChange={setState('textarea')}
            value={getState('textarea')}
            tone="neutral"
            message="Neutral message"
          />,
        ),
    },
    {
      label: 'Disabled field',
      Example: ({ id, getState, setState }) =>
        source(
          <Textarea
            id={id}
            label="Label"
            onChange={setState('textarea')}
            value={getState('textarea')}
            disabled={true}
          />,
        ),
    },
    {
      label: 'Limiting the number of characters',
      Example: ({ id, getState, setState, setDefaultState }) =>
        source(
          <>
            {setDefaultState(
              'textarea',
              'A long piece of text exceeding the specified character limit of 50',
            )}

            <Textarea
              label="Label"
              id={id}
              onChange={setState('textarea')}
              value={getState('textarea')}
              description="Character limit of 50"
              characterLimit={50}
            />
          </>,
        ),
    },
    {
      label: 'Highlighting ranges',
      Example: ({ id, getState, setState, setDefaultState }) =>
        source(
          <>
            {setDefaultState(
              'textarea',
              'A long piece of text with a highlighted range',
            )}

            <Textarea
              label="Label"
              id={id}
              onChange={setState('textarea')}
              value={getState('textarea')}
              tone="critical"
              message="Critical message"
              description="Characters 7-20 are highlighted"
              highlightRanges={[{ start: 7, end: 20 }]}
            />
          </>,
        ),
    },
  ],
};
