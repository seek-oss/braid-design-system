import assert from 'assert';
import { useContext, type ReactNode } from 'react';
import { Box } from '../Box/Box';
import { TableContext, TableHeaderContext } from './TableContext';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';

import * as styles from './Table.css';

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
        className={styles.tableSection}
        role={tableContext.selectionMode ? 'rowgroup' : undefined}
        {...buildDataAttributes({ data, validateRestProps: restProps })}
      >
        {children}
      </Box>
    </TableHeaderContext.Provider>
  );
};
