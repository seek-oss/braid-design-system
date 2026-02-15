import source from '@braid-design-system/source.macro';

import {
  MenuRenderer,
  MenuItem,
  MenuItemLink,
  Box,
  Text,
  IconChevron,
  Placeholder,
  ButtonIcon,
  IconEdit,
} from '../../playroom/components';
import type { Snippets } from '../private/Snippets';

export const snippets: Snippets = [
  {
    description: 'Standard',
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
    description: 'Small',
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
    description: 'With ButtonIcon',
    code: source(
      <MenuRenderer
        offsetSpace="small"
        trigger={(triggerProps) => (
          <ButtonIcon icon={<IconEdit />} label="Menu" {...triggerProps} />
        )}
      >
        <MenuItem onClick={() => {}}>Button</MenuItem>
        <MenuItemLink href="#">Link</MenuItemLink>
      </MenuRenderer>,
    ),
  },
  {
    description: 'Small with ButtonIcon',
    code: source(
      <MenuRenderer
        size="small"
        offsetSpace="xxsmall"
        trigger={(triggerProps) => (
          <Box userSelect="none" cursor="pointer" {...triggerProps}>
            <ButtonIcon size="small" icon={<IconEdit />} label="Menu" />
          </Box>
        )}
      >
        <MenuItem onClick={() => {}}>Button</MenuItem>
        <MenuItemLink href="#">Link</MenuItemLink>
      </MenuRenderer>,
    ),
  },
  {
    description: 'With Placeholder',
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
