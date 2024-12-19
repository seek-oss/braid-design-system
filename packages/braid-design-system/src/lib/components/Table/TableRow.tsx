import assert from 'assert';
import { Box } from '../Box/Box';
import { type AllHTMLAttributes, useContext, type ReactNode } from 'react';
import {
  TableRowContext,
  TableHeaderContext,
  TableContext,
  TableBodyContext,
  TableFooterContext,
} from './TableContext';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';

import * as styles from './Table.css';

export interface TableRowProps {
  children: ReactNode;
  selected?: boolean;
  onClick?: AllHTMLAttributes<HTMLTableRowElement>['onClick'];
  data?: DataAttributeMap;
}

export const TableRow = ({
  children,
  onClick,
  data,
  ...restProps
}: TableRowProps) => {
  const tableContext = useContext(TableContext);
  const tableHeaderContext = useContext(TableHeaderContext);
  const tableBodyContext = useContext(TableBodyContext);
  const tableFooterContext = useContext(TableFooterContext);
  const tableRowContext = useContext(TableRowContext);

  assert(tableContext, 'TableRow must be used within a Table component');

  assert(
    !tableRowContext,
    'TableRow cannot be nested instead another TableRow',
  );

  assert(
    tableBodyContext || tableHeaderContext || tableFooterContext,
    'TableRow must be used within a table section, e.g. TableHeader, TableBody or TableFooter component',
  );

  assert(
    !('selected' in restProps) ||
      typeof tableContext.selectionMode !== 'undefined',
    'TableRow cannot be `selected` without a `selectionMode` specified on the parent Table component',
  );

  const selected = restProps.selected ?? false;

  return (
    <TableRowContext.Provider value={{ selected }}>
      <Box
        component="tr"
        cursor="pointer"
        onClick={onClick}
        className={styles.row}
        role={tableContext.selectionMode ? 'row' : undefined}
        aria-selected={tableContext.selectionMode ? selected : undefined}
        {...buildDataAttributes({ data, validateRestProps: restProps })}
      >
        {children}
      </Box>
    </TableRowContext.Provider>
  );
};
