import _extends from "@babel/runtime/helpers/extends";
import _jsx from "@babel/runtime/helpers/jsx";

let _Column, _IconClear;

import React, { useRef, forwardRef, Fragment } from 'react';
import { RemoveScroll } from 'react-remove-scroll';
import { Box } from '../../Box/Box';
import { normalizeKey } from '../normalizeKey';
import { Heading } from '../../Heading/Heading';
import { Stack } from '../../Stack/Stack';
import { Columns } from '../../Columns/Columns';
import { Column } from '../../Column/Column';
import { Overlay } from '../Overlay/Overlay';
import { IconClear } from '../../icons';
import { negativeMarginTop } from '../../../atoms/negativeMargin/negativeMargin';
import { virtualTouchable } from '../touchable/virtualTouchable';
import buildDataAttributes from '../buildDataAttributes';
import * as styles from './Modal.css';
const modalPadding = ['gutter', 'large'];
const ModalContentHeader = /* #__PURE__*/forwardRef(function (_ref, ref) {
  const title = _ref.title,
      headingLevel = _ref.headingLevel,
      description = _ref.description,
      descriptionId = _ref.descriptionId,
      center = _ref.center;
  return /* #__PURE__*/_jsx(Stack, {
    space: "medium"
  }, void 0, /* #__PURE__*/_jsx(Heading, {
    level: headingLevel,
    align: center ? 'center' : undefined
  }, void 0, /* #__PURE__*/React.createElement(Box, {
    ref,
    component: "span",
    tabIndex: -1,
    outline: "none",
    position: "relative",
    className: styles.headingRoot
  }, title, /* #__PURE__*/_jsx(Overlay, {
    boxShadow: "outlineFocus",
    borderRadius: "standard",
    transition: "fast",
    className: styles.headingFocus,
    onlyVisibleForKeyboardNavigation: true
  }))), description ? /* #__PURE__*/_jsx(Box, {
    id: descriptionId
  }, void 0, description) : null);
});
export var ModalContent = function ModalContent(_ref2) {
  const id = _ref2.id,
      children = _ref2.children,
      description = _ref2.description,
      onClose = _ref2.onClose,
      width = _ref2.width,
      _ref2$closeLabel = _ref2.closeLabel,
      closeLabel = _ref2$closeLabel === void 0 ? 'Close' : _ref2$closeLabel,
      illustration = _ref2.illustration,
      title = _ref2.title,
      headingRefProp = _ref2.headingRef,
      modalRefProp = _ref2.modalRef,
      _ref2$scrollLock = _ref2.scrollLock,
      scrollLock = _ref2$scrollLock === void 0 ? true : _ref2$scrollLock,
      position = _ref2.position,
      headingLevel = _ref2.headingLevel,
      data = _ref2.data;
  const defaultModalRef = useRef(null);
  const modalRef = modalRefProp || defaultModalRef;
  const defaultHeadingRef = useRef(null);
  const headingRef = headingRefProp || defaultHeadingRef;
  const descriptionId = "".concat(id, "_desc");

  const handleEscape = function handleEscape(event) {
    const targetKey = normalizeKey(event);

    if (targetKey === 'Escape') {
      event.stopPropagation();
      onClose();
    }
  };

  const justifyContent = {
    center: 'center',
    right: 'flexEnd'
  }[position];
  return /* #__PURE__*/_jsx(Box, {
    role: "dialog",
    "aria-label": title // Using aria-labelledby would announce the heading after the dialog content.
    ,
    "aria-describedby": description ? descriptionId : undefined,
    "aria-modal": "true",
    onKeyDown: handleEscape,
    position: "relative",
    width: "full",
    height: "full",
    display: "flex",
    alignItems: "center",
    justifyContent
  }, void 0, /* #__PURE__*/_jsx(Box, {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent,
    height: position === 'right' ? 'full' : undefined,
    width: width !== 'content' ? 'full' : undefined,
    maxWidth: width !== 'content' ? width : undefined
  }, void 0, /* #__PURE__*/React.createElement(RemoveScroll, {
    ref: modalRef,
    forwardProps: true,
    enabled: scrollLock
  }, /* #__PURE__*/React.createElement(Box, _extends({
    background: "card",
    borderRadius: position === 'center' ? 'standard' : undefined,
    overflow: "auto",
    position: "relative",
    boxShadow: "large",
    width: width !== 'content' ? 'full' : undefined,
    height: position === 'right' ? 'full' : undefined,
    padding: modalPadding,
    className: [styles.pointerEventsAll, position === 'center' && styles.maxSize[position]]
  }, data ? buildDataAttributes(data) : undefined), /* #__PURE__*/_jsx(Stack, {
    space: "large"
  }, void 0, illustration ? /* #__PURE__*/_jsx(Stack, {
    space: "medium",
    align: "center"
  }, void 0, /* #__PURE__*/_jsx(Box, {
    paddingX: "gutter"
  }, void 0, illustration), /* #__PURE__*/React.createElement(ModalContentHeader, {
    title,
    headingLevel,
    description,
    descriptionId,
    center: Boolean(illustration),
    ref: headingRef
  })) : /* #__PURE__*/_jsx(Columns, {
    space: "none"
  }, void 0, /* #__PURE__*/_jsx(Column, {}, void 0, /* #__PURE__*/React.createElement(ModalContentHeader, {
    title,
    headingLevel,
    description,
    descriptionId,
    center: Boolean(illustration),
    ref: headingRef
  })), _Column || (_Column = /* #__PURE__*/_jsx(Column, {
    width: "content"
  }, void 0, /* #__PURE__*/_jsx(Box, {
    width: "touchable"
  })))), /* #__PURE__*/_jsx(Fragment, {}, void 0, children)))), /* #__PURE__*/_jsx(Box, {
    position: "absolute",
    zIndex: "sticky",
    top: 0,
    left: 0,
    right: 0,
    display: "flex",
    justifyContent: "center",
    pointerEvents: "none"
  }, void 0, /* #__PURE__*/_jsx(Box, {
    width: "full",
    display: "flex",
    justifyContent: "flexEnd",
    paddingTop: modalPadding,
    paddingRight: modalPadding,
    className: position === 'center' && styles.maxSize[position]
  }, void 0, /* #__PURE__*/_jsx(Box, {
    className: [negativeMarginTop('xsmall'), styles.negativeMarginRightXSmall]
  }, void 0, /* #__PURE__*/_jsx(Box, {
    position: "relative",
    className: styles.cropIconSpace[headingLevel]
  }, void 0, /* #__PURE__*/_jsx(Box, {
    component: "button",
    "aria-label": closeLabel,
    borderRadius: "full",
    background: "card",
    padding: "xsmall",
    cursor: "pointer",
    position: "relative",
    onClick: onClose,
    outline: "none",
    transition: "touchable",
    className: [styles.closeButtonRoot, styles.pointerEventsAll, virtualTouchable()]
  }, void 0, /* #__PURE__*/_jsx(Overlay, {
    boxShadow: "outlineFocus",
    transition: "fast",
    onlyVisibleForKeyboardNavigation: true,
    borderRadius: "full",
    className: styles.closeButtonFocus
  }), /* #__PURE__*/_jsx(Box, {
    position: "relative",
    transition: "fast",
    className: [styles.closeButtonOpacity, styles.closeIcon[headingLevel]]
  }, void 0, _IconClear || (_IconClear = /* #__PURE__*/_jsx(IconClear, {
    size: "fill"
  }))))))))));
};
ModalContent.displayName = "ModalContent";