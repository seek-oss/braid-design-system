import type { ReactNode } from 'react';
import { Box } from '../Box/Box';
import { TableContext } from './TableContext';
import { ScrollContainer } from '../ScrollContainer/ScrollContainer';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';
import * as styles from './Table.css';

export interface TableProps {
  label: string;
  alignY?: 'top' | 'center';
  children: ReactNode;
  data?: DataAttributeMap;
}

export const Table = ({
  alignY = 'center',
  children,
  label,
  data,
  ...restProps
}: TableProps) => (
  <TableContext.Provider value={{ alignY }}>
    <ScrollContainer>
      <Box
        component="table"
        width="full"
        background="surface"
        overflow="hidden"
        aria-label={label}
        className={styles.table}
        {...buildDataAttributes({ data, validateRestProps: restProps })}
      >
        {children}
      </Box>
    </ScrollContainer>
  </TableContext.Provider>
);
