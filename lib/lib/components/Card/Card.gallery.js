import _jsx from "@babel/runtime/helpers/jsx";

var _Card, _Stack, _Stack2, _Stack3, _Stack4;

import React from 'react';
import { Card, Text, Stack, Tiles } from '../';
import source from '../../utils/source.macro';
import { Placeholder } from '../../playroom/components';
export var galleryItems = [{
  label: 'Standard',
  Example: function Example() {
    return source(_Card || (_Card = /*#__PURE__*/_jsx(Card, {}, void 0, /*#__PURE__*/_jsx(Placeholder, {
      height: 100
    }))));
  }
}, {
  label: 'Tones',
  Example: function Example() {
    return source( /*#__PURE__*/_jsx(Tiles, {
      space: "large",
      columns: {
        mobile: 1,
        tablet: 2
      }
    }, void 0, _Stack || (_Stack = /*#__PURE__*/_jsx(Stack, {
      space: "small"
    }, void 0, /*#__PURE__*/_jsx(Text, {
      size: "xsmall",
      tone: "secondary"
    }, void 0, "PROMOTE"), /*#__PURE__*/_jsx(Card, {
      tone: "promote"
    }, void 0, /*#__PURE__*/_jsx(Placeholder, {
      height: 100
    })))), _Stack2 || (_Stack2 = /*#__PURE__*/_jsx(Stack, {
      space: "small"
    }, void 0, /*#__PURE__*/_jsx(Text, {
      size: "xsmall",
      tone: "secondary"
    }, void 0, "FORMACCENT"), /*#__PURE__*/_jsx(Card, {
      tone: "formAccent"
    }, void 0, /*#__PURE__*/_jsx(Placeholder, {
      height: 100
    }))))));
  }
}, {
  label: 'Rounded corners',
  Example: function Example() {
    return source( /*#__PURE__*/_jsx(Tiles, {
      space: "large",
      columns: {
        mobile: 1,
        tablet: 2
      }
    }, void 0, _Stack3 || (_Stack3 = /*#__PURE__*/_jsx(Stack, {
      space: "small"
    }, void 0, /*#__PURE__*/_jsx(Text, {
      size: "xsmall",
      tone: "secondary"
    }, void 0, "DEFAULT"), /*#__PURE__*/_jsx(Card, {}, void 0, /*#__PURE__*/_jsx(Placeholder, {
      height: 100
    })))), _Stack4 || (_Stack4 = /*#__PURE__*/_jsx(Stack, {
      space: "small"
    }, void 0, /*#__PURE__*/_jsx(Text, {
      size: "xsmall",
      tone: "secondary"
    }, void 0, "ROUNDED"), /*#__PURE__*/_jsx(Card, {
      rounded: true
    }, void 0, /*#__PURE__*/_jsx(Placeholder, {
      height: 100
    }))))));
  }
}];