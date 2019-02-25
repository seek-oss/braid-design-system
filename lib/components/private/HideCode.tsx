import React, { FunctionComponent, Fragment } from 'react';

// Doesn't actually do anything. This just provides a `HideCode`
// display name so we can find and replace it in code snippets.
export const HideCode: FunctionComponent = ({ children }) => (
  <Fragment>{children}</Fragment>
);
