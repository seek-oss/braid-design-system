import assert from 'assert';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { useContext, type ReactNode } from 'react';
import { Box } from '../Box/Box';
import { DefaultTextPropsProvider } from '../private/defaultTextProps';
import {
  resolveResponsiveRangeProps,
  type ResponsiveRangeProps,
} from '../../utils/resolveResponsiveRangeProps';
import {
  TableContext,
  TableHeaderContext,
  TableRowContext,
} from './TableContext';
import { Inline } from '../Inline/Inline';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';

import * as styles from './Table.css';

type Percentage = `${number}%`;
interface TableCellProps {
  header?: boolean;
  children: ReactNode;
  hideBelow?: ResponsiveRangeProps['below'];
  hideAbove?: ResponsiveRangeProps['above'];
  align?: 'left' | 'right' | 'center';
  wrap?: boolean;
  width?: 'content' | 'auto' | Percentage;
  minWidth?: number;
  maxWidth?: number;
  data?: DataAttributeMap;
}
export const TableCell = ({
  header,
  children,
  hideAbove,
  hideBelow,
  align = 'left',
  wrap = false,
  width = 'auto',
  minWidth,
  maxWidth,
  data,
  ...restProps
}: TableCellProps) => {
  const [hideOnMobile, hideOnTablet, hideOnDesktop, hideOnWide] =
    resolveResponsiveRangeProps({
      below: hideBelow,
      above: hideAbove,
    });

  const tableHeaderContext = useContext(TableHeaderContext);
  const tableRowContext = useContext(TableRowContext);
  const tableContext = useContext(TableContext);

  assert(
    tableRowContext,
    'TableCell cannot be used outside a TableRow component',
  );

  assert(tableContext, 'TableCell cannot be used outside a Table component');

  const isHeaderCell =
    typeof header !== 'undefined' ? header : tableHeaderContext;

  const softWidth = width === 'content' ? '1%' : width;
  const hasMaxWidth = typeof maxWidth !== 'undefined';

  return (
    <Box
      component={isHeaderCell ? 'th' : 'td'}
      scope={tableHeaderContext ? 'col' : 'row'}
      padding="small"
      textAlign={align}
      background={isHeaderCell ? 'neutralLight' : undefined}
      display={{
        mobile: hideOnMobile ? 'none' : undefined,
        tablet: hideOnTablet ? 'none' : undefined,
        desktop: hideOnDesktop ? 'none' : undefined,
        wide: hideOnWide ? 'none' : undefined,
      }}
      className={{
        /**
         * When looking at these styles you'll notice that table's display property
         * has been set to block. While this allows scrolling, the table loses some
         * of its integrity, and table cells try to become as small as possible.
         * To mitigate this issue we've set white-space to nowrap on the <tbody>.
         * However, we don't do this for the <thead> to avoid long titles forcing
         * columns to be wider than they need to be to display the data.
         * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table#displaying_large_tables_in_small_spaces
         */
        [styles.nowrap]: !wrap,
        [styles.softWidth]: width && width !== 'auto',
        [styles.minWidth]: typeof minWidth !== 'undefined',
        [styles.maxWidth]: hasMaxWidth,
        [styles.alignYCenter]: tableContext.alignY === 'center',
        [styles.borderBottom]: true,
        [styles.showOnTablet]: !hideOnTablet && hideOnMobile,
        [styles.showOnDesktop]:
          !hideOnDesktop && (hideOnTablet || hideOnMobile),
        [styles.showOnWide]:
          !hideOnWide && (hideOnDesktop || hideOnTablet || hideOnMobile),
      }}
      style={assignInlineVars({
        [styles.softWidthVar]: width !== 'auto' ? softWidth : undefined,
        [styles.minWidthVar]:
          typeof minWidth !== 'undefined' ? `${minWidth}px` : undefined,
        [styles.maxWidthVar]:
          typeof maxWidth !== 'undefined' ? `${maxWidth}px` : undefined,
      })}
      {...buildDataAttributes({ data, validateRestProps: restProps })}
    >
      <DefaultTextPropsProvider
        size="small"
        weight={isHeaderCell ? 'strong' : undefined}
        maxLines={hasMaxWidth && !wrap ? 1 : undefined}
      >
        {align !== 'left' ? (
          <Inline space="none" align={align}>
            <>{children}</>
          </Inline>
        ) : (
          children
        )}
      </DefaultTextPropsProvider>
    </Box>
  );
};