import React from 'react';
import Box from '../Box/Box';
import withTheme from '../private/withTheme';
import { SpacingVariants } from '../../themes/theme';

interface Props {
  verticalPadding: SpacingVariants;
}

const Inset: React.StatelessComponent<Props> = ({ verticalPadding, ...restProps }) => {
  return (
    <Box
      paddingTop={verticalPadding}
      paddingBottom={verticalPadding}
      paddingLeft="gutter"
      paddingRight="gutter"
      {...restProps}
    />
  );
};

Inset.displayName = 'Inset';

export default withTheme(Inset);
