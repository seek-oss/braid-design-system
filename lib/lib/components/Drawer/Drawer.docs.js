import _jsx from "@babel/runtime/helpers/jsx";

var _Text, _Placeholder, _Placeholder2, _Placeholder3, _Placeholder4, _Placeholder5, _Placeholder6, _Placeholder7, _Placeholder8, _Placeholder9, _Placeholder10, _Placeholder11, _Placeholder12, _Placeholder13, _Placeholder14, _Placeholder15, _Placeholder16, _Placeholder17, _Placeholder18, _Placeholder19, _Placeholder20, _Placeholder21, _Placeholder22, _Placeholder23, _Placeholder24, _Placeholder25, _Placeholder26, _Placeholder27, _Placeholder28, _Placeholder29, _Placeholder30;

import React from 'react';
import source from '../../utils/source.macro';
import { Drawer, Button, Inline, Text, TextLink, Box, Strong } from '../';
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
        return toggleState('drawer');
      }
    }, void 0, "Open drawer"))), /*#__PURE__*/_jsx(Drawer, {
      id: id,
      title: "Drawer Title",
      description: _Text || (_Text = /*#__PURE__*/_jsx(Text, {
        tone: "secondary"
      }, void 0, "Optional description")),
      open: getState('drawer'),
      onClose: function onClose() {
        return toggleState('drawer');
      }
    }, void 0, _Placeholder || (_Placeholder = /*#__PURE__*/_jsx(Placeholder, {
      height: 100,
      width: "100%"
    })), _Placeholder2 || (_Placeholder2 = /*#__PURE__*/_jsx(Placeholder, {
      height: 100,
      width: "100%"
    })), _Placeholder3 || (_Placeholder3 = /*#__PURE__*/_jsx(Placeholder, {
      height: 100,
      width: "100%"
    })), _Placeholder4 || (_Placeholder4 = /*#__PURE__*/_jsx(Placeholder, {
      height: 100,
      width: "100%"
    })), _Placeholder5 || (_Placeholder5 = /*#__PURE__*/_jsx(Placeholder, {
      height: 100,
      width: "100%"
    })), _Placeholder6 || (_Placeholder6 = /*#__PURE__*/_jsx(Placeholder, {
      height: 100,
      width: "100%"
    })), _Placeholder7 || (_Placeholder7 = /*#__PURE__*/_jsx(Placeholder, {
      height: 100,
      width: "100%"
    })), _Placeholder8 || (_Placeholder8 = /*#__PURE__*/_jsx(Placeholder, {
      height: 100,
      width: "100%"
    })), _Placeholder9 || (_Placeholder9 = /*#__PURE__*/_jsx(Placeholder, {
      height: 100,
      width: "100%"
    })), _Placeholder10 || (_Placeholder10 = /*#__PURE__*/_jsx(Placeholder, {
      height: 100,
      width: "100%"
    })), _Placeholder11 || (_Placeholder11 = /*#__PURE__*/_jsx(Placeholder, {
      height: 100,
      width: "100%"
    })), _Placeholder12 || (_Placeholder12 = /*#__PURE__*/_jsx(Placeholder, {
      height: 100,
      width: "100%"
    })), _Placeholder13 || (_Placeholder13 = /*#__PURE__*/_jsx(Placeholder, {
      height: 100,
      width: "100%"
    })), _Placeholder14 || (_Placeholder14 = /*#__PURE__*/_jsx(Placeholder, {
      height: 100,
      width: "100%"
    })), _Placeholder15 || (_Placeholder15 = /*#__PURE__*/_jsx(Placeholder, {
      height: 100,
      width: "100%"
    })))));
  },
  accessibility: /*#__PURE__*/_jsx(Text, {}, void 0, "Follows the", ' ', /*#__PURE__*/_jsx(TextLink, {
    href: "https://www.w3.org/TR/wai-aria-practices-1.2/#dialog_modal"
  }, void 0, "WAI-ARIA Dialog (Modal) Pattern.")),
  alternatives: [{
    name: 'Dialog',
    description: 'For a smaller amount of content.'
  }, {
    name: 'Accordion',
    description: 'For revealing content inline with a strong visual treatment.'
  }, {
    name: 'Disclosure',
    description: 'For revealing content inline with a light visual treatment.'
  }],
  additional: [{
    label: 'Design considerations',
    description: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/_jsx(Text, {}, void 0, "Drawers should only be used as a last resort when other in-flow alternatives are not suitable."), /*#__PURE__*/_jsx(Text, {}, void 0, "In order to keep experiences simple, Drawers and", ' ', /*#__PURE__*/_jsx(TextLink, {
      href: "/components/Dialog"
    }, void 0, "Dialogs"), ' ', /*#__PURE__*/_jsx(Strong, {}, void 0, "cannot be nested"), " inside one another."))
  }, {
    label: 'Development considerations',
    description: /*#__PURE__*/_jsx(Text, {}, void 0, "It\u2019s recommended that you connect the Drawer\u2019s ", /*#__PURE__*/_jsx(Strong, {}, void 0, "open"), ' ', "state to your router so that it can be closed via the browser\u2019s back button.")
  }, {
    label: 'Widths',
    description: /*#__PURE__*/_jsx(Text, {}, void 0, "There are a variety of standard widths to choose from."),
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
      }, void 0, "Large width"))), /*#__PURE__*/_jsx(Drawer, {
        id: id,
        title: "Width: ".concat(getState('width')),
        open: getState('width') !== undefined,
        width: getState('width'),
        onClose: function onClose() {
          return resetState('width');
        }
      }, void 0, _Placeholder16 || (_Placeholder16 = /*#__PURE__*/_jsx(Placeholder, {
        height: 100,
        width: "100%"
      })), _Placeholder17 || (_Placeholder17 = /*#__PURE__*/_jsx(Placeholder, {
        height: 100,
        width: "100%"
      })), _Placeholder18 || (_Placeholder18 = /*#__PURE__*/_jsx(Placeholder, {
        height: 100,
        width: "100%"
      })), _Placeholder19 || (_Placeholder19 = /*#__PURE__*/_jsx(Placeholder, {
        height: 100,
        width: "100%"
      })), _Placeholder20 || (_Placeholder20 = /*#__PURE__*/_jsx(Placeholder, {
        height: 100,
        width: "100%"
      })), _Placeholder21 || (_Placeholder21 = /*#__PURE__*/_jsx(Placeholder, {
        height: 100,
        width: "100%"
      })), _Placeholder22 || (_Placeholder22 = /*#__PURE__*/_jsx(Placeholder, {
        height: 100,
        width: "100%"
      })), _Placeholder23 || (_Placeholder23 = /*#__PURE__*/_jsx(Placeholder, {
        height: 100,
        width: "100%"
      })), _Placeholder24 || (_Placeholder24 = /*#__PURE__*/_jsx(Placeholder, {
        height: 100,
        width: "100%"
      })), _Placeholder25 || (_Placeholder25 = /*#__PURE__*/_jsx(Placeholder, {
        height: 100,
        width: "100%"
      })), _Placeholder26 || (_Placeholder26 = /*#__PURE__*/_jsx(Placeholder, {
        height: 100,
        width: "100%"
      })), _Placeholder27 || (_Placeholder27 = /*#__PURE__*/_jsx(Placeholder, {
        height: 100,
        width: "100%"
      })), _Placeholder28 || (_Placeholder28 = /*#__PURE__*/_jsx(Placeholder, {
        height: 100,
        width: "100%"
      })), _Placeholder29 || (_Placeholder29 = /*#__PURE__*/_jsx(Placeholder, {
        height: 100,
        width: "100%"
      })), _Placeholder30 || (_Placeholder30 = /*#__PURE__*/_jsx(Placeholder, {
        height: 100,
        width: "100%"
      })))));
    }
  }]
};
export default docs;