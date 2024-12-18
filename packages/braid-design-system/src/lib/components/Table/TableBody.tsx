import assert from 'assert';
import { useContext, type ReactNode } from 'react';
import { Box } from '../Box/Box';
import { TableBodyContext, TableContext } from './TableContext';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';

import * as styles from './Table.css';

interface TableBodyProps {
  children: ReactNode;
  data?: DataAttributeMap;
}

export const TableBody = ({ children, data, ...restProps }: TableBodyProps) => {
  const tableContext = useContext(TableContext);

  assert(tableContext, 'TableBody must be used within a Table component');

  return (
    <TableBodyContext.Provider value={true}>
      <Box
        component="tbody"
        className={styles.tableSection}
        {...buildDataAttributes({ data, validateRestProps: restProps })}
      >
        {children}
      </Box>
    </TableBodyContext.Provider>
  );
};
