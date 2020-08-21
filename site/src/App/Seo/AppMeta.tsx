import React, { Fragment } from 'react';
import { Meta, Link } from 'react-head';

import { PageTitle } from './PageTitle';
import { getCurrentVersionInfo } from '../Updates';

export function AppMeta() {
  return (
    <Fragment>
      <PageTitle />
      <Meta charSet="utf-8" />
      <Meta name="author" content="SEEK Group" />
      <Meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <Meta property="og:type" content="website" />
      <Meta name="twitter:card" content="summary" />
      <Meta
        name="twitter:image"
        content="https://seek-oss.github.io/braid-design-system/og-icon.png"
      />
      <Link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="https://seek-oss.github.io/braid-design-system/favicon-16x16.png"
      />
      <Link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="https://seek-oss.github.io/braid-design-system/favicon-32x32.png"
      />
      <Link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="https://seek-oss.github.io/braid-design-system/favicon-96x96.png"
      />
      {/* @ts-expect-error */}
      <Meta name="twitter:label1" value="Latest release" />
      {/* @ts-expect-error */}
      <Meta name="twitter:data1" value={getCurrentVersionInfo().version} />
    </Fragment>
  );
}
