import { useEffect, useRef, type ReactNode } from 'react';
import { Box } from '../Box/Box';
// import { IconArrow } from '../icons/IconArrow/IconArrow';
// import { Notice } from '../Notice/Notice';
// import { Stack } from '../Stack/Stack';
// import { Text } from '../Text/Text';
import { TableContext } from './TableContext';
import { Bleed } from '../Bleed/Bleed';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';
import * as styles from './Table.css';

export interface TableProps {
  label: string;
  fullBleed?: boolean;
  alignY?: 'top' | 'center';
  columnWidths?: Array<string | number>;
  children: ReactNode;
  data?: DataAttributeMap;
}

const maskOverflow = (element: HTMLElement) => {
  const atStart = element.scrollLeft === 0;
  const atEnd =
    element.offsetWidth + element.scrollLeft === element.scrollWidth;
  const inBetween = !atStart && !atEnd;

  if (atStart && atEnd) {
    return;
  }

  if (inBetween) {
    element.classList.add(styles.maskBoth);
    element.classList.remove(styles.maskRight, styles.maskLeft);
    return;
  }

  if (atEnd) {
    element.classList.add(styles.maskLeft);
    element.classList.remove(styles.maskRight, styles.maskBoth);
    return;
  }

  if (atStart) {
    element.classList.add(styles.maskRight);
    element.classList.remove(styles.maskLeft, styles.maskBoth);
    return;
  }
};

export const Table = ({
  fullBleed = false,
  alignY = 'center',
  children,
  label,
  columnWidths = [],
  data,
  ...restProps
}: TableProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      maskOverflow(containerRef.current);
    }
  }, []);

  const table = (
    <Box
      ref={containerRef}
      onScroll={(e) => maskOverflow(e.currentTarget)}
      className={styles.tableContainer}
    >
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
    </Box>
  );

  return (
    <TableContext.Provider value={{ fullBleed, alignY, columnWidths }}>
      {fullBleed ? <Bleed horizontal="gutter">{table}</Bleed> : table}
    </TableContext.Provider>
  );
};
