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
  // TableCellIndexContext,
  TableContext,
  TableHeaderContext,
  TableRowContext,
} from './TableContext';
import { Inline } from '../Inline/Inline';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';

import * as styles from './Table.css';

interface TableCellProps {
  header?: boolean;
  children: ReactNode;
  hideBelow?: ResponsiveRangeProps['below'];
  hideAbove?: ResponsiveRangeProps['above'];
  align?: 'left' | 'right' | 'center';
  wrap?: boolean;
  nowrap?: boolean;
  data?: DataAttributeMap;
  width?: 'content' | 'auto' | string; // percentage only
  minWidth?: number;
  maxWidth?: number;
}
export const TableCell = ({
  header,
  children,
  hideAbove,
  hideBelow,
  align = 'left',
  wrap,
  nowrap = true,
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
  // const tableCellIndexContext = useContext(TableCellIndexContext);

  assert(
    tableRowContext,
    'TableCell cannot be used outside a TableRow component',
  );

  assert(tableContext, 'TableCell cannot be used outside a Table component');

  const isHeaderCell =
    typeof header !== 'undefined' ? header : tableHeaderContext;

  // const width = tableContext.columnWidths[tableCellIndexContext];
  // const preventWrapping =
  //   typeof nowrap !== 'undefined'
  //     ? nowrap
  //     : !isHeaderCell && (!width || width === 'auto');

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
        // [styles.nowrap]: preventWrapping,
        [styles.nowrap]: nowrap, // !wrap,
        // [styles.contentWidth]: width === 'content',
        [styles.fixedWidth]: width && width !== 'auto',
        [styles.minWidth]: typeof minWidth !== 'undefined',
        [styles.maxWidth]: typeof maxWidth !== 'undefined',
        [styles.alignYCenter]: tableContext.alignY === 'center',
        [styles.borderBottom]: true,
        [styles.showOnTablet]: !hideOnTablet && hideOnMobile,
        [styles.showOnDesktop]:
          !hideOnDesktop && (hideOnTablet || hideOnMobile),
        [styles.showOnWide]:
          !hideOnWide && (hideOnDesktop || hideOnTablet || hideOnMobile),
      }}
      style={
        // width ? { width: width === 'content' ? '1%' : width } : undefined
        {
          ...(width !== 'auto'
            ? assignInlineVars({
                [styles.fixedWidthVar]: width === 'content' ? '1%' : width,
              })
            : undefined),
          ...(typeof minWidth !== 'undefined'
            ? assignInlineVars({
                [styles.minWidthVar]: `${minWidth}px`,
              })
            : undefined),
          ...(typeof maxWidth !== 'undefined'
            ? assignInlineVars({
                [styles.maxWidthVar]: `${maxWidth}px`,
              })
            : undefined),
        }
      }
      {...buildDataAttributes({ data, validateRestProps: restProps })}
    >
      <DefaultTextPropsProvider
        size="small"
        weight={isHeaderCell ? 'strong' : undefined}
        maxLines={width !== 'auto' && nowrap ? 1 : undefined}
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
