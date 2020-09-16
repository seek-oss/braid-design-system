import React, { useContext } from 'react';
import { useStyles } from 'sku/react-treat';
import { Box, BoxProps } from '../Box/Box';
import TextContext from '../Text/TextContext';
import HeadingContext from '../Heading/HeadingContext';
import * as styleRefs from './HiddenVisually.treat';

interface HiddenVisuallyProps {
  id?: string;
  children: BoxProps['children'];
}

export const HiddenVisually = ({ id, children }: HiddenVisuallyProps) => {
  const styles = useStyles(styleRefs);
  const inText = Boolean(useContext(TextContext));
  const inHeading = Boolean(useContext(HeadingContext));

  const component = inText || inHeading ? 'span' : 'div';

  return (
    <Box
      component={component}
      id={id}
      position="absolute"
      overflow="hidden"
      className={styles.root}
    >
      {children}
    </Box>
  );
};
