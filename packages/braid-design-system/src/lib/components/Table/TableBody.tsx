import assert from 'assert';
import { useContext, type ReactNode } from 'react';
import { TableBodyContext, TableContext } from './TableContext';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';

interface TableBodyProps {
  children: ReactNode;
  data?: DataAttributeMap;
  // sticky?: boolean;
}
export const TableBody = ({ children, data, ...restProps }: TableBodyProps) => {
  const tableContext = useContext(TableContext);

  assert(tableContext, 'TableBody must be used within a Table component');

  return (
    <TableBodyContext.Provider value={true}>
      <tbody {...buildDataAttributes({ data, validateRestProps: restProps })}>
        {children}
      </tbody>
    </TableBodyContext.Provider>
  );
};
