import source from '@braid-design-system/source.macro';
import {
  Box,
  Button,
  ButtonIcon,
  Heading,
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

import type { PatternDocs } from '../../../types';

export const docs: PatternDocs = {
  description: (
    <Text>
      Allows users to share content, such as a job ad or article, to their
      social networks or with specific individuals.
    </Text>
  ),
  alternatives: [
    {
      name: 'MenuItem',
      description: 'For displaying buttons and links within a menu',
    },
    {
      name: 'MenuRenderer',
      description: 'For custom menu components',
    },
    {
      name: 'Button',
      description: 'For a semantic button',
    },
    {
      name: 'ButtonIcon',
      description: 'For buttons containing only an icon',
    },
  ],
  docSections: {
    appearance: [
      {
        label: 'Web',
        Example: ({ showToast }) =>
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
          ),
      },
      {
        description: (
          <>
            <Heading level="4">Visual guidelines</Heading>
            <List space="large">
              <Text>
                It&rsquo;s recommended to present social share as a single menu.
              </Text>
              <Text>
                Consider ordering your items alphabetically, and placing “Copy
                link” at the bottom.
              </Text>
              <Text>Include logo icons next to each menu item.</Text>
              <Text>
                You may choose a menu trigger to meet your specific UI needs by
                using{' '}
                <TextLink href="/components/MenuRenderer">
                  MenuRenderer
                </TextLink>
                . Suggested triggers include Button or ButtonIcon, and you can
                specify a variant and/or tone to meet your needs.
              </Text>
              <Text>
                The menu can be aligned to the left or the right of the trigger.
              </Text>
              <Text>
                When the user makes a selection from the menu, consider opening
                the share link in a new tab and closing the menu.
              </Text>
              <Text>
                When the user selects “Copy link”, consider closing the menu and
                providing a positive{' '}
                <TextLink href="/components/useToast">Toast</TextLink> that
                alerts the user that the link has been copied successfully.
              </Text>
            </List>
          </>
        ),
      },
      {
        label: 'Mobile and apps',
        Example: ({ showToast }) =>
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
          ),
      },
      {
        description: (
          <>
            <Heading level="4">Visual guidelines</Heading>
            <List space="large">
              <Text>
                For basic share options, it&rsquo;s recommended to utilise the
                native OS share sheet.
              </Text>
              <Text>
                If you require additional options not included in the native OS
                share sheet, you may want to create a custom sheet. If you
                create a custom sheet, consider including an option to open the
                native sheet from within the custom menu.
              </Text>
              <Text>
                Similarly to web, you may choose an appropriate trigger to meet
                your needs, however the relevant OS share icon may be most
                appropriate.
              </Text>
            </List>
          </>
        ),
      },
    ],
  },
};

export default docs;
