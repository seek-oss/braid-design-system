import assert from 'assert';
import { useContext, type ReactNode } from 'react';
// import { TableRow } from './TableRow';
import { TableContext, TableFooterContext } from './TableContext';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';

// import * as styles from './Table.css';

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
      <tfoot
        // className={
        // tableContext.fullBleed ? undefined : styles.tableHeaderRounding
        // }
        {...buildDataAttributes({ data, validateRestProps: restProps })}
      >
        {children}
      </tfoot>
    </TableFooterContext.Provider>
  );
};
