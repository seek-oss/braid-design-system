import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _jsx from "@babel/runtime/helpers/jsx";

var _Text, _Placeholder, _Placeholder2, _Placeholder3, _IconMail, _Placeholder4;

import React from 'react';
import source from '../../utils/source.macro';
import { Dialog, Button, Inline, Text, Stack, TextLink, IconMail, Box, Strong } from '../';
import { Placeholder } from '../../playroom/components';
var docs = {
  category: 'Content',
  Example: function Example(_ref) {
    var id = _ref.id,
        getState = _ref.getState,
        toggleState = _ref.toggleState;
    return source( /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/_jsx(Box, {
      padding: "medium"
    }, void 0, /*#__PURE__*/_jsx(Inline, {
      space: "small",
      align: {
        mobile: 'center',
        tablet: 'left'
      }
    }, void 0, /*#__PURE__*/_jsx(Button, {
      onClick: function onClick() {
        return toggleState('dialog');
      }
    }, void 0, "Open dialog"))), /*#__PURE__*/_jsx(Dialog, {
      id: id,
      title: "Dialog Title",
      description: _Text || (_Text = /*#__PURE__*/_jsx(Text, {
        tone: "secondary"
      }, void 0, "Optional description")),
      open: getState('dialog'),
      onClose: function onClose() {
        return toggleState('dialog');
      }
    }, void 0, _Placeholder || (_Placeholder = /*#__PURE__*/_jsx(Placeholder, {
      height: 100,
      width: "100%"
    })))));
  },
  accessibility: /*#__PURE__*/_jsx(Text, {}, void 0, "Follows the", ' ', /*#__PURE__*/_jsx(TextLink, {
    href: "https://www.w3.org/TR/wai-aria-practices-1.2/#dialog_modal"
  }, void 0, "WAI-ARIA Dialog (Modal) Pattern.")),
  alternatives: [{
    name: 'Drawer',
    description: 'For a larger amount of content.'
  }, {
    name: 'Accordion',
    description: 'For revealing content inline with a strong visual treatment.'
  }, {
    name: 'Disclosure',
    description: 'For revealing content inline with a light visual treatment.'
  }],
  additional: [{
    label: 'Design considerations',
    description: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/_jsx(Text, {}, void 0, "Dialogs should only be used as a last resort when other in-flow alternatives are not suitable."), /*#__PURE__*/_jsx(Text, {}, void 0, "In order to keep experiences simple, Dialogs and", ' ', /*#__PURE__*/_jsx(TextLink, {
      href: "/components/Drawer"
    }, void 0, "Drawers"), ' ', /*#__PURE__*/_jsx(Strong, {}, void 0, "cannot be nested"), " inside one another."))
  }, {
    label: 'Development considerations',
    description: /*#__PURE__*/_jsx(Text, {}, void 0, "It\u2019s recommended that you connect the Dialog\u2019s ", /*#__PURE__*/_jsx(Strong, {}, void 0, "open"), ' ', "state to your router so that it can be closed via the browser\u2019s back button.")
  }, {
    label: 'Widths',
    description: /*#__PURE__*/_jsx(Text, {}, void 0, "There are a variety of standard widths to choose from, as well as", ' ', /*#__PURE__*/_jsx(Strong, {}, void 0, "content"), " width for custom sizing based on the content of the dialog."),
    Example: function Example(_ref2) {
      var id = _ref2.id,
          setState = _ref2.setState,
          getState = _ref2.getState,
          resetState = _ref2.resetState;
      return source( /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/_jsx(Box, {
        padding: "medium"
      }, void 0, /*#__PURE__*/_jsx(Inline, {
        space: "small",
        align: "center"
      }, void 0, /*#__PURE__*/_jsx(Button, {
        onClick: function onClick() {
          return setState('width', 'content');
        }
      }, void 0, "Content width"), /*#__PURE__*/_jsx(Button, {
        onClick: function onClick() {
          return setState('width', 'xsmall');
        }
      }, void 0, "XSmall width"), /*#__PURE__*/_jsx(Button, {
        onClick: function onClick() {
          return setState('width', 'small');
        }
      }, void 0, "Small width"), /*#__PURE__*/_jsx(Button, {
        onClick: function onClick() {
          return setState('width', 'medium');
        }
      }, void 0, "Medium width"), /*#__PURE__*/_jsx(Button, {
        onClick: function onClick() {
          return setState('width', 'large');
        }
      }, void 0, "Large width"))), /*#__PURE__*/_jsx(Dialog, {
        id: id,
        title: "Width: ".concat(getState('width')),
        open: getState('width') !== undefined,
        width: getState('width'),
        onClose: function onClose() {
          return resetState('width');
        }
      }, void 0, getState('width') === 'content' ? _Placeholder2 || (_Placeholder2 = /*#__PURE__*/_jsx(Placeholder, {
        height: 100,
        width: 200,
        label: "200px wide"
      })) : _Placeholder3 || (_Placeholder3 = /*#__PURE__*/_jsx(Placeholder, {
        height: 100,
        width: "100%"
      })))));
    }
  }, {
    label: 'Illustrated dialogs',
    description: /*#__PURE__*/_jsx(Text, {}, void 0, "You can also provide an element to render at the top of the dialog via the ", /*#__PURE__*/_jsx(Strong, {}, void 0, "illustration"), " prop."),
    Example: function Example(_ref3) {
      var id = _ref3.id,
          getState = _ref3.getState,
          toggleState = _ref3.toggleState;
      return source( /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/_jsx(Box, {
        padding: "medium"
      }, void 0, /*#__PURE__*/_jsx(Inline, {
        space: "small",
        align: {
          mobile: 'center',
          tablet: 'left'
        }
      }, void 0, /*#__PURE__*/_jsx(Button, {
        onClick: function onClick() {
          return toggleState('dialog');
        }
      }, void 0, "Open illustrated dialog"))), /*#__PURE__*/_jsx(Dialog, {
        id: id,
        title: "Illustrated Example",
        illustration: /*#__PURE__*/_jsx(Box, {
          style: {
            height: 100,
            width: 100
          }
        }, void 0, _IconMail || (_IconMail = /*#__PURE__*/_jsx(IconMail, {
          size: "fill"
        }))),
        open: getState('dialog'),
        onClose: function onClose() {
          return toggleState('dialog');
        }
      }, void 0, /*#__PURE__*/_jsx(Stack, {
        space: "xlarge",
        align: "center"
      }, void 0, _Placeholder4 || (_Placeholder4 = /*#__PURE__*/_jsx(Placeholder, {
        width: "100%",
        height: 100
      })), /*#__PURE__*/_jsx(Box, {
        padding: "medium"
      }, void 0, /*#__PURE__*/_jsx(Inline, {
        space: "small",
        align: {
          mobile: 'center',
          tablet: 'left'
        }
      }, void 0, /*#__PURE__*/_jsx(Button, {
        onClick: function onClick() {
          return toggleState('dialog');
        }
      }, void 0, "Got it"), /*#__PURE__*/_jsx(Button, {
        variant: "transparent",
        onClick: function onClick() {
          return toggleState('dialog');
        }
      }, void 0, "Cancel")))))));
    }
  }, {
    label: 'Scrollable dialogs',
    description: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/_jsx(Text, {}, void 0, "If the contents are unable to fit on the screen, dialogs become scrollable with a fixed close button."), /*#__PURE__*/_jsx(Text, {}, void 0, "If you need to display a large amount of content, consider using a", ' ', /*#__PURE__*/_jsx(TextLink, {
      href: "/components/Drawer"
    }, void 0, "Drawer"), " instead.")),
    Example: function Example(_ref4) {
      var id = _ref4.id,
          getState = _ref4.getState,
          toggleState = _ref4.toggleState;
      return source( /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/_jsx(Box, {
        padding: "medium"
      }, void 0, /*#__PURE__*/_jsx(Inline, {
        space: "small",
        align: {
          mobile: 'center',
          tablet: 'left'
        }
      }, void 0, /*#__PURE__*/_jsx(Button, {
        onClick: function onClick() {
          return toggleState('dialog');
        }
      }, void 0, "Open scrolling dialog"))), /*#__PURE__*/_jsx(Dialog, {
        id: id,
        title: "Dialog with scrolling content",
        open: getState('dialog'),
        onClose: function onClose() {
          return toggleState('dialog');
        }
      }, void 0, /*#__PURE__*/_jsx(Stack, {
        space: "large"
      }, void 0, _toConsumableArray(new Array(20)).map(function (_, i) {
        return /*#__PURE__*/_jsx(Placeholder, {
          height: 100,
          width: "100%"
        }, i);
      })))));
    }
  }]
};
export default docs;