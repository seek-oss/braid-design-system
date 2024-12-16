import assert from 'assert';
import { useContext, type ReactNode } from 'react';
import { Box } from '../Box/Box';
import { TableContext, TableFooterContext } from './TableContext';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';

interface TableHeaderProps {
  children: ReactNode;
  data?: DataAttributeMap;
}

export const TableFooter = ({
  children,
  data,
  ...restProps
}: TableHeaderProps) => {
  const tableContext = useContext(TableContext);

  assert(tableContext, 'TableFooter must be used within a Table component');

  return (
    <TableFooterContext.Provider value={true}>
      <Box
        component="tfoot"
        {...buildDataAttributes({ data, validateRestProps: restProps })}
      >
        {children}
      </Box>
    </TableFooterContext.Provider>
  );
};
