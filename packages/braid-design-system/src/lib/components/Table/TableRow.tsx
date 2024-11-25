import assert from 'assert';
import { useContext, type ReactNode } from 'react';
import {
  TableRowContext,
  TableHeaderContext,
  TableContext,
  TableBodyContext,
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
  const tableRowContext = useContext(TableRowContext);

  assert(tableContext, 'TableRow must be used within a Table component');

  assert(
    !tableRowContext,
    tableHeaderContext
      ? 'TableRow is already provided by the TableHeader component'
      : 'TableRow cannot be nested instead another TableRow',
  );

  assert(
    tableBodyContext || tableHeaderContext,
    'TableRow must be used within a TableBody component',
  );

  return (
    <TableRowContext.Provider value={true}>
      <tr {...buildDataAttributes({ data, validateRestProps: restProps })}>
        {children}
      </tr>
    </TableRowContext.Provider>
  );
};