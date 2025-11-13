import { useContext, type ReactNode, forwardRef } from 'react';
import assert from 'tiny-invariant';

import { Box } from '../Box/Box';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';

import { TableContext, TableFooterContext } from './TableContext';

import * as styles from './Table.css';

interface TableFooterProps {
  children: ReactNode;
  data?: DataAttributeMap;
}

export const TableFooter = forwardRef<
  HTMLTableSectionElement,
  TableFooterProps
>(({ children, data, ...restProps }, ref) => {
  const tableContext = useContext(TableContext);

  assert(tableContext, 'TableFooter must be used within a Table component');

  return (
    <TableFooterContext.Provider value={true}>
      <Box
        component="tfoot"
        className={styles.tableSection}
        ref={ref}
        {...buildDataAttributes({ data, validateRestProps: restProps })}
      >
        {children}
      </Box>
    </TableFooterContext.Provider>
  );
});
