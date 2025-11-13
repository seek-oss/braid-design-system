import source from '@braid-design-system/source.macro';
import type { ComponentDocs } from 'site/types';

import { Divider, Toggle } from '../';
import { Stack } from '../Stack/Stack';
import { Strong } from '../Strong/Strong';
import { Text } from '../Text/Text';
import { dataAttributeDocs } from '../private/dataAttribute.docs';

const docs: ComponentDocs = {
  category: 'Content',
  Example: ({ getState, toggleState }) =>
    source(
      <Toggle
        label="Label"
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
      Example: ({ getState, toggleState }) =>
        source(
          <Stack space="large">
            <Toggle
              label="Left"
              on={getState('toggle1')}
              onChange={() => toggleState('toggle1')}
              align="left"
            />
            <Divider />
            <Toggle
              label="Justify"
              on={getState('toggle2')}
              onChange={() => toggleState('toggle2')}
              align="justify"
            />
            <Divider />
            <Toggle
              label="Right"
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
      Example: ({ getState, toggleState }) =>
        source(
          <Stack space="large">
            <Toggle
              label="Leading"
              on={getState('toggleLeading')}
              onChange={() => toggleState('toggleLeading')}
              togglePosition="leading"
            />
            <Divider />
            <Toggle
              label="Trailing"
              on={getState('toggleTrailing')}
              onChange={() => toggleState('toggleTrailing')}
              togglePosition="trailing"
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
      Example: ({ getState, toggleState }) =>
        source(
          <Stack space="large">
            <Toggle
              label="Standard"
              on={getState('two')}
              onChange={() => toggleState('two')}
              size="standard"
            />
            <Toggle
              label="Small"
              on={getState('one')}
              onChange={() => toggleState('one')}
              size="small"
            />
          </Stack>,
        ),
    },
    dataAttributeDocs({
      code: `
        <Toggle
          data={{ testid: 'toggle-1' }}
          // => data-testid="toggle-1"
        />
      `,
      supportsNativeSyntax: false,
    }),
  ],
};

export default docs;
