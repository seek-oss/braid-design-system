const addDelay = (delay: number, func: () => void) => {
  if (delay) {
    setTimeout(func, delay);
  } else {
    func();
  }
};

const easeModifier = (t: number) => {
  return t > 0.5 ? 4 * Math.pow(t - 1, 3) + 1 : 4 * Math.pow(t, 3);
};

const getExpectedTime = (
  distance: number,
  duration: number | null,
  speed: number,
  minDuration: number,
) => {
  const calculatedDuration = distance / speed;
  const normalizedDuration =
    minDuration > calculatedDuration ? minDuration : calculatedDuration;

  return duration ? duration : normalizedDuration;
};

interface ScrollOptions {
  duration?: number | null;
  speed?: number;
  minDuration?: number;
}
const scroll = (
  to: number,
  { duration = null, speed = 2, minDuration = 1 }: ScrollOptions,
  callback?: () => void,
) => {
  const startTime = Date.now();
  const initial = window.pageYOffset;
  const total = Math.abs(to - initial);
  const expectedTime = getExpectedTime(total, duration, speed, minDuration);
  const scrollUp = initial > to;

  const step = () => {
    requestAnimationFrame(() => {
      const timePassed = Date.now() - startTime;
      const progress = timePassed / expectedTime;
      const distance = easeModifier(progress) * total;
      const newPosition = Math.floor(
        scrollUp ? initial - distance : initial + distance,
      );
      const isComplete = scrollUp ? newPosition <= to : newPosition >= to;

      if (isComplete) {
        window.scrollTo(0, to);
        if (callback) {
          callback();
        }
      } else {
        window.scrollTo(0, newPosition);
        step();
      }
    });
  };

  if (to !== initial) {
    step();
  } else if (callback) {
    callback();
  }
};

interface SmoothScrollOptions extends ScrollOptions {
  offset?: number;
  delay?: number;
}

export const smoothScroll = (
  to: HTMLElement | string,
  { offset = 0, delay = 0, ...scrollOptions }: SmoothScrollOptions = {},
) =>
  new Promise(resolve => {
    addDelay(delay, () => {
      let element = to;

      if (typeof element === 'string') {
        const queriedElement = document.getElementById(element);

        if (queriedElement === null) {
          throw new Error(`No element found for query "${element}"`);
        }

        element = queriedElement;
      }

      const { top } = element.getBoundingClientRect();
      const scrollPostion = top - offset + window.pageYOffset;

      scroll(scrollPostion, scrollOptions, resolve);
    });
  });
