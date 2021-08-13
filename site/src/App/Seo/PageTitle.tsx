import { Fragment } from 'react';
import { Title, Meta } from 'react-head';

const defaultTitle = 'Braid Design System';

interface PageTitleProps {
  title?: string;
}
export function PageTitle({ title }: PageTitleProps) {
  const normalisedTitle = title ? `${title} — ${defaultTitle}` : defaultTitle;

  return (
    <Fragment>
      <Title>{normalisedTitle}</Title>
      <Meta property="og:title" content={normalisedTitle} />
      <Meta property="twitter:title" content={normalisedTitle} />
    </Fragment>
  );
}
