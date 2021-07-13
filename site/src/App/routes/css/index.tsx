import React from 'react';
import { RouteProps } from 'react-router';
import { CssDoc } from '../../CssDoc/CssDoc';
import { getCssDoc } from '../../navigationHelpers';

const page: RouteProps = {
  render: ({ match }) => {
    const cssName = match.params.cssName ?? '';
    return (
      <CssDoc
        key={cssName} // Force remount per page
        name={cssName}
        docs={getCssDoc(cssName)}
      />
    );
  },
};

export default {
  '/css/:cssName': page,
};
