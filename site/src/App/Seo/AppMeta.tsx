import React, { Fragment } from 'react';
import { Meta, Link } from 'react-head';

import { PageTitle } from './PageTitle';
import { getCurrentVersionInfo } from '../Updates';

// @ts-expect-error
import favicon16 from './favicon-16x16.png';
// @ts-expect-error
import favicon32 from './favicon-32x32.png';
// @ts-expect-error
import favicon96 from './favicon-96x96.png';

export function AppMeta() {
  return (
    <Fragment>
      <PageTitle />
      <Meta charSet="utf-8" />
      <Meta name="author" content="SEEK Group" />
      <Meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <Meta name="og:type" content="website" />
      <Meta name="twitter:card" content="summary" />
      <Link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
      <Link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
      <Link rel="icon" type="image/png" sizes="96x96" href={favicon96} />
      {/* @ts-expect-error */}
      <Meta name="twitter:label1" value="Latest release" />
      {/* @ts-expect-error */}
      <Meta name="twitter:data1" value={getCurrentVersionInfo().version} />
    </Fragment>
  );
}
