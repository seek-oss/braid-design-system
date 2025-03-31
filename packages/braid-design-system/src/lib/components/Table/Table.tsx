import { forwardRef, type ReactNode } from 'react';

import { Box } from '../Box/Box';
import { ScrollContainer } from '../private/ScrollContainer/ScrollContainer';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';

import { TableContext } from './TableContext';

import * as styles from './Table.css';

export interface TableProps {
  label: string;
  children: ReactNode;
  alignY?: 'top' | 'center';
  data?: DataAttributeMap;
}

export const Table = forwardRef<HTMLTableElement, TableProps>((
  {
    alignY = 'center',
    children,
    label,
    data,
    ...restProps
  },
  ref
) => (
  <TableContext.Provider value={{ alignY }}>
    <ScrollContainer>
      <Box
        component="table"
        width="full"
        background="surface"
        borderRadius="large"
        overflow="hidden"
        aria-label={label}
        className={styles.table}
        ref={ref}
        {...buildDataAttributes({ data, validateRestProps: restProps })}
      >
        {children}
      </Box>
    </ScrollContainer>
  </TableContext.Provider>
));
