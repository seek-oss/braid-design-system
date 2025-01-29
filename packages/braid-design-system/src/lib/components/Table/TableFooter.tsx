import assert from 'assert';

import { useContext, type ReactNode } from 'react';

import { Box } from '../Box/Box';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';

import { TableContext, TableFooterContext } from './TableContext';

import * as styles from './Table.css';

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
        className={styles.tableSection}
        {...buildDataAttributes({ data, validateRestProps: restProps })}
      >
        {children}
      </Box>
    </TableFooterContext.Provider>
  );
};
