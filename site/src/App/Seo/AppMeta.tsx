import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';

import { PageTitle } from './PageTitle';
import { getCurrentVersionInfo } from '../Updates';

export function AppMeta() {
  const isBrowser = typeof window !== 'undefined';
  let faviconFileName = 'favicon';

  if (isBrowser && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    faviconFileName += '-inverted';
  }

  return (
    <Fragment>
      <PageTitle />
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="author" content="SEEK Group" />
        <meta
          name="description"
          content="Themeable design system for the SEEK Group"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:image"
          content="https://seek-oss.github.io/braid-design-system/og-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`/${faviconFileName}-16x16.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`/${faviconFileName}-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href={`/${faviconFileName}-96x96.png`}
        />

        {/* @ts-expect-error */}
        <meta name="twitter:label1" value="Latest release" />
        {/* @ts-expect-error */}
        <meta name="twitter:data1" value={getCurrentVersionInfo().version} />
      </Helmet>
    </Fragment>
  );
}
