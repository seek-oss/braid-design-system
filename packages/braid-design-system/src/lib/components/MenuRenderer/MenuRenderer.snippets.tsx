import type { Snippets } from '../private/Snippets';
import {
  MenuRenderer,
  MenuItem,
  MenuItemLink,
  Box,
  Text,
  IconChevron,
  Placeholder,
  IconList,
  ButtonIcon,
} from '../../playroom/components';
import source from '@braid-design-system/source.macro';

export const snippets: Snippets = [
  {
    name: 'Standard',
    code: source(
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
  },
  {
    name: 'Small',
    code: source(
      <MenuRenderer
        size="small"
        offsetSpace="xsmall"
        trigger={(triggerProps, { open }) => (
          <Box userSelect="none" cursor="pointer" {...triggerProps}>
            <Text size="small">
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
  },
  {
    name: 'With ButtonIcon',
    code: source(
      <MenuRenderer
        offsetSpace="small"
        trigger={(triggerProps) => (
          <ButtonIcon
            icon={<IconList />}
            id="buttonicon-menurenderer"
            label="Menu"
            {...triggerProps}
          />
        )}
      >
        <MenuItem onClick={() => {}}>Button</MenuItem>
        <MenuItemLink href="#">Link</MenuItemLink>
      </MenuRenderer>,
    ),
  },
  {
    name: 'Small with ButtonIcon',
    code: source(
      <MenuRenderer
        size="small"
        offsetSpace="xxsmall"
        trigger={(triggerProps) => (
          <Box userSelect="none" cursor="pointer" {...triggerProps}>
            <ButtonIcon
              size="small"
              icon={<IconList />}
              id="small-buttonicon-menurenderer"
              label="Menu"
            />
          </Box>
        )}
      >
        <MenuItem onClick={() => {}}>Button</MenuItem>
        <MenuItemLink href="#">Link</MenuItemLink>
      </MenuRenderer>,
    ),
  },
  {
    name: 'With Placeholder',
    code: source(
      <MenuRenderer
        offsetSpace="small"
        trigger={(triggerProps) => (
          <Box userSelect="none" cursor="pointer" {...triggerProps}>
            <Placeholder height={50} label="Menu Trigger" />
          </Box>
        )}
      >
        <MenuItem onClick={() => {}}>Button</MenuItem>
        <MenuItemLink href="#">Link</MenuItemLink>
      </MenuRenderer>,
    ),
  },
];
