import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _jsx from "@babel/runtime/helpers/jsx";

var _TextLink;

import React, { useState } from 'react';
import { Textarea, TextLink } from '../';

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
  screenshotWidths: [320],
  examples: [{
    label: 'Textarea',
    Container: Container,
    Example: function Example(_ref2) {
      var id = _ref2.id,
          handler = _ref2.handler;
      return /*#__PURE__*/_jsx(Textarea, {
        id: id,
        value: "Senior Developer",
        onChange: handler,
        label: "Job Title"
      });
    }
  }, {
    label: 'Textarea with message',
    Container: Container,
    Example: function Example(_ref3) {
      var id = _ref3.id,
          handler = _ref3.handler;
      return /*#__PURE__*/_jsx(Textarea, {
        id: id,
        value: "",
        onChange: handler,
        label: "Job Title",
        message: "e.g. Senior Developer"
      });
    }
  }, {
    label: 'Textarea with secondary label',
    Container: Container,
    Example: function Example(_ref4) {
      var id = _ref4.id,
          handler = _ref4.handler;
      return /*#__PURE__*/_jsx(Textarea, {
        id: id,
        value: "",
        onChange: handler,
        label: "Title",
        secondaryLabel: "Optional"
      });
    }
  }, {
    label: 'Textarea with tertiary label',
    Container: Container,
    Example: function Example(_ref5) {
      var id = _ref5.id,
          handler = _ref5.handler;
      return /*#__PURE__*/_jsx(Textarea, {
        id: id,
        value: "",
        onChange: handler,
        label: "Title",
        secondaryLabel: "Optional",
        tertiaryLabel: _TextLink || (_TextLink = /*#__PURE__*/_jsx(TextLink, {
          href: "#"
        }, void 0, "Help?"))
      });
    }
  }, {
    label: 'Textarea with error',
    Container: Container,
    Example: function Example(_ref6) {
      var id = _ref6.id,
          handler = _ref6.handler;
      return /*#__PURE__*/_jsx(Textarea, {
        id: id,
        value: "No",
        onChange: handler,
        label: "Do you like Braid?",
        message: "Answer is incorrect",
        tone: "critical"
      });
    }
  }, {
    label: 'Textarea with positive message',
    Container: Container,
    Example: function Example(_ref7) {
      var id = _ref7.id,
          handler = _ref7.handler;
      return /*#__PURE__*/_jsx(Textarea, {
        id: id,
        value: "Yes",
        onChange: handler,
        label: "Do you like Braid?",
        message: "Nice one!",
        tone: "positive"
      });
    }
  }, {
    label: 'Textarea grow field with typing, limited to 6 lines',
    Container: Container,
    Example: function Example(_ref8) {
      var id = _ref8.id;

      var _useState = useState(''),
          _useState2 = _slicedToArray(_useState, 2),
          value = _useState2[0],
          setValue = _useState2[1];

      return /*#__PURE__*/_jsx(Textarea, {
        id: id,
        value: value,
        onChange: function onChange(e) {
          return setValue(e.currentTarget.value);
        },
        label: "Do you like Braid?",
        lineLimit: 6
      });
    }
  }, {
    label: 'Textarea nearing character limit',
    Container: Container,
    Example: function Example(_ref9) {
      var id = _ref9.id;

      var _useState3 = useState('The text is nearing the 50 character limit'),
          _useState4 = _slicedToArray(_useState3, 2),
          value = _useState4[0],
          setValue = _useState4[1];

      return /*#__PURE__*/_jsx(Textarea, {
        id: id,
        value: value,
        onChange: function onChange(e) {
          return setValue(e.currentTarget.value);
        },
        label: "Do you like Braid?",
        characterLimit: 50
      });
    }
  }, {
    label: 'Textarea exceeding character limit',
    Container: Container,
    Example: function Example(_ref10) {
      var id = _ref10.id;

      var _useState5 = useState('12345678910 The character limit is 9 so the highlighting should start from "10"'),
          _useState6 = _slicedToArray(_useState5, 2),
          value = _useState6[0],
          setValue = _useState6[1];

      return /*#__PURE__*/_jsx(Textarea, {
        id: id,
        value: value,
        onChange: function onChange(e) {
          return setValue(e.currentTarget.value);
        },
        label: "Do you like Braid?",
        characterLimit: 9
      });
    }
  }, {
    label: 'Textarea highlighting a range',
    Container: Container,
    Example: function Example(_ref11) {
      var id = _ref11.id;

      var _useState7 = useState('The long piece of text highlighting a range'),
          _useState8 = _slicedToArray(_useState7, 2),
          value = _useState8[0],
          setValue = _useState8[1];

      return /*#__PURE__*/_jsx(Textarea, {
        id: id,
        value: value,
        onChange: function onChange(e) {
          return setValue(e.currentTarget.value);
        },
        label: "Do you like Braid?",
        description: "Characters 9-22 are invalid",
        highlightRanges: [{
          start: 9,
          end: 22
        }]
      });
    }
  }, {
    label: 'Textarea highlighting a while range exceeding character limit',
    Container: Container,
    Example: function Example(_ref12) {
      var id = _ref12.id;

      var _useState9 = useState('The long piece of text exceeding the specified 50 character limit'),
          _useState10 = _slicedToArray(_useState9, 2),
          value = _useState10[0],
          setValue = _useState10[1];

      return /*#__PURE__*/_jsx(Textarea, {
        id: id,
        value: value,
        onChange: function onChange(e) {
          return setValue(e.currentTarget.value);
        },
        label: "Do you like Braid?",
        description: "Characters 9-22 are invalid",
        characterLimit: 50,
        highlightRanges: [{
          start: 9,
          end: 22
        }]
      });
    }
  }, {
    label: 'Textarea on Brand Background',
    background: 'brand',
    Container: Container,
    Example: function Example(_ref13) {
      var id = _ref13.id;

      var _useState11 = useState(''),
          _useState12 = _slicedToArray(_useState11, 2),
          value = _useState12[0],
          setValue = _useState12[1];

      return /*#__PURE__*/_jsx(Textarea, {
        label: "Do you like Braid?",
        id: id,
        onChange: function onChange(e) {
          return setValue(e.currentTarget.value);
        },
        value: value
      });
    }
  }]
};