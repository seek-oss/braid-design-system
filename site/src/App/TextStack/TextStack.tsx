import React from 'react';
import { useStyles } from 'sku/react-treat';
import { Box, Stack } from '../../../../lib/components';
import * as styleRefs from './TextStack.treat';
import { StackProps } from '../../../../lib/components/Stack/Stack';
import { ReactNodeNoStrings } from '../../../../lib/components/private/ReactNodeNoStrings';

interface TextStackProps {
  children: ReactNodeNoStrings;
  space?: StackProps['space'];
}

export const TextStack = ({ space = 'xlarge', children }: TextStackProps) => {
  const styles = useStyles(styleRefs);
  return (
    <Box className={styles.root}>
      <Stack space={space}>{children}</Stack>
    </Box>
  );
};
