import assert from 'assert';

import { assignInlineVars } from '@vanilla-extract/dynamic';
import { useContext, type ReactNode, forwardRef } from 'react';

import {
  resolveResponsiveRangeProps,
  type ResponsiveRangeProps,
} from '../../utils/resolveResponsiveRangeProps';
import { DefaultBadgePropsProvider } from '../Badge/defaultBadgeProps';
import { Box } from '../Box/Box';
import { Inline } from '../Inline/Inline';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';
import { DefaultTextPropsProvider } from '../private/defaultTextProps';

import {
  TableContext,
  TableFooterContext,
  TableHeaderContext,
  TableRowContext,
} from './TableContext';

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

const Cell = forwardRef<HTMLTableCellElement, CellProps & BaseCellProps>(
  (
    {
      header: isHeaderCell,
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
    },
    ref,
  ) => {
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

    return (
      <Box
        component={isHeaderCell ? 'th' : 'td'}
        scope={scope}
        colSpan={colspan}
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
          [styles.cell]: true,
          [styles.headCell]: isHeaderCell,
          [styles.nowrap]: !wrap,
          [styles.softWidth]: softWidth,
          [styles.minWidth]: typeof minWidth !== 'undefined',
          [styles.maxWidth]: hasMaxWidth,
          [styles.alignY[tableContext.alignY]]: true,
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
        ref={ref}
        {...buildDataAttributes({ data, validateRestProps: restProps })}
      >
        <DefaultBadgePropsProvider bleedY>
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
        </DefaultBadgePropsProvider>
      </Box>
    );
  },
);

export const TableCell = forwardRef<HTMLTableCellElement, CellProps>(
  (props, ref) => {
    const tableHeaderContext = useContext(TableHeaderContext);
    const tableRowContext = useContext(TableRowContext);

    assert(
      !tableHeaderContext,
      'TableCell cannot be used inside a TableHeader component. Please use TableHeaderCell instead.',
    );

    assert(
      tableRowContext,
      'TableCell cannot be used outside a TableRow component',
    );

    return <Cell {...props} header={false} scope={undefined} ref={ref} />;
  },
);

export const TableHeaderCell = forwardRef<HTMLTableCellElement, CellProps>(
  (props, ref) => {
    const tableHeaderContext = useContext(TableHeaderContext);
    const tableRowContext = useContext(TableRowContext);

    assert(
      tableRowContext,
      'TableHeaderCell cannot be used outside a TableRow component',
    );

    return (
      <Cell
        {...props}
        header={true}
        scope={tableHeaderContext ? 'col' : 'row'}
        ref={ref}
      />
    );
  },
);
