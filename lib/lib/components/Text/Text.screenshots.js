import _jsx from "@babel/runtime/helpers/jsx";

var _Text, _Text2, _Text3, _Text4, _Stack, _br, _IconPositive, _Column;

import React, { Fragment } from 'react';
import { titleCase } from 'title-case';
import { Box, Text, Stack, Column, Columns, IconPositive } from '../';
import { text as textSizes } from '../../hooks/typography/typography.css';
import { backgrounds, textAlignments } from '../../utils/docsHelpers';

var Container = function Container(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_jsx("div", {
    style: {
      maxWidth: '300px'
    }
  }, void 0, children);
};

Container.displayName = "Container";
export var screenshots = {
  screenshotWidths: [320, 768],
  examples: [{
    label: 'Standard Text',
    Example: function Example() {
      return _Text || (_Text = /*#__PURE__*/_jsx(Text, {}, void 0, "Standard text."));
    }
  }, {
    label: 'Small Text',
    Example: function Example() {
      return _Text2 || (_Text2 = /*#__PURE__*/_jsx(Text, {
        size: "small"
      }, void 0, "Small text."));
    }
  }, {
    label: 'Large Text',
    Example: function Example() {
      return _Text3 || (_Text3 = /*#__PURE__*/_jsx(Text, {
        size: "large"
      }, void 0, "Large text."));
    }
  }, {
    label: 'Truncating long text',
    Example: function Example() {
      return /*#__PURE__*/_jsx(Box, {
        style: {
          width: 90
        }
      }, void 0, _Text4 || (_Text4 = /*#__PURE__*/_jsx(Text, {
        truncate: true
      }, void 0, "Long piece of text")));
    }
  }, {
    label: 'Text on Brand Background',
    background: 'brand',
    Container: Container,
    Example: function Example() {
      return _Stack || (_Stack = /*#__PURE__*/_jsx(Stack, {
        space: "small"
      }, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, "Neutral text"), /*#__PURE__*/_jsx(Text, {
        tone: "secondary"
      }, void 0, "Secondary text")));
    }
  }, {
    label: 'Text Alignment',
    Container: Container,
    Example: function Example() {
      return /*#__PURE__*/_jsx(Stack, {
        space: "medium"
      }, void 0, textAlignments.map(function (alignment) {
        return /*#__PURE__*/_jsx(Text, {
          align: alignment
        }, alignment, titleCase(alignment));
      }));
    }
  }, {
    label: 'Text Alignment (responsive)',
    Container: Container,
    Example: function Example() {
      return /*#__PURE__*/_jsx(Text, {
        align: ['right', 'center', 'left']
      }, void 0, "Right aligned mobile, center on tablet, left on desktop");
    }
  }, {
    label: 'Text Spacing',
    background: 'card',
    Container: Container,
    Example: function Example() {
      var sizes = Object.keys(textSizes);
      return /*#__PURE__*/_jsx(Stack, {
        space: "medium"
      }, void 0, sizes.sort().map(function (size) {
        return /*#__PURE__*/_jsx(Box, {
          background: "neutralLight"
        }, size, /*#__PURE__*/_jsx(Text, {
          size: size
        }, void 0, titleCase(size), " Text (Line 1)", _br || (_br = /*#__PURE__*/_jsx("br", {})), titleCase(size), " Text (Line 2)"));
      }));
    }
  }, {
    label: 'Text Contrast',
    Container: Container,
    Example: function Example() {
      return /*#__PURE__*/_jsx(Fragment, {}, void 0, backgrounds.map(function (background) {
        return /*#__PURE__*/_jsx(Box, {
          background: background,
          padding: "xsmall"
        }, background, /*#__PURE__*/_jsx(Columns, {
          space: "medium"
        }, void 0, /*#__PURE__*/_jsx(Column, {}, void 0, /*#__PURE__*/_jsx(Text, {
          size: "small"
        }, void 0, background, " ", _IconPositive || (_IconPositive = /*#__PURE__*/_jsx(IconPositive, {})))), _Column || (_Column = /*#__PURE__*/_jsx(Column, {
          width: "content"
        }, void 0, /*#__PURE__*/_jsx(Text, {
          size: "small",
          tone: "secondary"
        }, void 0, "Secondary ", /*#__PURE__*/_jsx(IconPositive, {}))))));
      }));
    }
  }]
};