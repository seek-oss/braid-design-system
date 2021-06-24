import _jsx from "@babel/runtime/helpers/jsx";

var _Placeholder, _Placeholder2, _Stack, _Placeholder3, _Placeholder4, _Placeholder5;

import React from 'react';
import source from '../../utils/source.macro';
import { Dialog, Button, Inline, Stack } from '../';
import { Placeholder } from '../../playroom/components';
import { DialogContent } from './Dialog';
export var galleryItems = [{
  label: 'Default layout',
  Example: function Example(_ref) {
    var id = _ref.id;
    return source( /*#__PURE__*/_jsx(DialogContent, {
      id: id,
      title: "Default test",
      onClose: function onClose() {},
      scrollLock: false
    }, void 0, _Placeholder || (_Placeholder = /*#__PURE__*/_jsx(Placeholder, {
      height: 100,
      width: "100%"
    }))));
  }
}, {
  label: 'Illustration layout',
  Example: function Example(_ref2) {
    var id = _ref2.id;
    return source( /*#__PURE__*/_jsx(DialogContent, {
      id: id,
      title: "Illustration test",
      illustration: _Placeholder2 || (_Placeholder2 = /*#__PURE__*/_jsx(Placeholder, {
        height: 150,
        width: 150,
        shape: "round",
        label: "Illustration"
      })),
      onClose: function onClose() {},
      scrollLock: false
    }, void 0, _Stack || (_Stack = /*#__PURE__*/_jsx(Stack, {
      space: "xlarge",
      align: "center"
    }, void 0, /*#__PURE__*/_jsx(Placeholder, {
      width: "100%",
      height: 100
    }), /*#__PURE__*/_jsx(Inline, {
      space: "small"
    }, void 0, /*#__PURE__*/_jsx(Placeholder, {
      height: 44,
      width: 80,
      label: "OK"
    }), /*#__PURE__*/_jsx(Placeholder, {
      height: 44,
      width: 80,
      label: "Cancel"
    }))))));
  }
}, {
  label: 'Layout with a description',
  Example: function Example(_ref3) {
    var id = _ref3.id;
    return source( /*#__PURE__*/_jsx(DialogContent, {
      id: id,
      title: "Description test",
      description: _Placeholder3 || (_Placeholder3 = /*#__PURE__*/_jsx(Placeholder, {
        height: "auto",
        width: "100%",
        label: "Description"
      })),
      onClose: function onClose() {},
      scrollLock: false
    }, void 0, _Placeholder4 || (_Placeholder4 = /*#__PURE__*/_jsx(Placeholder, {
      height: 100,
      width: "100%"
    }))));
  }
}, {
  label: 'Preview animation',
  Example: function Example(_ref4) {
    var getState = _ref4.getState,
        setState = _ref4.setState,
        resetState = _ref4.resetState;
    return source( /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/_jsx(Inline, {
      space: "small",
      align: "center"
    }, void 0, /*#__PURE__*/_jsx(Button, {
      onClick: function onClick() {
        return setState('width', 'xsmall');
      }
    }, void 0, "Open xsmall"), /*#__PURE__*/_jsx(Button, {
      onClick: function onClick() {
        return setState('width', 'small');
      }
    }, void 0, "Open small"), /*#__PURE__*/_jsx(Button, {
      onClick: function onClick() {
        return setState('width', 'medium');
      }
    }, void 0, "Open medium"), /*#__PURE__*/_jsx(Button, {
      onClick: function onClick() {
        return setState('width', 'large');
      }
    }, void 0, "Open large")), /*#__PURE__*/_jsx(Dialog, {
      id: "dialog-animation-example",
      title: "A \"".concat(getState('width'), "\" dialog"),
      width: getState('width'),
      open: getState('width'),
      onClose: function onClose() {
        return resetState('width');
      }
    }, void 0, _Placeholder5 || (_Placeholder5 = /*#__PURE__*/_jsx(Placeholder, {
      height: 200,
      width: "100%"
    })))));
  }
}];