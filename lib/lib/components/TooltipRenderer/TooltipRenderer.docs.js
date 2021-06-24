import _extends from "@babel/runtime/helpers/extends";
import _jsx from "@babel/runtime/helpers/jsx";

var _Text, _IconHelp, _Text2, _Text3, _Stack, _IconHelp2, _Stack2, _IconHelp3;

import React from 'react';
import source from '../../utils/source.macro';
import { TooltipRenderer, Text, Stack, Inline, Box, IconHelp, TextLink, Strong, Button } from '..';
import { StaticTooltipProvider, TooltipTextDefaultsProvider } from './TooltipRenderer';
import { constants } from './TooltipRenderer.css';

var StaticTooltip = function StaticTooltip(_ref) {
  var id = _ref.id,
      tooltip = _ref.tooltip,
      placement = _ref.placement,
      children = _ref.children;

  var contentPlaceholder = /*#__PURE__*/_jsx(Box, {
    userSelect: "none",
    opacity: 0,
    "aria-hidden": true
  }, void 0, children({
    triggerProps: {}
  }), /*#__PURE__*/_jsx(TooltipTextDefaultsProvider, {}, void 0, /*#__PURE__*/_jsx(Box, {
    style: {
      maxWidth: constants.maxWidth,
      paddingTop: constants.arrowSize
    }
  }, void 0, /*#__PURE__*/_jsx(Box, {
    padding: "medium"
  }, void 0, tooltip))));

  return /*#__PURE__*/_jsx(StaticTooltipProvider, {}, void 0, /*#__PURE__*/_jsx(Box, {
    position: "relative"
  }, void 0, placement === 'top' ? contentPlaceholder : null, /*#__PURE__*/_jsx(Box, {
    position: "absolute",
    left: 0,
    right: 0
  }, void 0, /*#__PURE__*/_jsx(TooltipRenderer, {
    id: id,
    tooltip: tooltip,
    placement: placement
  }, void 0, children)), placement === 'bottom' ? contentPlaceholder : null));
};

StaticTooltip.displayName = "StaticTooltip";
var docs = {
  category: 'Content',
  Example: function Example(_ref2) {
    var id = _ref2.id;
    return source( /*#__PURE__*/_jsx(Inline, {
      space: "small"
    }, void 0, /*#__PURE__*/_jsx(TooltipRenderer, {
      id: id,
      tooltip: _Text || (_Text = /*#__PURE__*/_jsx(Text, {}, void 0, "This is a tooltip!"))
    }, void 0, function (_ref3) {
      var triggerProps = _ref3.triggerProps;
      return /*#__PURE__*/React.createElement(Box, _extends({
        "aria-label": "Help"
      }, triggerProps), _IconHelp || (_IconHelp = /*#__PURE__*/_jsx(IconHelp, {})));
    })));
  },
  alternatives: [],
  accessibility: /*#__PURE__*/_jsx(Stack, {
    space: "large"
  }, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, "Follows the", ' ', /*#__PURE__*/_jsx(TextLink, {
    href: "https://www.w3.org/TR/wai-aria-practices/#tooltip"
  }, void 0, "WAI-ARIA Tooltip Pattern.")), /*#__PURE__*/_jsx(Text, {}, void 0, "Tooltips appear on mouse hover, tap and keyboard focus, and are hidden when scrolling and clicking/tapping/focusing on other elements."), /*#__PURE__*/_jsx(Text, {}, void 0, "Tooltips cannot contain interactive elements like links, buttons or form elements.")),
  additional: [{
    label: 'Development considerations',
    description: /*#__PURE__*/_jsx(Text, {}, void 0, "The trigger element must support ", /*#__PURE__*/_jsx(Strong, {}, void 0, "ref"), ",", ' ', /*#__PURE__*/_jsx(Strong, {}, void 0, "tabIndex"), " and ", /*#__PURE__*/_jsx(Strong, {}, void 0, "aria-describedby"), " props.")
  }, {
    label: 'Placement',
    description: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/_jsx(Text, {}, void 0, "Tooltips are positioned above the trigger element by default, but you can configure this via the ", /*#__PURE__*/_jsx(Strong, {}, void 0, "placement"), " prop which accepts either ", /*#__PURE__*/_jsx(Strong, {}, void 0, "top"), " or ", /*#__PURE__*/_jsx(Strong, {}, void 0, "bottom"), "."), /*#__PURE__*/_jsx(Text, {}, void 0, "Whichever direction you choose, the tooltip will be centred against the trigger element.")),
    background: 'card',
    Example: function Example(_ref4) {
      var id = _ref4.id;
      return source( /*#__PURE__*/_jsx(Inline, {
        space: "small"
      }, void 0, /*#__PURE__*/_jsx(TooltipRenderer, {
        id: "".concat(id, "_1"),
        placement: "top",
        tooltip: _Text2 || (_Text2 = /*#__PURE__*/_jsx(Text, {}, void 0, "The placement is \u201Ctop\u201D"))
      }, void 0, function (_ref5) {
        var triggerProps = _ref5.triggerProps;
        return /*#__PURE__*/React.createElement(Button, triggerProps, "Top");
      }), /*#__PURE__*/_jsx(TooltipRenderer, {
        id: "".concat(id, "_2"),
        placement: "bottom",
        tooltip: _Text3 || (_Text3 = /*#__PURE__*/_jsx(Text, {}, void 0, "The placement is \u201Cbottom\u201D"))
      }, void 0, function (_ref6) {
        var triggerProps = _ref6.triggerProps;
        return /*#__PURE__*/React.createElement(Button, triggerProps, "Bottom");
      })));
    }
  }, {
    label: 'Formatting',
    description: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/_jsx(Text, {}, void 0, "To ensure readability, tooltips have a maximum width of", ' ', constants.maxWidth, ", which means that text will wrap onto multiple lines if you provide enough content."), /*#__PURE__*/_jsx(Text, {}, void 0, "You can also use multiple text elements and layout components to create more custom layouts.")),
    Example: function Example(_ref7) {
      var id = _ref7.id;

      var _source = source( /*#__PURE__*/_jsx(TooltipRenderer, {
        id: id,
        placement: "bottom",
        tooltip: _Stack || (_Stack = /*#__PURE__*/_jsx(Stack, {
          space: "medium"
        }, void 0, /*#__PURE__*/_jsx(Text, {
          weight: "strong"
        }, void 0, "Strong text"), /*#__PURE__*/_jsx(Text, {}, void 0, "The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.")))
      }, void 0, function (_ref8) {
        var triggerProps = _ref8.triggerProps;
        return /*#__PURE__*/_jsx(Inline, {
          space: "small",
          align: "center"
        }, void 0, /*#__PURE__*/React.createElement(Box, _extends({
          "aria-label": "Help"
        }, triggerProps), _IconHelp2 || (_IconHelp2 = /*#__PURE__*/_jsx(IconHelp, {}))));
      })),
          code = _source.code;

      return {
        code: code,
        value: /*#__PURE__*/_jsx(StaticTooltip, {
          id: id,
          placement: "bottom",
          tooltip: _Stack2 || (_Stack2 = /*#__PURE__*/_jsx(Stack, {
            space: "medium"
          }, void 0, /*#__PURE__*/_jsx(Text, {
            weight: "strong"
          }, void 0, "Strong text"), /*#__PURE__*/_jsx(Text, {}, void 0, "The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.")))
        }, void 0, function (_ref9) {
          var triggerProps = _ref9.triggerProps;
          return /*#__PURE__*/_jsx(Inline, {
            space: "small",
            align: "center"
          }, void 0, /*#__PURE__*/React.createElement(Box, _extends({
            "aria-label": "Help"
          }, triggerProps), _IconHelp3 || (_IconHelp3 = /*#__PURE__*/_jsx(IconHelp, {}))));
        })
      };
    }
  }]
};
export default docs;