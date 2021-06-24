import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _jsx from "@babel/runtime/helpers/jsx";

var _IconSearch, _TextLink, _IconPhone;

import React, { useState } from 'react';
import { IconSearch, IconPhone, TextField, TextLink } from '../';

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
    label: 'TextField',
    Container: Container,
    Example: function Example(_ref2) {
      var id = _ref2.id,
          handler = _ref2.handler;
      return /*#__PURE__*/_jsx(TextField, {
        label: "Job Title",
        id: id,
        onChange: handler,
        value: "Senior Developer"
      });
    }
  }, {
    label: 'TextField with default padding',
    Container: Container,
    Example: function Example(_ref3) {
      var id = _ref3.id,
          handler = _ref3.handler;
      return /*#__PURE__*/_jsx(TextField, {
        label: "Job Title",
        id: id,
        onChange: handler,
        value: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
      });
    }
  }, {
    label: 'TextField with clear button',
    Container: Container,
    Example: function Example(_ref4) {
      var id = _ref4.id;

      var _useState = useState('Clear me'),
          _useState2 = _slicedToArray(_useState, 2),
          value = _useState2[0],
          setValue = _useState2[1];

      return /*#__PURE__*/_jsx(TextField, {
        label: "Job Title",
        id: id,
        onChange: function onChange(e) {
          return setValue(e.currentTarget.value);
        },
        onClear: function onClear() {
          return setValue('');
        },
        value: value
      });
    }
  }, {
    label: 'TextField with icon',
    Container: Container,
    Example: function Example(_ref5) {
      var id = _ref5.id;

      var _useState3 = useState(''),
          _useState4 = _slicedToArray(_useState3, 2),
          value = _useState4[0],
          setValue = _useState4[1];

      return /*#__PURE__*/_jsx(TextField, {
        label: "Job Title",
        id: id,
        icon: _IconSearch || (_IconSearch = /*#__PURE__*/_jsx(IconSearch, {})),
        placeholder: "Enter a job title",
        onChange: function onChange(e) {
          return setValue(e.currentTarget.value);
        },
        value: value
      });
    }
  }, {
    label: 'TextField with clear button padding',
    Container: Container,
    Example: function Example(_ref6) {
      var id = _ref6.id,
          handler = _ref6.handler;
      return /*#__PURE__*/_jsx(TextField, {
        label: "Job Title",
        id: id,
        onChange: handler,
        onClear: handler,
        value: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
      });
    }
  }, {
    label: 'TextField with message',
    Container: Container,
    Example: function Example(_ref7) {
      var id = _ref7.id,
          handler = _ref7.handler;
      return /*#__PURE__*/_jsx(TextField, {
        label: "Job Title",
        id: id,
        value: "",
        message: "e.g. Senior Developer",
        onChange: handler
      });
    }
  }, {
    label: 'TextField with secondary label',
    Container: Container,
    Example: function Example(_ref8) {
      var id = _ref8.id,
          handler = _ref8.handler;
      return /*#__PURE__*/_jsx(TextField, {
        label: "Title",
        secondaryLabel: "Optional",
        id: id,
        value: "",
        onChange: handler
      });
    }
  }, {
    label: 'TextField with tertiary label',
    Container: Container,
    Example: function Example(_ref9) {
      var id = _ref9.id,
          handler = _ref9.handler;
      return /*#__PURE__*/_jsx(TextField, {
        label: "Title",
        secondaryLabel: "Optional",
        tertiaryLabel: _TextLink || (_TextLink = /*#__PURE__*/_jsx(TextLink, {
          href: "#"
        }, void 0, "Help?")),
        id: id,
        value: "",
        onChange: handler
      });
    }
  }, {
    label: 'TextField with description',
    Container: Container,
    Example: function Example(_ref10) {
      var id = _ref10.id,
          handler = _ref10.handler;
      return /*#__PURE__*/_jsx(TextField, {
        label: "Title",
        secondaryLabel: "Optional",
        description: "Longer description of this field",
        id: id,
        value: "",
        onChange: handler
      });
    }
  }, {
    label: 'TextField with error',
    Container: Container,
    Example: function Example(_ref11) {
      var id = _ref11.id,
          handler = _ref11.handler;
      return /*#__PURE__*/_jsx(TextField, {
        label: "Do you like Braid?",
        tone: "critical",
        id: id,
        value: "No",
        message: "Answer is incorrect",
        onChange: handler
      });
    }
  }, {
    label: 'TextField with postive message',
    Container: Container,
    Example: function Example(_ref12) {
      var id = _ref12.id,
          handler = _ref12.handler;
      return /*#__PURE__*/_jsx(TextField, {
        label: "Do you like Braid?",
        id: id,
        value: "Yes",
        message: "Nice one!",
        tone: "positive",
        onChange: handler
      });
    }
  }, {
    label: 'TextField on Brand Background',
    background: 'brand',
    Container: Container,
    Example: function Example(_ref13) {
      var id = _ref13.id,
          handler = _ref13.handler;
      return /*#__PURE__*/_jsx(TextField, {
        label: "Job Title",
        id: id,
        onChange: handler,
        value: "Senior Developer"
      });
    }
  }, {
    label: 'TextField with prefix',
    Container: Container,
    Example: function Example(_ref14) {
      var id = _ref14.id,
          handler = _ref14.handler;
      return /*#__PURE__*/_jsx(TextField, {
        label: "Amount",
        id: id,
        onChange: handler,
        prefix: "AUD $",
        value: "1000"
      });
    }
  }, {
    label: 'TextField with icon and prefix',
    Container: Container,
    Example: function Example(_ref15) {
      var id = _ref15.id,
          handler = _ref15.handler;
      return /*#__PURE__*/_jsx(TextField, {
        label: "Phone number",
        id: id,
        onChange: handler,
        icon: _IconPhone || (_IconPhone = /*#__PURE__*/_jsx(IconPhone, {})),
        prefix: "+61",
        value: "411 111 111"
      });
    }
  }]
};