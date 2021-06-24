import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { atoms } from '../../../atoms/atoms';
import * as styles from '../../HiddenVisually/HiddenVisually.css';
var announcementCounter = 0;
export var Announcement = function Announcement(_ref) {
  var children = _ref.children;

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      announcementElement = _useState2[0],
      setElement = _useState2[1];

  var className = [atoms({
    reset: 'div',
    position: 'absolute',
    overflow: 'hidden'
  }), styles.root].join(' ');
  useEffect(function () {
    var announcementContainerId = "braid-announcement-container-".concat(announcementCounter++);
    var element = document.createElement('div');
    element.setAttribute('id', announcementContainerId);
    element.setAttribute('class', className);
    element.setAttribute('aria-live', 'polite');
    element.setAttribute('aria-atomic', 'true');
    document.body.appendChild(element);
    setElement(element);
    return function () {
      document.body.removeChild(element);
    };
  }, [className]);

  if (!announcementElement) {
    return null;
  }

  return /*#__PURE__*/createPortal(children, announcementElement);
};