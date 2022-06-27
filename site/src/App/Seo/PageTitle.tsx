import React from 'react';
import { Helmet } from 'react-helmet-async';

const defaultTitle = 'Braid Design System';

interface PageTitleProps {
  title?: string;
}
export function PageTitle({ title }: PageTitleProps) {
  const normalisedTitle = title ? `${title} — ${defaultTitle}` : defaultTitle;

  return (
    <Helmet>
      <title>{normalisedTitle}</title>
      <meta property="og:title" content={normalisedTitle} />
      <meta property="twitter:title" content={normalisedTitle} />
    </Helmet>
  );
}
