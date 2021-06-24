import _extends from "@babel/runtime/helpers/extends";
import _jsx from "@babel/runtime/helpers/jsx";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

var _path;

var _excluded = ["title", "titleId"];
import React from 'react';
export var IconLanguageSvg = function IconLanguageSvg(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    focusable: "false",
    fill: "currentColor",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/_jsx("title", {
    id: titleId
  }, void 0, title) : null, _path || (_path = /*#__PURE__*/_jsx("path", {
    d: "M20.784 18.593a10.917 10.917 0 000-13.186.995.995 0 00-.094-.126 10.96 10.96 0 00-17.38 0 .99.99 0 00-.094.126 10.917 10.917 0 000 13.186.988.988 0 00.094.126 10.96 10.96 0 0017.38 0 .993.993 0 00.094-.126zM4.522 7h2.922a14.936 14.936 0 00-.902 4H3.06a8.942 8.942 0 011.463-4zm12.936 4a14.936 14.936 0 00-.902-4h2.922a8.942 8.942 0 011.463 4zM4.522 17a8.942 8.942 0 01-1.463-4h3.483a14.936 14.936 0 00.902 4zm4.028-4h6.9a13.453 13.453 0 01-1.058 4H9.608a13.453 13.453 0 01-1.058-4zm0-2a13.453 13.453 0 011.058-4h4.784a13.453 13.453 0 011.058 4zm7.12-6a20.175 20.175 0 00-.882-1.553A8.988 8.988 0 0117.645 5zM12 3l.028.001A17.948 17.948 0 0113.382 5h-2.764a17.948 17.948 0 011.354-1.999zM8.33 5H6.355a8.988 8.988 0 012.857-1.553c-.287.456-.587.977-.882 1.553zm0 14c.295.576.595 1.097.882 1.553A8.988 8.988 0 016.355 19zM12 21l-.028-.001A17.948 17.948 0 0110.618 19h2.764a17.948 17.948 0 01-1.354 1.999zm3.67-2h1.975a8.988 8.988 0 01-2.857 1.553c.287-.456.587-.977.882-1.553zm.886-2a14.936 14.936 0 00.902-4h3.483a8.942 8.942 0 01-1.463 4z"
  })));
};
IconLanguageSvg.displayName = "IconLanguageSvg";