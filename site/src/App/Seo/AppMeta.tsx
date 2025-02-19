import { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import { useHref } from 'react-router';

import { useConfig } from '../ConfigContext';
import { getCurrentVersionInfo } from '../Updates';

import { PageTitle } from './PageTitle';

export function AppMeta() {
  const isBrowser = typeof window !== 'undefined';
  let faviconFileName = 'favicon';

  if (isBrowser && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    faviconFileName += '-inverted';
  }

  const favicon16Href = useHref(`/${faviconFileName}-16x16.png`);
  const favicon32Href = useHref(`/${faviconFileName}-32x32.png`);
  const favicon96Href = useHref(`/${faviconFileName}-96x96.png`);

  const { branchName } = useConfig();
  const dataItem = branchName
    ? {
        label: 'Preview deployment',
        value: `Branch: ${branchName}`,
      }
    : {
        label: 'Latest release',
        value: getCurrentVersionInfo().version,
      };

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
        <link rel="icon" type="image/png" sizes="16x16" href={favicon16Href} />
        <link rel="icon" type="image/png" sizes="32x32" href={favicon32Href} />
        <link rel="icon" type="image/png" sizes="96x96" href={favicon96Href} />

        {/* @ts-expect-error */}
        <meta name="twitter:label1" value={dataItem.label} />
        {/* @ts-expect-error */}
        <meta name="twitter:data1" value={dataItem.value} />
      </Helmet>
    </Fragment>
  );
}
