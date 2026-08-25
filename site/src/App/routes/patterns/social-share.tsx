import { LinkableHeading } from '@braid-design-system/docs-ui';
import source from '@braid-design-system/source.macro';
import {
  Box,
  Button,
  ButtonIcon,
  IconLink,
  IconShare,
  IconSocialFacebook,
  IconSocialInstagram,
  IconSocialLinkedIn,
  IconSocialX,
  Inline,
  List,
  MenuItemLink,
  MenuRenderer,
  Text,
  TextLink,
} from 'braid-design-system';

import { PatternLayout, patternPage } from './PatternLayout';
import { PlayroomExample } from './PlayroomExample';

const SocialShare = () => (
  <PatternLayout
    slug="social-share"
    sections={[
      { href: '#web', label: 'Web' },
      { href: '#mobile-and-apps', label: 'Mobile and apps' },
      { href: '#relevant-components', label: 'Relevant components' },
    ]}
  >
    <LinkableHeading>Web</LinkableHeading>
    <List>
      <Text>
        It&rsquo;s recommended to present social share as a single menu.
      </Text>
      <Text>
        Consider ordering your items alphabetically, and placing “Copy link” at
        the bottom.
      </Text>
      <Text>Include logo icons next to each menu item.</Text>
      <Text>
        You may choose a menu trigger to meet your specific UI needs by using{' '}
        <TextLink href="/components/MenuRenderer">MenuRenderer</TextLink>.
        Suggested triggers include Button or ButtonIcon, and you can specify a
        variant and/or tone to meet your needs.
      </Text>
      <Text>
        The menu can be aligned to the left or the right of the trigger.
      </Text>
      <Text>
        When the user makes a selection from the menu, consider opening the
        share link in a new tab and closing the menu.
      </Text>
      <Text>
        When the user selects “Copy link”, consider closing the menu and
        providing a positive{' '}
        <TextLink href="/components/useToast">Toast</TextLink> that alerts the
        user that the link has been copied successfully.
      </Text>
    </List>
    <Text>A right-aligned example triggered by a transparent Button:</Text>
    <PlayroomExample
      showCodeByDefault
      Example={({ showToast }) =>
        source(
          <Box padding="small">
            <Inline space="none" align="right">
              <MenuRenderer
                offsetSpace="small"
                align="right"
                width="small"
                trigger={(triggerProps) => (
                  <Button
                    variant="transparent"
                    icon={<IconShare />}
                    {...triggerProps}
                  >
                    Share job
                  </Button>
                )}
              >
                <MenuItemLink
                  href="#"
                  target="_blank"
                  icon={<IconSocialFacebook />}
                >
                  Facebook
                </MenuItemLink>
                <MenuItemLink
                  href="#"
                  target="_blank"
                  icon={<IconSocialInstagram />}
                >
                  Instagram
                </MenuItemLink>
                <MenuItemLink
                  href="#"
                  target="_blank"
                  icon={<IconSocialLinkedIn />}
                >
                  LinkedIn
                </MenuItemLink>
                <MenuItemLink href="#" target="_blank" icon={<IconSocialX />}>
                  Twitter
                </MenuItemLink>
                <MenuItemLink
                  href="#"
                  icon={<IconLink />}
                  onClick={() =>
                    showToast({
                      message: 'Link copied',
                      tone: 'positive',
                      key: '1',
                    })
                  }
                >
                  Copy link
                </MenuItemLink>
              </MenuRenderer>
            </Inline>
          </Box>,
        )
      }
    />
    <Text>A left-aligned example triggered by a ButtonIcon:</Text>
    <PlayroomExample
      showCodeByDefault
      Example={({ showToast }) =>
        source(
          <Box padding="medium">
            <Inline space="none">
              <MenuRenderer
                offsetSpace="small"
                width="small"
                trigger={(triggerProps) => (
                  <ButtonIcon
                    variant="transparent"
                    icon={<IconShare />}
                    label="Share job"
                    {...triggerProps}
                  />
                )}
              >
                <MenuItemLink
                  href="#"
                  target="_blank"
                  icon={<IconSocialFacebook />}
                >
                  Facebook
                </MenuItemLink>
                <MenuItemLink
                  href="#"
                  target="_blank"
                  icon={<IconSocialInstagram />}
                >
                  Instagram
                </MenuItemLink>
                <MenuItemLink
                  href="#"
                  target="_blank"
                  icon={<IconSocialLinkedIn />}
                >
                  LinkedIn
                </MenuItemLink>
                <MenuItemLink href="#" target="_blank" icon={<IconSocialX />}>
                  Twitter
                </MenuItemLink>
                <MenuItemLink
                  href="#"
                  icon={<IconLink />}
                  onClick={() =>
                    showToast({
                      message: 'Link copied',
                      tone: 'positive',
                      key: '1',
                    })
                  }
                >
                  Copy link
                </MenuItemLink>
              </MenuRenderer>
            </Inline>
          </Box>,
        )
      }
    />

    <LinkableHeading>Mobile and apps</LinkableHeading>
    <List>
      <Text>
        For basic share options, it&rsquo;s recommended to utilise the native OS
        share sheet.
      </Text>
      <Text>
        If you require additional options not included in the native OS share
        sheet, you may want to create a custom sheet. If you create a custom
        sheet, consider including an option to open the native sheet from within
        the custom menu.
      </Text>
      <Text>
        Similarly to web, you may choose an appropriate trigger to meet your
        needs, however the relevant OS share icon may be most appropriate.
      </Text>
    </List>

    <LinkableHeading>Relevant components</LinkableHeading>
    <List>
      <Text>
        <TextLink href="/components/MenuItem">MenuItem</TextLink> — For
        displaying buttons and links within a menu
      </Text>
      <Text>
        <TextLink href="/components/MenuRenderer">MenuRenderer</TextLink> — For
        custom menu components
      </Text>
      <Text>
        <TextLink href="/components/Button">Button</TextLink> — For a semantic
        button
      </Text>
      <Text>
        <TextLink href="/components/ButtonIcon">ButtonIcon</TextLink> — For
        buttons containing only an icon
      </Text>
    </List>
  </PatternLayout>
);

export default patternPage('social-share', <SocialShare />);
