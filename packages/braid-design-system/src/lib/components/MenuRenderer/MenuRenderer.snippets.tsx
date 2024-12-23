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
} from '../../playroom/components';
import source from '@braid-design-system/source.macro';
import { ButtonIcon } from '../ButtonIcon/ButtonIcon';

export const snippets: Snippets = [
  {
    name: 'Text trigger',
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
    name: 'Small Text trigger',
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
    name: 'ButtonIcon trigger',
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
    name: 'Small ButtonIcon trigger',
    code: source(
      <MenuRenderer
        size="small"
        offsetSpace="xxsmall"
        trigger={(triggerProps) => (
          <ButtonIcon
            size="small"
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
    name: 'Placeholder trigger',
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
