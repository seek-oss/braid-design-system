import type { ReactNode } from 'react';
import React, { useContext } from 'react';
import assert from 'assert';
import { Box } from '../Box/Box';
import type { ResponsiveSpace } from '../../css/atoms/atoms';
import { Text } from '../Text/Text';
import type { TextLinkButtonProps } from '../TextLinkButton/TextLinkButton';
import { TextLinkButton } from '../TextLinkButton/TextLinkButton';
import { IconChevron } from '../icons';
import type { UseDisclosureProps } from './useDisclosure';
import { useDisclosure } from './useDisclosure';
import type { DataAttributeMap } from '../private/buildDataAttributes';
import buildDataAttributes from '../private/buildDataAttributes';
import { TextContext } from '../Text/TextContext';
import HeadingContext from '../Heading/HeadingContext';

import * as styles from './Disclosure.css';

export type DisclosureBaseProps = {
  expandLabel: string;
  collapseLabel?: string;
  space?: ResponsiveSpace;
  weight?: TextLinkButtonProps['weight'];
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
  weight,
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

  const textContext = useContext(TextContext);
  const headingContext = useContext(HeadingContext);
  const isInline = Boolean(textContext || headingContext);

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

  const trigger = (
    <TextLinkButton hitArea="large" weight={weight} {...buttonProps}>
      {expanded ? collapseLabel : expandLabel}
      <Box
        component="span"
        paddingLeft="xxsmall"
        className={styles.nowrap}
        aria-hidden
      >
        {
          '⁠' /* Word joiner character, a zero-width non-breaking character to prevent the chevron wrapping onto its own line */
        }
        <IconChevron direction={expanded ? 'up' : 'down'} alignY="lowercase" />
      </Box>
    </TextLinkButton>
  );
  const component = isInline ? 'span' : 'div';

  return (
    <Box
      component={component}
      display={isInline ? 'inline' : undefined}
      {...buildDataAttributes({ data, validateRestProps: restProps })}
    >
      <Box
        component={component}
        display={isInline ? 'inline' : undefined}
        userSelect="none"
      >
        {isInline ? <> {trigger}</> : <Text>{trigger}</Text>}
      </Box>
      <Box
        component={component}
        paddingTop={space}
        display={expanded ? 'block' : 'none'}
        {...contentProps}
      >
        {children}
      </Box>
    </Box>
  );
};
