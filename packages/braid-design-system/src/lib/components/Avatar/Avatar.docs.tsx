import source from '@braid-design-system/source.macro';
import type { ComponentDocs } from 'site/types';

import {
  Avatar,
  Box,
  Column,
  Columns,
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

import { photoExampleUrl } from './photoPlaceholder.css';

const docs: ComponentDocs = {
  category: 'Content',
  description: (
    <Text>
      A rounded-square identity mark for a person or company. It can show an
      image, initials, a provided icon, or IconProfile.
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
        technologies, and images use an empty <Strong>alt</Strong>, so initials
        and images are not announced. Name the person with adjacent text, or
        pass <Strong>aria-label</Strong>.
      </Text>
      <Text>
        If there is no adjacent name, pass <Strong>aria-label</Strong> so the
        avatar is exposed as an image with that accessible name. Do not pass{' '}
        <Strong>aria-label</Strong> when the name is already visible beside the
        avatar.
      </Text>
      <Text>
        <Strong>onClick</Strong> turns Avatar into a button and requires{' '}
        <Strong>aria-label</Strong>. Use it only when the square itself is the
        control — Avatar then enlarges the hit area on <Strong>xsmall</Strong>,{' '}
        <Strong>small</Strong> and <Strong>medium</Strong>. If click opens a{' '}
        <TextLink href="/components/MenuRenderer">MenuRenderer</TextLink>, put{' '}
        <Strong>onClick</Strong> on the wrapper, not on Avatar.
      </Text>
      <Text>
        For a hover tip, wrap with{' '}
        <TextLink href="/components/TooltipRenderer">TooltipRenderer</TextLink>{' '}
        and spread its trigger props onto Avatar. Do not put a tip on Avatar
        when a parent is already the control, or when the name is visible beside
        it.
      </Text>
      <Text>
        Do not use per-avatar <Strong>onClick</Strong> in overlapping clusters.
      </Text>
      <Text>
        The <Strong>loading</Strong> shimmer is visual only. It is paused when{' '}
        <Strong>prefers-reduced-motion</Strong> is set, and is not announced. If
        loading matters to the task, set <Strong>aria-busy</Strong> on the
        surrounding content.
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
      description:
        'For status or a notification count, composed around Avatar.',
    },
    {
      name: 'TooltipRenderer',
      description: 'For a hover label around Avatar.',
    },
    {
      name: 'MenuRenderer',
      description: 'For account or upload menus around Avatar.',
    },
  ],
  additional: [
    {
      label: 'Fallback order',
      description: (
        <Text>
          While <Strong>loading</Strong>, a skeleton is shown. Else a loaded{' '}
          <Strong>imageUrl</Strong> is shown (or a broken-image icon on error).
          Else the first letter of <Strong>name</Strong>. Else{' '}
          <Strong>icon</Strong> if you passed one. Else{' '}
          <TextLink href="/components/IconProfile">IconProfile</TextLink>.
          Passing <Strong>name</Strong> and <Strong>icon</Strong> together shows
          initials — omit <Strong>name</Strong> for company and add-photo
          fallbacks.
        </Text>
      ),
    },
    {
      label: 'Empty',
      description: (
        <Text>
          Omit <Strong>name</Strong>, or pass a value with no letter, to show{' '}
          <TextLink href="/components/IconProfile">IconProfile</TextLink>, or
          pass <Strong>icon</Strong> for a custom empty state.
        </Text>
      ),
      Example: () =>
        source(
          <Inline space="medium" alignY="center">
            <Stack space="small" align="center">
              <Avatar name="Leia Organa" />
              <Text size="small" tone="secondary">
                name
              </Text>
            </Stack>
            <Stack space="small" align="center">
              <Avatar />
              <Text size="small" tone="secondary">
                empty
              </Text>
            </Stack>
            <Stack space="small" align="center">
              <Avatar icon={<IconCompany />} />
              <Text size="small" tone="secondary">
                company
              </Text>
            </Stack>
            <Stack space="small" align="center">
              <Avatar name="2187" />
              <Text size="small" tone="secondary">
                no letters
              </Text>
            </Stack>
          </Inline>,
        ),
    },
    {
      label: 'Colour from name',
      description: (
        <Text>
          Initials avatars pick a background from <Strong>name</Strong> so the
          same person stays consistent.
        </Text>
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
      label: 'Multi-lingual support',
      description: (
        <Text>
          The first Unicode letter of <Strong>name</Strong> is shown, so scripts
          such as Latin, Thai and Chinese work without extra configuration.
          Numbers, punctuation and symbols are skipped. If no letter is found,
          the icon fallback is used.
        </Text>
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
      label: 'Sizing',
      description: (
        <Text>
          Available in <Strong>xsmall</Strong> (24px), <Strong>small</Strong>{' '}
          (32), <Strong>medium</Strong> (40), <Strong>standard</Strong> (48),{' '}
          <Strong>large</Strong> (64), <Strong>xlarge</Strong> (80) and{' '}
          <Strong>xxlarge</Strong> (96).
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
      label: 'Image',
      description: (
        <>
          <Text>
            Pass a URL from your user or profile data as{' '}
            <Strong>imageUrl</Strong>. When set, the image is shown instead of
            initials or icon. Provide an image at least twice the box size (48,
            64, 80, 96, 128, 160 and 192). The surface ring sits inside the box,
            so the visible face is slightly smaller.
          </Text>
          <Text>
            If the image fails to load, a broken image icon is shown.{' '}
            <Strong>loading</Strong> still takes precedence while data is
            fetched. Omit <Strong>imageUrl</Strong> when the image must not be
            shown, for example when names are hidden. A loaded image ignores{' '}
            <Strong>icon</Strong> except as the hover overlay.
          </Text>
        </>
      ),
      Example: () => {
        const { value } = source(
          <Inline space="medium" alignY="center">
            <Stack space="small" align="center">
              <Avatar name="Leia Organa" imageUrl={photoExampleUrl} />
              <Text size="small" tone="secondary">
                image
              </Text>
            </Stack>
            <Stack space="small" align="center">
              <Avatar name="Leia Organa" />
              <Text size="small" tone="secondary">
                no image
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
                image
              </Text>
            </Stack>
            <Stack space="small" align="center">
              <Avatar name="Leia Organa" />
              <Text size="small" tone="secondary">
                no image
              </Text>
            </Stack>
          </Inline>,
        );

        return { code, value };
      },
    },
    {
      label: 'Add and update photo',
      description: (
        <>
          <Text>
            Empty add-photo: omit <Strong>name</Strong>, pass{' '}
            <Strong>icon</Strong> as{' '}
            <TextLink href="/components/IconPhotoAdd">IconPhotoAdd</TextLink>,
            plus <Strong>aria-label</Strong> and <Strong>onClick</Strong> when
            this square is the file-picker control. Wrap with{' '}
            <TextLink href="/components/TooltipRenderer">
              TooltipRenderer
            </TextLink>{' '}
            so sighted pointer users see the same label on hover.
          </Text>
          <Text>
            Update photo: pass <Strong>imageUrl</Strong> and the same{' '}
            <Strong>icon</Strong>, wrap with{' '}
            <TextLink href="/components/TooltipRenderer">
              TooltipRenderer
            </TextLink>{' '}
            for the “Update photo” label, and do not set{' '}
            <Strong>onClick</Strong> on Avatar. Hover or focus dims the image
            and shows the icon. Keep the upload/delete menu, file input and crop
            on a{' '}
            <TextLink href="/components/MenuRenderer">MenuRenderer</TextLink>{' '}
            wrapper.
          </Text>
        </>
      ),
      Example: () => {
        const { value } = source(
          <Inline space="xlarge" alignY="bottom">
            <Stack space="small" align="center">
              <TooltipRenderer tooltip={<Text>Add photo</Text>}>
                {({ triggerProps }) => (
                  <Avatar
                    size="xxlarge"
                    icon={<IconPhotoAdd />}
                    aria-label="Add photo"
                    onClick={() => undefined}
                    {...triggerProps}
                  />
                )}
              </TooltipRenderer>
              <Text size="small" tone="secondary">
                Add photo
              </Text>
            </Stack>
            <Stack space="small" align="center">
              <TooltipRenderer tooltip={<Text>Update photo</Text>}>
                {({ triggerProps }) => (
                  <Avatar
                    size="xxlarge"
                    imageUrl={photoExampleUrl}
                    icon={<IconPhotoAdd />}
                    aria-label="Update photo"
                    {...triggerProps}
                  />
                )}
              </TooltipRenderer>
              <Text size="small" tone="secondary">
                Update photo
              </Text>
            </Stack>
          </Inline>,
        );

        const { code } = source(
          <Inline space="xlarge" alignY="bottom">
            <Stack space="small" align="center">
              <TooltipRenderer tooltip={<Text>Add photo</Text>}>
                {({ triggerProps }) => (
                  <Avatar
                    size="xxlarge"
                    icon={<IconPhotoAdd />}
                    aria-label="Add photo"
                    onClick={() => undefined}
                    {...triggerProps}
                  />
                )}
              </TooltipRenderer>
              <Text size="small" tone="secondary">
                Add photo
              </Text>
            </Stack>
            <Stack space="small" align="center">
              <TooltipRenderer tooltip={<Text>Update photo</Text>}>
                {({ triggerProps }) => (
                  <Avatar
                    size="xxlarge"
                    imageUrl="https://example.com/photo.jpg"
                    icon={<IconPhotoAdd />}
                    aria-label="Update photo"
                    {...triggerProps}
                  />
                )}
              </TooltipRenderer>
              <Text size="small" tone="secondary">
                Update photo
              </Text>
            </Stack>
          </Inline>,
        );

        return { code, value };
      },
    },
    {
      label: 'Tooltip',
      description: (
        <>
          <Text>
            Avatar has no tooltip prop. Wrap with{' '}
            <TextLink href="/components/TooltipRenderer">
              TooltipRenderer
            </TextLink>{' '}
            and spread <Strong>triggerProps</Strong> onto Avatar. Use this when
            the face is the only identifier (no name beside it), or for an
            add-photo or update-photo control whose label should also show on
            hover.
          </Text>
          <Text>
            Do not wrap when the name is already visible in the layout, or when
            a parent such as{' '}
            <TextLink href="/components/MenuRenderer">MenuRenderer</TextLink> is
            already the control.
          </Text>
        </>
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
    {
      label: 'Loading',
      description: (
        <Text>
          Set <Strong>loading</Strong> to show a shimmering skeleton while user
          data is fetched. This is shown instead of image, initials, or icon.
        </Text>
      ),
      Example: () => source(<Avatar name="Leia Organa" loading />),
    },
    {
      label: 'Keyline',
      description: (
        <Text>
          Avatar always has a surface-coloured ring so it stays distinct when
          overlapping or sitting on a coloured background. Coloured rings belong
          on a wrapping <TextLink href="/components/Box">Box</TextLink>; keep
          that radius in sync with the Avatar size.
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
    {
      label: 'Composition',
      description: (
        <Text>
          Pair Avatar with visible text so the name is available to everyone. If
          the avatar is the only identifier, pass <Strong>aria-label</Strong>.
        </Text>
      ),
      Example: () =>
        source(
          <Stack space="medium">
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
            </Columns>
            <Columns space="medium" alignY="center">
              <Column width="content">
                <Avatar name="Ezra Bridger" />
              </Column>
              <Column>
                <Stack space="xsmall">
                  <Text>Ezra Bridger</Text>
                  <Text size="small" tone="secondary">
                    Recruiter
                  </Text>
                </Stack>
              </Column>
            </Columns>
          </Stack>,
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
                to represent a person or company in a list, card, or header
              </Text>
              <Text>
                with <Strong>icon</Strong> for an empty company mark or
                add-photo control
              </Text>
            </List>
          </Stack>
          <Stack space="large">
            <Text>Don&rsquo;t use an Avatar:</Text>
            <List space="large">
              <Text>
                as the only identifier, unless you pass{' '}
                <Strong>aria-label</Strong>
              </Text>
              <Text>
                with a wide rectangle lockup (existing job-card logos stay on
                their current components)
              </Text>
              <Text>
                to show status (compose{' '}
                <TextLink href="/components/Badge">Badge</TextLink> on the
                wrapper)
              </Text>
              <Text>
                with <Strong>onClick</Strong> when a parent is already the
                button
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
};

export default docs;
