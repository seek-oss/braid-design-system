import React, {
  type ReactElement,
  type ReactNode,
  cloneElement,
  useContext,
} from 'react';
import assert from 'assert';
import { Box } from '../Box/Box';
import { type TextProps, Text } from '../Text/Text';
import { Columns } from '../Columns/Columns';
import { Column } from '../Column/Column';
import type { BadgeProps } from '../Badge/Badge';
import { IconChevron } from '../icons';
import {
  type UseDisclosureProps,
  type DisclosureStateProps,
  useDisclosure,
} from '../Disclosure/useDisclosure';

import { hideFocusRingsClassName } from '../private/hideFocusRings/hideFocusRings';
import { Overlay } from '../private/Overlay/Overlay';
import {
  type AccordionContextValue,
  AccordionContext,
  validTones,
} from './AccordionContext';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';
import { badgeSlotSpace } from '../private/badgeSlotSpace';
import * as styles from './AccordionItem.css';

const itemSpaceForSize = {
  xsmall: 'small',
  small: 'medium',
  standard: 'medium',
  large: 'large',
} as const;

export interface AccordionItemBaseProps {
  label: string;
  children: ReactNode;
  size?: TextProps['size'];
  tone?: AccordionContextValue['tone'];
  weight?: AccordionContextValue['weight'];
  icon?: TextProps['icon'];
  data?: DataAttributeMap;
  badge?: ReactElement<BadgeProps>;
}

export type AccordionItemProps = AccordionItemBaseProps & UseDisclosureProps;
export type AccordionItemStateProps = DisclosureStateProps;

export const AccordionItem = ({
  id,
  label,
  children,
  badge,
  size: sizeProp,
  tone: toneProp,
  weight: weightProp,
  icon,
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
    !(accordionContext && weightProp),
    'Weight cannot be set on AccordionItem when inside Accordion. Weight should be set on Accordion instead.',
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

  assert(
    !icon || (icon.props.size === undefined && icon.props.tone === undefined),
    "Icons cannot set the 'size' or 'tone' prop when passed to an AccordionItem component",
  );

  const size = accordionContext?.size ?? sizeProp ?? 'large';
  const tone = accordionContext?.tone ?? toneProp ?? 'neutral';
  const weight = accordionContext?.weight ?? weightProp ?? 'medium';
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
    <Box {...buildDataAttributes({ data, validateRestProps: restProps })}>
      <Box position="relative" display="flex">
        <Box
          component="button"
          type="button"
          cursor="pointer"
          className={styles.button}
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
          <Box component="span" position="relative">
            <Columns component="span" space={itemSpace}>
              <Column>
                <Text size={size} weight={weight} tone={tone} icon={icon}>
                  {badge ? (
                    <Box component="span" paddingRight={badgeSlotSpace}>
                      {label}
                    </Box>
                  ) : (
                    label
                  )}
                  {badge ? cloneElement(badge, {}) : null}
                </Text>
              </Column>
              <Column width="content">
                <Text
                  size={size}
                  weight={weight}
                  tone={tone === 'neutral' ? 'secondary' : tone}
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
