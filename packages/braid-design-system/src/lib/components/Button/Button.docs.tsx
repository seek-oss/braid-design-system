import source from '@braid-design-system/source.macro';
import type { ComponentDocs } from 'site/types';

import {
  Button,
  Stack,
  Box,
  Heading,
  Text,
  TextLink,
  Inline,
  Strong,
  IconSend,
  IconDelete,
  Notice,
  Toggle,
  IconArrow,
} from '../';
import { dataAttributeDocs } from '../private/dataAttribute.docs';

const choosingRightButtonDoc = [
  {
    label: 'Choosing the right button',
    description: (
      <>
        <Text>
          By default, a button has a <Strong>neutral</Strong> tone and uses the{' '}
          <Strong>ghost</Strong> variant, allowing the visual prominence to be
          increased or decreased as required.
        </Text>

        <Text>
          This enables colour to be applied as accents and with purpose, rather
          than by default — improving the management of user attention and
          supporting a more declarative hierarchy of actions.
        </Text>
      </>
    ),
    playroom: false,
    code: false,
    Example: () =>
      source(
        <Stack space="small">
          <Text size="small" tone="secondary">
            Default is a <Strong>neutral</Strong> tone and{' '}
            <Strong>ghost</Strong> variant:
          </Text>
          <Inline space="none">
            <Button variant="ghost" tone="neutral">
              Button
            </Button>
          </Inline>
        </Stack>,
      ),
  },
  {
    description: (
      <>
        <Text>
          To compliment this, when a <Strong>tone</Strong> is purposefully
          applied to a button, the default variant becomes{' '}
          <Strong>solid</Strong> to maximise its impact — allowing the visual
          prominence to be reduced as needed.
        </Text>
      </>
    ),
    playroom: false,
    code: false,
    Example: () =>
      source(
        <Stack space="small">
          <Text size="small" tone="secondary">
            Default variant becomes <Strong>solid</Strong> when a{' '}
            <Strong>tone</Strong> is applied:
          </Text>
          <Inline space="none">
            <Button tone="critical">Button</Button>
          </Inline>
        </Stack>,
      ),
  },
  {
    description: (
      <>
        <Text>
          As the approach to colour in our experiences has changed over time, so
          too has the default visual prominence for buttons. For this reason,
          older themes such as <Strong>apac</Strong> and{' '}
          <Strong>seekBusiness</Strong> continue to have the default tone of{' '}
          <Strong>formAccent</Strong> and a <Strong>solid</Strong> variant.
        </Text>
      </>
    ),
    playroom: false,
    code: false,
    Example: () =>
      source(
        <Stack space="small">
          <Text size="small" tone="secondary">
            Historical default was the <Strong>formAccent</Strong> tone and{' '}
            <Strong>solid</Strong> variant:
          </Text>
          <Inline space="none">
            <Button variant="solid" tone="formAccent">
              Button
            </Button>
          </Inline>
        </Stack>,
      ),
  },
] as const;

const docs: ComponentDocs = {
  category: 'Content',
  Example: () =>
    source(
      <Inline space="small" collapseBelow="desktop">
        <Button variant="solid">Solid</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="soft">Soft</Button>
        <Button variant="transparent">Transparent</Button>
      </Inline>,
    ),
  alternatives: [
    {
      name: 'ButtonIcon',
      description: 'For buttons containing only an icon.',
    },
    {
      name: 'ButtonLink',
      description: 'For a semantic link that looks like a button.',
    },
    {
      name: 'TextLinkButton',
      description: 'For a semantic button that looks like a link.',
    },
  ],
  additional: [
    {
      label: 'Variants',
      description: (
        <>
          <Text>
            You can customise the appearance of the button via the{' '}
            <Strong>variant</Strong> prop, which accepts either{' '}
            <Strong>solid</Strong>, <Strong>ghost</Strong>,{' '}
            <Strong>soft</Strong> or <Strong>transparent</Strong>.
          </Text>
          <Notice>
            <Text>
              When using a <Strong>transparent</Strong> button on its own,
              consider using the <TextLink href="#bleed">bleed</TextLink> prop
              for better alignment.
            </Text>
          </Notice>
        </>
      ),
      Example: () =>
        source(
          <Inline space="small" collapseBelow="desktop">
            <Button variant="solid">Solid</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="soft">Soft</Button>
            <Button variant="transparent">Transparent</Button>
          </Inline>,
        ),
    },
    {
      label: 'Branding',
      description: (
        <Text>
          For hero actions that want to leverage the brand colour, you can set
          the button’s <Strong>tone</Strong> to <Strong>brandAccent.</Strong>
        </Text>
      ),
      Example: () =>
        source(
          <Inline space="small">
            <Button tone="brandAccent" variant="solid">
              Search
            </Button>
            <Button tone="brandAccent" variant="ghost">
              Search
            </Button>
            <Button tone="brandAccent" variant="soft">
              Search
            </Button>
            <Button tone="brandAccent" variant="transparent">
              Search
            </Button>
          </Inline>,
        ),
    },
    {
      label: 'Destructive actions',
      description: (
        <Text>
          For destructive actions like “Delete” you can set the button’s{' '}
          <Strong>tone</Strong> to <Strong>critical.</Strong>
        </Text>
      ),
      Example: () =>
        source(
          <Inline space="small">
            <Button tone="critical" icon={<IconDelete />} variant="solid">
              Delete
            </Button>
            <Button tone="critical" icon={<IconDelete />} variant="ghost">
              Delete
            </Button>
            <Button tone="critical" icon={<IconDelete />} variant="soft">
              Delete
            </Button>
            <Button tone="critical" icon={<IconDelete />} variant="transparent">
              Delete
            </Button>
          </Inline>,
        ),
    },
    {
      label: 'Emphasizing actions',
      description: (
        <>
          <Text>
            For cases where actions need to be emphasized, the{' '}
            <Strong>tone</Strong> can be set to <Strong>formAccent</Strong>.
          </Text>
          <Notice>
            <Text>
              This is the default tone in the <Strong>apac</Strong> and{' '}
              <Strong>seekBusiness</Strong> themes.
            </Text>
          </Notice>
        </>
      ),
      Example: () =>
        source(
          <Inline space="small">
            <Button tone="formAccent" variant="solid">
              Solid
            </Button>
            <Button tone="formAccent" variant="ghost">
              Ghost
            </Button>
            <Button tone="formAccent" variant="soft">
              Soft
            </Button>
            <Button tone="formAccent" variant="transparent">
              Transparent
            </Button>
          </Inline>,
        ),
    },
    {
      label: 'De-emphasized actions',
      description: (
        <>
          <Text>
            For cases where actions need to be de-emphasized, the{' '}
            <Strong>tone</Strong> can be set to <Strong>neutral</Strong>.
          </Text>
          <Text>
            This makes the button follow the default text colour, including{' '}
            <TextLink href="#contextual-design">
              inverting on dark surfaces
            </TextLink>{' '}
            to improve contrast.
          </Text>
          <Notice>
            <Text>
              This is the default tone for <Strong>seekJobs</Strong> and other
              non-legacy themes.
            </Text>
          </Notice>
        </>
      ),
      Example: () =>
        source(
          <Inline space="small">
            <Button tone="neutral" variant="solid">
              Solid
            </Button>
            <Button tone="neutral" variant="ghost">
              Ghost
            </Button>
            <Button tone="neutral" variant="soft">
              Soft
            </Button>
            <Button tone="neutral" variant="transparent">
              Transparent
            </Button>
          </Inline>,
        ),
    },
    {
      label: 'Disabled actions',
      description: (
        <>
          <Text>
            A <Strong>Button</Strong> cannot be disabled. This is a deliberate
            design decision to encourage more accessible patterns that inform
            the user about what is required to progress.
          </Text>
          <Text>
            For example, when designing a form, instead of disabling the submit
            button when a required field is missing, allow the user to attempt
            to submit and fail. Validation feedback can then be provided
            informing the user of what they must do to progress.
          </Text>
        </>
      ),
    },
    {
      label: 'Sizes',
      description: (
        <Text>
          You can customise the size of the button via the <Strong>size</Strong>{' '}
          prop, which accepts either <Strong>standard</Strong> or{' '}
          <Strong>small.</Strong>
        </Text>
      ),
      Example: () =>
        source(
          <Stack space="large">
            <Stack space="small">
              <Text tone="secondary" weight="strong">
                Standard size
              </Text>
              <Inline space="small" collapseBelow="desktop">
                <Button variant="solid">Solid</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="soft">Soft</Button>
                <Button variant="transparent">Transparent</Button>
              </Inline>
            </Stack>
            <Stack space="small">
              <Text tone="secondary" weight="strong">
                Small size
              </Text>
              <Inline space="small" collapseBelow="desktop">
                <Button variant="solid" size="small">
                  Solid
                </Button>
                <Button variant="ghost" size="small">
                  Ghost
                </Button>
                <Button variant="soft" size="small">
                  Soft
                </Button>
                <Button variant="transparent" size="small">
                  Transparent
                </Button>
              </Inline>
            </Stack>
          </Stack>,
        ),
    },
    ...choosingRightButtonDoc,
    {
      label: 'Icons',
      description: (
        <Text>
          For decoration or help distinguishing between buttons, an{' '}
          <Strong>icon</Strong> can be provided.
        </Text>
      ),
      Example: () =>
        source(
          <Inline space="gutter" alignY="center">
            <Stack space="small">
              <Text tone="secondary" weight="strong">
                Standard size
              </Text>
              <Button icon={<IconSend />}>Send</Button>
            </Stack>
            <Stack space="small">
              <Text tone="secondary" weight="strong">
                Small size
              </Text>
              <Button size="small" icon={<IconSend />}>
                Send
              </Button>
            </Stack>
          </Inline>,
        ),
    },
    {
      description: (
        <Text>
          By default, an icon will be <Strong>leading</Strong> the label,
          however this can be customised by setting the{' '}
          <Strong>iconPosition</Strong> to <Strong>trailing</Strong>.
        </Text>
      ),
      Example: () =>
        source(
          <Inline space="small">
            <Button
              icon={<IconArrow direction="right" />}
              iconPosition="trailing"
            >
              Next
            </Button>
          </Inline>,
        ),
    },
    {
      label: 'Loading Button',
      description: (
        <>
          <Text>
            You can indicate a loading state inline with the{' '}
            <Strong>loading</Strong> prop, which also ensures that the button is
            disabled.
          </Text>
        </>
      ),
      Example: () =>
        source(
          <Inline space="small">
            <Button loading>Loading Button</Button>
          </Inline>,
        ),
    },
    {
      label: 'Contextual design',
      description: (
        <>
          <Text>
            The <Strong>ghost</Strong>, <Strong>soft</Strong>, and{' '}
            <Strong>transparent</Strong> variants automatically lighten their
            foreground colour to improve contrast against a dark background. To
            compliment this, the hover and active backgrounds remove the colour
            in favour of a white translucency.
          </Text>
          <Notice>
            <Text>
              Buttons with a <Strong>neutral</Strong> tone are inverted to
              improve contrast.
            </Text>
          </Notice>
          <Text>
            When using custom background colours or images on a{' '}
            <TextLink href="/components/Box">Box</TextLink> component, this
            behaviour can be applied by setting the <Strong>background</Strong>{' '}
            to either <Strong>customLight</Strong> or{' '}
            <Strong>customDark</Strong>.
          </Text>
        </>
      ),
      background: 'neutral',
      Example: () =>
        source(
          <Box background="neutral">
            <Stack space="small">
              <Inline space="small">
                <Button tone="formAccent" variant="solid">
                  Solid
                </Button>
                <Button tone="formAccent" variant="ghost">
                  Ghost
                </Button>
                <Button tone="formAccent" variant="soft">
                  Soft
                </Button>
                <Button tone="formAccent" variant="transparent">
                  Transparent
                </Button>
              </Inline>
              <Inline space="small">
                <Button tone="brandAccent" variant="solid">
                  Solid
                </Button>
                <Button tone="brandAccent" variant="ghost">
                  Ghost
                </Button>
                <Button tone="brandAccent" variant="soft">
                  Soft
                </Button>
                <Button tone="brandAccent" variant="transparent">
                  Transparent
                </Button>
              </Inline>
              <Inline space="small">
                <Button tone="critical" variant="solid">
                  Solid
                </Button>
                <Button tone="critical" variant="ghost">
                  Ghost
                </Button>
                <Button tone="critical" variant="soft">
                  Soft
                </Button>
                <Button tone="critical" variant="transparent">
                  Transparent
                </Button>
              </Inline>
              <Inline space="small">
                <Button tone="neutral" variant="solid">
                  Solid
                </Button>
                <Button tone="neutral" variant="ghost">
                  Ghost
                </Button>
                <Button tone="neutral" variant="soft">
                  Soft
                </Button>
                <Button tone="neutral" variant="transparent">
                  Transparent
                </Button>
              </Inline>
            </Stack>
          </Box>,
        ),
    },
    {
      label: 'Bleed',
      description: (
        <>
          <Text>
            The <Strong>bleed</Strong> prop allows the background colour to
            bleed out into the surrounding layout — leaving the button to only
            take up the space required for the label itself.
          </Text>
          <Notice>
            <Text>
              The bleed is only applied vertically, with exception to the{' '}
              <Strong>transparent</Strong> variant, which also applies
              horizontally to facilitate better alignment with surrounding text.
            </Text>
          </Notice>
          <Text>
            For example, we can align a button to a{' '}
            <TextLink href="/components/Heading">Heading</TextLink> element
            using an <TextLink href="/components/Inline">Inline</TextLink>, even
            though the button is actually taller than the heading. If we didn’t
            use the <Strong>bleed</Strong> prop in this case, the button would
            introduce unwanted space above and below the heading.
          </Text>
        </>
      ),
      Example: ({ setDefaultState, toggleState, getState }) =>
        source(
          <>
            {setDefaultState('bleed', true)}

            <Stack space="xlarge">
              <Stack space="large">
                <Toggle
                  on={getState('bleed')}
                  label="Bleed"
                  align="right"
                  onChange={() => toggleState('bleed')}
                  bleedY
                />
                <Text tone="secondary" weight="strong">
                  Standard size alignment
                </Text>
                <Box boxShadow="borderCriticalLight">
                  <Inline space="xsmall" alignY="center">
                    <Heading level="2">Heading</Heading>
                    <Button
                      bleed={getState('bleed')}
                      tone="formAccent"
                      variant="solid"
                    >
                      Button
                    </Button>
                  </Inline>
                </Box>
              </Stack>
              <Stack space="medium">
                <Text tone="secondary" weight="strong">
                  Small size alignment
                </Text>
                <Box boxShadow="borderCriticalLight">
                  <Inline space="xsmall" alignY="center">
                    <Heading level="2">Heading</Heading>
                    <Button
                      bleed={getState('bleed')}
                      size="small"
                      tone="formAccent"
                      variant="solid"
                    >
                      Button
                    </Button>
                  </Inline>
                </Box>
              </Stack>
              <Stack space="medium">
                <Text tone="secondary" weight="strong">
                  Transparent variant alignment
                </Text>
                <Box boxShadow="borderCriticalLight">
                  <Stack space="gutter">
                    <Heading level="2">Heading</Heading>
                    <Inline space="none">
                      <Button
                        bleed={getState('bleed')}
                        variant="transparent"
                        tone="formAccent"
                      >
                        Button
                      </Button>
                    </Inline>
                  </Stack>
                </Box>
              </Stack>
            </Stack>
          </>,
        ),
    },
    dataAttributeDocs({
      code: `
        <Button
          data={{ testid: 'button-1' }}
          // => data-testid="button-1"
        >
          ...
        </Button>
      `,
      supportsNativeSyntax: false,
    }),
  ],
};

export default docs;
