import assert from 'assert';
import { useContext, type ReactNode } from 'react';
import { Box } from '../Box/Box';
import { TableContext, TableHeaderContext } from './TableContext';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';

// import * as styles from './Table.css';

interface TableHeaderProps {
  children: ReactNode;
  data?: DataAttributeMap;
  // sticky?: boolean;
}

export const TableHeader = ({
  children,
  data,
  ...restProps
}: // sticky,
TableHeaderProps) => {
  const tableContext = useContext(TableContext);

  assert(tableContext, 'TableHeader must be used within a Table component');

  return (
    <TableHeaderContext.Provider value={true}>
      <Box
        component="thead"
        // className={
        // tableContext.fullBleed ? undefined : styles.tableHeaderRounding
        // }
        {...buildDataAttributes({ data, validateRestProps: restProps })}
        // style={sticky ? { position: 'sticky', top: 0 } : undefined}
      >
        {children}
      </Box>
    </TableHeaderContext.Provider>
  );
};
