import type { ReactNode } from 'react';
import { Box } from '../Box/Box';
import { TableContext } from './TableContext';
import { ScrollContainer } from '../private/ScrollContainer/ScrollContainer';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';
import * as styles from './Table.css';

export interface TableProps {
  label: string;
  children: ReactNode;
  alignY?: 'top' | 'center';
  selectionMode?: 'single' | 'multi';
  data?: DataAttributeMap;
}

export const Table = ({
  alignY = 'center',
  children,
  label,
  selectionMode,
  data,
  ...restProps
}: TableProps) => (
  <TableContext.Provider value={{ alignY, selectionMode }}>
    <ScrollContainer>
      <Box
        component="table"
        width="full"
        background="surface"
        borderRadius="large"
        overflow="hidden"
        role={selectionMode ? 'grid' : undefined}
        aria-label={label}
        aria-multiselectable={selectionMode === 'multi' || undefined}
        className={styles.table}
        {...buildDataAttributes({ data, validateRestProps: restProps })}
      >
        {children}
      </Box>
    </ScrollContainer>
  </TableContext.Provider>
);
