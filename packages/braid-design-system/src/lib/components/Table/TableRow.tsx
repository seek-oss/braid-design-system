import assert from 'assert';

import { useContext, type ReactNode, forwardRef } from 'react';

import { Box } from '../Box/Box';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';

import {
  TableRowContext,
  TableHeaderContext,
  TableContext,
  TableBodyContext,
  TableFooterContext,
} from './TableContext';

import * as styles from './Table.css';

export interface TableRowProps {
  children: ReactNode;
  data?: DataAttributeMap;
}

export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ children, data, ...restProps }, ref) => {
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

    return (
      <TableRowContext.Provider value={true}>
        <Box
          component="tr"
          className={styles.row}
          ref={ref}
          {...buildDataAttributes({ data, validateRestProps: restProps })}
        >
          {children}
        </Box>
      </TableRowContext.Provider>
    );
  },
);
