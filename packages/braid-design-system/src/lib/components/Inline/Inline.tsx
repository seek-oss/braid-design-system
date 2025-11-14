import assert from 'tiny-invariant';

import type { ResponsiveSpace } from '../../css/atoms/atoms';
import {
  type CollapsibleAlignmentProps,
  resolveCollapsibleAlignmentProps,
} from '../../utils/collapsibleAlignmentProps';
import { Box } from '../Box/Box';
import type { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';

import * as styles from './Inline.css';

export const validInlineComponents = [
  'div',
  'span',
  'p',
  'nav',
  'ul',
  'ol',
  'li',
] as const;

export type InlineProps = CollapsibleAlignmentProps & {
  space: ResponsiveSpace;
  component?: (typeof validInlineComponents)[number];
  data?: DataAttributeMap;
  children: ReactNodeNoStrings;
};

export const Inline = ({
  space = 'none',
  align,
  alignY,
  collapseBelow,
  reverse = false,
  component = 'div',
  data,
  children,
  ...restProps
}: InlineProps) => {
  assert(
    !reverse || (reverse && collapseBelow),
    'The `reverse` prop should only be applied in combination with the `collapseBelow` prop.\nIf you do not want to collapse responsively, it is recommended to reorder the content directly.\n\nSee documentation for details: https://seek-oss.github.io/braid-design-system/components/Inline#reversing-the-order',
  );

  const {
    collapseMobile,
    collapseTablet,
    collapseDesktop,
    collapsibleAlignmentProps,
  } = resolveCollapsibleAlignmentProps({
    align,
    alignY,
    collapseBelow,
    reverse,
    inlineItems: true,
  });

  return (
    <Box
      component={component}
      {...collapsibleAlignmentProps}
      gap={space}
      flexWrap="wrap"
      className={
        collapseBelow
          ? {
              [styles.fitContentMobile]: !collapseMobile,
              [styles.fitContentTablet]: !collapseTablet,
              [styles.fitContentDesktop]: !collapseDesktop,
              [styles.fitContentWide]: true,
            }
          : styles.fitContentMobile
      }
      {...buildDataAttributes({ data, validateRestProps: restProps })}
    >
      {children}
    </Box>
  );
};
