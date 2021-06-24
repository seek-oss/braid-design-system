import _jsx from "@babel/runtime/helpers/jsx";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["href", "onClick"];
import '../reset';
import React, { Fragment } from 'react';
import { BraidProvider, makeLinkComponent, ToastProvider } from '../components';
import { PlayroomStateProvider } from './playroomState';
var PlayroomLink = makeLinkComponent(function (_ref, ref) {
  var href = _ref.href,
      _onClick = _ref.onClick,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("a", _extends({
    ref: ref,
    href: href !== null && href !== void 0 ? href : '#',
    onClick: function onClick(e) {
      if (!href) {
        e.preventDefault();
      }

      if (_onClick) {
        _onClick(e);
      }
    }
  }, restProps));
});
export default (function (_ref2) {
  var theme = _ref2.theme,
      children = _ref2.children;
  return /*#__PURE__*/_jsx(Fragment, {}, void 0, /*#__PURE__*/_jsx("div", {
    dangerouslySetInnerHTML: {
      __html: theme.webFonts.map(function (font) {
        return font.linkTag;
      }).join('')
    }
  }), /*#__PURE__*/_jsx(PlayroomStateProvider, {}, void 0, /*#__PURE__*/_jsx(BraidProvider, {
    theme: theme,
    linkComponent: PlayroomLink
  }, void 0, /*#__PURE__*/_jsx(ToastProvider, {}, void 0, /*#__PURE__*/_jsx(Fragment, {}, void 0, children)))));
});