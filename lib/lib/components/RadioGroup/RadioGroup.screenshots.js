import _jsx from "@babel/runtime/helpers/jsx";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";

var _RadioItem, _RadioItem2, _RadioItem3, _RadioItem4, _RadioItem5, _RadioItem6, _RadioItem7, _RadioItem8, _RadioItem9, _RadioItem10, _RadioItem11, _RadioItem12, _RadioItem13, _RadioItem14, _RadioItem15, _RadioItem16, _RadioItem17, _RadioItem18, _RadioItem19, _RadioItem20, _RadioItem21, _RadioItem22, _RadioItem23, _RadioItem24, _RadioItem25, _RadioItem26, _RadioItem27, _RadioItem28, _RadioItem29, _RadioItem30, _RadioItem31, _RadioItem32;

import React, { useState } from 'react';
import { RadioGroup, RadioItem } from '..';
import { Placeholder } from '../../playroom/components';
export var screenshots = {
  screenshotWidths: [320],
  examples: [{
    label: 'Default',
    Example: function Example() {
      var _useState = useState(''),
          _useState2 = _slicedToArray(_useState, 2),
          state = _useState2[0],
          setState = _useState2[1];

      return /*#__PURE__*/_jsx(RadioGroup, {
        id: "radiolist1",
        value: state,
        onChange: function onChange(e) {
          return setState(e.currentTarget.value);
        },
        label: "Experience"
      }, void 0, _RadioItem || (_RadioItem = /*#__PURE__*/_jsx(RadioItem, {
        label: "Less than one year",
        value: "0"
      })), _RadioItem2 || (_RadioItem2 = /*#__PURE__*/_jsx(RadioItem, {
        label: "1 year",
        value: "1"
      })), _RadioItem3 || (_RadioItem3 = /*#__PURE__*/_jsx(RadioItem, {
        label: "2 years",
        value: "2"
      })), _RadioItem4 || (_RadioItem4 = /*#__PURE__*/_jsx(RadioItem, {
        label: "3+ years ",
        value: "3"
      })));
    }
  }, {
    label: 'With selected item',
    Example: function Example(_ref) {
      var handler = _ref.handler;
      return /*#__PURE__*/_jsx(RadioGroup, {
        id: "radiolist2",
        value: "2",
        onChange: handler,
        label: "Experience"
      }, void 0, _RadioItem5 || (_RadioItem5 = /*#__PURE__*/_jsx(RadioItem, {
        label: "Less than one year",
        value: "0"
      })), _RadioItem6 || (_RadioItem6 = /*#__PURE__*/_jsx(RadioItem, {
        label: "1 year",
        value: "1"
      })), _RadioItem7 || (_RadioItem7 = /*#__PURE__*/_jsx(RadioItem, {
        label: "2 years",
        value: "2"
      })), _RadioItem8 || (_RadioItem8 = /*#__PURE__*/_jsx(RadioItem, {
        label: "3+ years ",
        value: "3"
      })));
    }
  }, {
    label: 'With description',
    Example: function Example() {
      var _useState3 = useState(''),
          _useState4 = _slicedToArray(_useState3, 2),
          state = _useState4[0],
          setState = _useState4[1];

      return /*#__PURE__*/_jsx(RadioGroup, {
        id: "radiolist3",
        value: state,
        onChange: function onChange(e) {
          return setState(e.currentTarget.value);
        },
        label: "Experience",
        description: "How many years have you been in this role?"
      }, void 0, _RadioItem9 || (_RadioItem9 = /*#__PURE__*/_jsx(RadioItem, {
        label: "Less than one year",
        value: "0"
      })), _RadioItem10 || (_RadioItem10 = /*#__PURE__*/_jsx(RadioItem, {
        label: "1 year",
        value: "1"
      })), _RadioItem11 || (_RadioItem11 = /*#__PURE__*/_jsx(RadioItem, {
        label: "2 years",
        value: "2"
      })), _RadioItem12 || (_RadioItem12 = /*#__PURE__*/_jsx(RadioItem, {
        label: "3+ years ",
        value: "3"
      })));
    }
  }, {
    label: 'With critical message',
    Example: function Example() {
      var _useState5 = useState(''),
          _useState6 = _slicedToArray(_useState5, 2),
          state = _useState6[0],
          setState = _useState6[1];

      return /*#__PURE__*/_jsx(RadioGroup, {
        id: "radiolist4",
        value: state,
        onChange: function onChange(e) {
          return setState(e.currentTarget.value);
        },
        label: "Experience",
        tone: "critical",
        message: "Required field"
      }, void 0, _RadioItem13 || (_RadioItem13 = /*#__PURE__*/_jsx(RadioItem, {
        label: "Less than one year",
        value: "0"
      })), _RadioItem14 || (_RadioItem14 = /*#__PURE__*/_jsx(RadioItem, {
        label: "1 year",
        value: "1"
      })), _RadioItem15 || (_RadioItem15 = /*#__PURE__*/_jsx(RadioItem, {
        label: "2 years",
        value: "2"
      })), _RadioItem16 || (_RadioItem16 = /*#__PURE__*/_jsx(RadioItem, {
        label: "3+ years ",
        value: "3"
      })));
    }
  }, {
    label: 'When disabled',
    Example: function Example() {
      var _useState7 = useState(''),
          _useState8 = _slicedToArray(_useState7, 2),
          state = _useState8[0],
          setState = _useState8[1];

      return /*#__PURE__*/_jsx(RadioGroup, {
        id: "radiolist5",
        value: state,
        onChange: function onChange(e) {
          return setState(e.currentTarget.value);
        },
        label: "Experience",
        disabled: true
      }, void 0, _RadioItem17 || (_RadioItem17 = /*#__PURE__*/_jsx(RadioItem, {
        label: "Less than one year",
        value: "0"
      })), _RadioItem18 || (_RadioItem18 = /*#__PURE__*/_jsx(RadioItem, {
        label: "1 year",
        value: "1"
      })), _RadioItem19 || (_RadioItem19 = /*#__PURE__*/_jsx(RadioItem, {
        label: "2 years",
        value: "2"
      })), _RadioItem20 || (_RadioItem20 = /*#__PURE__*/_jsx(RadioItem, {
        label: "3+ years ",
        value: "3"
      })));
    }
  }, {
    label: 'When disabled and critical',
    Example: function Example() {
      var _useState9 = useState(''),
          _useState10 = _slicedToArray(_useState9, 2),
          state = _useState10[0],
          setState = _useState10[1];

      return /*#__PURE__*/_jsx(RadioGroup, {
        id: "radiolist6",
        value: state,
        onChange: function onChange(e) {
          return setState(e.currentTarget.value);
        },
        label: "Experience",
        tone: "critical",
        message: "Required field",
        disabled: true
      }, void 0, _RadioItem21 || (_RadioItem21 = /*#__PURE__*/_jsx(RadioItem, {
        label: "Less than one year",
        value: "0"
      })), _RadioItem22 || (_RadioItem22 = /*#__PURE__*/_jsx(RadioItem, {
        label: "1 year",
        value: "1"
      })), _RadioItem23 || (_RadioItem23 = /*#__PURE__*/_jsx(RadioItem, {
        label: "2 years",
        value: "2"
      })), _RadioItem24 || (_RadioItem24 = /*#__PURE__*/_jsx(RadioItem, {
        label: "3+ years ",
        value: "3"
      })));
    }
  }, {
    label: 'With nested content visible only when checked',
    Example: function Example() {
      var _useState11 = useState('1'),
          _useState12 = _slicedToArray(_useState11, 2),
          state = _useState12[0],
          setState = _useState12[1];

      return /*#__PURE__*/_jsx(RadioGroup, {
        id: "radiolist7",
        value: state,
        onChange: function onChange(e) {
          return setState(e.currentTarget.value);
        },
        label: "Experience"
      }, void 0, _RadioItem25 || (_RadioItem25 = /*#__PURE__*/_jsx(RadioItem, {
        label: "Less than one year",
        value: "0"
      })), _RadioItem26 || (_RadioItem26 = /*#__PURE__*/_jsx(RadioItem, {
        label: "1 year",
        value: "1"
      }, void 0, /*#__PURE__*/_jsx(Placeholder, {
        height: 50,
        label: "Nested content"
      }))), _RadioItem27 || (_RadioItem27 = /*#__PURE__*/_jsx(RadioItem, {
        label: "2 years",
        value: "2"
      })), _RadioItem28 || (_RadioItem28 = /*#__PURE__*/_jsx(RadioItem, {
        label: "3+ years ",
        value: "3"
      })));
    }
  }, {
    label: 'Small',
    Example: function Example() {
      var _useState13 = useState(''),
          _useState14 = _slicedToArray(_useState13, 2),
          state = _useState14[0],
          setState = _useState14[1];

      return /*#__PURE__*/_jsx(RadioGroup, {
        id: "radiolistsmall",
        value: state,
        onChange: function onChange(e) {
          return setState(e.currentTarget.value);
        },
        label: "Experience",
        size: "small"
      }, void 0, _RadioItem29 || (_RadioItem29 = /*#__PURE__*/_jsx(RadioItem, {
        label: "Less than one year",
        value: "0"
      })), _RadioItem30 || (_RadioItem30 = /*#__PURE__*/_jsx(RadioItem, {
        label: "1 year",
        value: "1"
      })), _RadioItem31 || (_RadioItem31 = /*#__PURE__*/_jsx(RadioItem, {
        label: "2 years",
        value: "2"
      })), _RadioItem32 || (_RadioItem32 = /*#__PURE__*/_jsx(RadioItem, {
        label: "3+ years ",
        value: "3"
      })));
    }
  }]
};