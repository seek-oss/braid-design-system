import React, { ReactNode } from 'react';
import assert from 'assert';
import { Box } from '../Box/Box';
import { Columns } from '../Columns/Columns';
import { Column } from '../Column/Column';
import { Heading } from '../Heading/Heading';
import { IconChevron } from '../icons';
import {
  useDisclosure,
  UseDisclosureProps,
  DisclosureStateProps,
} from '../Disclosure/useDisclosure';

import { useVirtualTouchable } from '../private/touchable/useVirtualTouchable';
import { hideFocusRingsClassName } from '../private/hideFocusRings/hideFocusRings';
import { Overlay } from '../private/Overlay/Overlay';
import * as styles from './AccordionItem.css';

const accordionSpace = 'large';

export type AccordionItemBaseProps = {
  label: string;
  children: ReactNode;
};

export type AccordionItemProps = AccordionItemBaseProps & UseDisclosureProps;
export type AccordionItemStateProps = DisclosureStateProps;

export const AccordionItem = ({
  id,
  label,
  children,
  ...restProps
}: AccordionItemProps) => {
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
                <Heading component="div" level="4">
                  {label}
                </Heading>
              </Column>
              <Column width="content">
                <Heading component="div" level="4">
                  <IconChevron
                    tone="secondary"
                    direction={expanded ? 'up' : 'down'}
                  />
                </Heading>
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
