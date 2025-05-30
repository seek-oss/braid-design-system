import source from '@braid-design-system/source.macro';
import type { ComponentDocs } from 'site/types';

import {
  Badge,
  Text,
  TextLink,
  RadioGroup,
  RadioItem,
  Strong,
  Tiles,
} from '..';
import { Placeholder } from '../../playroom/components';
import { Heading } from '../Heading/Heading';
import { Stack } from '../Stack/Stack';
import { dataAttributeDocs } from '../private/dataAttribute.docs';

const docs: ComponentDocs = {
  category: 'Content',
  subComponents: ['RadioItem'],
  Example: ({ getState, setState }) =>
    source(
      <RadioGroup
        value={getState('radio')}
        onChange={({ currentTarget: { value } }) => setState('radio', value)}
        label="Label"
      >
        <RadioItem label="One" value="1" />
        <RadioItem label="Two" value="2" />
        <RadioItem label="Three" value="3" />
      </RadioGroup>,
    ),
  description: (
    <Text>
      The RadioGroup provides an accessible way to group and control a set of{' '}
      <Strong>RadioItem</Strong> components. The RadioGroup is responsible for
      handling the value, tone, message, and disabled state—determining the
      presentation and selection of the items in the list.
    </Text>
  ),
  accessibility: (
    <Text>
      Follows the{' '}
      <TextLink href="https://www.w3.org/WAI/ARIA/apg/patterns/radiobutton/">
        WAI-ARIA Radio Group Pattern
      </TextLink>{' '}
      for radio groups not contained in a toolbar.
    </Text>
  ),
  alternatives: [
    {
      name: 'Checkbox',
      description: 'For multi-select.',
    },
  ],
  additional: [
    {
      label: 'Message and tone',
      description: (
        <>
          <Text>
            A <Strong>message</Strong> is typically used to communicate the
            status of a field, such as an error message. This will be announced
            on focus of the field and can be combined with a{' '}
            <TextLink href="/foundations/tones">tone</TextLink> to illustrate
            its purpose.
          </Text>
          <Text>
            The supported tones are: <Strong>{'"critical"'}</Strong>,{' '}
            <Strong>{'"positive"'}</Strong>, and <Strong>{'"neutral"'}</Strong>.
          </Text>
        </>
      ),
      Example: ({ getState, setState }) =>
        source(
          <Tiles space="large" columns={{ mobile: 1, tablet: 2 }}>
            <RadioGroup
              value={getState('radio')}
              onChange={({ currentTarget: { value } }) =>
                setState('radio', value)
              }
              label="Label"
              tone="critical"
              message="Critical message"
            >
              <RadioItem label="One" value="1" />
              <RadioItem label="Two" value="2" />
              <RadioItem label="Three" value="3" />
            </RadioGroup>
            <RadioGroup
              value={getState('radio2')}
              onChange={({ currentTarget: { value } }) =>
                setState('radio2', value)
              }
              label="Label"
              tone="positive"
              message="Positive message"
            >
              <RadioItem label="One" value="1" />
              <RadioItem label="Two" value="2" />
              <RadioItem label="Three" value="3" />
            </RadioGroup>
          </Tiles>,
        ),
    },
    {
      label: 'Field description',
      description: (
        <Text>
          Additional context can be provided with a <Strong>description</Strong>
          . This will display below the field label and also be announced by a
          screen reader when the field is focused.
        </Text>
      ),
      Example: ({ getState, setState }) =>
        source(
          <RadioGroup
            value={getState('radio')}
            onChange={({ currentTarget: { value } }) =>
              setState('radio', value)
            }
            label="Label"
            description="Extra information about the field"
          >
            <RadioItem label="One" value="1" />
            <RadioItem label="Two" value="2" />
            <RadioItem label="Three" value="3" />
          </RadioGroup>,
        ),
    },
    {
      label: 'Sizes',
      description: (
        <Text>
          You can customise the size of the radio items via the{' '}
          <Strong>size</Strong> prop, which accepts either{' '}
          <Strong>standard</Strong> or <Strong>small.</Strong>
        </Text>
      ),
      Example: ({ getState, setState }) =>
        source(
          <Tiles space="large" columns={{ mobile: 1, tablet: 2 }}>
            <RadioGroup
              value={getState('radio')}
              onChange={({ currentTarget: { value } }) =>
                setState('radio', value)
              }
              label="Standard"
              size="standard"
            >
              <RadioItem label="One" value="1" />
              <RadioItem label="Two" value="2" />
            </RadioGroup>
            <RadioGroup
              value={getState('radio2')}
              onChange={({ currentTarget: { value } }) =>
                setState('radio2', value)
              }
              label="Small"
              size="small"
            >
              <RadioItem label="One" value="1" />
              <RadioItem label="Two" value="2" />
            </RadioGroup>
          </Tiles>,
        ),
    },
    {
      label: 'Disabled field',
      description: (
        <Text>
          Mark the entire <Strong>RadioGroup</Strong> as disabled by passing{' '}
          <Strong>true</Strong> to the <Strong>disabled</Strong> prop.
        </Text>
      ),
      Example: () =>
        source(
          <RadioGroup
            value="2"
            onChange={() => {}}
            label="Label"
            disabled={true}
          >
            <RadioItem label="One" value="1" />
            <RadioItem label="Two" value="2" />
            <RadioItem label="Three" value="3" />
          </RadioGroup>,
        ),
    },
    {
      label: 'Disabling at item-level',
      description: (
        <Text>
          Mark an individual <Strong>RadioItem</Strong> as disabled by passing{' '}
          <Strong>true</Strong> to its <Strong>disabled</Strong> prop.
        </Text>
      ),
      Example: ({ getState, setState }) =>
        source(
          <RadioGroup
            value={getState('radio')}
            onChange={({ currentTarget: { value } }) =>
              setState('radio', value)
            }
            label="Label"
          >
            <RadioItem label="One" value="1" />
            <RadioItem label="Two" value="2" />
            <RadioItem label="Three" value="3" disabled={true} />
          </RadioGroup>,
        ),
    },
    {
      label: 'Item-level descriptions',
      description: (
        <Text>
          Additional context can also be provided at an item level with a{' '}
          <Strong>description</Strong>. This will display below the{' '}
          <Strong>RadioItem</Strong> label and also be announced by a screen
          reader when the item is focused.
        </Text>
      ),
      Example: ({ getState, setState }) =>
        source(
          <RadioGroup
            value={getState('radio')}
            onChange={({ currentTarget: { value } }) =>
              setState('radio', value)
            }
            label="Label"
          >
            <RadioItem
              label="One"
              value="1"
              description="Description for item 1"
            />
            <RadioItem
              label="Two"
              value="2"
              description="Description for item 2"
            />
            <RadioItem
              label="Three"
              value="3"
              description="Description for item 3"
            />
          </RadioGroup>,
        ),
    },
    {
      label: 'Badge support',
      description: (
        <Text>
          Add a <TextLink href="/components/Badge">Badge</TextLink> alongside
          the <Strong>RadioItem</Strong> label using the <Strong>badge</Strong>{' '}
          prop.
        </Text>
      ),
      Example: ({ getState, setState }) =>
        source(
          <RadioGroup
            value={getState('radio')}
            onChange={({ currentTarget: { value } }) =>
              setState('radio', value)
            }
            label="Label"
          >
            <RadioItem label="One" value="1" />
            <RadioItem label="Two" value="2" />
            <RadioItem
              label="Three"
              value="3"
              badge={
                <Badge tone="positive" weight="strong">
                  Positive
                </Badge>
              }
            />
          </RadioGroup>,
        ),
    },
    {
      label: 'Toggling nested content',
      description: (
        <Text>
          Nesting content inside of a <Strong>RadioItem</Strong> will both align
          the content with the item label, and toggle it&rsquo;s visibility
          based on the value state.
        </Text>
      ),
      Example: ({ getState, setState, setDefaultState }) =>
        source(
          <>
            {setDefaultState('radio', '2')}

            <RadioGroup
              value={getState('radio')}
              onChange={({ currentTarget: { value } }) =>
                setState('radio', value)
              }
              label="Label"
            >
              <RadioItem label="One" value="1" />
              <RadioItem label="Two" value="2">
                <Placeholder height={100} label="Nested content" />
              </RadioItem>
              <RadioItem label="Three" value="3" />
            </RadioGroup>
          </>,
        ),
    },
    {
      label: 'Indirect or hidden field labels',
      description: (
        <Text>
          In some cases it may be necessary for a field to be labelled by
          another element or even not to have a visual label. Instead of
          providing a <Strong>label</Strong> either <Strong>aria-label</Strong>{' '}
          or <Strong>aria-labelledby</Strong> can be provided.
        </Text>
      ),
      Example: ({ getState, setState }) =>
        source(
          <Stack space="medium">
            <Heading level="2" id="fieldLabel">
              Custom field label
            </Heading>

            <RadioGroup
              value={getState('radio')}
              onChange={({ currentTarget: { value } }) =>
                setState('radio', value)
              }
              message="The label for this fieldset is the Heading element before it."
              aria-labelledby="fieldLabel"
            >
              <RadioItem label="One" value="1" />
              <RadioItem label="Two" value="2" />
              <RadioItem label="Three" value="3" />
            </RadioGroup>
          </Stack>,
        ),
    },
    dataAttributeDocs({
      code: `
        <RadioGroup
          data={{ testid: 'radio-group-1' }}
          // => data-testid="radio-group-1"
        >
          <RadioItem
            data={{ testid: 'radio-item-1' }}
            // => data-testid="radio-item-1"
          />
        </RadioGroup>
      `,
      supportsNativeSyntax: false,
    }),
  ],
};

export default docs;
