import { useMemo, type FC } from 'react';

import { Box } from '../Box/Box';
import type { ButtonProps } from '../Button/Button';
import type { InlineProps } from '../Inline/Inline';

import ActionsContext from './ActionsContext';

import * as styles from './Actions.css';

export interface ActionsProps {
  size?: ButtonProps['size'];
  children: InlineProps['children'];
  data?: InlineProps['data'];
}

export const actionsSpace = 'xsmall';

export const Actions: FC<ActionsProps> = ({ size, data, children }) => {
  const contextValue = useMemo(() => ({ size }), [size]);

  return (
    <ActionsContext.Provider value={contextValue}>
      <Box
        display="flex"
        flexDirection={{ mobile: 'column', [styles.actionsBreakpoint]: 'row' }}
        flexWrap="wrap"
        gap={actionsSpace}
        className={styles.root}
        data={data}
      >
        {children}
      </Box>
    </ActionsContext.Provider>
  );
};
