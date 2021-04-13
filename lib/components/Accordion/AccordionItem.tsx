import React, { ReactNode, useContext } from 'react';
import { useStyles } from 'sku/react-treat';
import assert from 'assert';
import { Box } from '../Box/Box';
import { Text, TextProps } from '../Text/Text';
import { Columns } from '../Columns/Columns';
import { Column } from '../Column/Column';
import { IconChevron } from '../icons';
import {
  useDisclosure,
  UseDisclosureProps,
  DisclosureStateProps,
} from '../Disclosure/useDisclosure';

import { useVirtualTouchable } from '../private/touchable/useVirtualTouchable';
import { hideFocusRingsClassName } from '../private/hideFocusRings/hideFocusRings';
import { Overlay } from '../private/Overlay/Overlay';
import { AccordionContext } from './AccordionContext';
import * as styleRefs from './AccordionItem.treat';

const accordionSpaceForSize = {
  xsmall: 'small',
  small: 'medium',
  standard: 'medium',
  large: 'large',
} as const;

export type AccordionItemBaseProps = {
  label: string;
  children: ReactNode;
  size?: TextProps['size'];
  tone?: TextProps['tone'];
};

export type AccordionItemProps = AccordionItemBaseProps & UseDisclosureProps;
export type AccordionItemStateProps = DisclosureStateProps;

export const AccordionItem = ({
  id,
  label,
  children,
  size: sizeProp,
  tone: toneProp,
  ...restProps
}: AccordionItemProps) => {
  const styles = useStyles(styleRefs);

  const accordionContext = useContext(AccordionContext);

  assert(
    !(accordionContext && sizeProp),
    'Size cannot be set on AccordionItem when inside Accordion. Size should be set on Accordion instead.',
  );
  assert(
    !(accordionContext && toneProp),
    'Tone cannot be set on AccordionItem when inside Accordion. Tone should be set on Accordion instead.',
  );

  const size = accordionContext?.size ?? sizeProp ?? 'large';
  const tone = accordionContext?.tone ?? toneProp ?? 'neutral';
  const weight = 'medium';
  const accordionSpace = accordionSpaceForSize[size] ?? 'none';

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
    <Box>
      <Box position="relative" display="flex">
        <Box
          component="button"
          cursor="pointer"
          className={[styles.button, useVirtualTouchable()]}
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
            <Columns space={accordionSpace}>
              <Column>
                <Text size={size} weight={weight} tone={tone} component="div">
                  {label}
                </Text>
              </Column>
              <Column width="content">
                <Text size={size} weight={weight} tone={tone} component="div">
                  <IconChevron
                    tone="secondary"
                    direction={expanded ? 'up' : 'down'}
                  />
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
        paddingTop={accordionSpace}
        display={expanded ? 'block' : 'none'}
        {...contentProps}
      >
        {children}
      </Box>
    </Box>
  );
};
