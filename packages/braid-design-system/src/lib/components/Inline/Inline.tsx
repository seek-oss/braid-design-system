import React from 'react';

import { Box } from '../Box/Box';
import type { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';
import {
  type CollapsibleAlignmentProps,
  resolveCollapsibleAlignmentProps,
} from '../../utils/collapsibleAlignmentProps';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';

import * as styles from './Inline.css';
import { resolveResponsiveRangeProps } from '../../utils/resolveResponsiveRangeProps';
import {
  normalizeResponsiveValue,
  type OptionalResponsiveValue,
} from '../../css/atoms/sprinkles.css';
import { type AlignY, alignYToFlexAlign } from '../../utils/align';
import { optimizeResponsiveArray } from '../../utils/optimizeResponsiveArray';

export const validInlineComponents = [
  'div',
  'span',
  'p',
  'nav',
  'ul',
  'ol',
  'li',
] as const;

export interface InlineProps extends CollapsibleAlignmentProps {
  alignY?: OptionalResponsiveValue<AlignY>;
  component?: (typeof validInlineComponents)[number];
  data?: DataAttributeMap;
  children: ReactNodeNoStrings;
}

export const Inline = ({
  space = 'none',
  align,
  alignY,
  collapseBelow,
  reverse,
  component = 'div',
  data,
  children,
  ...restProps
}: InlineProps) => {
  const collapsibleAlignmentProps = resolveCollapsibleAlignmentProps({
    space,
    align,
    collapseBelow,
    reverse,
  });

  const [collapseMobile, collapseTablet, collapseDesktop, collapseWide] =
    resolveResponsiveRangeProps({
      below: collapseBelow,
    });

  const defaultAlignY = alignYToFlexAlign(alignY) || 'flexStart';
  const normalizedAlignY = normalizeResponsiveValue(defaultAlignY);
  const {
    mobile: alignItemsMobile = 'flexStart',
    tablet: alignItemsTablet = alignItemsMobile,
    desktop: alignItemsDesktop = alignItemsTablet,
    wide: alignItemsWide = alignItemsDesktop,
  } = normalizedAlignY;

  return (
    <Box
      component={component}
      {...collapsibleAlignmentProps}
      alignItems={
        collapseBelow
          ? optimizeResponsiveArray([
              collapseMobile ? 'stretch' : alignItemsMobile,
              collapseTablet ? 'stretch' : alignItemsTablet,
              collapseDesktop ? 'stretch' : alignItemsDesktop,
              alignItemsWide,
            ])
          : defaultAlignY
      }
      flexWrap="wrap"
      className={
        collapseBelow
          ? {
              [styles.fitContentMobile]: !collapseMobile,
              [styles.fitContentTablet]: !collapseTablet,
              [styles.fitContentDesktop]: !collapseDesktop,
              [styles.fitContentWide]: !collapseWide,
            }
          : styles.fitContentMobile
      }
      {...buildDataAttributes({ data, validateRestProps: restProps })}
    >
      {children}
    </Box>
  );
};
