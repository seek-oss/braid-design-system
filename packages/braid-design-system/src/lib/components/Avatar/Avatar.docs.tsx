import source from '@braid-design-system/source.macro';
import type { ComponentDocs } from 'site/types';

import {
  Avatar,
  Box,
  Column,
  Columns,
  Heading,
  IconCompany,
  IconPhotoAdd,
  Inline,
  List,
  Stack,
  Strong,
  Text,
  TextLink,
  TooltipRenderer,
} from '../';
import { dataAttributeDocs } from '../private/dataAttribute.docs';

import { photoBrokenUrl, photoExampleUrl } from './photoPlaceholder.css';

const docs: ComponentDocs = {
  category: 'Content',
  description: (
    <Text>
      A visual representation of a person or company, helping users quickly
      recognise entities within a list or group.
    </Text>
  ),
  Example: () => {
    const { value } = source(
      <Inline space="small" alignY="center">
        <Avatar name="Leia Organa" size="xxlarge" imageUrl={photoExampleUrl} />
        <Avatar name="Leia Organa" size="large" />
        <Avatar icon={<IconCompany />} />
        <Avatar />
      </Inline>,
    );

    const { code } = source(
      <Inline space="small" alignY="center">
        <Avatar
          name="Leia Organa"
          size="xxlarge"
          imageUrl="https://example.com/photo.jpg"
        />
        <Avatar name="Leia Organa" size="large" />
        <Avatar icon={<IconCompany />} />
        <Avatar />
      </Inline>,
    );

    return { code, value };
  },
  accessibility: (
    <>
      <Text>
        Avatar is decorative by default. The root is hidden from assistive
        technologies, and images use an empty <Strong>alt</Strong>. Name the
        person or company with adjacent text so everyone can tell who it is —
        including people using a screen reader.
      </Text>
      <Text>
        Pass <Strong>aria-label</Strong> when the avatar is the only identifier,
        or when Avatar itself is a control (<Strong>onClick</Strong> or a
        tooltip trigger). Use <Strong>onClick</Strong> only when the square is
        the control, such as adding a photo — not inside a{' '}
        <TextLink href="/components/MenuRenderer">MenuRenderer</TextLink>, where
        the menu trigger is already the button.
      </Text>
    </>
  ),
  alternatives: [
    {
      name: 'IconProfile',
      description: 'For a profile icon that is not an avatar.',
    },
    {
      name: 'IconCompany',
      description: 'For a company mark without an Avatar frame.',
    },
    {
      name: 'Badge',
      description: 'For communicating the status of an object.',
    },
    {
      name: 'TooltipRenderer',
      description:
        'To provide non-critical, extra context on mouse hover or keyboard focus.',
    },
    {
      name: 'MenuRenderer',
      description:
        "For custom menu triggers where standard components like OverflowMenu aren't suitable.",
    },
  ],
  docSections: {
    appearance: [
      {
        label: 'Choosing a treatment',
        description: (
          <Text>Match the treatment to the identity data you have.</Text>
        ),
      },
      {
        description: (
          <Stack space="large">
            <Heading level="4">Image</Heading>
            <Text>
              The most recognisable treatment. When a photo or company logo is
              available, pass it as <Strong>imageUrl</Strong>. This is the
              strongest treatment and should be preferred over initials whenever
              you can show a current image.
            </Text>
            <Text>
              Provide an image at least twice the box size so it stays sharp.
              Omit <Strong>imageUrl</Strong> when the image must not be shown —
              for example when names are hidden.
            </Text>
            <Text>
              If the image fails to load,{' '}
              <TextLink href="/components/IconImageBroken">
                IconImageBroken
              </TextLink>{' '}
              is shown instead of silently falling back to initials. That makes
              a broken image obvious so it can be fixed.
            </Text>
          </Stack>
        ),
        Example: () => {
          const { value } = source(
            <Inline space="medium" alignY="center">
              <Stack space="small" align="center">
                <Avatar name="Leia Organa" imageUrl={photoExampleUrl} />
                <Text size="small" tone="secondary">
                  Photo
                </Text>
              </Stack>
              <Stack space="small" align="center">
                <Avatar name="Leia Organa" imageUrl={photoBrokenUrl} />
                <Text size="small" tone="secondary">
                  Unavailable
                </Text>
              </Stack>
            </Inline>,
          );

          const { code } = source(
            <Inline space="medium" alignY="center">
              <Stack space="small" align="center">
                <Avatar
                  name="Leia Organa"
                  imageUrl="https://example.com/photo.jpg"
                />
                <Text size="small" tone="secondary">
                  Photo
                </Text>
              </Stack>
              <Stack space="small" align="center">
                <Avatar
                  name="Leia Organa"
                  imageUrl="https://invalid-path/photo.jpg"
                />
                <Text size="small" tone="secondary">
                  Unavailable
                </Text>
              </Stack>
            </Inline>,
          );

          return { code, value };
        },
      },
      {
        description: (
          <Stack space="large">
            <Heading level="4">Initials</Heading>
            <Text>
              When there is a name but no image, Avatar shows the first letter
              of <Strong>name</Strong>. The background colour is derived from
              that name so the same identity stays consistent wherever they
              appear.
            </Text>
          </Stack>
        ),
        Example: () =>
          source(
            <Inline space="medium" alignY="center">
              <Avatar name="C-3PO" />
              <Avatar name="Leia Organa" />
              <Avatar name="Obi-Wan Kenobi" />
              <Avatar name="Darth Vader" />
              <Avatar name="Qui-Gon Jinn" />
            </Inline>,
          ),
      },
      {
        description: (
          <Stack space="large">
            <Heading level="4">Language</Heading>
            <Text>
              The first letter of <Strong>name</Strong> works across scripts
              such as Latin, Thai and Chinese, with no extra configuration.
              Numbers, punctuation and symbols are skipped. If no letter is
              found, the empty treatment is used instead.
            </Text>
          </Stack>
        ),
        Example: () =>
          source(
            <Inline space="medium" alignY="center">
              <Stack space="small" align="center">
                <Avatar name="สมชาย จันทร์" />
                <Text size="small" tone="secondary">
                  Thai
                </Text>
              </Stack>
              <Stack space="small" align="center">
                <Avatar name="李 伟" />
                <Text size="small" tone="secondary">
                  Chinese
                </Text>
              </Stack>
            </Inline>,
          ),
      },
      {
        description: (
          <Stack space="large">
            <Heading level="4">Company icon</Heading>
            <Text>
              For an organisation with no logo and no name, you may provide an{' '}
              <Strong>icon</Strong>, typically{' '}
              <TextLink href="/components/IconCompany">IconCompany</TextLink>.
              Note that passing <Strong>name</Strong> and <Strong>icon</Strong>{' '}
              together shows initials, not the icon.
            </Text>
          </Stack>
        ),
        Example: () => source(<Avatar icon={<IconCompany />} />),
      },
      {
        description: (
          <Stack space="large">
            <Heading level="4">Empty</Heading>
            <Text>
              When there is no identity yet, omit <Strong>name</Strong> to show{' '}
              <TextLink href="/components/IconProfile">IconProfile</TextLink>.
            </Text>
            <Text>
              To let someone add a photo, treat the empty avatar as a control.
              See <TextLink href="#as-a-control">As a control</TextLink>.
            </Text>
          </Stack>
        ),
        Example: () => source(<Avatar />),
      },
      {
        label: 'Fallback order',
        description: (
          <Stack space="large">
            <List space="large">
              <Text>
                While <Strong>loading</Strong>, a skeleton is shown.
              </Text>
              <Text>
                Otherwise a loaded <Strong>imageUrl</Strong> is shown. If the
                URL fails,{' '}
                <TextLink href="/components/IconImageBroken">
                  IconImageBroken
                </TextLink>{' '}
                is shown (not initials or <Strong>icon</Strong>).
              </Text>
              <Text>
                When no image is provided, the first letter of{' '}
                <Strong>name</Strong> is shown.
              </Text>
              <Text>
                When no image or name is provided, an <Strong>icon</Strong> is
                shown.
              </Text>
              <Text>
                When nothing is provided,{' '}
                <TextLink href="/components/IconProfile">IconProfile</TextLink>{' '}
                is shown.
              </Text>
            </List>
            <Text>
              Passing name and icon together shows initials — omit name for a
              custom icon fallback.
            </Text>
          </Stack>
        ),
      },
      {
        label: 'Size',
        description: (
          <Text>
            Tailor the size to the surrounding layout with the{' '}
            <Strong>size</Strong> prop. Use smaller sizes in dense lists and
            larger sizes in profile headers. When no size is specified, the
            avatar appears at <Strong>standard</Strong>. Size is a fixed value,
            not a responsive prop — pick a size per breakpoint with layout
            rather than scaling the box.
          </Text>
        ),
        Example: () =>
          source(
            <Inline space="medium" alignY="center">
              <Avatar name="Leia Organa" size="xsmall" />
              <Avatar name="Leia Organa" size="small" />
              <Avatar name="Leia Organa" size="medium" />
              <Avatar name="Leia Organa" size="standard" />
              <Avatar name="Leia Organa" size="large" />
              <Avatar name="Leia Organa" size="xlarge" />
              <Avatar name="Leia Organa" size="xxlarge" />
            </Inline>,
          ),
      },
      {
        label: 'Contextual design',
        description: (
          <Text>
            Avatar always has a surface-coloured ring so it stays distinct when
            overlapping or sitting on a coloured background. If you need a
            coloured ring, wrap Avatar in a{' '}
            <TextLink href="/components/Box">Box</TextLink> and keep that radius
            in sync with the Avatar size.
          </Text>
        ),
        Example: () => {
          const { value } = source(
            <Box background="brand" padding="medium" borderRadius="standard">
              <Inline space="small" alignY="center">
                <Avatar name="Leia Organa" imageUrl={photoExampleUrl} />
                <Avatar name="Leia Organa" />
                <Avatar />
              </Inline>
            </Box>,
          );

          const { code } = source(
            <Box background="brand" padding="medium" borderRadius="standard">
              <Inline space="small" alignY="center">
                <Avatar
                  name="Leia Organa"
                  imageUrl="https://example.com/photo.jpg"
                />
                <Avatar name="Leia Organa" />
                <Avatar />
              </Inline>
            </Box>,
          );

          return { code, value };
        },
      },
    ],
    layout: [
      {
        label: 'Composition patterns',
        description: (
          <Stack space="large">
            <Heading level="4">Pairing with text</Heading>
            <Text>
              Pair Avatar with visible text so the name is available to
              everyone. The easiest way is{' '}
              <TextLink href="/components/Columns">Columns</TextLink> or{' '}
              <TextLink href="/components/Inline">Inline</TextLink>, with the
              Avatar sized to its content and aligned to the text.
            </Text>
          </Stack>
        ),
        Example: () =>
          source(
            <Columns space="medium" alignY="center">
              <Column width="content">
                <Avatar name="Leia Organa" />
              </Column>
              <Column>
                <Stack space="xsmall">
                  <Text>Leia Organa</Text>
                  <Text size="small" tone="secondary">
                    Product Designer
                  </Text>
                </Stack>
              </Column>
            </Columns>,
          ),
      },
      {
        description: (
          <Stack space="large">
            <Heading level="4">Tooltip</Heading>
            <Text>
              When the avatar is the only identifier, wrap Avatar with{' '}
              <TextLink href="/components/TooltipRenderer">
                TooltipRenderer
              </TextLink>{' '}
              so the name is available on hover and focus. Spread{' '}
              <Strong>triggerProps</Strong> last onto Avatar, and pass{' '}
              <Strong>aria-label</Strong> because those props make the avatar
              focusable.
            </Text>
            <Text>
              Skip a tooltip when the name is already visible beside the avatar.
              If click opens a{' '}
              <TextLink href="/components/MenuRenderer">MenuRenderer</TextLink>,
              put the tooltip on the menu trigger, not on Avatar inside it.
            </Text>
          </Stack>
        ),
        Example: () =>
          source(
            <TooltipRenderer tooltip={<Text>Leia Organa</Text>}>
              {({ triggerProps }) => (
                <Avatar
                  name="Leia Organa"
                  aria-label="Leia Organa"
                  {...triggerProps}
                />
              )}
            </TooltipRenderer>,
          ),
      },
    ],
    interaction: [
      {
        label: 'As a control',
        description: (
          <>
            <Text>
              Use <Strong>onClick</Strong> only when the square itself is the
              control, such as adding or updating a photo. Provide an{' '}
              <Strong>icon</Strong>, <Strong>aria-label</Strong> and omit{' '}
              <Strong>name</Strong>.
            </Text>
            <Text>
              Do not add <Strong>onClick</Strong> when a parent is already the
              button — for example a row that opens a profile, or a{' '}
              <TextLink href="/components/MenuRenderer">MenuRenderer</TextLink>{' '}
              trigger. In those cases the avatar should stay decorative.
            </Text>
          </>
        ),
        Example: () =>
          source(
            <Avatar
              icon={<IconPhotoAdd />}
              aria-label="Add photo"
              onClick={() => undefined}
            />,
          ),
      },
      {
        label: 'Loading',
        description: (
          <Text>
            While identity data is being fetched, set <Strong>loading</Strong>{' '}
            to show a skeleton in place of the photo, initials, or icon. This
            state is not announced. If the avatar is also a control, it remains
            clickable so someone can add or update a photo before the current
            image arrives.
          </Text>
        ),
        Example: () => source(<Avatar name="Leia Organa" loading />),
      },
    ],
    bestPractices: [
      {
        label: 'General best practice',
        description: (
          <List space="large">
            <Text>
              Avatar does not need a visible label. Pair it with a name when
              that helps people scan a list or card.
            </Text>
            <Text>
              If the Avatar is the only identifier, pass{' '}
              <Strong>aria-label</Strong> — and consider a tooltip.
            </Text>
            <Text>
              Use a current photo or company logo when you have one, otherwise
              initials from the name. For an unnamed organisation, pass{' '}
              <Strong>icon</Strong>.
            </Text>
            <Text>
              To show status, compose{' '}
              <TextLink href="/components/Badge">Badge</TextLink> on the
              wrapper.
            </Text>
            <Text>
              Do not add <Strong>onClick</Strong> when a parent is already the
              button.
            </Text>
          </List>
        ),
      },
      {
        label: 'When to use',
        description: (
          <Stack space="xlarge">
            <Stack space="large">
              <Text>Use an Avatar:</Text>
              <List space="large">
                <Text>
                  to represent a person or company using a photo, initials, or
                  icon, at various sizes
                </Text>
                <Text>
                  to help users quickly recognise entities within a list or
                  group
                </Text>
                <Text>
                  as <TextLink href="#as-a-control">a control</TextLink> that
                  lets users add or update their Avatar photo.
                </Text>
              </List>
            </Stack>
            <Stack space="large">
              <Text>Don&rsquo;t use an Avatar:</Text>
              <List space="large">
                <Text>
                  for company logos on job listing cards (use their existing
                  components)
                </Text>
                <Text>
                  as the only identifier, unless you pass{' '}
                  <Strong>aria-label</Strong>
                </Text>
              </List>
            </Stack>
          </Stack>
        ),
      },
      dataAttributeDocs({
        code: `
        <Avatar
          name="Leia Organa"
          data={{ testid: 'avatar-1' }}
          // => data-testid="avatar-1"
        />
      `,
        supportsNativeSyntax: false,
      }),
    ],
  },
};

export default docs;
