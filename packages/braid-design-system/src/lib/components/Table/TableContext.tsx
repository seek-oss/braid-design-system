import { createContext } from 'react';
import type { TableProps } from './Table';

export const TableContext = createContext<
  | {
      fullBleed: NonNullable<TableProps['fullBleed']>;
      alignY: NonNullable<TableProps['alignY']>;
    }
  | false
>(false);
export const TableHeaderContext = createContext(false);
export const TableBodyContext = createContext(false);
export const TableRowContext = createContext(false);
