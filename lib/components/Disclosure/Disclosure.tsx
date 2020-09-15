import React, { ReactNode } from 'react';
import assert from 'assert';
import { Box, BoxProps } from '../Box/Box';
import { Text } from '../Text/Text';
import { TextLinkButton } from '../TextLinkButton/TextLinkButton';
import { IconChevron } from '../icons';
import { useDisclosure, UseDisclosureProps } from './useDisclosure';

export type DisclosureBaseProps = {
  expandLabel: string;
  collapseLabel?: string;
  space?: BoxProps['paddingTop'];
  children: ReactNode;
};
export type DisclosureProps = DisclosureBaseProps & UseDisclosureProps;
export type { DisclosureStateProps } from './useDisclosure';

export const Disclosure = ({
  id,
  expandLabel,
  collapseLabel = expandLabel,
  expanded: expandedProp,
  onToggle,
  space = 'medium',
  children,
}: DisclosureProps) => {
  assert(
    typeof expandLabel === 'undefined' || typeof expandLabel === 'string',
    "'expandLabel' must be a string",
  );

  assert(
    typeof collapseLabel === 'undefined' || typeof collapseLabel === 'string',
    "'collapseLabel' must be a string",
  );

  const { expanded, buttonProps, contentProps } = useDisclosure({
    id,
    ...(onToggle ? { onToggle, expanded: expandedProp } : null),
  });

  return (
    <Box>
      <Box userSelect="none">
        <Text>
          <TextLinkButton hitArea="large" {...buttonProps}>
            {expanded ? collapseLabel : expandLabel}
            <Box component="span" paddingLeft="xxsmall">
              <IconChevron
                direction={expanded ? 'up' : 'down'}
                alignY="lowercase"
              />
            </Box>
          </TextLinkButton>
        </Text>
      </Box>
      <Box
        paddingTop={space}
        display={expanded ? 'block' : 'none'}
        {...contentProps}
      >
        {children}
      </Box>
    </Box>
  );
};
