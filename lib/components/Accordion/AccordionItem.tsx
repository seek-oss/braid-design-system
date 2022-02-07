import React, {
  cloneElement,
  ReactElement,
  ReactNode,
  useContext,
} from 'react';
import assert from 'assert';
import { Box } from '../Box/Box';
import { Text, TextProps } from '../Text/Text';
import { Columns } from '../Columns/Columns';
import { Column } from '../Column/Column';
import { Inline } from '../Inline/Inline';
import { BadgeProps } from '../Badge/Badge';
import { IconChevron } from '../icons';
import {
  useDisclosure,
  UseDisclosureProps,
  DisclosureStateProps,
} from '../Disclosure/useDisclosure';

import { virtualTouchable } from '../private/touchable/virtualTouchable';
import { hideFocusRingsClassName } from '../private/hideFocusRings/hideFocusRings';
import { Overlay } from '../private/Overlay/Overlay';
import {
  AccordionContext,
  AccordionContextValue,
  validTones,
} from './AccordionContext';
import buildDataAttributes, {
  DataAttributeMap,
} from '../private/buildDataAttributes';
import * as styles from './AccordionItem.css';

const itemSpaceForSize = {
  xsmall: 'small',
  small: 'medium',
  standard: 'medium',
  large: 'large',
} as const;

export type AccordionItemBaseProps = {
  label: string;
  children: ReactNode;
  size?: TextProps['size'];
  tone?: AccordionContextValue['tone'];
  data?: DataAttributeMap;
  badge?: ReactElement<BadgeProps>;
};

export type AccordionItemProps = AccordionItemBaseProps & UseDisclosureProps;
export type AccordionItemStateProps = DisclosureStateProps;

export const AccordionItem = ({
  id,
  label,
  children,
  badge,
  size: sizeProp,
  tone: toneProp,
  data,
  ...restProps
}: AccordionItemProps) => {
  const accordionContext = useContext(AccordionContext);

  assert(
    !(accordionContext && sizeProp),
    'Size cannot be set on AccordionItem when inside Accordion. Size should be set on Accordion instead.',
  );
  assert(
    !(accordionContext && toneProp),
    'Tone cannot be set on AccordionItem when inside Accordion. Tone should be set on Accordion instead.',
  );

  assert(
    toneProp === undefined || validTones.includes(toneProp),
    `The 'tone' prop should be one of the following: ${validTones
      .map((x) => `"${x}"`)
      .join(', ')}`,
  );

  assert(
    // @ts-expect-error
    !badge || badge.type.__isBadge__,
    `AccordionItem badge prop can only be an instance of Badge. e.g. <AccordionItem badge={<Badge>New</Badge>}>`,
  );

  assert(
    !badge || badge.props.bleedY === undefined,
    "Badge elements cannot set the 'bleedY' prop when passed to an AccordionItem component",
  );

  const size = accordionContext?.size ?? sizeProp ?? 'large';
  const tone = accordionContext?.tone ?? toneProp ?? 'neutral';
  const weight = 'medium';
  const itemSpace = itemSpaceForSize[size] ?? 'none';

  assert(
    typeof label === 'undefined' || typeof label === 'string',
    'Label must be a string',
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
      <Box position="relative" display="flex">
        <Box
          component="button"
          cursor="pointer"
          className={[styles.button, virtualTouchable()]}
          outline="none"
          width="full"
          textAlign="left"
          {...buttonProps}
        >
          {/*
            This seemingly pointless use of Box makes button overflow visible in Safari.
            If we don't add this, the bottom of the text node is visibly cropped.
            https://stackoverflow.com/questions/41100273/overflowing-button-text-is-being-clipped-in-safari
          */}
          <Box position="relative">
            <Columns space={itemSpace}>
              <Column>
                <Inline space="small" alignY="center">
                  <Text size={size} weight={weight} tone={tone} component="div">
                    {label}
                  </Text>
                  {badge ? cloneElement(badge, { bleedY: true }) : null}
                </Inline>
              </Column>
              <Column width="content">
                <Text
                  size={size}
                  weight={weight}
                  tone={tone === 'neutral' ? 'secondary' : tone}
                  component="div"
                >
                  <IconChevron direction={expanded ? 'up' : 'down'} />
                </Text>
              </Column>
            </Columns>
          </Box>
        </Box>
        <Overlay
          boxShadow="outlineFocus"
          borderRadius="standard"
          transition="fast"
          className={[styles.focusRing, hideFocusRingsClassName]}
        />
      </Box>
      <Box
        paddingTop={itemSpace}
        display={expanded ? 'block' : 'none'}
        {...contentProps}
      >
        {children}
      </Box>
    </Box>
  );
};
