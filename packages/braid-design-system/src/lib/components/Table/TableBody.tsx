import assert from 'assert';

import { useContext, type ReactNode, forwardRef } from 'react';

import { Box } from '../Box/Box';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';

import { TableBodyContext, TableContext } from './TableContext';

import * as styles from './Table.css';

interface TableBodyProps {
  children: ReactNode;
  data?: DataAttributeMap;
}

export const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ children, data, ...restProps }, ref) => {
    const tableContext = useContext(TableContext);

    assert(tableContext, 'TableBody must be used within a Table component');

    return (
      <TableBodyContext.Provider value={true}>
        <Box
          component="tbody"
          className={styles.tableSection}
          ref={ref}
          {...buildDataAttributes({ data, validateRestProps: restProps })}
        >
          {children}
        </Box>
      </TableBodyContext.Provider>
    );
  },
);
