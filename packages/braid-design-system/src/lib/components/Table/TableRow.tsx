import assert from 'assert';
import { useContext, type ReactNode } from 'react';
import { Box } from '../Box/Box';
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

export interface TableRowProps {
  children: ReactNode;
  data?: DataAttributeMap;
}

export const TableRow = ({ children, data, ...restProps }: TableRowProps) => {
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
        {...buildDataAttributes({ data, validateRestProps: restProps })}
      >
        {children}
      </Box>
    </TableRowContext.Provider>
  );
};
