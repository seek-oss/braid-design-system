import { createContext } from 'react';
import type { TableProps } from './Table';

export const TableContext = createContext<
  | {
      alignY: NonNullable<TableProps['alignY']>;
      selectionMode: TableProps['selectionMode'];
    }
  | false
>(false);
export const TableHeaderContext = createContext(false);
export const TableBodyContext = createContext(false);
export const TableFooterContext = createContext(false);
export const TableRowContext = createContext<{ selected: boolean } | false>(
  false,
);
