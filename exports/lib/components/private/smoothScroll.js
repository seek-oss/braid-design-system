import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["scrollContainer", "direction", "offset", "position"];

function ownKeys(object, enumerableOnly) { const keys = Object.keys(object); if (Object.getOwnPropertySymbols) { let symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (let i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

const easeModifier = function easeModifier(t) {
  return t > 0.5 ? 4 * Math.pow(t - 1, 3) + 1 : 4 * Math.pow(t, 3);
};

const getExpectedTime = function getExpectedTime(distance, duration, speed, minDuration) {
  const calculatedDuration = distance / speed;
  const normalizedDuration = minDuration > calculatedDuration ? minDuration : calculatedDuration;
  return duration !== null ? duration : normalizedDuration;
};

const getScrollPosition = function getScrollPosition(scrollContainer, direction) {
  return scrollContainer[direction === 'horizontal' ? 'scrollLeft' : 'scrollTop'];
};

const getScrollOffset = function getScrollOffset(scrollContainer, targetElement, direction) {
  if (scrollContainer === window.document.documentElement) {
    const scrollPosition = getScrollPosition(scrollContainer, direction);
    const positionOnScreen = targetElement.getBoundingClientRect()[direction === 'horizontal' ? 'left' : 'top'];
    return positionOnScreen + scrollPosition;
  }

  let totalOffset = 0;
  let currentElement = targetElement;
  const offsetKey = direction === 'horizontal' ? 'offsetLeft' : 'offsetTop';

  while (scrollContainer.contains(currentElement) || currentElement === scrollContainer) {
    totalOffset += currentElement[offsetKey];
    const _currentElement = currentElement,
        offsetParent = _currentElement.offsetParent;

    if (!(offsetParent instanceof HTMLElement)) {
      break;
    }

    currentElement = offsetParent;
  }

  return totalOffset;
};

const scrollTo = function scrollTo(scrollContainer, direction, to) {
  scrollContainer[direction === 'horizontal' ? 'scrollLeft' : 'scrollTop'] = to;
};

const getPossibleScroll = function getPossibleScroll(scrollContainer, direction) {
  return scrollContainer[direction === 'horizontal' ? 'scrollWidth' : 'scrollHeight'] - (scrollContainer === window.document.documentElement ? 0 : scrollContainer[direction === 'horizontal' ? 'offsetWidth' : 'offsetHeight']);
};

const limitNumberToRange = function limitNumberToRange(number, min, max) {
  if (number < min) {
    return min;
  }

  if (number > max) {
    return max;
  }

  return number;
};

const scroll = function scroll(scrollContainer, direction, to, _ref, callback) {
  const _ref$duration = _ref.duration,
      duration = _ref$duration === void 0 ? null : _ref$duration,
      _ref$speed = _ref.speed,
      speed = _ref$speed === void 0 ? 2 : _ref$speed,
      _ref$minDuration = _ref.minDuration,
      minDuration = _ref$minDuration === void 0 ? 0 : _ref$minDuration;
  const startTime = Date.now();
  const initial = getScrollPosition(scrollContainer, direction);
  const possibleScroll = getPossibleScroll(scrollContainer, direction);
  const targetScrollPosition = limitNumberToRange(to, 0, possibleScroll);
  const total = Math.abs(targetScrollPosition - initial);
  const expectedTime = getExpectedTime(total, duration, speed, minDuration);
  const scrollForwards = targetScrollPosition > initial;

  const step = function step() {
    requestAnimationFrame(function () {
      const timePassed = Date.now() - startTime;
      const progress = timePassed / expectedTime;
      const distance = easeModifier(progress) * total;
      const newPosition = Math.floor(scrollForwards ? initial + distance : initial - distance);
      const isComplete = scrollForwards ? newPosition >= targetScrollPosition : newPosition <= targetScrollPosition;

      if (isComplete) {
        scrollTo(scrollContainer, direction, targetScrollPosition);

        if (callback) {
          callback();
        }
      } else {
        scrollTo(scrollContainer, direction, newPosition);
        step();
      }
    });
  };

  if (targetScrollPosition !== initial) {
    step();
  } else if (callback) {
    callback();
  }
};

export var smoothScroll = function smoothScroll(element) {
  const _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref2$scrollContainer = _ref2.scrollContainer,
      scrollContainer = _ref2$scrollContainer === void 0 ? window.document.documentElement : _ref2$scrollContainer,
      _ref2$direction = _ref2.direction,
      direction = _ref2$direction === void 0 ? 'vertical' : _ref2$direction,
      _ref2$offset = _ref2.offset,
      offset = _ref2$offset === void 0 ? 0 : _ref2$offset,
      _ref2$position = _ref2.position,
      position = _ref2$position === void 0 ? 'start' : _ref2$position,
      scrollOptions = _objectWithoutProperties(_ref2, _excluded);

  return new Promise(function (resolve) {
    const scrollOffset = getScrollOffset(scrollContainer, element, direction);
    const scrollPosition = position === 'end' ? scrollOffset - scrollContainer.offsetWidth + element.offsetWidth + offset : scrollOffset - offset;
    scroll(scrollContainer, direction, scrollPosition, scrollOptions, resolve);
  });
};
export var smoothScrollIntoView = function smoothScrollIntoView(element, options) {
  const _options$scrollContai = options.scrollContainer,
      scrollContainer = _options$scrollContai === void 0 ? window.document.documentElement : _options$scrollContai,
      _options$direction = options.direction,
      direction = _options$direction === void 0 ? 'vertical' : _options$direction,
      _options$offset = options.offset,
      offset = _options$offset === void 0 ? 0 : _options$offset;
  const containerWidth = scrollContainer.offsetWidth;
  const scrollOffset = getScrollOffset(scrollContainer, element, direction);
  const positionOnScreen = scrollOffset - getScrollPosition(scrollContainer, direction);

  if (positionOnScreen < offset) {
    smoothScroll(element, _objectSpread(_objectSpread({}, options), {}, {
      position: 'start'
    }));
  } else if (positionOnScreen > containerWidth - element.offsetWidth - offset) {
    smoothScroll(element, _objectSpread(_objectSpread({}, options), {}, {
      position: 'end'
    }));
  }
};