import _jsx from "@babel/runtime/helpers/jsx";

var _RadioItem, _RadioItem2, _RadioItem3, _RadioItem4, _RadioItem5, _RadioItem6, _RadioItem7, _RadioItem8, _RadioItem9, _RadioItem10, _RadioItem11, _RadioItem12, _RadioItem13, _RadioItem14, _RadioItem15, _RadioItem16, _RadioItem17, _RadioItem18, _RadioItem19, _RadioItem20, _RadioItem21, _RadioItem22, _RadioItem23, _RadioItem24, _RadioItem25;

import React from 'react';
import { Badge, Text, TextLink, RadioGroup, RadioItem, Strong, Tiles } from '..';
import { Placeholder } from '../../playroom/components';
import source from '../../utils/source.macro';
var docs = {
  category: 'Content',
  migrationGuide: true,
  subComponents: ['RadioItem'],
  Example: function Example(_ref) {
    var id = _ref.id,
        getState = _ref.getState,
        setState = _ref.setState;
    return source( /*#__PURE__*/_jsx(RadioGroup, {
      id: id,
      value: getState('radio'),
      onChange: function onChange(_ref2) {
        var value = _ref2.currentTarget.value;
        return setState('radio', value);
      },
      label: "Label"
    }, void 0, _RadioItem || (_RadioItem = /*#__PURE__*/_jsx(RadioItem, {
      label: "One",
      value: "1"
    })), _RadioItem2 || (_RadioItem2 = /*#__PURE__*/_jsx(RadioItem, {
      label: "Two",
      value: "2"
    })), _RadioItem3 || (_RadioItem3 = /*#__PURE__*/_jsx(RadioItem, {
      label: "Three",
      value: "3"
    }))));
  },
  description: /*#__PURE__*/_jsx(Text, {}, void 0, "The RadioGroup provides an accessible way to group and control a set of", ' ', /*#__PURE__*/_jsx(Strong, {}, void 0, "RadioItem"), " components. The RadioGroup is responsible for handling the value, tone, message, and disabled state\u2014determining the presentation and selection of the items in the list."),
  accessibility: /*#__PURE__*/_jsx(Text, {}, void 0, "Follows the", ' ', /*#__PURE__*/_jsx(TextLink, {
    href: "https://www.w3.org/TR/wai-aria-practices/#radiobutton"
  }, void 0, "WAI-ARIA Radio Group Pattern"), ' ', "for radio groups not contained in a toolbar."),
  alternatives: [{
    name: 'Checkbox',
    description: 'For multi-select.'
  }],
  additional: [{
    label: 'Message and tone',
    description: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/_jsx(Text, {}, void 0, "A ", /*#__PURE__*/_jsx(Strong, {}, void 0, "message"), " is typically used to communicate the status of a field, such as an error message. This will be announced on focus of the field and can be combined with a", ' ', /*#__PURE__*/_jsx(TextLink, {
      href: "/foundations/tones"
    }, void 0, "tone"), " to illustrate its purpose."), /*#__PURE__*/_jsx(Text, {}, void 0, "The supported tones are: ", /*#__PURE__*/_jsx(Strong, {}, void 0, '"critical"'), " and", ' ', /*#__PURE__*/_jsx(Strong, {}, void 0, '"neutral"'), ".")),
    Example: function Example(_ref3) {
      var id = _ref3.id,
          getState = _ref3.getState,
          setState = _ref3.setState;
      return source( /*#__PURE__*/_jsx(RadioGroup, {
        id: id,
        value: getState('radio'),
        onChange: function onChange(_ref4) {
          var value = _ref4.currentTarget.value;
          return setState('radio', value);
        },
        label: "Label",
        tone: "critical",
        message: "Critical message"
      }, void 0, _RadioItem4 || (_RadioItem4 = /*#__PURE__*/_jsx(RadioItem, {
        label: "One",
        value: "1"
      })), _RadioItem5 || (_RadioItem5 = /*#__PURE__*/_jsx(RadioItem, {
        label: "Two",
        value: "2"
      })), _RadioItem6 || (_RadioItem6 = /*#__PURE__*/_jsx(RadioItem, {
        label: "Three",
        value: "3"
      }))));
    }
  }, {
    label: 'Field description',
    description: /*#__PURE__*/_jsx(Text, {}, void 0, "Additional context can be provided with a ", /*#__PURE__*/_jsx(Strong, {}, void 0, "description"), ". This will display below the field label and also be announced by a screen reader when the field is focused."),
    Example: function Example(_ref5) {
      var id = _ref5.id,
          getState = _ref5.getState,
          setState = _ref5.setState;
      return source( /*#__PURE__*/_jsx(RadioGroup, {
        id: id,
        value: getState('radio'),
        onChange: function onChange(_ref6) {
          var value = _ref6.currentTarget.value;
          return setState('radio', value);
        },
        label: "Label",
        description: "Extra information about the field"
      }, void 0, _RadioItem7 || (_RadioItem7 = /*#__PURE__*/_jsx(RadioItem, {
        label: "One",
        value: "1"
      })), _RadioItem8 || (_RadioItem8 = /*#__PURE__*/_jsx(RadioItem, {
        label: "Two",
        value: "2"
      })), _RadioItem9 || (_RadioItem9 = /*#__PURE__*/_jsx(RadioItem, {
        label: "Three",
        value: "3"
      }))));
    }
  }, {
    label: 'Sizes',
    description: /*#__PURE__*/_jsx(Text, {}, void 0, "You can customise the size of the radio items via the", ' ', /*#__PURE__*/_jsx(Strong, {}, void 0, "size"), " prop, which accepts either", ' ', /*#__PURE__*/_jsx(Strong, {}, void 0, "standard"), " or ", /*#__PURE__*/_jsx(Strong, {}, void 0, "small.")),
    Example: function Example(_ref7) {
      var id = _ref7.id,
          getState = _ref7.getState,
          setState = _ref7.setState;
      return source( /*#__PURE__*/_jsx(Tiles, {
        space: "large",
        columns: {
          mobile: 1,
          tablet: 2
        }
      }, void 0, /*#__PURE__*/_jsx(RadioGroup, {
        id: "".concat(id, "_standard"),
        value: getState('radio'),
        onChange: function onChange(_ref8) {
          var value = _ref8.currentTarget.value;
          return setState('radio', value);
        },
        label: "Standard",
        size: "standard"
      }, void 0, _RadioItem10 || (_RadioItem10 = /*#__PURE__*/_jsx(RadioItem, {
        label: "One",
        value: "1"
      })), _RadioItem11 || (_RadioItem11 = /*#__PURE__*/_jsx(RadioItem, {
        label: "Two",
        value: "2"
      }))), /*#__PURE__*/_jsx(RadioGroup, {
        id: "".concat(id, "_small"),
        value: getState('radio2'),
        onChange: function onChange(_ref9) {
          var value = _ref9.currentTarget.value;
          return setState('radio2', value);
        },
        label: "Small",
        size: "small"
      }, void 0, _RadioItem12 || (_RadioItem12 = /*#__PURE__*/_jsx(RadioItem, {
        label: "One",
        value: "1"
      })), _RadioItem13 || (_RadioItem13 = /*#__PURE__*/_jsx(RadioItem, {
        label: "Two",
        value: "2"
      })))));
    }
  }, {
    label: 'Disabled field',
    description: /*#__PURE__*/_jsx(Text, {}, void 0, "Mark the field as disabled by passing ", /*#__PURE__*/_jsx(Strong, {}, void 0, "true"), " to the", ' ', /*#__PURE__*/_jsx(Strong, {}, void 0, "disabled"), " prop."),
    background: 'card',
    Example: function Example(_ref10) {
      var id = _ref10.id,
          getState = _ref10.getState,
          setState = _ref10.setState;
      return source( /*#__PURE__*/_jsx(RadioGroup, {
        id: id,
        value: getState('radio'),
        onChange: function onChange(_ref11) {
          var value = _ref11.currentTarget.value;
          return setState('radio', value);
        },
        label: "Label",
        disabled: true
      }, void 0, _RadioItem14 || (_RadioItem14 = /*#__PURE__*/_jsx(RadioItem, {
        label: "One",
        value: "1"
      })), _RadioItem15 || (_RadioItem15 = /*#__PURE__*/_jsx(RadioItem, {
        label: "Two",
        value: "2"
      })), _RadioItem16 || (_RadioItem16 = /*#__PURE__*/_jsx(RadioItem, {
        label: "Three",
        value: "3"
      }))));
    }
  }, {
    label: 'Item-level descriptions',
    description: /*#__PURE__*/_jsx(Text, {}, void 0, "Additional context can also be provided at an item level with a", ' ', /*#__PURE__*/_jsx(Strong, {}, void 0, "description"), ". This will display below the", ' ', /*#__PURE__*/_jsx(Strong, {}, void 0, "RadioItem"), " label and also be announced by a screen reader when the item is focused."),
    Example: function Example(_ref12) {
      var id = _ref12.id,
          getState = _ref12.getState,
          setState = _ref12.setState;
      return source( /*#__PURE__*/_jsx(RadioGroup, {
        id: id,
        value: getState('radio'),
        onChange: function onChange(_ref13) {
          var value = _ref13.currentTarget.value;
          return setState('radio', value);
        },
        label: "Label"
      }, void 0, _RadioItem17 || (_RadioItem17 = /*#__PURE__*/_jsx(RadioItem, {
        label: "One",
        value: "1",
        description: "Description for item 1"
      })), _RadioItem18 || (_RadioItem18 = /*#__PURE__*/_jsx(RadioItem, {
        label: "Two",
        value: "2",
        description: "Description for item 2"
      })), _RadioItem19 || (_RadioItem19 = /*#__PURE__*/_jsx(RadioItem, {
        label: "Three",
        value: "3",
        description: "Description for item 3"
      }))));
    }
  }, {
    label: 'Badge support',
    description: /*#__PURE__*/_jsx(Text, {}, void 0, "Add a ", /*#__PURE__*/_jsx(TextLink, {
      href: "/components/Badge"
    }, void 0, "Badge"), " alongside the ", /*#__PURE__*/_jsx(Strong, {}, void 0, "RadioItem"), " label using the ", /*#__PURE__*/_jsx(Strong, {}, void 0, "badge"), ' ', "prop."),
    Example: function Example(_ref14) {
      var id = _ref14.id,
          getState = _ref14.getState,
          setState = _ref14.setState;
      return source( /*#__PURE__*/_jsx(RadioGroup, {
        id: id,
        value: getState('radio'),
        onChange: function onChange(_ref15) {
          var value = _ref15.currentTarget.value;
          return setState('radio', value);
        },
        label: "Label"
      }, void 0, _RadioItem20 || (_RadioItem20 = /*#__PURE__*/_jsx(RadioItem, {
        label: "One",
        value: "1"
      })), _RadioItem21 || (_RadioItem21 = /*#__PURE__*/_jsx(RadioItem, {
        label: "Two",
        value: "2"
      })), _RadioItem22 || (_RadioItem22 = /*#__PURE__*/_jsx(RadioItem, {
        label: "Three",
        value: "3",
        badge: /*#__PURE__*/_jsx(Badge, {
          tone: "positive",
          weight: "strong"
        }, void 0, "Positive")
      }))));
    }
  }, {
    label: 'Toggling nested content',
    description: /*#__PURE__*/_jsx(Text, {}, void 0, "Nesting content inside of a ", /*#__PURE__*/_jsx(Strong, {}, void 0, "RadioItem"), " will both align the content with the item label, and toggle it\u2019s visibility based on the value state."),
    Example: function Example(_ref16) {
      var id = _ref16.id,
          getState = _ref16.getState,
          setState = _ref16.setState,
          setDefaultState = _ref16.setDefaultState;
      return source( /*#__PURE__*/React.createElement(React.Fragment, null, setDefaultState('radio', '2'), /*#__PURE__*/_jsx(RadioGroup, {
        id: id,
        value: getState('radio'),
        onChange: function onChange(_ref17) {
          var value = _ref17.currentTarget.value;
          return setState('radio', value);
        },
        label: "Label"
      }, void 0, _RadioItem23 || (_RadioItem23 = /*#__PURE__*/_jsx(RadioItem, {
        label: "One",
        value: "1"
      })), _RadioItem24 || (_RadioItem24 = /*#__PURE__*/_jsx(RadioItem, {
        label: "Two",
        value: "2"
      }, void 0, /*#__PURE__*/_jsx(Placeholder, {
        height: 100,
        label: "Nested content"
      }))), _RadioItem25 || (_RadioItem25 = /*#__PURE__*/_jsx(RadioItem, {
        label: "Three",
        value: "3"
      })))));
    }
  }]
};
export default docs;