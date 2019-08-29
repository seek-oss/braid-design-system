import React, { Children, ReactElement, createContext } from 'react';
import classnames from 'classnames';
import { useStyles } from 'sku/treat';
import { Box } from '../Box/Box';
import { ColumnProps } from '../Column/Column';
import { SpaceX } from '../../hooks/useBox';
import * as styleRefs from './Columns.treat';

const defaultCollapse = false;
const defaultReverse = false;
const defaultGutters = 'large';

interface ColumnsContext {
  collapse: boolean;
  gutters: SpaceX;
}
export const ColumnsContext = createContext<ColumnsContext>({
  collapse: defaultCollapse,
  gutters: defaultGutters,
});

export interface ColumnsProps {
  children: Array<ReactElement<ColumnProps>> | ReactElement<ColumnProps>;
  collapse?: boolean;
  reverse?: boolean;
  gutters?: SpaceX;
}

export const Columns = ({
  children,
  collapse = defaultCollapse,
  reverse = defaultReverse,
  gutters = defaultGutters,
}: ColumnsProps) => {
  const styles = useStyles(styleRefs);

  const shouldReverseDesktop = collapse && reverse;
  const shouldReverseEverywhere = !collapse && reverse;

  return (
    <Box
      display="flex"
      flexDirection={[
        collapse ? 'column' : 'row',
        shouldReverseDesktop ? 'rowReverse' : 'row',
      ]}
      className={classnames(
        gutters !== 'none' ? styles.gutterOffset[gutters] : undefined,
        collapse ? styles.collapse : undefined,
      )}
    >
      <ColumnsContext.Provider value={{ collapse, gutters }}>
        {shouldReverseEverywhere
          ? Children.toArray(children).reverse()
          : Children.toArray(children)}
      </ColumnsContext.Provider>
    </Box>
  );
};
