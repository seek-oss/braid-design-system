import assert from 'assert';
import { useContext, type ReactNode } from 'react';
import { Box } from '../Box/Box';
import { TableContext, TableHeaderContext } from './TableContext';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';

interface TableHeaderProps {
  children: ReactNode;
  data?: DataAttributeMap;
}

export const TableHeader = ({
  children,
  data,
  ...restProps
}: TableHeaderProps) => {
  const tableContext = useContext(TableContext);

  assert(tableContext, 'TableHeader must be used within a Table component');

  return (
    <TableHeaderContext.Provider value={true}>
      <Box
        component="thead"
        {...buildDataAttributes({ data, validateRestProps: restProps })}
      >
        {children}
      </Box>
    </TableHeaderContext.Provider>
  );
};
