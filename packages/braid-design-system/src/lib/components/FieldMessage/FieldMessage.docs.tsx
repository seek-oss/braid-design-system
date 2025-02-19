import source from '@braid-design-system/source.macro';
import type { ComponentDocs } from 'site/types';

import {
  FieldMessage,
  Alert,
  Text,
  Strong,
  Stack,
  Box,
  TextLink,
  HiddenVisually,
  Tiles,
  Button,
  Notice,
} from '../';
import { dataAttributeDocs } from '../private/dataAttribute.docs';

const docs: ComponentDocs = {
  category: 'Content',
  Example: () =>
    source(
      <Box maxWidth="small">
        <Stack space="large">
          <Stack space="xsmall">
            <input aria-describedby="message1" />
            <FieldMessage
              id="message1"
              tone="critical"
              message="This is a critical message."
            />
          </Stack>

          <Stack space="xsmall">
            <input aria-describedby="message2" />
            <FieldMessage
              id="message2"
              tone="positive"
              message="This is a positive message."
            />
          </Stack>

          <Stack space="xsmall">
            <input aria-describedby="message3" />
            <FieldMessage
              id="message3"
              tone="neutral"
              message="This is a neutral message."
            />
          </Stack>

          <Stack space="xsmall">
            <input aria-describedby="message4" />
            <FieldMessage
              id="message4"
              tone="caution"
              message="This is a caution message."
            />
          </Stack>
        </Stack>
      </Box>,
    ),
  description: (
    <Alert tone="info">
      <Text weight="medium">
        This component is only required when building a custom field that isn’t
        provided by Braid.
      </Text>
    </Alert>
  ),
  accessibility: (
    <Text>
      The <Strong>id</Strong> prop is required, but you should also ensure that
      the associated field has a matching <Strong>aria-describedby</Strong>{' '}
      prop.
    </Text>
  ),
  alternatives: [
    {
      name: 'FieldLabel',
      description: 'For displaying labels above a custom field',
    },
  ],
  additional: [
    {
      label: 'Message',
      description: (
        <Text>
          A <Strong>message</Strong> is used to communicate the status of a
          field, such as an error message. This will be announced on focus of
          the associated field.
        </Text>
      ),
      Example: () =>
        source(
          <Stack space="xsmall">
            <input aria-describedby="message-example" />
            <FieldMessage
              id="message-example"
              message="This message will be announced on focus of the field above by assistive technologies."
            />
          </Stack>,
        ),
    },
    {
      label: 'Secondary Message',
      description: (
        <Text>
          A <Strong>secondaryMessage</Strong> can be used to communicate
          secondary information about the field, for example the number of
          characters remaining for input.
        </Text>
      ),
      Example: ({ getState, setState, setDefaultState }) =>
        source(
          <>
            {setDefaultState('value', '')}
            {setDefaultState('limit', 20)}

            <Stack space="xsmall">
              <input
                aria-describedby="secondary-message-example"
                value={getState('value')}
                onChange={(ev) => {
                  if (ev.target.value.length <= getState('limit')) {
                    setState('value', ev.target.value);
                  }
                }}
                max={getState('limit')}
              />
              <FieldMessage
                id="secondary-message-example"
                message="Example message."
                secondaryMessage={
                  <Text size="xsmall">
                    {getState('limit') - getState('value').length}
                    <HiddenVisually> characters remaining</HiddenVisually>
                  </Text>
                }
              />
            </Stack>
          </>,
        ),
    },
    {
      label: 'Tone',
      description: (
        <>
          <Text>
            The <TextLink href="/foundations/tones">tone</TextLink> can be used
            to further illustrate the purpose of the message.
          </Text>
          <Text>
            The supported tones are: <Strong>{'"critical"'}</Strong>,{' '}
            <Strong>{'"positive"'}</Strong>, <Strong>{'"caution"'}</Strong>, and{' '}
            <Strong>{'"neutral"'}</Strong>.
          </Text>
        </>
      ),
      Example: () =>
        source(
          <Box maxWidth="small">
            <Stack space="large">
              <Stack space="xsmall">
                <input aria-describedby="message-tone-1" />
                <FieldMessage
                  id="message-tone-1"
                  tone="critical"
                  message="This is a critical message."
                />
              </Stack>

              <Stack space="xsmall">
                <input aria-describedby="message-tone-2" />
                <FieldMessage
                  id="message-tone-2"
                  tone="positive"
                  message="This is a positive message."
                />
              </Stack>

              <Stack space="xsmall">
                <input aria-describedby="message-tone-3" />
                <FieldMessage
                  id="message-tone-3"
                  tone="neutral"
                  message="This is a neutral message."
                />
              </Stack>

              <Stack space="xsmall">
                <input aria-describedby="message-tone-4" />
                <FieldMessage
                  id="message-tone-4"
                  tone="caution"
                  message="This is a caution message."
                />
              </Stack>
            </Stack>
          </Box>,
        ),
    },
    {
      label: 'Disabled',
      description: (
        <Text>
          A message is not shown when the <Strong>disabled</Strong> prop is
          provided. This standardises the message behaviour across all form
          fields in Braid.
        </Text>
      ),
      Example: () =>
        source(
          <FieldMessage
            id="disabled-message"
            message="This is a disabled message."
            disabled
          />,
        ),
    },
    {
      label: 'Reserving message space',
      description: (
        <>
          <Text>
            To maintain stability within a form that has conditional messages
            (e.g. validation), the <Strong>reserveMessageSpace</Strong> prop
            will reserve a single line below the field. This is set to{' '}
            <Strong>true</Strong> by default.
          </Text>

          <Notice>
            <Text>
              When setting to <Strong>false</Strong> it is recommended to
              increase the{' '}
              <TextLink href="/components/Stack#spacing">Stack space</TextLink>.
            </Text>
          </Notice>
        </>
      ),
      Example: ({ getState, toggleState }) =>
        source(
          <Tiles space="xlarge" columns={2}>
            <Stack space="small">
              <Stack space="xsmall">
                <Text size="small" tone="secondary">
                  With <Strong>reserveMessageSpace</Strong>
                </Text>
                <input aria-describedby="reserve-message-1" />
                <FieldMessage
                  id="reserve-message-1"
                  message={getState('invalid-1') ? 'Required field' : undefined}
                  tone="critical"
                  reserveMessageSpace
                />
              </Stack>
              <Button onClick={() => toggleState('invalid-1')}>
                Toggle error
              </Button>
            </Stack>
            <Stack space="large">
              <Stack space="xsmall">
                <Text size="small" tone="secondary">
                  Without <Strong>reserveMessageSpace</Strong>
                </Text>
                <input aria-describedby="reserve-message-2" />
                <FieldMessage
                  id="reserve-message-2"
                  message={getState('invalid-2') ? 'Required field' : undefined}
                  tone="critical"
                  reserveMessageSpace={false}
                />
              </Stack>
              <Button onClick={() => toggleState('invalid-2')}>
                Toggle error
              </Button>
            </Stack>
          </Tiles>,
        ),
    },
    dataAttributeDocs({
      code: `
        <FieldMessage
          data={{ testid: 'field-message-1' }}
          // => data-testid="field-message-1"
        />
      `,
      supportsNativeSyntax: false,
    }),
  ],
};

export default docs;
