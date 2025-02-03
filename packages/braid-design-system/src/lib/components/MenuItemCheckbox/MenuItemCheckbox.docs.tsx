import source from '@braid-design-system/source.macro';
import type { ComponentDocs } from 'site/types';

import {
  MenuItemCheckbox,
  Text,
  TextLink,
  Box,
  Strong,
  Badge,
  MenuRenderer,
  Inline,
  IconChevron,
} from '..';

const docs: ComponentDocs = {
  category: 'Content',
  Example: ({ getState, setState }) =>
    source(
      <Inline space="none">
        <MenuRenderer
          offsetSpace="small"
          trigger={(triggerProps, { open }) => (
            <Box userSelect="none" cursor="pointer" {...triggerProps}>
              <Text>
                Menu{' '}
                <IconChevron
                  direction={open ? 'up' : 'down'}
                  alignY="lowercase"
                />
              </Text>
            </Box>
          )}
        >
          <MenuItemCheckbox
            checked={getState('checked1')}
            onChange={setState('checked1')}
          >
            Checkbox
          </MenuItemCheckbox>
          <MenuItemCheckbox
            checked={getState('checked2')}
            onChange={setState('checked2')}
          >
            Checkbox
          </MenuItemCheckbox>
          <MenuItemCheckbox
            checked={getState('checked3')}
            onChange={setState('checked3')}
          >
            Checkbox
          </MenuItemCheckbox>
        </MenuRenderer>
      </Inline>,
    ),
  description: (
    <Text>
      For use within menu components, e.g.{' '}
      <TextLink href="/components/OverflowMenu">OverflowMenu</TextLink>,{' '}
      <TextLink href="/components/MenuRenderer">MenuRenderer</TextLink>.
    </Text>
  ),
  accessibility: (
    <Text>
      Follows the{' '}
      <TextLink href="https://www.w3.org/WAI/ARIA/apg/patterns/menu/">
        WAI-ARIA Menu Pattern.
      </TextLink>
    </Text>
  ),
  alternatives: [
    {
      name: 'MenuItem',
      description: 'For displaying buttons and links within a menu.',
    },
    {
      name: 'MenuItemDivider',
      description: 'For creating groups within a menu.',
    },
  ],
  additional: [
    {
      label: 'Badge support',
      description: (
        <Text>
          Add a <TextLink href="/components/Badge">Badge</TextLink> alongside
          the label of the menu item using the <Strong>badge</Strong> prop.
        </Text>
      ),
      Example: ({ getState, setState }) =>
        source(
          <Inline space="none">
            <MenuRenderer
              offsetSpace="small"
              trigger={(triggerProps, { open }) => (
                <Box userSelect="none" cursor="pointer" {...triggerProps}>
                  <Text>
                    Menu{' '}
                    <IconChevron
                      direction={open ? 'up' : 'down'}
                      alignY="lowercase"
                    />
                  </Text>
                </Box>
              )}
            >
              <MenuItemCheckbox
                checked={getState('checked1')}
                onChange={setState('checked1')}
              >
                Checkbox
              </MenuItemCheckbox>
              <MenuItemCheckbox
                checked={getState('checked2')}
                onChange={setState('checked2')}
                badge={
                  <Badge tone="promote" weight="strong">
                    Badge
                  </Badge>
                }
              >
                Checkbox
              </MenuItemCheckbox>
              <MenuItemCheckbox
                checked={getState('checked3')}
                onChange={setState('checked3')}
              >
                Checkbox
              </MenuItemCheckbox>
            </MenuRenderer>
          </Inline>,
        ),
    },
    {
      label: 'Data attributes',
      description: (
        <>
          <Text>
            Braid components are very explicit about the properties they accept,
            which makes providing arbitrary{' '}
            <TextLink href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes">
              data attributes
            </TextLink>{' '}
            not possible. Instead, all Braid components accept a{' '}
            <Strong>data</Strong> prop, allowing a single collection of data
            attributes to be provided.
          </Text>
        </>
      ),
      code: `
        <MenuItemCheckbox
          data={{ testid: 'menu-item-checkbox-1' }}
          // => data-testid="menu-item-checkbox-1"
        >
          ...
        </MenuItemCheckbox>
      `,
    },
  ],
};

export default docs;
