import type { ReactNode } from 'react';
import React from 'react';
import assert from 'assert';
import { Box } from '../Box/Box';
import type { ResponsiveSpace } from '../../css/atoms/atoms';
import { Text } from '../Text/Text';
import { TextLinkButton } from '../TextLinkButton/TextLinkButton';
import { IconChevron } from '../icons';
import type { UseDisclosureProps } from './useDisclosure';
import { useDisclosure } from './useDisclosure';
import type { DataAttributeMap } from '../private/buildDataAttributes';
import buildDataAttributes from '../private/buildDataAttributes';

export type DisclosureBaseProps = {
  expandLabel: string;
  collapseLabel?: string;
  space?: ResponsiveSpace;
  data?: DataAttributeMap;
  children: ReactNode;
};
export type DisclosureProps = DisclosureBaseProps & UseDisclosureProps;
export type { DisclosureStateProps } from './useDisclosure';

export const Disclosure = ({
  id,
  expandLabel,
  collapseLabel = expandLabel,
  space = 'medium',
  children,
  data,
  ...restProps
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
    ...(restProps.expanded !== undefined
      ? {
          onToggle: restProps.onToggle,
          expanded: restProps.expanded,
        }
      : {
          onToggle: restProps.onToggle,
        }),
  });

  return (
    <Box {...(data ? buildDataAttributes(data) : undefined)}>
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
