import source from '@braid-design-system/source.macro';
import type { ComponentDocs } from 'site/types';

import {
  Textarea,
  TextLink,
  IconHelp,
  List,
  Text,
  Strong,
  Stack,
  Heading,
  Alert,
} from '../';
import { dataAttributeDocs } from '../private/dataAttribute.docs';

const docs: ComponentDocs = {
  category: 'Content',
  Example: ({ getState, setState }) =>
    source(
      <Textarea
        label="Label"
        onChange={setState('textarea')}
        value={getState('textarea')}
      />,
    ),
  alternatives: [{ name: 'TextField', description: 'For shorter-form text.' }],
  additional: [
    {
      label: 'Additional labels',
      description: (
        <>
          <Text>
            Supports all three levels of{' '}
            <TextLink href="/components/FieldLabel">FieldLabel</TextLink>:
          </Text>
          <List>
            <Text>
              <Strong>label</Strong> — primary title of the field,
            </Text>
            <Text>
              <Strong>secondaryLabel</Strong> — additional context, typically
              used to indicate optionality of a field,
            </Text>
            <Text>
              <Strong>tertiaryLabel</Strong> — further context, typically used
              for providing assistance with a field.
            </Text>
          </List>
        </>
      ),
      Example: ({ getState, setState }) =>
        source(
          <Textarea
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
            <Strong>{'"positive"'}</Strong>, <Strong>{'"caution"'}</Strong>, and{' '}
            <Strong>{'"neutral"'}</Strong>.
          </Text>
        </>
      ),
      Example: ({ getState, setState }) =>
        source(
          <Stack space="large">
            <Textarea
              label="Label"
              onChange={setState('textarea')}
              value={getState('textarea')}
              tone="critical"
              message="Critical message"
            />
            <Textarea
              label="Label"
              onChange={setState('textarea2')}
              value={getState('textarea2')}
              tone="positive"
              message="Positive message"
            />
            <Textarea
              label="Label"
              onChange={setState('textarea3')}
              value={getState('textarea3')}
              tone="caution"
              message="Caution message"
            />
            <Textarea
              label="Label"
              onChange={setState('textarea4')}
              value={getState('textarea4')}
              tone="neutral"
              message="Neutral message"
            />
          </Stack>,
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
          <Textarea
            label="Label"
            onChange={setState('textarea')}
            value={getState('textarea')}
            description="Extra information about the field"
          />,
        ),
    },
    {
      label: 'Disabled field',
      description: (
        <Text>
          Mark the field as disabled by passing <Strong>true</Strong> to the{' '}
          <Strong>disabled</Strong> prop.
        </Text>
      ),
      Example: ({ setState }) =>
        source(
          <Textarea
            label="Label"
            onChange={setState('textarea')}
            value="Text in disabled field"
            disabled={true}
          />,
        ),
    },
    {
      label: 'Specifying a height',
      description: (
        <Text>
          The height is defaulted to 3 lines. This can be overridden by passing
          a number to the <Strong>lines</Strong> prop.
        </Text>
      ),
      Example: ({ getState, setState }) =>
        source(
          <Textarea
            label="Label"
            onChange={setState('textarea')}
            value={getState('textarea')}
            description="Height set to 5 lines"
            lines={5}
          />,
        ),
    },
    {
      label: 'Adjust height with user input',
      description: (
        <>
          <Text>
            By default, the field adjusts its height as the user types. You can
            set a limit to the number of lines by passing a number to the{' '}
            <Strong>lineLimit</Strong> prop.
          </Text>
          <Text>
            Alternatively, this behaviour can be disabled by setting{' '}
            <Strong>grow</Strong> to <Strong>{'"false"'}</Strong>.
          </Text>
        </>
      ),
      Example: ({ getState, setState }) =>
        source(
          <Textarea
            label="Label"
            onChange={setState('textarea')}
            value={getState('textarea')}
            description="Height limited to 6 lines"
            lineLimit={6}
          />,
        ),
    },
    {
      label: 'Limiting the number of characters',
      description: (
        <>
          <Text>
            Providing a <Strong>characterLimit</Strong> will communicate when
            the input text approaches or exceeds the specified limit. All excess
            characters will be visually highlighted.
          </Text>
          <Text>
            To prevent loss of information, exceeding the limit is permitted,
            however the count will be presented in a <Strong>critical</Strong>{' '}
            tone.
          </Text>
        </>
      ),
      Example: ({ getState, setState, setDefaultState }) =>
        source(
          <>
            {setDefaultState(
              'text',
              'A long piece of text exceeding the specified character limit of 50',
            )}

            <Textarea
              label="Label"
              onChange={setState('text')}
              value={getState('text')}
              description="Character limit of 50"
              characterLimit={50}
            />
          </>,
        ),
    },
    {
      label: 'Highlighting ranges',
      description: (
        <>
          <Text>
            To support targeted validations, specific character ranges can be
            highlighted. The <Strong>highlightRanges</Strong> prop accepts an
            array of <Strong>start</Strong> and <Strong>end</Strong> character
            positions.
          </Text>
          <Text>
            Supported highlight tones are <Strong>critical</Strong> and{' '}
            <Strong>caution</Strong>. Highlights follow the{' '}
            <Strong>tone</Strong> set on the field.
          </Text>
          <Text>
            Additionally, when highlighting ranges you may choose to disable the
            built-in spell check to prevent colliding highlights. This can be
            done be setting <Strong>spellCheck</Strong> to{' '}
            <Strong>false</Strong>.
          </Text>
          <Alert>
            <Stack space="large">
              <Text>
                When combining <Strong>characterLimit</Strong> and{' '}
                <Strong>highlightRanges</Strong>, if the number of characters
                exceeds the limit, only the exceeding characters will be
                highlighted (using <Strong>critical</Strong> tone).
              </Text>
              <Text>
                Once resolved, the provided <Strong>highlightRanges</Strong>{' '}
                will then be shown.
              </Text>
            </Stack>
          </Alert>
        </>
      ),
      Example: ({ getState, setState, setDefaultState }) =>
        source(
          <>
            {setDefaultState(
              'textarea',
              'A long piece of text with a highlighted range',
            )}

            <Stack space="large">
              <Textarea
                label="Label"
                onChange={setState('textarea')}
                value={getState('textarea')}
                tone="critical"
                message="Critical message"
                description="Characters 7-20 are highlighted"
                highlightRanges={[{ start: 7, end: 20 }]}
              />

              <Textarea
                label="Label"
                onChange={setState('textarea')}
                value={getState('textarea')}
                tone="caution"
                message="Caution message"
                description="Characters 7-20 are highlighted"
                highlightRanges={[{ start: 7, end: 20 }]}
              />
            </Stack>
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
          <Stack space="large">
            <Heading level="2" id="field1Label">
              Custom field label
            </Heading>
            <Textarea
              aria-labelledby="field1Label"
              onChange={setState('text')}
              value={getState('text')}
              message="The label for this field is the Heading element before it."
            />

            <Textarea
              aria-label="Hidden label for field"
              onChange={setState('text2')}
              value={getState('text2')}
              message="The label for this field is hidden."
            />
          </Stack>,
        ),
    },
    dataAttributeDocs({
      code: `
        <Textarea
          data={{ testid: 'textarea-1' }}
          // => data-testid="textarea-1"
        />
      `,
      supportsNativeSyntax: false,
    }),
  ],
};

export default docs;
