// Adapted from https://github.com/theKashey/aria-hidden
// Adds a 'delay' option to improve performance of animated transitions on mobile.
// Also ensures that script and style tags aren't marked as aria-hidden.
var defaultParent = typeof document !== 'undefined' ? document.body : null;
var counterMap = new WeakMap();
var uncontrolledNodes = new WeakMap();
var markerMap = {};
var lockCount = 0;
export var ariaHideOthers = function ariaHideOthers(originalTarget) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$parentNode = _ref.parentNode,
      parentNode = _ref$parentNode === void 0 ? defaultParent : _ref$parentNode,
      _ref$markerName = _ref.markerName,
      markerName = _ref$markerName === void 0 ? 'data-aria-hidden' : _ref$markerName,
      _ref$delay = _ref.delay,
      delay = _ref$delay === void 0 ? 0 : _ref$delay;

  var targets = Array.isArray(originalTarget) ? originalTarget : [originalTarget];

  if (!markerMap[markerName]) {
    markerMap[markerName] = new WeakMap();
  }

  var markerCounter = markerMap[markerName];
  var hiddenNodes = [];

  var walk = function walk(parent) {
    if (!parent || targets.indexOf(parent) >= 0) {
      return;
    }

    Array.prototype.forEach.call(parent.children, function (node) {
      if (targets.some(function (target) {
        return node.contains(target);
      })) {
        walk(node);
      } else if (node.nodeName !== 'SCRIPT' && node.nodeName !== 'STYLE') {
        var attr = node.getAttribute('aria-hidden');
        var alreadyHidden = attr !== null && attr !== 'false';
        var counterValue = (counterMap.get(node) || 0) + 1;
        var markerValue = (markerCounter.get(node) || 0) + 1;
        counterMap.set(node, counterValue);
        markerCounter.set(node, markerValue);
        hiddenNodes.push(node);

        if (counterValue === 1 && alreadyHidden) {
          uncontrolledNodes.set(node, true);
        }

        if (markerValue === 1) {
          node.setAttribute(markerName, 'true');
        }

        if (!alreadyHidden) {
          node.setAttribute('aria-hidden', 'true');
        }
      }
    });
  };

  var timeout = delay ? setTimeout(function () {
    return walk(parentNode);
  }, delay) : (walk(parentNode), null);
  lockCount++;
  return function () {
    if (timeout) {
      clearTimeout(timeout);
    }

    hiddenNodes.forEach(function (node) {
      var _counterMap$get, _markerCounter$get;

      var counterValue = ((_counterMap$get = counterMap.get(node)) !== null && _counterMap$get !== void 0 ? _counterMap$get : 1) - 1;
      var markerValue = ((_markerCounter$get = markerCounter.get(node)) !== null && _markerCounter$get !== void 0 ? _markerCounter$get : 1) - 1;
      counterMap.set(node, counterValue);
      markerCounter.set(node, markerValue);

      if (!counterValue) {
        if (!uncontrolledNodes.has(node)) {
          node.removeAttribute('aria-hidden');
        }

        uncontrolledNodes.delete(node);
      }

      if (!markerValue) {
        node.removeAttribute(markerName);
      }
    });
    lockCount--;

    if (!lockCount) {
      // clear
      counterMap = new WeakMap();
      counterMap = new WeakMap();
      uncontrolledNodes = new WeakMap();
      markerMap = {};
    }
  };
};