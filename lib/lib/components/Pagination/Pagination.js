import _extends from "@babel/runtime/helpers/extends";
import _jsx from "@babel/runtime/helpers/jsx";

var _IconChevron, _IconChevron2;

import React from 'react';
import assert from 'assert';
import { Box } from '../Box/Box';
import { useBackground } from '../Box/BackgroundContext';
import { IconChevron } from '../icons';
import { Link } from '../Link/Link';
import { Overlay } from '../private/Overlay/Overlay';
import { Text } from '../Text/Text';
import { paginate } from './paginate';
import buildDataAttributes from '../private/buildDataAttributes';
import * as styles from './Pagination.css';

var PageNav = function PageNav(_ref) {
  var label = _ref.label,
      direction = _ref.direction;
  var isPrevious = direction === 'prev';
  return /*#__PURE__*/_jsx(Box, {
    component: "span",
    className: styles.hover,
    position: "relative",
    display: "flex",
    alignItems: "center",
    height: "touchable",
    paddingX: "xsmall"
  }, void 0, /*#__PURE__*/_jsx(Overlay, {
    component: "span",
    background: 'selection',
    borderRadius: "standard",
    transition: "fast",
    className: styles.background
  }), /*#__PURE__*/_jsx(Box, {
    component: "span",
    zIndex: 1,
    userSelect: "none"
  }, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, isPrevious ? _IconChevron || (_IconChevron = /*#__PURE__*/_jsx(IconChevron, {
    direction: "left"
  })) : null, /*#__PURE__*/_jsx(Box, {
    display: isPrevious ? ['none', 'inline'] : undefined,
    component: "span",
    marginLeft: isPrevious ? 'xxsmall' : undefined,
    marginRight: direction === 'next' ? 'xxsmall' : undefined
  }, void 0, label), direction === 'next' ? _IconChevron2 || (_IconChevron2 = /*#__PURE__*/_jsx(IconChevron, {
    direction: "right"
  })) : null)));
};

PageNav.displayName = "PageNav";
var tabletButtonSpacing = 'xxsmall';

var Page = function Page(_ref2) {
  var number = _ref2.number,
      current = _ref2.current;
  var parentBackground = useBackground();
  return /*#__PURE__*/_jsx(Box, {
    component: "span",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "touchable",
    width: "touchable",
    position: "relative",
    className: styles.hover
  }, void 0, /*#__PURE__*/_jsx(Overlay, {
    component: "span",
    background: current ? 'formAccent' : 'selection',
    transition: current ? undefined : 'fast',
    borderRadius: "standard",
    className: [styles.background, current ? styles.current : undefined]
  }), /*#__PURE__*/_jsx(Overlay, {
    component: "span",
    borderRadius: "standard",
    boxShadow: "borderFormAccent",
    className: parentBackground !== 'card' && current ? styles.currentKeyline : undefined
  }), /*#__PURE__*/_jsx(Box, {
    component: "span",
    zIndex: 1,
    userSelect: "none"
  }, void 0, /*#__PURE__*/_jsx(Text, {
    baseline: false,
    align: "center",
    weight: current ? 'medium' : undefined,
    tone: current ? 'formAccent' : undefined
  }, void 0, number)));
};

Page.displayName = "Page";
export var Pagination = function Pagination(_ref3) {
  var page = _ref3.page,
      total = _ref3.total,
      linkProps = _ref3.linkProps,
      label = _ref3.label,
      _ref3$pageLabel = _ref3.pageLabel,
      pageLabel = _ref3$pageLabel === void 0 ? function (p) {
    return "Go to page ".concat(p);
  } : _ref3$pageLabel,
      _ref3$nextLabel = _ref3.nextLabel,
      nextLabel = _ref3$nextLabel === void 0 ? 'Next' : _ref3$nextLabel,
      _ref3$previousLabel = _ref3.previousLabel,
      previousLabel = _ref3$previousLabel === void 0 ? 'Previous' : _ref3$previousLabel,
      data = _ref3.data;
  assert(total >= 1, "`total` must be at least 1");
  assert(page >= 1 && page <= total, "`page` must be between 1 and ".concat(total));
  var pages = paginate({
    page: page,
    total: total
  });
  var showPrevious = page > 1;
  var showNext = page < total;
  return /*#__PURE__*/React.createElement(Box, _extends({
    component: "nav",
    "aria-label": label
  }, data ? buildDataAttributes(data) : undefined), /*#__PURE__*/_jsx(Box, {
    component: "ul",
    display: "flex",
    justifyContent: "center"
  }, void 0, showPrevious ? /*#__PURE__*/_jsx(Box, {
    component: "li",
    paddingRight: ['medium', tabletButtonSpacing]
  }, void 0, /*#__PURE__*/React.createElement(Link, _extends({}, linkProps({
    page: page - 1,
    type: 'previous'
  }), {
    rel: "prev",
    "aria-label": previousLabel,
    title: previousLabel
  }), /*#__PURE__*/_jsx(PageNav, {
    label: previousLabel,
    direction: "prev"
  }))) : null, pages.map(function (pageNumber, index) {
    var current = page === pageNumber;
    return /*#__PURE__*/_jsx(Box, {
      component: "li",
      display: !current ? ['none', 'block'] : undefined,
      paddingRight: ['none', pages.length - 1 === index ? 'none' : tabletButtonSpacing]
    }, pageNumber, /*#__PURE__*/React.createElement(Link, _extends({}, linkProps({
      page: pageNumber,
      type: 'pageNumber'
    }), {
      "aria-label": pageLabel(pageNumber),
      "aria-current": current ? 'page' : undefined,
      title: pageLabel(pageNumber)
    }), /*#__PURE__*/_jsx(Page, {
      number: pageNumber,
      current: current
    })));
  }), showNext ? /*#__PURE__*/_jsx(Box, {
    component: "li",
    paddingLeft: ['medium', tabletButtonSpacing]
  }, void 0, /*#__PURE__*/React.createElement(Link, _extends({}, linkProps({
    page: page + 1,
    type: 'next'
  }), {
    rel: "next",
    "aria-label": nextLabel,
    title: nextLabel
  }), /*#__PURE__*/_jsx(PageNav, {
    label: nextLabel,
    direction: "next"
  }))) : null));
};
Pagination.displayName = "Pagination";