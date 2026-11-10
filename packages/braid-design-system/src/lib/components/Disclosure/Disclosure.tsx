import assert from 'assert';

import { useContext, useLayoutEffect, type FC, type ReactNode } from 'react';

import type { ResponsiveSpace } from '../../css/atoms/atoms';
import { Box } from '../Box/Box';
import HeadingContext from '../Heading/HeadingContext';
import { Text, type TextProps } from '../Text/Text';
import { TextContext } from '../Text/TextContext';
import {
  type TextLinkButtonProps,
  TextLinkButton,
} from '../TextLinkButton/TextLinkButton';
import { IconChevron } from '../icons';
import { AvoidWidowIcon } from '../private/AvoidWidowIcon/AvoidWidowIcon';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';
import { DefaultTextPropsProvider } from '../private/defaultTextProps';
import { useCollapsibleHeight } from '../private/useCollapsibleHeight';

import { type UseDisclosureProps, useDisclosure } from './useDisclosure';

import * as styles from './Disclosure.css';

export interface DisclosureBaseProps {
  expandLabel: string;
  collapseLabel?: string;
  space?: ResponsiveSpace;
  size?: TextProps['size'];
  weight?: TextLinkButtonProps['weight'];
  data?: DataAttributeMap;
  children: ReactNode;
}
export type DisclosureProps = DisclosureBaseProps & UseDisclosureProps;
export type { DisclosureStateProps } from './useDisclosure';

const defaultSpaceForSize: Record<
  NonNullable<DisclosureProps['size']>,
  ResponsiveSpace
> = {
  large: 'medium',
  standard: 'medium',
  xsmall: 'small',
  small: 'small',
};

export const Disclosure: FC<DisclosureProps> = ({
  id,
  expandLabel,
  collapseLabel = expandLabel,
  space,
  size: sizeProp,
  children,
  data,
  weight,
  ...restProps
}) => {
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

  assert(
    typeof sizeProp === 'undefined' || !isInline,
    `Specifying a custom \`size\` for a \`Disclosure\` inside the context of a \`<${
      textContext ? 'Text' : 'Heading'
    }>\` component is invalid. See the documentation for correct usage: https://seek-oss.github.io/braid-design-system/components/Disclosure`,
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

  const {
    contentRef,
    contentSizeRef,
    isAnimating,
    contentStyle,
    finishHeightTransition,
    className,
    innerClassName,
  } = useCollapsibleHeight({
    expanded,
    fromDisplayNone: true,
    // Grid is `display: grid` on a `span` and would split the line for the
    // whole tween. Instant `display: none` keeps "After" on the same line.
    animate: !isInline,
  });

  useLayoutEffect(() => {
    // Remove in favour of direct DOM attribute when we drop React 18 support
    contentRef.current?.toggleAttribute('inert', !expanded);
  }, [contentRef, expanded]);

  const size = sizeProp ?? textContext?.size ?? 'standard';
  const defaultSpace = isInline
    ? /*
       * If inline, only use `xxsmall` space between the trigger and the content
       * to compensate for the additional space created by the line height of text.
       */
      'xxsmall'
    : defaultSpaceForSize[size];

  const trigger = (
    <TextLinkButton hitArea="large" weight={weight} {...buttonProps}>
      {expanded ? collapseLabel : expandLabel}
      <AvoidWidowIcon iconPosition="trailing">
        <IconChevron
          direction={expanded ? 'down' : 'right'}
          alignY="lowercase"
        />
      </AvoidWidowIcon>
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
        {isInline ? <> {trigger}</> : <Text size={size}>{trigger}</Text>}
      </Box>
      <Box
        component={component}
        className={[
          className,
          { [styles.hideWhenClosed]: !expanded && !isAnimating },
        ]}
        style={contentStyle}
        onTransitionEnd={finishHeightTransition}
        aria-hidden={expanded ? undefined : true}
        ref={contentRef}
        {...contentProps}
      >
        <Box component={component} className={innerClassName}>
          <Box
            component={component}
            paddingTop={space ?? defaultSpace}
            ref={contentSizeRef}
          >
            {isInline ? (
              children
            ) : (
              <DefaultTextPropsProvider size={size}>
                {children}
              </DefaultTextPropsProvider>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
