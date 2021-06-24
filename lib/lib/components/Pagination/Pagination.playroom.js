import _extends from "@babel/runtime/helpers/extends";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["page", "total", "linkProps", "label"];
import React, { useEffect, useState } from 'react';
import { maxPages } from './paginate';
import { Pagination as BraidPagination } from './Pagination';
var defaultPage = 1;
var defaultTotal = 10;

var resolveFallbackPage = function resolveFallbackPage(page, total) {
  if (typeof page === 'number') {
    return page > 0 ? page : 1;
  }

  if (typeof total === 'number' && total > 0) {
    return Math.ceil(total / 2);
  }

  return defaultPage;
};

var resolveFallbackTotal = function resolveFallbackTotal(total, resolvedPage) {
  if (typeof total === 'number' && total > 0) {
    return total;
  }

  return resolvedPage > maxPages ? resolvedPage * 2 : defaultTotal;
};

export var Pagination = function Pagination(_ref) {
  var page = _ref.page,
      total = _ref.total,
      linkProps = _ref.linkProps,
      label = _ref.label,
      restProps = _objectWithoutProperties(_ref, _excluded);

  var fallbackPage = resolveFallbackPage(page, total);
  var fallbackTotal = resolveFallbackTotal(total, fallbackPage);

  var _useState = useState(fallbackPage),
      _useState2 = _slicedToArray(_useState, 2),
      currentPage = _useState2[0],
      setCurrentPage = _useState2[1];

  var fallbackLinkProps = function fallbackLinkProps(_ref2) {
    var newPage = _ref2.page;
    return {
      href: '#',
      onClick: function onClick(e) {
        e.preventDefault();
        setCurrentPage(newPage);
      }
    };
  };

  useEffect(function () {
    setCurrentPage(resolveFallbackPage(page, total));
  }, [page, total]);
  return /*#__PURE__*/React.createElement(BraidPagination, _extends({
    page: currentPage,
    total: total || fallbackTotal,
    label: label || "Page ".concat(currentPage, " of results"),
    linkProps: linkProps !== null && linkProps !== void 0 ? linkProps : fallbackLinkProps
  }, restProps));
};
Pagination.displayName = "Pagination";