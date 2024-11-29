import type { ReactNode } from 'react';
import { Box } from '../Box/Box';
import { TableContext } from './TableContext';
import { Bleed } from '../Bleed/Bleed';
import { ScrollContainer } from '../ScrollContainer/ScrollContainer';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';
import * as styles from './Table.css';

export interface TableProps {
  label: string;
  fullBleed?: boolean;
  alignY?: 'top' | 'center';
  children: ReactNode;
  data?: DataAttributeMap;
}

export const Table = ({
  fullBleed = false,
  alignY = 'center',
  children,
  label,
  data,
  ...restProps
}: TableProps) => {
  const table = (
    <ScrollContainer>
      <Box
        component="table"
        width="full"
        background="surface"
        overflow="hidden"
        borderRadius={!fullBleed ? 'large' : undefined}
        aria-label={label}
        className={[
          styles.table,
          fullBleed ? styles.fullBleed : undefined,
          // fullBleed ? styles.noSideBorders : undefined,
        ]}
        {...buildDataAttributes({ data, validateRestProps: restProps })}
      >
        {children}
      </Box>
    </ScrollContainer>
  );

  return (
    <TableContext.Provider value={{ fullBleed, alignY }}>
      {fullBleed ? <Bleed horizontal="gutter">{table}</Bleed> : table}
    </TableContext.Provider>
  );
};
