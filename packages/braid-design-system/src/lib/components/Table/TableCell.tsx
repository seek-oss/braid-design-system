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
  TableFooterContext,
  TableHeaderContext,
  TableRowContext,
} from './TableContext';
import { Inline } from '../Inline/Inline';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';

import * as styles from './Table.css';

type Percentage = `${number}%`;
interface CellProps {
  children: ReactNode;
  hideBelow?: ResponsiveRangeProps['below'];
  hideAbove?: ResponsiveRangeProps['above'];
  align?: 'left' | 'right' | 'center';
  wrap?: boolean;
  width?: 'content' | 'auto' | Percentage;
  minWidth?: number;
  maxWidth?: number;
  colspan?: number;
  data?: DataAttributeMap;
}
interface BaseCellProps {
  header?: boolean;
  selected?: boolean;
  scope?: 'col' | 'row';
}

const resolveSoftWidth = (width: CellProps['width']) => {
  // Small as possible, receive least amount of available space
  if (width === 'content') {
    return '1%';
  }
  // Yield to the CSS Table Layout algorithm to balance the column
  // width based on longest cell content, distributing excess
  // available space.
  if (width === 'auto') {
    return undefined;
  }

  return width;
};

const Cell = ({
  header: isHeaderCell,
  selected,
  children,
  hideAbove,
  hideBelow,
  align = 'left',
  wrap = false,
  width = 'auto',
  minWidth,
  maxWidth,
  colspan,
  scope,
  data,
  ...restProps
}: CellProps & BaseCellProps) => {
  const [hideOnMobile, hideOnTablet, hideOnDesktop, hideOnWide] =
    resolveResponsiveRangeProps({
      below: hideBelow,
      above: hideAbove,
    });

  const tableFooterContext = useContext(TableFooterContext);
  const tableContext = useContext(TableContext);

  assert(tableContext, 'TableCell cannot be used outside a Table component');

  const isFooterCell = tableFooterContext;

  const softWidth = resolveSoftWidth(width);
  const hasMaxWidth = typeof maxWidth !== 'undefined';
  const selectedBackground = selected ? 'formAccentSoft' : undefined;

  const resolvedHeaderRole = scope === 'row' ? 'rowheader' : 'columnheader';
  const resolvedRole = isHeaderCell ? resolvedHeaderRole : 'gridcell';

  return (
    <Box
      component={isHeaderCell ? 'th' : 'td'}
      role={tableContext.selectionMode ? resolvedRole : undefined}
      scope={scope}
      colSpan={colspan}
      padding="small"
      textAlign={align}
      background={isHeaderCell ? 'neutralLight' : selectedBackground}
      display={{
        mobile: hideOnMobile ? 'none' : undefined,
        tablet: hideOnTablet ? 'none' : undefined,
        desktop: hideOnDesktop ? 'none' : undefined,
        wide: hideOnWide ? 'none' : undefined,
      }}
      className={{
        [styles.cell]: true,
        [styles.nowrap]: !wrap,
        [styles.softWidth]: softWidth,
        [styles.minWidth]: typeof minWidth !== 'undefined',
        [styles.maxWidth]: hasMaxWidth,
        [styles.alignYCenter]: tableContext.alignY === 'center',
        [styles.showOnTablet]: !hideOnTablet && hideOnMobile,
        [styles.showOnDesktop]:
          !hideOnDesktop && (hideOnTablet || hideOnMobile),
        [styles.showOnWide]:
          !hideOnWide && (hideOnDesktop || hideOnTablet || hideOnMobile),
      }}
      style={assignInlineVars({
        [styles.softWidthVar]: softWidth,
        [styles.minWidthVar]:
          typeof minWidth !== 'undefined' ? `${minWidth}px` : undefined,
        [styles.maxWidthVar]:
          typeof maxWidth !== 'undefined' ? `${maxWidth}px` : undefined,
      })}
      {...buildDataAttributes({ data, validateRestProps: restProps })}
    >
      <DefaultTextPropsProvider
        size="small"
        weight={isHeaderCell || isFooterCell ? 'strong' : undefined}
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

export const TableCell = (props: CellProps) => {
  const tableHeaderContext = useContext(TableHeaderContext);
  const tableRowContext = useContext(TableRowContext);

  assert(
    !tableHeaderContext,
    'TableCell cannot be used inside a TableHeader component. Please use TableHeadCell instead.',
  );

  assert(
    tableRowContext,
    'TableCell cannot be used outside a TableRow component',
  );

  return (
    <Cell
      {...props}
      selected={tableRowContext.selected}
      header={false}
      scope={undefined}
    />
  );
};

export const TableHeadCell = (props: CellProps) => {
  const tableHeaderContext = useContext(TableHeaderContext);
  const tableRowContext = useContext(TableRowContext);

  assert(
    tableRowContext,
    'TableHeadCell cannot be used outside a TableRow component',
  );

  return (
    <Cell {...props} header={true} scope={tableHeaderContext ? 'col' : 'row'} />
  );
};
