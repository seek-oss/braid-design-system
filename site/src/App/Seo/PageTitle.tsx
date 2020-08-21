import React, { Fragment } from 'react';
import { Title, Meta } from 'react-head';

interface PageTitleProps {
  title?: string;
}
export function PageTitle({ title }: PageTitleProps) {
  const normalizedTitle = (title ? [title] : [])
    .concat(['Braid Design System'])
    .join(' — ');

  return (
    <Fragment>
      <Title>{normalizedTitle}</Title>
      <Meta name="og:title" content={normalizedTitle} />
      <Meta name="twitter:title" content={normalizedTitle} />
    </Fragment>
  );
}
