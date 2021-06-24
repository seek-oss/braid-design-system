import _jsx from "@babel/runtime/helpers/jsx";

var _TextLink;

import React from 'react';
import { MonthPicker, TextLink, IconHelp, Text, Strong, List, Stack } from '../';
import source from '../../utils/source.macro';
var docs = {
  category: 'Content',
  migrationGuide: true,
  Example: function Example(_ref) {
    var id = _ref.id,
        getState = _ref.getState,
        setState = _ref.setState;
    return source( /*#__PURE__*/_jsx(MonthPicker, {
      label: "Label",
      id: id,
      onChange: setState('monthpicker'),
      value: getState('monthpicker')
    }));
  },
  alternatives: [],
  accessibility: /*#__PURE__*/_jsx(Text, {}, void 0, "Uses native ", /*#__PURE__*/_jsx(Strong, {}, void 0, "fieldset"), " and ", /*#__PURE__*/_jsx(Strong, {}, void 0, "legend"), " elements to group and describe both fields as a single form field."),
  additional: [{
    label: 'Changing the months',
    description: /*#__PURE__*/_jsx(Text, {}, void 0, "By default, the months are displayed using the short month format. This can be customised by providing the ", /*#__PURE__*/_jsx(Strong, {}, void 0, "monthNames"), ' ', "prop, with a list of 12 items in the desired format."),
    Example: function Example(_ref2) {
      var id = _ref2.id,
          getState = _ref2.getState,
          setState = _ref2.setState;
      return source( /*#__PURE__*/_jsx(MonthPicker, {
        label: "Label",
        id: id,
        onChange: setState('monthpicker'),
        value: getState('monthpicker'),
        monthNames: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
      }));
    }
  }, {
    label: 'Changing the years',
    description: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/_jsx(Text, {}, void 0, "Years can be restriced to a range using the ", /*#__PURE__*/_jsx(Strong, {}, void 0, "minYear"), ' ', "and ", /*#__PURE__*/_jsx(Strong, {}, void 0, "maxYear"), " props."), /*#__PURE__*/_jsx(Text, {}, void 0, "By default, the years are presented in descending order, this can be reversed by specifying the ", /*#__PURE__*/_jsx(Strong, {}, void 0, "ascendingYears"), " prop.")),
    Example: function Example(_ref3) {
      var id = _ref3.id,
          getState = _ref3.getState,
          setState = _ref3.setState;
      return source( /*#__PURE__*/_jsx(MonthPicker, {
        label: "Label",
        id: id,
        onChange: setState('monthpicker'),
        value: getState('monthpicker'),
        minYear: 1996,
        maxYear: 1998,
        ascendingYears: true
      }));
    }
  }, {
    label: 'Additional labels',
    description: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/_jsx(Text, {}, void 0, "Supports all three levels of", ' ', /*#__PURE__*/_jsx(TextLink, {
      href: "/components/FieldLabel"
    }, void 0, "FieldLabel"), ":"), /*#__PURE__*/_jsx(List, {}, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, /*#__PURE__*/_jsx(Strong, {}, void 0, "label"), " \u2014 primary title of the field,"), /*#__PURE__*/_jsx(Text, {}, void 0, /*#__PURE__*/_jsx(Strong, {}, void 0, "secondaryLabel"), " \u2014 additional context, typically used to indicate optionality of a field,"), /*#__PURE__*/_jsx(Text, {}, void 0, /*#__PURE__*/_jsx(Strong, {}, void 0, "tertiaryLabel"), " \u2014 further context, typically used for providing assistance with a field."))),
    Example: function Example(_ref4) {
      var id = _ref4.id,
          getState = _ref4.getState,
          setState = _ref4.setState;
      return source( /*#__PURE__*/_jsx(MonthPicker, {
        label: "Label",
        id: id,
        onChange: setState('monthpicker'),
        value: getState('monthpicker'),
        secondaryLabel: "optional",
        tertiaryLabel: _TextLink || (_TextLink = /*#__PURE__*/_jsx(TextLink, {
          href: "#"
        }, void 0, /*#__PURE__*/_jsx(IconHelp, {}), " Help"))
      }));
    }
  }, {
    label: 'Message and tone',
    description: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/_jsx(Text, {}, void 0, "A ", /*#__PURE__*/_jsx(Strong, {}, void 0, "message"), " is typically used to communicate the status of a field, such as an error message. This will be announced on focus of the field and can be combined with a", ' ', /*#__PURE__*/_jsx(TextLink, {
      href: "/foundations/tones"
    }, void 0, "tone"), " to illustrate its purpose."), /*#__PURE__*/_jsx(Text, {}, void 0, "The supported tones are: ", /*#__PURE__*/_jsx(Strong, {}, void 0, '"critical"'), ",", ' ', /*#__PURE__*/_jsx(Strong, {}, void 0, '"positive"'), ", and ", /*#__PURE__*/_jsx(Strong, {}, void 0, '"neutral"'), ".")),
    Example: function Example(_ref5) {
      var id = _ref5.id,
          getState = _ref5.getState,
          setState = _ref5.setState;
      return source( /*#__PURE__*/_jsx(Stack, {
        space: "large"
      }, void 0, /*#__PURE__*/_jsx(MonthPicker, {
        label: "Label",
        id: "".concat(id, "_1"),
        onChange: setState('monthpicker'),
        value: getState('monthpicker'),
        tone: "critical",
        message: "Critical message"
      }), /*#__PURE__*/_jsx(MonthPicker, {
        label: "Label",
        id: "".concat(id, "_2"),
        onChange: setState('monthpicker2'),
        value: getState('monthpicker2'),
        tone: "positive",
        message: "Positive message"
      }), /*#__PURE__*/_jsx(MonthPicker, {
        label: "Label",
        id: "".concat(id, "_3"),
        onChange: setState('monthpicker3'),
        value: getState('monthpicker3'),
        tone: "neutral",
        message: "Neutral message"
      })));
    }
  }, {
    label: 'Field description',
    description: /*#__PURE__*/_jsx(Text, {}, void 0, "Additional context can be provided with a ", /*#__PURE__*/_jsx(Strong, {}, void 0, "description"), ". This will display below the field label and also be announced by a screen reader when the field is focused."),
    Example: function Example(_ref6) {
      var id = _ref6.id,
          getState = _ref6.getState,
          setState = _ref6.setState;
      return source( /*#__PURE__*/_jsx(MonthPicker, {
        label: "Label",
        id: id,
        onChange: setState('monthpicker'),
        value: getState('monthpicker'),
        description: "Extra information about the field"
      }));
    }
  }, {
    label: 'Disabled field',
    description: /*#__PURE__*/_jsx(Text, {}, void 0, "Mark the field as disabled by passing ", /*#__PURE__*/_jsx(Strong, {}, void 0, "true"), " to the", ' ', /*#__PURE__*/_jsx(Strong, {}, void 0, "disabled"), " prop."),
    background: 'card',
    Example: function Example(_ref7) {
      var id = _ref7.id,
          getState = _ref7.getState,
          setState = _ref7.setState;
      return source( /*#__PURE__*/_jsx(MonthPicker, {
        label: "Label",
        id: id,
        onChange: setState('monthpicker'),
        value: getState('monthpicker'),
        disabled: true
      }));
    }
  }, {
    label: 'Placeholder prompts',
    description: /*#__PURE__*/_jsx(Text, {}, void 0, "The field prompts may be customised by providing a", ' ', /*#__PURE__*/_jsx(Strong, {}, void 0, "monthLabel"), " and/or ", /*#__PURE__*/_jsx(Strong, {}, void 0, "yearLabel"), " and will be displayed to a user when no value is selected."),
    Example: function Example(_ref8) {
      var id = _ref8.id,
          getState = _ref8.getState,
          setState = _ref8.setState;
      return source( /*#__PURE__*/_jsx(MonthPicker, {
        label: "Label",
        id: id,
        onChange: setState('monthpicker'),
        value: getState('monthpicker'),
        monthLabel: "MM",
        yearLabel: "YYYY"
      }));
    }
  }]
};
export default docs;