import React, { useState, ReactNode } from 'react';
import { useStyles } from 'sku/react-treat';
import assert from 'assert';
import { Box, Columns, Column, Heading, IconChevron } from '../';
import { AllOrNone } from '../private/AllOrNone';
import { useVirtualTouchable } from '../private/touchable/useVirtualTouchable';
import { hideFocusRingsClassName } from '../private/hideFocusRings/hideFocusRings';
import { Overlay } from '../private/Overlay/Overlay';
import * as styleRefs from './AccordionItem.treat';

const accordionSpace = 'large';

export type AccordionItemBaseProps = {
  id: string;
  label: string;
  children: ReactNode;
};

export type AccordionItemStateProps = AllOrNone<{
  expanded?: boolean;
  onToggle: (expanded: boolean) => void;
}>;

export type AccordionItemProps = AccordionItemBaseProps &
  AccordionItemStateProps;

export const AccordionItem = ({
  id,
  label,
  expanded: expandedProp,
  onToggle,
  children,
}: AccordionItemProps) => {
  const styles = useStyles(styleRefs);

  assert(
    typeof label === 'undefined' || typeof label === 'string',
    'Label must be a string',
  );

  const [expandedFallback, setExpandedFallback] = useState(false);
  const expanded = expandedProp ?? expandedFallback;

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
          aria-controls={id}
          aria-expanded={expanded}
          onClick={() => {
            const newValue = !expanded;

            if (expandedProp === undefined) {
              setExpandedFallback(newValue);
            }

            if (typeof onToggle === 'function') {
              onToggle(newValue);
            }
          }}
        >
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
        <Overlay
          boxShadow="outlineFocus"
          borderRadius="standard"
          transition="fast"
          className={[styles.focusRing, hideFocusRingsClassName]}
        />
      </Box>
      <Box
        id={id}
        paddingTop={accordionSpace}
        display={expanded ? 'block' : 'none'}
      >
        {children}
      </Box>
    </Box>
  );
};
