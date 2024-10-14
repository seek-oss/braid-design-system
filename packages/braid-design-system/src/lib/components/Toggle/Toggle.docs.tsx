import React, { Fragment } from 'react';
import type { ComponentDocs } from 'site/types';
import { Alert, Box, Divider, TextLink, Toggle } from '../';
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
          <Stack space="large">
            <Toggle
              label="Left"
              id={`${id}_1`}
              on={getState('toggle1')}
              onChange={() => toggleState('toggle1')}
              align="left"
            />
            <Divider />
            <Toggle
              label="Justify"
              id={`${id}_2`}
              on={getState('toggle2')}
              onChange={() => toggleState('toggle2')}
              align="justify"
            />
            <Divider />
            <Toggle
              label="Right"
              id={`${id}_3`}
              on={getState('toggle3')}
              onChange={() => toggleState('toggle3')}
              align="right"
            />
          </Stack>,
        ),
    },
    {
      label: 'Toggle position',
      description: (
        <>
          <Text>
            By default, the position of the toggle relative to the label text
            will be determined by its <Strong>align</Strong> prop.
          </Text>
          <Text>
            This can be overridden by setting the{' '}
            <Strong>togglePosition</Strong> prop to either{' '}
            <Strong>leading</Strong> or <Strong>trailing</Strong>.
          </Text>
        </>
      ),
      Example: ({ id, getState, toggleState }) =>
        source(
          <Stack space="large">
            <Toggle
              label="Leading"
              id={`${id}_leading`}
              on={getState('toggleLeading')}
              onChange={() => toggleState('toggleLeading')}
              togglePosition="leading"
            />
            <Divider />
            <Toggle
              label="Trailing"
              id={`${id}_trailing`}
              on={getState('toggleTrailing')}
              onChange={() => toggleState('toggleTrailing')}
              togglePosition="trailing"
            />
          </Stack>,
        ),
    },
    {
      label: 'Vertical bleed',
      deprecated: true,
      description: (
        <Fragment>
          <Text>
            The <Strong>bleedY</Strong> prop removes the excess vertical space
            created by the toggle input — ensuring it’s only as tall as the{' '}
            provided label text.
          </Text>
          <Text>
            This better aligns with the{' '}
            <TextLink href="/foundations/layout">layout principles</TextLink> of
            the system, enabling the surrounding white space to be controlled by
            the parent layout component, e.g.{' '}
            <TextLink href="/components/Stack">Stack</TextLink>.
          </Text>
          <Alert tone="caution">
            <Text>
              Vertical bleed is enabled by default, and will become the standard
              in the future. It is recommended to remove the{' '}
              <Strong>bleedY</Strong>
              prop now and migrate your layout accordingly.
            </Text>
          </Alert>
          <Text>
            In the following example, a{' '}
            <TextLink href="/components/Stack">Stack</TextLink> controls the
            space between child elements. Switching the toggle off introduces
            unwanted space above and below the label.
          </Text>
        </Fragment>
      ),
      Example: ({ id, setDefaultState, getState, toggleState }) =>
        source(
          <>
            {setDefaultState('verticalBleed', true)}
            <Stack space="medium">
              <Text>Text</Text>
              <Text>Text</Text>
              <Box boxShadow="borderCriticalLight">
                <Toggle
                  label="BleedY"
                  id={`${id}_toggle_bleed`}
                  on={getState('verticalBleed')}
                  onChange={() => toggleState('verticalBleed')}
                  align="left"
                  togglePosition="trailing"
                  bleedY={getState('verticalBleed')}
                />
              </Box>

              <Text>Text</Text>
            </Stack>
          </>,
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
          <Stack space="large">
            <Toggle
              id={`${id}_standard`}
              label="Standard"
              on={getState('two')}
              onChange={() => toggleState('two')}
              size="standard"
            />
            <Toggle
              id={`${id}_small`}
              label="Small"
              on={getState('one')}
              onChange={() => toggleState('one')}
              size="small"
            />
          </Stack>,
        ),
    },
  ],
};

export default docs;
