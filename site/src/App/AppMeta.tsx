import React, { Fragment } from 'react';
import { Title, Meta, Link } from 'react-head';

// @ts-expect-error
import favicon16 from '../icons/favicon-16x16.png';
// @ts-expect-error
import favicon32 from '../icons/favicon-32x32.png';
// @ts-expect-error
import favicon96 from '../icons/favicon-96x96.png';

export function AppMeta() {
  return (
    <Fragment>
      <Title>BRAID</Title>
      <Meta charSet="utf-8" />
      <Meta name="author" content="SEEK Group" />
      <Meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <Meta name="robots" content="noindex" />
      <Link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
      <Link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
      <Link rel="icon" type="image/png" sizes="96x96" href={favicon96} />
    </Fragment>
  );
}
