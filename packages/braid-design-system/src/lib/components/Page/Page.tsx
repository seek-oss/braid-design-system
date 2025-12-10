import assert from 'assert';

import { type ReactNode, useContext, type FC } from 'react';

import { Box } from '../Box/Box';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';

import PageContext from './PageContext';

import * as styles from './Page.css';

interface PageProps {
  children: ReactNode;
  footer: ReactNode;
  footerPosition?: 'belowFold';
  data?: DataAttributeMap;
}

export const Page: FC<PageProps> = ({
  children,
  footer,
  footerPosition,
  data,
  ...restProps
}) => {
  assert(
    !useContext(PageContext),
    'Page components should not be nested within each other',
  );

  return (
    <PageContext.Provider value={true}>
      <Box
        display="flex"
        flexDirection="column"
        className={styles.fullHeight}
        {...buildDataAttributes({ data, validateRestProps: restProps })}
      >
        <Box
          flexGrow={footerPosition !== 'belowFold' ? 1 : undefined}
          className={
            footerPosition === 'belowFold' ? styles.fullHeight : undefined
          }
          paddingBottom="xxxlarge"
        >
          {children}
        </Box>
        {footer}
      </Box>
    </PageContext.Provider>
  );
};
