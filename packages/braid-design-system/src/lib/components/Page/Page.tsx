import { type ReactNode, useContext } from 'react';
import assert from 'tiny-invariant';

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

export const Page = ({
  children,
  footer,
  footerPosition,
  data,
  ...restProps
}: PageProps) => {
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
