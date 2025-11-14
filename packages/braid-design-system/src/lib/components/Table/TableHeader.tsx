import { useContext, type ReactNode, forwardRef } from 'react';
import assert from 'tiny-invariant';

import { Box } from '../Box/Box';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';

import { TableContext, TableHeaderContext } from './TableContext';

import * as styles from './Table.css';

interface TableHeaderProps {
  children: ReactNode;
  data?: DataAttributeMap;
}

export const TableHeader = forwardRef<
  HTMLTableSectionElement,
  TableHeaderProps
>(({ children, data, ...restProps }, ref) => {
  const tableContext = useContext(TableContext);

  assert(tableContext, 'TableHeader must be used within a Table component');

  return (
    <TableHeaderContext.Provider value={true}>
      <Box
        component="thead"
        className={[styles.tableSection, styles.tableHeader]}
        ref={ref}
        {...buildDataAttributes({ data, validateRestProps: restProps })}
      >
        {children}
      </Box>
    </TableHeaderContext.Provider>
  );
});
