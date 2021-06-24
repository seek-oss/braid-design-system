import _extends from '@babel/runtime/helpers/extends';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
const _excluded = ['page', 'total', 'linkProps', 'label'];
import React, { useEffect, useState } from 'react';
import { maxPages } from './paginate';
import { Pagination as BraidPagination } from './Pagination';
const defaultPage = 1;
const defaultTotal = 10;

const resolveFallbackPage = function resolveFallbackPage(page, total) {
  if (typeof page === 'number') {
    return page > 0 ? page : 1;
  }

  if (typeof total === 'number' && total > 0) {
    return Math.ceil(total / 2);
  }

  return defaultPage;
};

const resolveFallbackTotal = function resolveFallbackTotal(
  total,
  resolvedPage,
) {
  if (typeof total === 'number' && total > 0) {
    return total;
  }

  return resolvedPage > maxPages ? resolvedPage * 2 : defaultTotal;
};

export var Pagination = function Pagination(_ref) {
  const page = _ref.page,
    total = _ref.total,
    linkProps = _ref.linkProps,
    label = _ref.label,
    restProps = _objectWithoutProperties(_ref, _excluded);

  const fallbackPage = resolveFallbackPage(page, total);
  const fallbackTotal = resolveFallbackTotal(total, fallbackPage);

  const _useState = useState(fallbackPage),
    _useState2 = _slicedToArray(_useState, 2),
    currentPage = _useState2[0],
    setCurrentPage = _useState2[1];

  const fallbackLinkProps = function fallbackLinkProps(_ref2) {
    const newPage = _ref2.page;
    return {
      href: '#',
      onClick: function onClick(e) {
        e.preventDefault();
        setCurrentPage(newPage);
      },
    };
  };

  useEffect(
    function () {
      setCurrentPage(resolveFallbackPage(page, total));
    },
    [page, total],
  );
  return /* #__PURE__*/ React.createElement(
    BraidPagination,
    _extends(
      {
        page: currentPage,
        total: total || fallbackTotal,
        label: label || 'Page '.concat(currentPage, ' of results'),
        linkProps:
          linkProps !== null && linkProps !== void 0
            ? linkProps
            : fallbackLinkProps,
      },
      restProps,
    ),
  );
};
Pagination.displayName = 'Pagination';
