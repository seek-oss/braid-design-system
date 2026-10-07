import source from '@braid-design-system/source.macro';

import type { PatternSnippets } from '../../../components/private/Snippets';
import {
  Button,
  IconLink,
  IconShare,
  IconSocialFacebook,
  IconSocialInstagram,
  IconSocialLinkedIn,
  IconSocialX,
  Inline,
  MenuItemLink,
  MenuRenderer,
} from '../../components';

export const snippets: PatternSnippets = [
  {
    group: 'Patterns',
    name: 'Social share',
    code: ({ showToast }) =>
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
];
