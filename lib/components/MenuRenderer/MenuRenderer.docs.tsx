import React from 'react';
import source from '../../utils/source.macro';
import { ComponentDetails } from '../../../site/src/types';
import {
  Box,
  MenuRenderer,
  MenuItem,
  MenuItemLink,
  Text,
  Stack,
  IconChevron,
  TextLink,
  Strong,
} from '..';

const docs: ComponentDetails = {
  category: 'Content',
  Example: () =>
    source(
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
        <MenuItem onClick={() => {}}>Button</MenuItem>
        <MenuItemLink href="#">Link</MenuItemLink>
      </MenuRenderer>,
    ),
  description: (
    <Stack space="large">
      <Text>
        This component allows you to attach standard menu interactions to a
        custom trigger element, e.g.{' '}
        <TextLink href="/components/OverflowMenu">OverflowMenu</TextLink> uses
        this internally. This should only be used if standard alternatives
        aren’t suitable.
      </Text>
    </Stack>
  ),
  accessibility: (
    <Text>
      Follows the{' '}
      <TextLink href="https://www.w3.org/TR/wai-aria-practices-1.1/#menu">
        WAI-ARIA Menu Pattern.
      </TextLink>
    </Text>
  ),
  alternatives: [
    {
      name: 'OverflowMenu',
      description: 'For displaying a list of secondary actions.',
    },
  ],
  additional: [
    {
      label: 'Alignment',
      description: (
        <Text>
          The menu is left-aligned by default, but this can be customised via
          the <Strong>align</Strong> prop.
        </Text>
      ),
      Example: () =>
        source(
          <Box style={{ paddingLeft: '40px', maxWidth: '220px' }}>
            <MenuRenderer
              align="right"
              offsetSpace="small"
              trigger={(triggerProps, { open }) => (
                <Box userSelect="none" cursor="pointer" {...triggerProps}>
                  <Text>
                    Right aligned{' '}
                    <IconChevron
                      direction={open ? 'up' : 'down'}
                      alignY="lowercase"
                    />
                  </Text>
                </Box>
              )}
            >
              <MenuItem onClick={() => {}}>Button</MenuItem>
              <MenuItemLink href="#">Link</MenuItemLink>
            </MenuRenderer>
          </Box>,
        ),
    },
    {
      label: 'Spacing',
      description: (
        <Text>
          The space between the menu and the trigger element can be customised
          via the <Strong>offsetSpace</Strong> prop, which also accepts an array
          of responsive values.
        </Text>
      ),
      Example: () =>
        source(
          <MenuRenderer
            offsetSpace={['xsmall', 'small']}
            trigger={(triggerProps, { open }) => (
              <Box userSelect="none" cursor="pointer" {...triggerProps}>
                <Text>
                  Custom space{' '}
                  <IconChevron
                    direction={open ? 'up' : 'down'}
                    alignY="lowercase"
                  />
                </Text>
              </Box>
            )}
          >
            <MenuItem onClick={() => {}}>Button</MenuItem>
            <MenuItemLink href="#">Link</MenuItemLink>
          </MenuRenderer>,
        ),
    },
    {
      label: 'Development considerations',
      description: (
        <>
          <Text>
            The <Strong>trigger</Strong> element must accept generic DOM
            properties including event handlers and aria properties.
          </Text>
          <Text>
            Child nodes must be{' '}
            <TextLink href="/components/MenuItem">MenuItem</TextLink>,{' '}
            <TextLink href="/components/MenuItemCheckbox">
              MenuItemCheckbox
            </TextLink>{' '}
            or{' '}
            <TextLink href="/components/MenuItemDivider">
              MenuItemDivider
            </TextLink>{' '}
            elements.
          </Text>
        </>
      ),
    },
  ],
};

export default docs;
