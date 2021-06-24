import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _jsx from "@babel/runtime/helpers/jsx";

let _style;

function ownKeys(object, enumerableOnly) { const keys = Object.keys(object); if (Object.getOwnPropertySymbols) { let symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (let i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { Fragment } from 'react';
import { storiesOf } from 'sku/@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { uniq, flatten, values } from 'lodash';
import '../../reset';
import * as themes from '../themes';
import { PlayroomStateProvider } from '../playroom/playroomState';
import { useSourceFromExample } from '../utils/useSourceFromExample';
import { BraidProvider, ToastProvider, Box } from '../components';
const webFontLinkTags = uniq(flatten(values(themes).map(function (theme) {
  return theme.webFonts;
})).map(function (font) {
  return font.linkTag;
})).join('');
document.head.innerHTML += webFontLinkTags;

const DefaultContainer = function DefaultContainer(_ref) {
  const children = _ref.children;
  return /* #__PURE__*/_jsx(Fragment, {}, void 0, children);
};

DefaultContainer.displayName = "DefaultContainer";

const getComponentName = function getComponentName(filename) {
  const matches = filename.match(/([a-zA-Z]+)(?:\.docs|\.screenshots)\.tsx?$/);

  if (!matches) {
    throw new Error("Expected file name ending in .docs.tsx or .screenshots.tsx, got ".concat(filename));
  }

  return matches[1];
};

const RenderExample = function RenderExample(_ref2) {
  const example = _ref2.example;
  const label = example.label,
      _example$Container = example.Container,
      Container = _example$Container === void 0 ? DefaultContainer : _example$Container,
      _example$background = example.background,
      background = _example$background === void 0 ? 'body' : _example$background;

  const _useSourceFromExample = useSourceFromExample('id', example),
      value = _useSourceFromExample.value;

  return /* #__PURE__*/_jsx("div", {
    style: {
      minHeight: 300,
      paddingBottom: 32,
      overflow: 'hidden'
    }
  }, void 0, /* #__PURE__*/_jsx("h4", {
    style: {
      margin: 0,
      marginBottom: 18,
      padding: 0,
      fontSize: 14,
      fontFamily: 'arial',
      color: '#ccc'
    }
  }, void 0, label), /* #__PURE__*/_jsx(Box, {
    background,
    style: {
      padding: 12
    }
  }, void 0, /* #__PURE__*/_jsx(Container, {}, void 0, value)), /* #__PURE__*/_jsx("div", {
    style: {
      paddingTop: 18
    }
  }, void 0, /* #__PURE__*/_jsx("hr", {
    style: {
      margin: 0,
      border: 0,
      height: 1,
      background: '#eee'
    }
  })));
};

RenderExample.displayName = "RenderExample";
const allStories = {};
/* New standalone screenshot format */

const storiesFromScreenshots = require.context('../components', true, /\.screenshots\.tsx?$/);

storiesFromScreenshots.keys().forEach(function (filename) {
  const componentName = getComponentName(filename);
  allStories[componentName] = storiesFromScreenshots(filename).screenshots;
});
Object.keys(allStories).sort(function (a, b) {
  return a.localeCompare(b);
}).forEach(function (componentName) {
  const stories = storiesOf(componentName, module);
  const docs = allStories[componentName];
  const storyThemes = values(themes).filter(function (theme) {
    if (theme.name === 'docs') {
      return false;
    }

    return docs.screenshotOnlyInWireframe ? theme.name === 'wireframe' : theme.name !== 'wireframe';
  });
  storyThemes.forEach(function (theme) {
    const storyConfig = {
      chromatic: {
        viewports: docs.screenshotWidths
      }
    };

    const renderStory = function renderStory() {
      return /* #__PURE__*/_jsx(BrowserRouter, {}, void 0, /* #__PURE__*/_jsx(BraidProvider, {
        theme
      }, void 0, /* #__PURE__*/_jsx(ToastProvider, {}, void 0, _style || (_style = /* #__PURE__*/_jsx("style", {
        type: "text/css"
      }, void 0, "\n              .noAnimation * {\n                animation-delay: -0.0001s !important;\n                animation-duration: 0s !important;\n                animation-play-state: paused !important;\n              }")), /* #__PURE__*/_jsx("div", {
        className: "noAnimation",
        style: {
          background: 'white'
        }
      }, void 0, docs.examples.map(function (example, i) {
        let _example$label;

        return /* #__PURE__*/_jsx(PlayroomStateProvider, {}, i, /* #__PURE__*/_jsx(RenderExample, {
          example: _objectSpread(_objectSpread({}, example), {}, {
            label: (_example$label = example.label) !== null && _example$label !== void 0 ? _example$label : componentName
          })
        }));
      })))));
    };

    stories.add(theme.name, renderStory, storyConfig);
  });
});