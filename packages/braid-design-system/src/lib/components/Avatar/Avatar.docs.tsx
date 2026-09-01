import source from '@braid-design-system/source.macro';
import type { ComponentDocs } from 'site/types';

import {
  Avatar,
  Box,
  Column,
  Columns,
  IconPeople,
  IconProfile,
  Inline,
  List,
  Stack,
  Strong,
  Text,
  TextLink,
} from '../';
import { dataAttributeDocs } from '../private/dataAttribute.docs';

import { photoPlaceholderUrl as photoUrl } from './photoPlaceholder.css';

const docs: ComponentDocs = {
  category: 'Content',
  description: (
    <Text>
      A decorative user avatar that can show a photo, initials, or an icon.
    </Text>
  ),
  Example: () => {
    const { value } = source(
      <Inline space="small" alignY="center">
        <Avatar
          variant="initials"
          name="Leia Organa"
          size="xlarge"
          photoUrl={photoUrl}
        />
        <Avatar variant="initials" name="Leia Organa" size="large" />
        <Avatar variant="icon" name="Leia Organa" />
      </Inline>,
    );

    const { code } = source(
      <Inline space="small" alignY="center">
        <Avatar
          variant="initials"
          name="Leia Organa"
          size="xlarge"
          photoUrl="https://example.com/photo.jpg"
        />
        <Avatar variant="initials" name="Leia Organa" size="large" />
        <Avatar variant="icon" name="Leia Organa" />
      </Inline>,
    );

    return { code, value };
  },
  accessibility: (
    <>
      <Text>
        Avatar is decorative. The root is hidden from assistive technologies,
        and photos use an empty <Strong>alt</Strong>, so initials and images are
        not announced. Name the person with adjacent text, or on a wrapping
        control such as a <TextLink href="/components/Button">Button</TextLink>{' '}
        or <TextLink href="/components/MenuItem">MenuItem</TextLink>. Do not use
        Avatar as the only identifier.
      </Text>
      <Text>
        Avatar is not interactive and <Strong>small</Strong> is below the 48px
        target size. If the avatar is the control, wrap it so the accessible
        name and hit area come from that control.
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
      description: 'For a profile icon that is not a person avatar.',
    },
    {
      name: 'IconCompany',
      description: 'For a company or organisation, rather than a person.',
    },
    {
      name: 'Badge',
      description: 'For status, not identity.',
    },
  ],
  additional: [
    {
      label: 'Variants',
      description: (
        <Text>
          Use <Strong>initials</Strong> to derive the first letter from{' '}
          <Strong>name</Strong>, or <Strong>icon</Strong> to show{' '}
          <TextLink href="/components/IconProfile">IconProfile</TextLink> (or a
          custom <Strong>icon</Strong>).
        </Text>
      ),
      Example: () =>
        source(
          <Inline space="medium" alignY="center">
            <Stack space="small" align="center">
              <Avatar variant="initials" name="Leia Organa" />
              <Text size="small" tone="secondary">
                initials
              </Text>
            </Stack>
            <Stack space="small" align="center">
              <Avatar variant="icon" name="Leia Organa" />
              <Text size="small" tone="secondary">
                icon
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
            <Avatar variant="initials" name="C-3PO" />
            <Avatar variant="initials" name="Leia Organa" />
            <Avatar variant="initials" name="Obi-Wan Kenobi" />
            <Avatar variant="initials" name="Darth Vader" />
            <Avatar variant="initials" name="Qui-Gon Jinn" />
          </Inline>,
        ),
    },
    {
      label: 'Fallback when initials cannot be determined',
      description: (
        <Text>
          If <Strong>variant</Strong> is <Strong>initials</Strong> and a letter
          cannot be derived from <Strong>name</Strong> (for example an empty
          value, numbers, or punctuation),{' '}
          <TextLink href="/components/IconProfile">IconProfile</TextLink> is
          shown. Pass <Strong>icon</Strong> to override that fallback.
        </Text>
      ),
      Example: () =>
        source(
          <Inline space="medium" alignY="center">
            <Stack space="small" align="center">
              <Avatar variant="initials" name="Leia Organa" />
              <Text size="small" tone="secondary">
                from name
              </Text>
            </Stack>
            <Stack space="small" align="center">
              <Avatar variant="initials" name="2187" />
              <Text size="small" tone="secondary">
                no letters
              </Text>
            </Stack>
            <Stack space="small" align="center">
              <Avatar variant="initials" name="2187" icon={<IconPeople />} />
              <Text size="small" tone="secondary">
                custom fallback
              </Text>
            </Stack>
          </Inline>,
        ),
    },
    {
      label: 'Sizing',
      description: (
        <Text>
          Available in <Strong>small</Strong>, <Strong>standard</Strong>,{' '}
          <Strong>large</Strong> and <Strong>xlarge</Strong>.
        </Text>
      ),
      Example: () =>
        source(
          <Inline space="medium" alignY="center">
            <Avatar variant="initials" name="Leia Organa" size="small" />
            <Avatar variant="initials" name="Leia Organa" size="standard" />
            <Avatar variant="initials" name="Leia Organa" size="large" />
            <Avatar variant="initials" name="Leia Organa" size="xlarge" />
          </Inline>,
        ),
    },
    {
      label: 'Photo',
      description: (
        <>
          <Text>
            Pass a URL from your user or profile data as{' '}
            <Strong>photoUrl</Strong>. When set, the photo is shown instead of
            initials or icon.
          </Text>
          <Text>
            If the image fails to load, or <Strong>photoError</Strong> is set, a
            broken image icon is shown. <Strong>loading</Strong> still takes
            precedence while data is fetched.
          </Text>
        </>
      ),
      Example: () => {
        const { value } = source(
          <Inline space="medium" alignY="center">
            <Stack space="small" align="center">
              <Avatar
                variant="initials"
                name="Leia Organa"
                photoUrl={photoUrl}
              />
              <Text size="small" tone="secondary">
                photo
              </Text>
            </Stack>
            <Stack space="small" align="center">
              <Avatar variant="initials" name="Leia Organa" photoError />
              <Text size="small" tone="secondary">
                error
              </Text>
            </Stack>
            <Stack space="small" align="center">
              <Avatar variant="initials" name="Leia Organa" />
              <Text size="small" tone="secondary">
                no photo
              </Text>
            </Stack>
          </Inline>,
        );

        const { code } = source(
          <Inline space="medium" alignY="center">
            <Stack space="small" align="center">
              <Avatar
                variant="initials"
                name="Leia Organa"
                photoUrl="https://example.com/photo.jpg"
              />
              <Text size="small" tone="secondary">
                photo
              </Text>
            </Stack>
            <Stack space="small" align="center">
              <Avatar variant="initials" name="Leia Organa" photoError />
              <Text size="small" tone="secondary">
                error
              </Text>
            </Stack>
            <Stack space="small" align="center">
              <Avatar variant="initials" name="Leia Organa" />
              <Text size="small" tone="secondary">
                no photo
              </Text>
            </Stack>
          </Inline>,
        );

        return { code, value };
      },
    },
    {
      label: 'Loading',
      description: (
        <Text>
          Set <Strong>loading</Strong> to show a shimmering skeleton while user
          data is fetched. This is shown instead of photo, initials, or icon.
        </Text>
      ),
      Example: () =>
        source(<Avatar variant="initials" name="Leia Organa" loading />),
    },
    {
      label: 'Border',
      description: (
        <Text>
          Set <Strong>border</Strong> to add an inset ring. Useful when avatars
          overlap or sit on a coloured background.
        </Text>
      ),
      Example: () => {
        const { value } = source(
          <Box background="brand" padding="medium" borderRadius="standard">
            <Inline space="small" alignY="center">
              <Avatar
                variant="initials"
                name="Leia Organa"
                photoUrl={photoUrl}
                border
              />
              <Avatar variant="initials" name="Leia Organa" border />
              <Avatar variant="icon" name="Leia Organa" border />
            </Inline>
          </Box>,
        );

        const { code } = source(
          <Box background="brand" padding="medium" borderRadius="standard">
            <Inline space="small" alignY="center">
              <Avatar
                variant="initials"
                name="Leia Organa"
                photoUrl="https://example.com/photo.jpg"
                border
              />
              <Avatar variant="initials" name="Leia Organa" border />
              <Avatar variant="icon" name="Leia Organa" border />
            </Inline>
          </Box>,
        );

        return { code, value };
      },
    },
    {
      label: 'Custom icon',
      description: (
        <Text>
          Pass a custom <Strong>icon</Strong> when <Strong>variant</Strong> is{' '}
          <Strong>icon</Strong>, or when initials cannot be determined from the
          name.
        </Text>
      ),
      Example: () =>
        source(
          <Inline space="medium" alignY="center">
            <Avatar variant="icon" icon={<IconPeople />} />
            <Avatar variant="icon" icon={<IconProfile />} />
          </Inline>,
        ),
    },
    {
      label: 'Composition',
      description: (
        <Text>
          Pair Avatar with visible text (or a labelled control) so the name is
          available to everyone. If the avatar is the control, wrap it so the
          accessible name and hit area come from that control.
        </Text>
      ),
      Example: () =>
        source(
          <Stack space="medium">
            <Columns space="medium" alignY="center">
              <Column width="content">
                <Avatar variant="initials" name="Leia Organa" />
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
                <Avatar variant="initials" name="Ezra Bridger" />
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
                to represent a person in a list, card, or header, always with a
                visible name nearby
              </Text>
              <Text>
                inside a labelled control such as a{' '}
                <TextLink href="/components/Button">Button</TextLink> or{' '}
                <TextLink href="/components/MenuItem">MenuItem</TextLink> when
                the avatar itself is the hit target.
              </Text>
            </List>
          </Stack>
          <Stack space="large">
            <Text>Don&rsquo;t use an Avatar:</Text>
            <List space="large">
              <Text>as the only identifier for a person</Text>
              <Text>
                for a company or organisation (use{' '}
                <TextLink href="/components/IconCompany">IconCompany</TextLink>{' '}
                instead)
              </Text>
              <Text>
                to show status (use a{' '}
                <TextLink href="/components/Badge">Badge</TextLink> instead)
              </Text>
              <Text>
                as a standalone interactive control without wrapping it.
              </Text>
            </List>
          </Stack>
        </Stack>
      ),
    },
    dataAttributeDocs({
      code: `
        <Avatar
          variant="initials"
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
