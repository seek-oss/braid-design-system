import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _extends from "@babel/runtime/helpers/extends";
import _jsx from "@babel/runtime/helpers/jsx";
import React, { createContext, useState, useEffect, useContext } from 'react';
import { usePopperTooltip } from 'react-popper-tooltip';
import isMobile from 'is-mobile';
import assert from 'assert';
import { BraidPortal } from '../BraidPortal/BraidPortal';
import { BackgroundProvider } from '../Box/BackgroundContext';
import { atoms } from '../../atoms/atoms';
import { DefaultTextPropsProvider } from '../private/defaultTextProps';
import { useSpace } from '../useSpace/useSpace';
import { useThemeName } from '../useThemeName/useThemeName';
import { Box } from '../Box/Box';
import * as styles from './TooltipRenderer.css';
var StaticTooltipContext = /*#__PURE__*/createContext(false);
export var StaticTooltipProvider = function StaticTooltipProvider(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_jsx(StaticTooltipContext.Provider, {
    value: true
  }, void 0, children);
};
StaticTooltipProvider.displayName = "StaticTooltipProvider";
export var TooltipTextDefaultsProvider = function TooltipTextDefaultsProvider(_ref2) {
  var children = _ref2.children;
  var themeName = useThemeName();
  return /*#__PURE__*/_jsx(DefaultTextPropsProvider, {
    size: themeName === 'docs' ? 'small' : undefined,
    weight: "medium"
  }, void 0, children);
};
TooltipTextDefaultsProvider.displayName = "TooltipTextDefaultsProvider";
export var TooltipContent = function TooltipContent(_ref3) {
  var children = _ref3.children,
      opacity = _ref3.opacity,
      arrowProps = _ref3.arrowProps;
  return /*#__PURE__*/_jsx(Box, {
    display: "flex",
    position: "relative",
    transition: "fast",
    opacity: opacity === 0 ? 0 : undefined,
    className: opacity === 0 ? styles.verticalOffsetBeforeEntrance : styles.translateZ0
  }, void 0, /*#__PURE__*/_jsx(Box, {
    boxShadow: "large",
    borderRadius: "standard",
    className: [styles.background, styles.maxWidth, styles.translateZ0, styles.padding]
  }, void 0, /*#__PURE__*/_jsx(BackgroundProvider, {
    value: "UNKNOWN_DARK"
  }, void 0, /*#__PURE__*/_jsx(TooltipTextDefaultsProvider, {}, void 0, /*#__PURE__*/_jsx(Box, {
    position: "relative",
    zIndex: 1
  }, void 0, children), /*#__PURE__*/React.createElement(Box, _extends({}, arrowProps, {
    borderRadius: "standard",
    className: [styles.arrow, styles.background]
  }))))));
};
TooltipContent.displayName = "TooltipContent";
var validPlacements = ['top', 'bottom'];
export var TooltipRenderer = function TooltipRenderer(_ref4) {
  var id = _ref4.id,
      tooltip = _ref4.tooltip,
      _ref4$placement = _ref4.placement,
      placement = _ref4$placement === void 0 ? 'top' : _ref4$placement,
      children = _ref4.children;
  assert(validPlacements.includes(placement), "The 'placement' prop must be one of the following: ".concat(validPlacements.join(', ')));
  var isStatic = useContext(StaticTooltipContext);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      controlledVisible = _useState2[0],
      setControlledVisible = _useState2[1];

  var _useState3 = useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      opacity = _useState4[0],
      setOpacity = _useState4[1];

  var _useSpace = useSpace(),
      grid = _useSpace.grid,
      space = _useSpace.space;

  var _usePopperTooltip = usePopperTooltip({
    placement: placement,
    trigger: [isMobile() ? 'click' : 'hover', 'focus'],
    visible: isStatic || controlledVisible,
    onVisibleChange: setControlledVisible
  }, {
    modifiers: [{
      name: 'preventOverflow',
      options: {
        padding: space.xsmall * grid
      }
    }, {
      name: 'offset',
      options: {
        offset: [0, space.small * grid]
      }
    }].concat(_toConsumableArray(isStatic ? [{
      name: 'flip',
      options: {
        fallbackPlacements: []
      }
    }] : []))
  }),
      visible = _usePopperTooltip.visible,
      getTooltipProps = _usePopperTooltip.getTooltipProps,
      setTooltipRef = _usePopperTooltip.setTooltipRef,
      tooltipRef = _usePopperTooltip.tooltipRef,
      setTriggerRef = _usePopperTooltip.setTriggerRef,
      triggerRef = _usePopperTooltip.triggerRef,
      getArrowProps = _usePopperTooltip.getArrowProps;

  useEffect(function () {
    if (visible) {
      var handleKeyDown = function handleKeyDown(_ref5) {
        var key = _ref5.key;

        if (key === 'Escape') {
          setControlledVisible(false);
        }
      };

      var handleScroll = function handleScroll() {
        setControlledVisible(false);
      };

      var scrollHandlerOptions = {
        capture: true,
        passive: true
      };
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('scroll', handleScroll, scrollHandlerOptions);
      return function () {
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('scroll', handleScroll, scrollHandlerOptions);
      };
    }
  }, [visible]);
  useEffect(function () {
    if (!triggerRef) {
      return;
    }

    if (visible) {
      var handleFocusIn = function handleFocusIn(event) {
        if (event.currentTarget !== triggerRef) {
          setControlledVisible(false);
        }
      };

      document.addEventListener('focusin', handleFocusIn);
      return function () {
        document.removeEventListener('focusin', handleFocusIn);
      };
    }
  }, [triggerRef, visible]);
  assert(useEffect(function () {
    if (tooltipRef) {
      assert(tooltipRef.querySelectorAll('button, input, select, textarea, a').length === 0, 'For accessibility reasons, tooltips must not contain interactive elements');
    }
  }, [tooltipRef]) === undefined);
  useEffect(function () {
    if (!tooltipRef || !visible) {
      return setOpacity(0);
    }

    var timeout = setTimeout(function () {
      return setOpacity(100);
    }, isMobile() ? 0 : 250);
    return function () {
      return clearTimeout(timeout);
    };
  }, [tooltipRef, visible]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, children({
    triggerProps: {
      tabIndex: 0,
      ref: setTriggerRef,
      'aria-describedby': id
    }
  }), triggerRef && /*#__PURE__*/_jsx(BraidPortal, {}, void 0, /*#__PURE__*/React.createElement("div", _extends({
    id: id,
    role: "tooltip",
    hidden: !visible ? true : undefined,
    className: atoms({
      reset: 'div',
      zIndex: 'notification',
      display: triggerRef && visible ? undefined : 'none'
    })
  }, visible ? getTooltipProps({
    ref: setTooltipRef
  }) : null), /*#__PURE__*/_jsx(TooltipContent, {
    opacity: opacity,
    arrowProps: getArrowProps()
  }, void 0, tooltip))));
};