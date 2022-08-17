type Direction = 'horizontal' | 'vertical';

const easeModifier = (t: number) =>
  t > 0.5 ? 4 * Math.pow(t - 1, 3) + 1 : 4 * Math.pow(t, 3);

const getExpectedTime = (
  distance: number,
  duration: number | null,
  speed: number,
  minDuration: number,
) => {
  const calculatedDuration = distance / speed;
  const normalizedDuration =
    minDuration > calculatedDuration ? minDuration : calculatedDuration;

  return duration !== null ? duration : normalizedDuration;
};

const getScrollPosition = (
  scrollContainer: HTMLElement,
  direction: Direction,
) => scrollContainer[direction === 'horizontal' ? 'scrollLeft' : 'scrollTop'];

const getScrollOffset = (
  scrollContainer: HTMLElement,
  targetElement: HTMLElement,
  direction: Direction,
) => {
  if (scrollContainer === window.document.documentElement) {
    const scrollPosition = getScrollPosition(scrollContainer, direction);
    const positionOnScreen =
      targetElement.getBoundingClientRect()[
        direction === 'horizontal' ? 'left' : 'top'
      ];

    return positionOnScreen + scrollPosition;
  }

  let totalOffset = 0;
  let currentElement = targetElement;
  const offsetKey = direction === 'horizontal' ? 'offsetLeft' : 'offsetTop';
  while (
    scrollContainer.contains(currentElement) ||
    currentElement === scrollContainer
  ) {
    totalOffset += currentElement[offsetKey];

    const { offsetParent } = currentElement;

    if (!(offsetParent instanceof HTMLElement)) {
      break;
    }

    currentElement = offsetParent;
  }

  return totalOffset;
};

const scrollTo = (
  scrollContainer: HTMLElement,
  direction: Direction,
  to: number,
) => {
  scrollContainer[direction === 'horizontal' ? 'scrollLeft' : 'scrollTop'] = to;
};

const getPossibleScroll = (
  scrollContainer: HTMLElement,
  direction: Direction,
) =>
  scrollContainer[direction === 'horizontal' ? 'scrollWidth' : 'scrollHeight'] -
  (scrollContainer === window.document.documentElement
    ? 0
    : scrollContainer[
        direction === 'horizontal' ? 'offsetWidth' : 'offsetHeight'
      ]);

const limitNumberToRange = (number: number, min: number, max: number) => {
  if (number < min) {
    return min;
  }

  if (number > max) {
    return max;
  }

  return number;
};

interface ScrollOptions {
  duration?: number | null;
  speed?: number;
  minDuration?: number;
}
const scroll = (
  scrollContainer: HTMLElement,
  direction: Direction,
  to: number,
  { duration = null, speed = 2, minDuration = 0 }: ScrollOptions,
  callback?: () => void,
) => {
  const startTime = Date.now();
  const initial = getScrollPosition(scrollContainer, direction);
  const possibleScroll = getPossibleScroll(scrollContainer, direction);
  const targetScrollPosition = limitNumberToRange(to, 0, possibleScroll);
  const total = Math.abs(targetScrollPosition - initial);
  const expectedTime = getExpectedTime(total, duration, speed, minDuration);
  const scrollForwards = targetScrollPosition > initial;

  const step = () => {
    requestAnimationFrame(() => {
      const timePassed = Date.now() - startTime;
      const progress = timePassed / expectedTime;
      const distance = easeModifier(progress) * total;
      const newPosition = Math.floor(
        scrollForwards ? initial + distance : initial - distance,
      );
      const isComplete = scrollForwards
        ? newPosition >= targetScrollPosition
        : newPosition <= targetScrollPosition;

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

interface SmoothScrollOptions extends ScrollOptions {
  scrollContainer?: HTMLElement;
  direction?: Direction;
  offset?: number;
  position?: 'start' | 'end';
}

export const smoothScroll = (
  element: HTMLElement,
  {
    scrollContainer = window.document.documentElement,
    direction = 'vertical',
    offset = 0,
    position = 'start',
    ...scrollOptions
  }: SmoothScrollOptions = {},
) =>
  new Promise<void>((resolve) => {
    const scrollOffset = getScrollOffset(scrollContainer, element, direction);
    const scrollPosition =
      position === 'end'
        ? scrollOffset -
          scrollContainer.offsetWidth +
          element.offsetWidth +
          offset
        : scrollOffset - offset;

    scroll(scrollContainer, direction, scrollPosition, scrollOptions, resolve);
  });

type SmoothScrollIntoViewOptions = Omit<SmoothScrollOptions, 'position'>;
export const smoothScrollIntoView = (
  element: HTMLElement,
  options: SmoothScrollIntoViewOptions,
) => {
  const {
    scrollContainer = window.document.documentElement,
    direction = 'vertical',
    offset = 0,
  } = options;

  const containerWidth = scrollContainer.offsetWidth;
  const scrollOffset = getScrollOffset(scrollContainer, element, direction);
  const positionOnScreen =
    scrollOffset - getScrollPosition(scrollContainer, direction);

  if (positionOnScreen < offset) {
    smoothScroll(element, { ...options, position: 'start' });
  } else if (positionOnScreen > containerWidth - element.offsetWidth - offset) {
    smoothScroll(element, { ...options, position: 'end' });
  }
};
