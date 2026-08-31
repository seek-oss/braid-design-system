import source from '@braid-design-system/source.macro';
import {
  Button,
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
        label: 'Anatomy',
        Example: ({ showToast }) =>
          source(
            <Inline space="none">
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
            </Inline>,
          ),
      },
      {
        description: (
          <>
            <Heading level="4">Visual guidelines</Heading>
            <List space="large">
              <Text>
                Present share as a single menu with logo icons, ordered
                alphabetically and “Copy link” last.
              </Text>
              <Text>
                Use{' '}
                <TextLink href="/components/MenuRenderer">
                  MenuRenderer
                </TextLink>{' '}
                with a Button or ButtonIcon trigger, aligned left or right.
              </Text>
              <Text>
                On selection, open the share link in a new tab and close the
                menu.
              </Text>
              <Text>
                For “Copy link”, close the menu and show a positive{' '}
                <TextLink href="/components/useToast">Toast</TextLink>.
              </Text>
            </List>
          </>
        ),
      },
    ],
    bestPractices: [
      {
        label: 'Mobile and apps',
        description: (
          <List space="large">
            <Text>
              For basic share options, it&rsquo;s recommended to utilise the
              native OS share sheet.
            </Text>
            <Text>
              If you require additional options not included in the native OS
              share sheet, you may want to create a custom sheet. If you create
              a custom sheet, consider including an option to open the native
              sheet from within the custom menu.
            </Text>
            <Text>
              Similarly to web, you may choose an appropriate trigger to meet
              your needs, however the relevant OS share icon may be most
              appropriate.
            </Text>
          </List>
        ),
      },
    ],
  },
};

export default docs;
