import _jsx from "@babel/runtime/helpers/jsx";

var _Heading, _Heading2, _Heading3, _Heading4, _Heading5, _Heading6, _Heading7, _Heading8, _Heading9, _br;

import React, { Fragment } from 'react';
import { heading as headingLevels } from '../../hooks/typography/typography.css';
import { Box, Heading, Stack } from '../';
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
    label: 'Level 1',
    Example: function Example() {
      return _Heading || (_Heading = /*#__PURE__*/_jsx(Heading, {
        level: "1"
      }, void 0, "Heading Level 1"));
    }
  }, {
    label: 'Level 1 Weak',
    Example: function Example() {
      return _Heading2 || (_Heading2 = /*#__PURE__*/_jsx(Heading, {
        level: "1",
        weight: "weak"
      }, void 0, "Heading Level 1 Weak"));
    }
  }, {
    label: 'Level 2',
    Example: function Example() {
      return _Heading3 || (_Heading3 = /*#__PURE__*/_jsx(Heading, {
        level: "2"
      }, void 0, "Heading Level 2"));
    }
  }, {
    label: 'Level 2 Weak',
    Example: function Example() {
      return _Heading4 || (_Heading4 = /*#__PURE__*/_jsx(Heading, {
        level: "2",
        weight: "weak"
      }, void 0, "Heading Level 2 Weak"));
    }
  }, {
    label: 'Level 3',
    Example: function Example() {
      return _Heading5 || (_Heading5 = /*#__PURE__*/_jsx(Heading, {
        level: "3"
      }, void 0, "Heading Level 3"));
    }
  }, {
    label: 'Level 3 Weak',
    Example: function Example() {
      return _Heading6 || (_Heading6 = /*#__PURE__*/_jsx(Heading, {
        level: "3",
        weight: "weak"
      }, void 0, "Heading Level 3 Weak"));
    }
  }, {
    label: 'Level 4',
    Example: function Example() {
      return _Heading7 || (_Heading7 = /*#__PURE__*/_jsx(Heading, {
        level: "4"
      }, void 0, "Heading Level 4"));
    }
  }, {
    label: 'Level 4 Weak',
    Example: function Example() {
      return _Heading8 || (_Heading8 = /*#__PURE__*/_jsx(Heading, {
        level: "4",
        weight: "weak"
      }, void 0, "Heading Level 4 Weak"));
    }
  }, {
    label: 'Truncate a long heading',
    Example: function Example() {
      return /*#__PURE__*/_jsx(Box, {
        style: {
          width: 160
        }
      }, void 0, _Heading9 || (_Heading9 = /*#__PURE__*/_jsx(Heading, {
        level: "2",
        truncate: true
      }, void 0, "Really long heading")));
    }
  }, {
    label: 'Heading Spacing',
    background: 'card',
    Example: function Example() {
      var levels = Object.keys(headingLevels);
      return /*#__PURE__*/_jsx(Stack, {
        space: "medium"
      }, void 0, levels.sort().map(function (level) {
        return /*#__PURE__*/_jsx(Box, {
          background: "neutralLight"
        }, level, /*#__PURE__*/_jsx(Heading, {
          level: level
        }, void 0, "Level ", level, " Heading (Line 1)", _br || (_br = /*#__PURE__*/_jsx("br", {})), "Level ", level, " Heading (Line 2)"));
      }));
    }
  }, {
    label: 'Heading Alignment',
    Container: Container,
    Example: function Example() {
      return /*#__PURE__*/_jsx(Stack, {
        space: "medium"
      }, void 0, textAlignments.map(function (alignment) {
        return /*#__PURE__*/_jsx(Heading, {
          level: "4",
          align: alignment
        }, alignment, alignment);
      }));
    }
  }, {
    label: 'Heading Alignment (responsive)',
    Container: Container,
    Example: function Example() {
      return /*#__PURE__*/_jsx(Heading, {
        level: "4",
        align: ['right', 'center', 'left']
      }, void 0, "Right aligned mobile, center on tablet, left on desktop");
    }
  }, {
    label: 'Heading Contrast',
    Container: Container,
    Example: function Example() {
      return /*#__PURE__*/_jsx(Fragment, {}, void 0, backgrounds.map(function (background) {
        return /*#__PURE__*/_jsx(Box, {
          background: background,
          paddingY: "xsmall"
        }, background, /*#__PURE__*/_jsx(Heading, {
          level: "4"
        }, void 0, background));
      }));
    }
  }]
};