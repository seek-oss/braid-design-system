import React, { Children, ReactElement, createContext, useMemo } from 'react';
import classnames from 'classnames';
import { useStyles } from 'sku/treat';
import { Box } from '../Box/Box';
import { ColumnProps } from '../Column/Column';
import { Space } from '../Box/useBoxStyles';
import * as styleRefs from './Columns.treat';

const defaultCollapse = false;
const defaultReverse = false;
const defaultGutter = 'gutter';

interface ColumnsContext {
  collapse: boolean;
  gutter: Space;
}
export const ColumnsContext = createContext<ColumnsContext>({
  collapse: defaultCollapse,
  gutter: defaultGutter,
});

export interface ColumnsProps {
  children: Array<ReactElement<ColumnProps>> | ReactElement<ColumnProps>;
  collapse?: boolean;
  reverse?: boolean;
  gutter?: Space;
}

export const Columns = ({
  children,
  collapse = defaultCollapse,
  reverse = defaultReverse,
  gutter = defaultGutter,
}: ColumnsProps) => {
  const styles = useStyles(styleRefs);

  const shouldReverseDesktop = collapse && reverse;
  const shouldReverseEverywhere = !collapse && reverse;

  // Prevent re-renders when context values haven't changed
  const columnsContextValue = useMemo(() => ({ collapse, gutter }), [
    collapse,
    gutter,
  ]);

  return (
    <Box
      display="flex"
      flexDirection={[
        collapse ? 'column' : 'row',
        shouldReverseDesktop ? 'rowReverse' : 'row',
      ]}
      className={classnames(
        gutter !== 'none' ? styles.gutterOffset[gutter] : undefined,
        collapse ? styles.collapse : undefined,
      )}
    >
      <ColumnsContext.Provider value={columnsContextValue}>
        {shouldReverseEverywhere
          ? Children.toArray(children).reverse()
          : children}
      </ColumnsContext.Provider>
    </Box>
  );
};
