import _jsx from "@babel/runtime/helpers/jsx";

var _Pagination, _Pagination2, _Pagination3, _Pagination4, _Pagination5, _Pagination6, _Pagination7, _Pagination8, _Pagination9;

import React from 'react';
import { Pagination } from '../';
import { maxPages } from './paginate';

var linkProps = function linkProps() {
  return {
    href: '#'
  };
};

export var screenshots = {
  screenshotWidths: [320, 768],
  examples: [{
    label: "First page, where total < ".concat(maxPages),
    Example: function Example() {
      return _Pagination || (_Pagination = /*#__PURE__*/_jsx(Pagination, {
        label: "Label",
        page: 1,
        total: maxPages - 3,
        linkProps: linkProps
      }));
    }
  }, {
    label: "First page, where total = ".concat(maxPages),
    Example: function Example() {
      return _Pagination2 || (_Pagination2 = /*#__PURE__*/_jsx(Pagination, {
        label: "Label",
        page: 1,
        total: maxPages,
        linkProps: linkProps
      }));
    }
  }, {
    label: "First page, where total > ".concat(maxPages),
    Example: function Example() {
      return _Pagination3 || (_Pagination3 = /*#__PURE__*/_jsx(Pagination, {
        label: "Label",
        page: 1,
        total: maxPages + 3,
        linkProps: linkProps
      }));
    }
  }, {
    label: "Center page, where total < ".concat(maxPages),
    Example: function Example() {
      return /*#__PURE__*/_jsx(Pagination, {
        label: "Label",
        page: Math.round((maxPages - 3) / 2),
        total: maxPages - 3,
        linkProps: linkProps
      });
    }
  }, {
    label: "Center page, where total = ".concat(maxPages),
    Example: function Example() {
      return /*#__PURE__*/_jsx(Pagination, {
        label: "Label",
        page: Math.round(maxPages / 2),
        total: maxPages,
        linkProps: linkProps
      });
    }
  }, {
    label: "Center page, where total > ".concat(maxPages),
    Example: function Example() {
      return /*#__PURE__*/_jsx(Pagination, {
        label: "Label",
        page: Math.round((maxPages + 3) / 2),
        total: maxPages + 3,
        linkProps: linkProps
      });
    }
  }, {
    label: "Last page, where total < ".concat(maxPages),
    Example: function Example() {
      return _Pagination4 || (_Pagination4 = /*#__PURE__*/_jsx(Pagination, {
        label: "Label",
        page: maxPages - 3,
        total: maxPages - 3,
        linkProps: linkProps
      }));
    }
  }, {
    label: "Last page, where total = ".concat(maxPages),
    Example: function Example() {
      return _Pagination5 || (_Pagination5 = /*#__PURE__*/_jsx(Pagination, {
        label: "Label",
        page: maxPages,
        total: maxPages,
        linkProps: linkProps
      }));
    }
  }, {
    label: "Last page, where total > ".concat(maxPages),
    Example: function Example() {
      return _Pagination6 || (_Pagination6 = /*#__PURE__*/_jsx(Pagination, {
        label: "Label",
        page: maxPages + 3,
        total: maxPages + 3,
        linkProps: linkProps
      }));
    }
  }, {
    label: "Second page, where total > ".concat(maxPages),
    Example: function Example() {
      return _Pagination7 || (_Pagination7 = /*#__PURE__*/_jsx(Pagination, {
        label: "Label",
        page: 2,
        total: maxPages + 3,
        linkProps: linkProps
      }));
    }
  }, {
    label: "Second last page, where total > ".concat(maxPages),
    Example: function Example() {
      return _Pagination8 || (_Pagination8 = /*#__PURE__*/_jsx(Pagination, {
        label: "Label",
        page: maxPages + 3 - 1,
        total: maxPages + 3,
        linkProps: linkProps
      }));
    }
  }, {
    label: 'On a card background',
    background: 'card',
    Example: function Example() {
      return _Pagination9 || (_Pagination9 = /*#__PURE__*/_jsx(Pagination, {
        label: "Label",
        page: 1,
        total: maxPages - 3,
        linkProps: linkProps
      }));
    }
  }]
};