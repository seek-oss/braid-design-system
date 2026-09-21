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

import { photoBrokenUrl, photoExampleUrl } from './photoPlaceholder.css';

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
    <Text>
      Avatar is decorative by default. The root is hidden from assistive
      technologies, and images use an empty <Strong>alt</Strong>. Name the
      person with adjacent text. Pass <Strong>aria-label</Strong> when there is
      no visible name, or when Avatar is a button (<Strong>onClick</Strong>) or
      a tooltip trigger. Use <Strong>onClick</Strong> only when the square
      itself is the control, such as a file picker — not inside a{' '}
      <TextLink href="/components/MenuRenderer">MenuRenderer</TextLink>.
    </Text>
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
          <Strong>imageUrl</Strong> is shown. If that URL fails,{' '}
          <TextLink href="/components/IconImageBroken">
            IconImageBroken
          </TextLink>{' '}
          is shown — not initials or <Strong>icon</Strong>. Else the first
          letter of <Strong>name</Strong>. Else <Strong>icon</Strong> if you
          passed one. Else{' '}
          <TextLink href="/components/IconProfile">IconProfile</TextLink>.
          Passing <Strong>name</Strong> and <Strong>icon</Strong> together shows
          initials — omit <Strong>name</Strong> for a custom{' '}
          <Strong>icon</Strong> fallback.
        </Text>
      ),
    },
    {
      label: 'Empty',
      description: (
        <>
          <Text>
            Omit <Strong>name</Strong>, or pass a value with no letter, to show{' '}
            <TextLink href="/components/IconProfile">IconProfile</TextLink>, or
            pass <Strong>icon</Strong> for a custom empty state.
          </Text>
          <Text>
            As a control, omit <Strong>name</Strong> and pass{' '}
            <Strong>icon</Strong>, <Strong>aria-label</Strong> and{' '}
            <Strong>onClick</Strong>.
          </Text>
        </>
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
            <Stack space="small" align="center">
              <Avatar
                icon={<IconPhotoAdd />}
                aria-label="Add photo"
                onClick={() => undefined}
              />
              <Text size="small" tone="secondary">
                add photo
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
            If the image fails to load,{' '}
            <TextLink href="/components/IconImageBroken">
              IconImageBroken
            </TextLink>{' '}
            is shown — not initials or <Strong>icon</Strong>. Omit{' '}
            <Strong>imageUrl</Strong> when the image must not be shown, for
            example when names are hidden. <Strong>loading</Strong> still takes
            precedence while data is fetched. A loaded image ignores{' '}
            <Strong>icon</Strong>.
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
              <Avatar name="Leia Organa" imageUrl={photoBrokenUrl} />
              <Text size="small" tone="secondary">
                broken
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
              <Avatar
                name="Leia Organa"
                imageUrl="https://invalid-path/photo.jpg"
              />
              <Text size="small" tone="secondary">
                broken
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
      label: 'Tooltip',
      description: (
        <>
          <Text>
            Avatar has no tooltip prop. Wrap with{' '}
            <TextLink href="/components/TooltipRenderer">
              TooltipRenderer
            </TextLink>{' '}
            and spread <Strong>triggerProps</Strong> last onto Avatar so the
            tooltip keeps its ref. Those props set <Strong>tabIndex</Strong>, so{' '}
            <Strong>aria-label</Strong> is required. Use this when the face is
            the only identifier (no name beside it).
          </Text>
          <Text>
            Skip a tip when the name is already visible beside the face. If
            click opens a{' '}
            <TextLink href="/components/MenuRenderer">MenuRenderer</TextLink>,
            wrap TooltipRenderer around the menu and put trigger props on that
            wrapper, not on Avatar inside the menu button.
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
          data is fetched. This is shown instead of image, initials, or icon,
          and is not announced. A control with <Strong>onClick</Strong> still
          fires while loading, so add or update photo can open before the
          current image arrives.
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
                with <Strong>icon</Strong> for an empty company mark
              </Text>
              <Text>
                with <Strong>icon</Strong>, <Strong>aria-label</Strong> and{' '}
                <Strong>onClick</Strong> for an empty add-photo control
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
