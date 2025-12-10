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
  Actions,
  List,
  Column,
  Columns,
  ContentBlock,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from '../';
import { Placeholder } from '../private/Placeholder/Placeholder';
import { dataAttributeDocs } from '../private/dataAttribute.docs';

const interplayVariantAndToneDoc = [
  {
    label: 'Interplay between variant and tone',
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
        <Notice>
          <Text>
            Older themes like <Strong>apac</Strong> and{' '}
            <Strong>seekBusiness</Strong> retain the default{' '}
            <Strong>formAccent</Strong> tone and <Strong>solid</Strong> variant.
          </Text>
        </Notice>
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
          <Actions>
            <Button variant="ghost" tone="neutral">
              Button
            </Button>
          </Actions>
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
          <Actions>
            <Button tone="critical">Button</Button>
          </Actions>
        </Stack>,
      ),
  },
] as const;

const docs: ComponentDocs = {
  category: 'Content',
  description: (
    <Text>
      A prominent, interactive element that allows the user to initiate an
      action with a click or tap.
    </Text>
  ),
  Example: () =>
    source(
      <Stack space="xsmall">
        <Actions>
          <Button variant="solid" tone="brandAccent">
            Solid
          </Button>
          <Button variant="ghost" tone="brandAccent">
            Ghost
          </Button>
          <Button variant="soft" tone="brandAccent">
            Soft
          </Button>
          <Button variant="transparent" tone="brandAccent">
            Transparent
          </Button>
        </Actions>
        <Actions>
          <Button variant="solid" tone="formAccent">
            Solid
          </Button>
          <Button variant="ghost" tone="formAccent">
            Ghost
          </Button>
          <Button variant="soft" tone="formAccent">
            Soft
          </Button>
          <Button variant="transparent" tone="formAccent">
            Transparent
          </Button>
        </Actions>
        <Actions>
          <Button variant="solid" tone="critical">
            Solid
          </Button>
          <Button variant="ghost" tone="critical">
            Ghost
          </Button>
          <Button variant="soft" tone="critical">
            Soft
          </Button>
          <Button variant="transparent" tone="critical">
            Transparent
          </Button>
        </Actions>
        <Actions>
          <Button variant="solid">Solid</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="soft">Soft</Button>
          <Button variant="transparent">Transparent</Button>
        </Actions>
      </Stack>,
    ),
  alternatives: [
    {
      name: 'ButtonIcon',
      description: 'For buttons containing only an icon.',
    },
    {
      name: 'ButtonLink',
      description:
        'For a semantic link that looks like a button and takes users to other pages or resources.',
    },
    {
      name: 'TextLink',
      description:
        'For a semantic link that takes users to other pages or resources.',
    },
    {
      name: 'TextLinkButton',
      description:
        'For a semantic button that looks like a link and allows the user to perform an action.',
    },
  ],
  additional: [
    {
      label: 'Choosing a button style',
      description: (
        <Text>
          You can adjust the prominence and meaning of a button by using the{' '}
          <Strong>variant</Strong> and <Strong>tone</Strong> properties.
        </Text>
      ),
    },
    {
      label: 'Variants',
      description: (
        <Stack space="large">
          <Text>
            Variants allow you to alter the visual prominence of a button. The{' '}
            <Strong>variant</Strong> prop accepts either <Strong>solid</Strong>,{' '}
            <Strong>ghost</Strong>, <Strong>soft</Strong> or{' '}
            <Strong>transparent</Strong>. When no variant is specified, the
            button will appear as ghost by default.
          </Text>
          <Text>When selecting a variant:</Text>
          <List space="large">
            <Text>
              Choose a variant that reflects the importance of the action.
            </Text>
            <Text>
              Avoid grouping buttons of the same variant, and instead create
              visual hierarchy using different variants.
            </Text>
            <Text>
              Avoid using transparent buttons in isolation, as they offer less
              visual affordance on their own (consider using a{' '}
              <TextLink href="/components/TextLink">TextLink</TextLink>{' '}
              instead).
            </Text>
          </List>
        </Stack>
      ),
      Example: () =>
        source(
          <Actions>
            <Button variant="solid">Solid</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="soft">Soft</Button>
            <Button variant="transparent">Transparent</Button>
          </Actions>,
        ),
    },
    {
      label: 'Tones',
      description: (
        <Text>
          Tones allow you to provide additional information regarding the
          meaning or importance of an action. The tone prop accepts either{' '}
          <Strong>brandAccent</Strong>, <Strong>formAccent</Strong>,{' '}
          <Strong>critical</Strong> or <Strong>neutral</Strong>. When no tone is
          specified, the button will appear as neutral by default.
        </Text>
      ),
    },
    {
      description: (
        <Stack space="large">
          <Heading level="4">brandAccent</Heading>
          <Text>
            For hero actions that want to leverage the brand colour, you can set
            the button&rsquo;s <Strong>tone</Strong> to{' '}
            <Strong>brandAccent</Strong>. This is our most visibly strong tone
            and should be used sparingly.
          </Text>
          <Text>
            Use brandAccent to draw attention to our products most important
            actions, such as:
          </Text>
          <List space="medium">
            <Text>starting a key flow like apply or job posting</Text>
            <Text>submitting a form or payment</Text>
            <Text>
              submitting a primary search query (such as a new job or candidate
              search).
            </Text>
          </List>
          <Text>
            Avoid using multiple brandAccent buttons on the same page.
          </Text>
        </Stack>
      ),
      Example: () =>
        source(
          <Actions>
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
          </Actions>,
        ),
    },
    {
      description: (
        <Stack space="large">
          <Heading level="4">formAccent</Heading>
          <Text>
            For cases where actions need to be emphasized, the{' '}
            <Strong>tone</Strong> can be set to <Strong>formAccent</Strong>.
            This is our second most visibly strong tone and can be used to
            emphasize an action. Unlike brandAccent, you may choose to have
            multiple formAccent buttons on the same page.
          </Text>
          <Notice>
            <Text>
              This is the default tone in the <Strong>apac</Strong> and{' '}
              <Strong>seekBusiness</Strong> themes.
            </Text>
          </Notice>
        </Stack>
      ),
      Example: () =>
        source(
          <Actions>
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
          </Actions>,
        ),
    },
    {
      description: (
        <Stack space="large">
          <Heading level="4">Critical</Heading>
          <Text>
            For destructive actions like “Delete” you can set the button&rsquo;s{' '}
            <Strong>tone</Strong> to <Strong>critical</Strong>. This tone
            provides a visual warning to users and should be reserved for high
            risk actions.
          </Text>
          <Text>
            Avoid using multiple critical buttons in the same group of buttons.
            Multiple critical buttons may appear on the same page but should
            relate to different pieces of content.
          </Text>
        </Stack>
      ),
      Example: () =>
        source(
          <Actions>
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
          </Actions>,
        ),
    },
    {
      description: (
        <Stack space="large">
          <Heading level="4">Neutral</Heading>
          <Text>
            For cases where actions need to be de-emphasized, the{' '}
            <Strong>tone</Strong> can be set to <Strong>neutral</Strong>. This
            makes the button follow the default text colour, including{' '}
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
        </Stack>
      ),
      Example: () =>
        source(
          <Actions>
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
          </Actions>,
        ),
    },
    ...interplayVariantAndToneDoc,
    {
      label: 'Size',
      description: (
        <Text>
          You can tailor the size of the button via the <Strong>size</Strong>{' '}
          prop, which accepts either <Strong>standard</Strong> or{' '}
          <Strong>small.</Strong>
        </Text>
      ),
      Example: () => {
        const { value: visual } = source(
          <Stack space="large">
            <Stack space="small">
              <Text tone="secondary" weight="strong">
                Standard size
              </Text>
              <Actions>
                <Button variant="solid">Solid</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="soft">Soft</Button>
                <Button variant="transparent">Transparent</Button>
              </Actions>
            </Stack>
            <Stack space="small">
              <Text tone="secondary" weight="strong">
                Small size
              </Text>
              <Actions>
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
              </Actions>
            </Stack>
          </Stack>,
        );

        const { code: codeDemo } = source(
          <Stack space="large">
            <Actions>
              <Button variant="solid">Solid</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="soft">Soft</Button>
              <Button variant="transparent">Transparent</Button>
            </Actions>
            <Actions>
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
            </Actions>
          </Stack>,
        );

        return {
          code: codeDemo,
          value: visual,
        };
      },
    },
    {
      label: 'Icons',
      description: (
        <Text>
          For differentiation and to help communicate the purpose of the button,
          an <Strong>icon</Strong> can be provided.
        </Text>
      ),
      Example: () => {
        const { value: visual } = source(
          <Stack space="large">
            <Stack space="small">
              <Text tone="secondary" weight="strong">
                Standard size
              </Text>
              <Actions>
                <Button icon={<IconSend />}>Send</Button>
              </Actions>
            </Stack>
            <Stack space="small">
              <Text tone="secondary" weight="strong">
                Small size
              </Text>
              <Actions>
                <Button size="small" icon={<IconSend />}>
                  Send
                </Button>
              </Actions>
            </Stack>
          </Stack>,
        );

        const { code: codeDemo } = source(
          <Stack space="large">
            <Actions>
              <Button icon={<IconSend />}>Send</Button>
            </Actions>
            <Actions>
              <Button size="small" icon={<IconSend />}>
                Send
              </Button>
            </Actions>
          </Stack>,
        );

        return {
          code: codeDemo,
          value: visual,
        };
      },
    },
    {
      description: (
        <Text>
          By default, an icon will be <Strong>leading</Strong> the label,
          however this can be tailored by setting the{' '}
          <Strong>iconPosition</Strong> to <Strong>trailing</Strong>.
        </Text>
      ),
      Example: () =>
        source(
          <Actions>
            <Button
              icon={<IconArrow direction="right" />}
              iconPosition="trailing"
            >
              Continue
            </Button>
          </Actions>,
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
            <Stack space="xsmall">
              <Actions>
                <Button variant="solid" tone="brandAccent">
                  Solid
                </Button>
                <Button variant="ghost" tone="brandAccent">
                  Ghost
                </Button>
                <Button variant="soft" tone="brandAccent">
                  Soft
                </Button>
                <Button variant="transparent" tone="brandAccent">
                  Transparent
                </Button>
              </Actions>
              <Actions>
                <Button variant="solid" tone="formAccent">
                  Solid
                </Button>
                <Button variant="ghost" tone="formAccent">
                  Ghost
                </Button>
                <Button variant="soft" tone="formAccent">
                  Soft
                </Button>
                <Button variant="transparent" tone="formAccent">
                  Transparent
                </Button>
              </Actions>
              <Actions>
                <Button variant="solid" tone="critical">
                  Solid
                </Button>
                <Button variant="ghost" tone="critical">
                  Ghost
                </Button>
                <Button variant="soft" tone="critical">
                  Soft
                </Button>
                <Button variant="transparent" tone="critical">
                  Transparent
                </Button>
              </Actions>
              <Actions>
                <Button variant="solid">Solid</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="soft">Soft</Button>
                <Button variant="transparent">Transparent</Button>
              </Actions>
            </Stack>
          </Box>,
        ),
    },
    {
      label: 'Defining button width',
      description: (
        <>
          <Text>
            Buttons can be displayed either at full width (as wide as the
            element that contains them) or content width (only as wide as the
            content inside them).
          </Text>
          <Text>
            It&rsquo;s recommended to display buttons at full width on mobile
            and content width on tablet and desktop. An easy way to achieve this
            is by using the{' '}
            <TextLink href="/components/Actions">Actions</TextLink> component.
          </Text>
        </>
      ),
    },
    {
      description: (
        <>
          <Heading level="4">The Actions component</Heading>
          <Text>
            <TextLink href="/components/Actions">Actions</TextLink> is a layout
            component that applies spacing and responsive behaviour to buttons
            in a consistent way. It&rsquo;s recommended to always use the
            Actions component when displaying buttons, unless you have specific
            needs requiring the use of other layout components (such as{' '}
            <TextLink href="/components/Inline">Inline</TextLink> or{' '}
            <TextLink href="/components/Columns">Columns</TextLink>).
          </Text>
        </>
      ),
      Example: () => {
        const { value: visual } = source(
          <Stack space="large">
            <Stack space="small">
              <Text tone="secondary" weight="strong">
                Without actions component
              </Text>
              <Text tone="secondary" size="small">
                Buttons are full width by default without any spacing around
                them.
              </Text>
              <Stack space="none">
                <Button variant="solid">Solid</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="transparent">Transparent</Button>
              </Stack>
            </Stack>
            <Stack space="small">
              <Text tone="secondary" weight="strong">
                With actions component
              </Text>
              <Text tone="secondary" size="small">
                Buttons take the width of their content and sit side by side on
                tablet and desktop, and become full width on mobile.
              </Text>
              <Actions>
                <Button variant="solid">Solid</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="transparent">Transparent</Button>
              </Actions>
            </Stack>
          </Stack>,
        );

        const { code: codeDemo } = source(
          <>
            <Button variant="solid">Solid</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="transparent">Transparent</Button>

            <Actions>
              <Button variant="solid">Solid</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="transparent">Transparent</Button>
            </Actions>
          </>,
        );

        return {
          code: codeDemo,
          value: visual,
        };
      },
    },
    {
      label: 'Grouping multiple buttons',
      description: (
        <>
          <Text>
            When grouping buttons it&rsquo;s important to create hierarchy by
            assigning different variants. Consider which action is the most
            important and give that button the most prominent appearance.
          </Text>
          <Text>
            A few examples of button groups that provide appropriate hierarchy
            are shown below.
          </Text>
        </>
      ),
      Example: () =>
        source(
          <Stack space="xsmall">
            <Actions>
              <Button variant="solid">Solid</Button>
              <Button variant="soft">Soft</Button>
            </Actions>
            <Actions>
              <Button variant="ghost">Ghost</Button>
              <Button variant="transparent">Transparent</Button>
            </Actions>
            <Actions>
              <Button variant="ghost">Ghost</Button>
              <Button variant="soft">Soft</Button>
              <Button variant="transparent">Transparent</Button>
            </Actions>
            <Actions>
              <Button variant="solid">Solid</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="transparent">Transparent</Button>
              <Button variant="transparent">Transparent</Button>
            </Actions>
          </Stack>,
        ),
    },
    {
      description: (
        <Text>
          Avoid displaying multiple solid buttons together with different tones
          applied. If you need to apply more than one tone within a group of
          buttons, apply different variants also to create appropriate
          hierarchy.
        </Text>
      ),
      Example: () =>
        source(
          <Actions>
            <Button tone="critical" variant="solid" icon={<IconDelete />}>
              Delete
            </Button>
            <Button variant="ghost">Cancel</Button>
          </Actions>,
        ),
    },
    {
      label: 'Positioning primary and secondary buttons',
      description: (
        <>
          <Heading level="4">Web</Heading>
          <Text>
            It&rsquo;s recommended to lead with the primary button followed by
            secondary. On tablet and desktop, buttons should align to the left.
            On mobile, buttons should stack at full width with primary appearing
            first.
          </Text>
          <Notice>
            <Text>
              An exception to this guidance is when buttons appear in the
              context of a{' '}
              <TextLink href="/components/Stepper">Stepper</TextLink>. In these
              scenarios, the primary button should align to the right. Read more
              about{' '}
              <TextLink href="/components/Stepper#providing-user-controls">
                positioning Stepper buttons
              </TextLink>
              .
            </Text>
          </Notice>
        </>
      ),

      Example: () => {
        const { value: visual } = source(
          <Stack space="xlarge">
            <Stack space="small">
              <Text tone="secondary" weight="strong">
                Tablet and desktop
              </Text>
              <Stack space="small">
                <Placeholder label="Page content" height={125} />
                <Actions>
                  <Button>Primary</Button>
                  <Button variant="soft">Secondary</Button>
                </Actions>
              </Stack>
            </Stack>
            <Stack space="small">
              <Text tone="secondary" weight="strong">
                Mobile
              </Text>
              <ContentBlock width="xsmall" align="left">
                <Stack space="small">
                  <Placeholder label="Page content" height={125} />
                  <Stack space="xsmall">
                    <Button>Primary</Button>
                    <Button variant="soft">Secondary</Button>
                  </Stack>
                </Stack>
              </ContentBlock>
            </Stack>
          </Stack>,
        );

        const { code: codeDemo } = source(
          <>
            <Stack space="small">
              <Placeholder label="Page content" height={125} />
              <Actions>
                <Button>Primary</Button>
                <Button variant="soft">Secondary</Button>
              </Actions>
            </Stack>
          </>,
        );

        return {
          code: codeDemo,
          value: visual,
        };
      },
    },
    {
      description: (
        <Text>
          If you need to position buttons side by side on mobile instead, follow
          the Apps advice below.
        </Text>
      ),
    },
    {
      description: (
        <>
          <Heading level="4">Apps</Heading>
          <Text>
            It&rsquo;s recommended to observe Apps best practice and position
            primary on the right, secondary on the left with buttons placed side
            by side, justified to the screen width.
          </Text>
        </>
      ),
      playroom: false,
      code: false,
      Example: () =>
        source(
          <ContentBlock width="xsmall" align="left">
            <Stack space="small">
              <Placeholder label="Page content" height={125} />
              <Columns space="small">
                <Column>
                  <Button variant="soft">Secondary</Button>
                </Column>
                <Column>
                  <Button>Primary</Button>
                </Column>
              </Columns>
            </Stack>
          </ContentBlock>,
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
      label: 'Disabled buttons',
      description: (
        <>
          <Text>
            A button cannot be disabled (unless loading), as this is not an
            accessible solution and does not provide information to the user
            about how to fix the issue. Avoid disabled buttons where possible.
          </Text>
          <Text>
            When designing a form, instead of disabling the submit button when a
            required field is missing, allow the user to attempt to submit and
            fail. Then provide validation feedback informing the user of what
            they must do to progress.
          </Text>
        </>
      ),
    },
    {
      label: 'When to use',
      description: (
        <Stack space="xxlarge">
          <Stack space="large">
            <Text>Use a Button:</Text>
            <List space="large">
              <Text>
                to allow the user to perform an action, like initiating a new
                flow or confirming a decision.
              </Text>
            </List>
          </Stack>
          <Stack space="large">
            <Text>Don&rsquo;t use a Button:</Text>
            <List space="large">
              <Text>
                to link to other pages or resources (consider using a{' '}
                <TextLink href="/components/TextLink">TextLink</TextLink> or{' '}
                <TextLink href="/components/ButtonLink">ButtonLink</TextLink>{' '}
                instead.
              </Text>
              <Text>
                to allow the user to select content, such as when applying
                filters (consider using{' '}
                <TextLink href="/components/Tag">Tags</TextLink> instead).
              </Text>
            </List>
          </Stack>
        </Stack>
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
    {
      label: 'Content guidelines',
      description: (
        <>
          <Stack space="xxlarge">
            <Notice>
              <Text>
                Buttons let users take action or make a choice. A button is
                different from a link. Links take users somewhere.
              </Text>
            </Notice>
            <Stack space="large">
              <Heading level="4">Be clear and concise.</Heading>
              <List space="large">
                <Text>
                  Be direct and use active language e.g. &quot;Post ad&quot;.
                </Text>
                <Text>Use 2 to 4 words only.</Text>
                <Text>Use sentence case.</Text>
                <Text>
                  Don&rsquo;t use punctuation, such as exclamation marks, full
                  stops or commas.
                </Text>
                <Text>One action only per button.</Text>
                <Text>Don&rsquo;t include pronouns in buttons.</Text>
              </List>
              <Table label="Do and don&rsquo;t">
                <TableHeader>
                  <TableRow>
                    <TableHeaderCell width="50%">
                      <Text>Do</Text>
                    </TableHeaderCell>
                    <TableHeaderCell>
                      <Text>Don&rsquo;t</Text>
                    </TableHeaderCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <Text>Explore this career</Text>
                    </TableCell>
                    <TableCell>
                      <Text>Find out more about this career</Text>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Text>Complete profile</Text>
                    </TableCell>
                    <TableCell>
                      <Text>Complete My Profile</Text>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Text>Create alert</Text>
                    </TableCell>
                    <TableCell>
                      <Text>Yes, create alert</Text>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Text>Buy credit</Text>
                    </TableCell>
                    <TableCell>
                      <Text>Save and purchase credit</Text>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Text>Edit preferences</Text>
                    </TableCell>
                    <TableCell>
                      <Text>Add or edit preferences</Text>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Stack>
            <Stack space="large">
              <Heading level="4">Tell users what action they can take.</Heading>
              <List space="large">
                <Text>Buttons should always perform an action.</Text>
                <Text>
                  Use a verb and a noun e.g. Create [verb/action] job ad
                  [noun/name].
                </Text>
                <Text>
                  It&rsquo;s okay to drop the noun for common actions like,
                  &quot;Done&quot;, &quot;Submit&quot;, &quot;Next&quot;.
                </Text>
              </List>
              <Table label="Do and don&rsquo;t">
                <TableHeader>
                  <TableRow>
                    <TableHeaderCell width="50%">
                      <Text>Do</Text>
                    </TableHeaderCell>
                    <TableHeaderCell>
                      <Text>Don&rsquo;t</Text>
                    </TableHeaderCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <Text>View profile</Text>
                    </TableCell>
                    <TableCell>
                      <Text>Full profile</Text>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Stack>
            <Stack space="large">
              <Heading level="4">Let users know what happens next.</Heading>
              <List space="large">
                <Text>
                  Be specific. People need to know what to expect when they
                  click a button. Button content should make sense even if
                  someone doesn&rsquo;t read the content around it e.g. someone
                  using a screenreader to jump through the links, someone
                  scanning the page or someone with a small visual focus field.
                </Text>
                <Text>
                  Match the destination content. Button content should reflect
                  the title of the destination content.
                </Text>
                <Text>
                  Never mislead people by mislabelling a button. We&rsquo;ll
                  lose their trust.
                </Text>
              </List>
              <Table label="Do and Don&rsquo;t">
                <TableHeader>
                  <TableRow>
                    <TableHeaderCell width="50%">
                      <Text>Do</Text>
                    </TableHeaderCell>
                    <TableHeaderCell>
                      <Text>Don&rsquo;t</Text>
                    </TableHeaderCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <Text>Create resumé</Text>
                    </TableCell>
                    <TableCell>
                      <Text>Get started</Text>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Text>Update profile</Text>
                    </TableCell>
                    <TableCell>
                      <Text>Get started</Text>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Stack>
          </Stack>
        </>
      ),
    },
  ],
};

export default docs;
