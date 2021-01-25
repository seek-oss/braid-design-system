import React, { useEffect, useState } from 'react';
import { Optional } from 'utility-types';
import { StateProp } from '../../playroom/playroomState';
import { maxPages } from './paginate';
import {
  Pagination as BraidPaginationField,
  PaginationProps,
} from './Pagination';

type PlayroomPaginationProps = StateProp &
  Optional<PaginationProps, 'label' | 'linkProps' | 'page' | 'total'>;

const defaultPage = 5;

const resolveFallbackPage = (
  page: PlayroomPaginationProps['page'],
  total: PlayroomPaginationProps['total'],
) => {
  if (typeof page === 'number') {
    return page > 0 ? page : 1;
  }

  if (typeof total === 'number' && total > 0) {
    return Math.ceil(total / 2);
  }

  return defaultPage;
};

const resolveFallbackTotal = (
  total: PlayroomPaginationProps['total'],
  resolvedPage: number,
) => {
  if (typeof total === 'number' && total > 0) {
    return total;
  }

  return resolvedPage > maxPages ? resolvedPage * 2 : defaultPage * 2;
};

export const Pagination = ({
  page,
  total,
  linkProps,
  label,
  ...restProps
}: PlayroomPaginationProps) => {
  const fallbackPage = resolveFallbackPage(page, total);
  const fallbackTotal = resolveFallbackTotal(total, fallbackPage);
  const [currentPage, setCurrentPage] = useState(fallbackPage);

  const fallbackLinkProps: PaginationProps['linkProps'] = (newPage) => ({
    href: '#',
    onClick: (e) => {
      e.preventDefault();
      setCurrentPage(newPage);
    },
  });

  useEffect(() => {
    setCurrentPage(resolveFallbackPage(page, total));
  }, [page, total]);

  return (
    <BraidPaginationField
      page={currentPage}
      total={total || fallbackTotal}
      label={label || `Page ${currentPage} of results`}
      linkProps={linkProps ?? fallbackLinkProps}
      {...restProps}
    />
  );
};
