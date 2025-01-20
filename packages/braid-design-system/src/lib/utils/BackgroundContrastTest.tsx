import React, { type ReactNode } from 'react';

// TODO: COLORMODE RELEASE
// Use public import
import { Box } from '../components/Box/Box';

import { backgrounds } from './docsHelpers';

export const BackgroundContrastTest = ({
  children,
}: {
  children:
    | ReactNode
    | ((background: (typeof backgrounds)[number]) => ReactNode);
}) => (
  <>
    {backgrounds.map((background) => (
      <Box key={background} background={background} padding="small">
        {typeof children === 'function' ? children(background) : children}
      </Box>
    ))}
  </>
);
