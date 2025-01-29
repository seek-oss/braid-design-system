import assert from 'assert';

import { useContext, type ReactNode } from 'react';

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
        className={[styles.tableSection, styles.tableHeader]}
        {...buildDataAttributes({ data, validateRestProps: restProps })}
      >
        {children}
      </Box>
    </TableHeaderContext.Provider>
  );
};
