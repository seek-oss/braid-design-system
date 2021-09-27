import React from 'react';
import { ComponentExample } from '../../../site/src/types';
import { Textarea, TextLink, IconHelp } from '../';
import source from '../../utils/source.macro';

export const galleryItems: ComponentExample[] = [
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
            <TextLink href="#">
              <IconHelp /> Help
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
    background: 'surface',
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
            description="Chactacter limit of 50"
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
];
