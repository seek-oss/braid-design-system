import React, { Fragment } from 'react';
import type { ComponentDocs } from 'site/types';
import { TextLink, Toggle } from '../';
import { Text } from '../Text/Text';
import { Strong } from '../Strong/Strong';
import source from '@braid-design-system/source.macro';
import { Stack } from '../Stack/Stack';

const docs: ComponentDocs = {
  category: 'Content',
  Example: ({ id, getState, toggleState }) =>
    source(
      <Toggle
        label="Label"
        id={id}
        on={getState('toggle')}
        onChange={() => toggleState('toggle')}
        bleedY
      />,
    ),
  alternatives: [
    {
      name: 'Checkbox',
      description: 'For selections part of a form submission.',
    },
  ],
  additional: [
    {
      label: 'Alignment',
      description: (
        <Text>
          Toggles can be aligned via the <Strong>align</Strong> prop.
        </Text>
      ),
      Example: ({ id, getState, toggleState }) =>
        source(
          <Stack space="large" dividers>
            <Toggle
              label="Left"
              id={`${id}_1`}
              on={getState('toggle1')}
              onChange={() => toggleState('toggle1')}
              align="left"
              bleedY
            />
            <Toggle
              label="Justify"
              id={`${id}_2`}
              on={getState('toggle2')}
              onChange={() => toggleState('toggle2')}
              align="justify"
              bleedY
            />
            <Toggle
              label="Right"
              id={`${id}_3`}
              on={getState('toggle3')}
              onChange={() => toggleState('toggle3')}
              align="right"
              bleedY
            />
          </Stack>,
        ),
    },
    {
      label: 'Vertical bleed',
      description: (
        <Fragment>
          <Text>
            With the <Strong>bleedY</Strong> prop, you can remove excess
            vertical space created by the toggle handle.
          </Text>
          <Text>
            For example, you can include a toggle in a{' '}
            <TextLink href="/components/Stack">Stack</TextLink> with all text
            evenly spaced.
          </Text>
        </Fragment>
      ),
      Example: ({ id, getState, toggleState }) =>
        source(
          <Stack space="medium">
            <Text>Text</Text>
            <Text>Text</Text>
            <Toggle
              label="Vertical bleed"
              id={`${id}_toggle_bleed`}
              on={!getState('disableVerticalBleed')}
              onChange={() => toggleState('disableVerticalBleed')}
              align="justify"
              bleedY={!getState('disableVerticalBleed')}
            />
          </Stack>,
        ),
    },
    {
      label: 'Sizes',
      description: (
        <Text>
          You can customise the size of the toggle via the <Strong>size</Strong>{' '}
          prop, which accepts either <Strong>standard</Strong> or{' '}
          <Strong>small.</Strong>
        </Text>
      ),
      Example: ({ id, getState, toggleState }) =>
        source(
          <Stack space="medium">
            <Toggle
              id={`${id}_standard`}
              label="Standard"
              on={getState('two')}
              onChange={() => toggleState('two')}
              size="standard"
              bleedY={false}
            />
            <Toggle
              id={`${id}_small`}
              label="Small"
              on={getState('one')}
              onChange={() => toggleState('one')}
              size="small"
              bleedY={false}
            />
          </Stack>,
        ),
    },
  ],
};

export default docs;
